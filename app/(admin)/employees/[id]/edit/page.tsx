import { prisma } from "@/lib/prisma";
import EditEmployeeForm from "./EditEmployeeForm";

export default async function EditEmployeePage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const employee = await prisma.employee.findUnique({
		where: { id: Number(id) },
		include: {
			vacations: {
				orderBy: { year: "desc" },
			},
		},
	});

	if (!employee) {
		return <div>직원을 찾을 수 없습니다.</div>;
	}

	return <EditEmployeeForm employee={employee} />;
}
