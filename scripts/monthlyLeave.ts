// scripts/monthlyLeaveAccrual.ts
import { isMonthlyLeaveAccrualDay } from "@/lib/leave";
import { prisma } from "@/lib/prisma";

const today = new Date();
const year = today.getFullYear();

const employees = await prisma.employee.findMany({
	where: {
		leavePolicy: "ANNIVERSARY",
	},
});

for (const emp of employees) {
	if (!isMonthlyLeaveAccrualDay(emp.joinedAt, today)) continue;

	await prisma.$transaction(async (tx) => {
		const vacation = await tx.vacation.findUnique({
			where: {
				employeeId_year: {
					employeeId: emp.id,
					year,
				},
			},
		});

		if (!vacation) return;

		await tx.vacation.update({
			where: { id: vacation.id },
			data: {
				totalHours: { increment: 8 },
			},
		});
	});
}
