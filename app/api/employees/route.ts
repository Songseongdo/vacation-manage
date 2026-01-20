import { LEAVE_POLICY, LEAVE_POLICY_CUTOFF } from "@/lib/constants";
import { calcCalendarLeave, calcAnniversaryLeave } from "@/lib/leave";

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client/extension";

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

export async function POST(req: Request) {
	const { name, joinedAt } = await req.json();

	if (!name || !joinedAt) {
		return NextResponse.json({ message: "Invalid data" }, { status: 400 });
	}

	const joinedDate = new Date(joinedAt);
	const joinYear = joinedDate.getFullYear();
	const currentYear = new Date().getFullYear();

	const leavePolicy =
		joinedDate < LEAVE_POLICY_CUTOFF
			? LEAVE_POLICY.CALENDAR
			: LEAVE_POLICY.ANNIVERSARY;

	const employee = await prisma.$transaction(
		async (tx: Prisma.TransactionClient) => {
			const emp = await tx.employee.create({
				data: {
					name,
					joinedAt: joinedDate,
					leavePolicy,
				},
			});

			for (let year = joinYear; year <= currentYear; year++) {
				const exists = await tx.vacation.findFirst({
					where: { employeeId: emp.id, year },
				});
				if (exists) continue;

				const days = calcLeaveDaysByPolicy(
					leavePolicy,
					joinedDate,
					year
				);
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
		}
	);

	return NextResponse.json(employee);
}
