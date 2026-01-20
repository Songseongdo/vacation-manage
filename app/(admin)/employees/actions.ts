"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client/extension";
import { LEAVE_POLICY, LEAVE_POLICY_CUTOFF } from "@/lib/constants";
import { calcCalendarLeave, calcAnniversaryLeave } from "@/lib/leave";
import { revalidatePath } from "next/cache";

export async function getEmployeesWithVacation() {
	const currentYear = new Date().getFullYear();

	return prisma.employee.findMany({
		// where: {
		// 	resignedAt: null,
		// },
		include: {
			vacations: {
				where: {
					year: currentYear,
				},
				select: {
					totalHours: true,
					usedHours: true,
				},
			},
		},
		orderBy: {
			joinedAt: "asc",
		},
	});
}

function calcLeaveDaysByPolicy(
	leavePolicy: string,
	joinedAt: Date,
	year: number
) {
	if (leavePolicy === "CALENDAR") {
		return calcCalendarLeave(joinedAt, year);
	}

	return calcAnniversaryLeave(joinedAt, year);
}

export async function createEmployee(formData: FormData) {
	const name = formData.get("name") as string;
	const joinedDate = new Date(formData.get("joinDate") as string);
	const type = formData.get("type") as string;

	if (!name || !joinedDate || !type) {
		throw new Error("필수 값 누락");
	}

	const joinYear = joinedDate.getFullYear();
	const currentYear = new Date().getFullYear();

	const leavePolicy =
		joinedDate < LEAVE_POLICY_CUTOFF
			? LEAVE_POLICY.CALENDAR
			: LEAVE_POLICY.ANNIVERSARY;

	await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
		const emp = await tx.employee.create({
			data: {
				name,
				joinedAt: joinedDate,
				leavePolicy,
				type,
			},
		});

		for (let year = joinYear; year <= currentYear; year++) {
			const exists = await tx.vacation.findFirst({
				where: { employeeId: emp.id, year },
			});
			if (exists) continue;

			const days = calcLeaveDaysByPolicy(leavePolicy, joinedDate, year);
			if (days <= 0) continue;

			await tx.vacation.create({
				data: {
					employeeId: emp.id,
					year,
					totalHours: days * 8,
				},
			});
		}

		return emp;
	});

	revalidatePath("/employees");
}
