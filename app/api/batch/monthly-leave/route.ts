// app/api/batch/monthly-leave/route.ts
import { isMonthlyLeaveAccrualDay } from "@/lib/leave";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	const today = new Date();
	const year = today.getFullYear();

	const employees = await prisma.employee.findMany({
		where: { leavePolicy: "ANNIVERSARY" },
	});

	for (const emp of employees) {
		if (!isMonthlyLeaveAccrualDay(emp.joinedAt, today)) continue;

		await prisma.vacation.update({
			where: {
				employeeId_year: {
					employeeId: emp.id,
					year,
				},
			},
			data: {
				totalHours: { increment: 8 },
			},
		});
	}

	return NextResponse.json({ success: true });
}
