"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateEmployee(formData: FormData) {
	const employeeId = Number(formData.get("employeeId"));

	const name = String(formData.get("name"));
	const joinedAt = new Date(String(formData.get("joinedAt")));
	const type = String(formData.get("type"));
	const resigned = formData.get("resigned") === "true";

	// 직원 기본 정보 수정
	await prisma.employee.update({
		where: { id: employeeId },
		data: {
			name,
			joinedAt,
			type,
			resignedAt: resigned ? new Date() : null,
		},
	});

	// 연차 수정
	const vacations = await prisma.vacation.findMany({
		where: { employeeId },
	});

	for (const vacation of vacations) {
		const totalHours = formData.get(`totalHours-${vacation.id}`);
		if (totalHours) {
			await prisma.vacation.update({
				where: { id: vacation.id },
				data: {
					totalHours: Number(totalHours),
				},
			});
		}
	}

	revalidatePath(`/employees/${employeeId}`);
	redirect(`/employees/${employeeId}`);
}

export async function deleteVacationUsage(usageId: number) {
	const usage = await prisma.vacationUsage.findUnique({
		where: { id: usageId },
		select: { usedHours: true, vacationId: true },
	});

	if (!usage) return;

	await prisma.$transaction([
		prisma.vacationUsage.delete({
			where: { id: usageId },
		}),
		prisma.vacation.update({
			where: { id: usage.vacationId },
			data: {
				usedHours: {
					decrement: usage.usedHours,
				},
			},
		}),
	]);
}

export async function updateVacation(
	employeeId: number,
	vacationId: number,
	totalHours: number
) {
	await prisma.$transaction(async (tx) => {
		const usages = await tx.vacationUsage.aggregate({
			where: { vacationId },
			_sum: { usedHours: true },
		});

		const usedHours = usages._sum.usedHours ?? 0;

		if (totalHours < usedHours) {
			throw new Error("총 연차는 사용 연차보다 작을 수 없습니다.");
		}

		await tx.vacation.update({
			where: { id: vacationId },
			data: { totalHours, usedHours },
		});
	});
	revalidatePath(`/employees/${employeeId}/edit`);
}

export async function deleteUsage(employeeId: number, usageId: number) {
	const usage = await prisma.vacationUsage.findUnique({
		where: {
			id: usageId,
		},
	});

	if (!usage) return;

	// 삭제 완료시 사용 시간 수정
	await prisma.$transaction([
		prisma.vacationUsage.delete({
			where: { id: usageId },
		}),
		prisma.vacation.update({
			where: { id: usage.vacationId },
			data: {
				usedHours: {
					decrement: usage.usedHours,
				},
			},
		}),
	]);

	revalidatePath(`/employees/${employeeId}/edit`);
}
