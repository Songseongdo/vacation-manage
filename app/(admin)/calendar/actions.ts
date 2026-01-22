"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@/lib/generated/prisma";
import { VacationType } from "@/lib/constants";
import { revalidatePath } from "next/cache";

export type VacationUsage = Prisma.VacationUsageGetPayload<{
	select: {
		id: true;
		startDate: true;
		endDate: true;
		usedHours: true;
		type: true;
		reason: true;
	};
}>;
export type VacationsWithUsages = Prisma.VacationGetPayload<{
	select: {
		id: true;
		year: true;
		totalHours: true;
		usedHours: true;
		vacationUsages: {
			select: {
				id: true;
				startDate: true;
				endDate: true;
				usedHours: true;
				type: true;
				reason: true;
			};
		};
	};
}>;
export type EmployeeWithVacations = Prisma.EmployeeGetPayload<{
	select: {
		id: true;
		name: true;
		vacations: {
			select: {
				id: true;
				year: true;
				totalHours: true;
				usedHours: true;
				vacationUsages: {
					select: {
						id: true;
						startDate: true;
						endDate: true;
						usedHours: true;
						type: true;
						reason: true;
					};
				};
			};
		};
	};
}>;

export async function deleteUsage({ usageId }: { usageId: number }) {
	await prisma.$transaction(async (tx) => {
		// 1️⃣ usage 조회
		const usage = await tx.vacationUsage.findUnique({
			where: {
				id: usageId,
			},
		});

		if (!usage) {
			throw new Error("Vacation usage not found");
		}

		// 2️⃣ vacation usedHours 감소
		await tx.vacation.update({
			where: { id: usage.vacationId },
			data: {
				usedHours: {
					decrement: usage.usedHours,
				},
			},
		});

		// 3️⃣ usage 삭제
		await tx.vacationUsage.delete({
			where: { id: usageId },
		});
	});

	revalidatePath("/calendar");

	return { success: true, message: "휴가가 삭제되었습니다." };
}

export async function getEmployeesList(params: {
	startDate: string;
	endDate: string;
}) {
	const rangeStart = params.startDate;
	const rangeEnd = params.endDate;

	const employees = prisma.employee.findMany({
		where: {
			resignedAt: null,
		},

		select: {
			id: true,
			name: true,
			type: true,

			vacations: {
				select: {
					id: true,
					year: true,
					totalHours: true,
					usedHours: true,

					vacationUsages: {
						where: {
							AND: [
								{ startDate: { lt: rangeEnd } },
								{ endDate: { gte: rangeStart } },
							],
						},
						select: {
							id: true,
							startDate: true,
							endDate: true,
							usedHours: true,
							type: true,
							reason: true,
						},
					},
				},
			},
		},
		orderBy: {
			name: "asc",
		},
	});

	if (employees === null) return [];
	else return employees;
}

interface ICreateVacationRequest {
	employeeId: number;

	vacationType: VacationType;

	startDate: Date; // YYYY-MM-DD
	endDate: Date; // FULL일 때만 필요
	usedDay: number; // 실제 사용일 수

	startTime?: string; // HH:mm (HALF / HOURLY)
	endTime?: string; // HOURLY

	reason?: string;
}

export async function CreateVacationRequest({
	employeeId,
	vacationType,
	startDate,
	endDate,
	startTime,
	usedDay,
	reason,
}: ICreateVacationRequest) {
	const year = new Date(startDate).getFullYear();

	// Vacation 조회
	const vacation = await prisma.vacation.findUnique({
		where: {
			employeeId_year: {
				employeeId,
				year,
			},
		},
		select: {
			id: true,
			totalHours: true,
			usedHours: true,
		},
	});

	if (!vacation) {
		throw new Error("Vacation 정보가 존재하지 않습니다.");
	}

	// 이전 휴가 검색
	const overlapped = await prisma.vacationUsage.findFirst({
		where: {
			vacationId: vacation.id,
			AND: [
				{ startDate: { lte: endDate } },
				{ endDate: { gte: startDate } },
			],
		},
	});

	if (overlapped) {
		throw new Error("이미 신청된 휴가와 날짜가 겹칩니다.");
	}

	// 잔여 휴가 시간 검증
	const remain = vacation.totalHours - vacation.usedHours;
	let usedHours = 0;

	switch (vacationType) {
		case "FULL":
			usedHours = usedDay * 8;
			break;
		case "HALF":
			usedHours = 4;
			break;
		case "HOURLY":
			usedHours = 2;
			break;

		default:
			break;
	}

	if (remain < usedHours) {
		throw new Error("잔여 휴가 시간이 부족합니다.");
	}

	// 트랜잭션으로 차감
	await prisma.$transaction([
		prisma.vacationUsage.create({
			data: {
				vacationId: vacation.id,
				startDate: normalizeStartOfDay(
					startDate,
					vacationType,
					startTime
				),
				endDate: normalizeEndOfDay(endDate, vacationType, startTime),
				usedHours,
				type: vacationType,
				reason,
			},
		}),
		prisma.vacation.update({
			where: { id: vacation.id },
			data: {
				usedHours: { increment: usedHours },
			},
		}),
	]);

	revalidatePath("/calendar");

	return { success: true, message: "휴가가 등록되었습니다." };
}

function normalizeStartOfDay(
	date: Date,
	vacationType: string,
	startTime?: string
): Date {
	switch (vacationType) {
		case "FULL":
		default:
			return new Date(
				date.getFullYear(),
				date.getMonth(),
				date.getDate(),
				0,
				0,
				0,
				0
			);
		case "HALF":
		case "HOURLY":
			return new Date(
				date.getFullYear(),
				date.getMonth(),
				date.getDate(),
				startTime ? +startTime?.slice(0, 2) : 0,
				startTime ? +startTime?.slice(3, 5) : 0,
				0,
				0
			);
	}
}

function normalizeEndOfDay(
	date: Date,
	vacationType: string,
	startTime?: string
): Date {
	switch (vacationType) {
		case "FULL":
		default:
			return new Date(
				date.getFullYear(),
				date.getMonth(),
				date.getDate(),
				23,
				59,
				59,
				999
			);
		case "HALF":
			return new Date(
				date.getFullYear(),
				date.getMonth(),
				date.getDate(),
				startTime ? +startTime?.slice(0, 2) + 4 : 0,
				0,
				59,
				99
			);
		case "HOURLY":
			return new Date(
				date.getFullYear(),
				date.getMonth(),
				date.getDate(),
				startTime ? +startTime?.slice(0, 2) + 2 : 0,
				0,
				59,
				99
			);
	}
}
