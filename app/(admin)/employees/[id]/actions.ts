"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteEmployee(formData: FormData) {
	const id = Number(formData.get("employeeId"));

	if (!id) {
		throw new Error("employeeId missing");
	}

	await prisma.employee.delete({
		where: { id },
	});

	revalidatePath("/employees");
}

export async function resignEmployee(formData: FormData) {
	const id = Number(formData.get("employeeId"));

	if (!id) {
		throw new Error("employeeId missing");
	}

	await prisma.employee.update({
		where: { id },
		data: {
			resignedAt: new Date(),
		},
	});

	revalidatePath("/employees");
}
