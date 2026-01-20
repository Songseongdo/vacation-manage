import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import DeleteButton from "./DeleteButton";
import ResignButton from "./ResignButton";

export default async function EmployeeDetailPage({
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
				include: {
					vacationUsages: {
						orderBy: { createdAt: "asc" },
					},
				},
			},
		},
	});

	if (!employee) return notFound();

	return (
		<>
			<h1 className="text-xl font-bold mb-4">{employee.name}</h1>

			{/* 직원 기본 정보 */}
			<section className="mb-6">
				<p>입사일: {employee.joinedAt.toISOString().slice(0, 10)}</p>
				<p>직원 구분: {employee.type}</p>
			</section>

			{/* 연도별 휴가 */}
			<section className="space-y-6">
				{employee.vacations.map((vac) => (
					<div key={vac.id} className="border p-4">
						<h2 className="font-semibold">{vac.year}년 연차</h2>
						<p>
							총 {vac.totalHours / 8}일 / 사용 {vac.usedHours / 8}
							일 / 잔여 {(vac.totalHours - vac.usedHours) / 8}일
						</p>

						{/* 사용 내역 */}
						<ul className="mt-2 text-sm">
							{vac.vacationUsages.map((u) => (
								<li key={u.id}>
									{u.createdAt.toISOString().slice(0, 10)} -{" "}
									{u.usedHours / 8}일 ({u.type})
								</li>
							))}
						</ul>
					</div>
				))}
			</section>

			{/* 액션 */}
			<div className="mt-8 space-x-4 flex">
				<Link href={`/employees/${employee.id}/edit`}>수정</Link>
				<ResignButton employeeId={employee.id} />
				<DeleteButton employeeId={employee.id} />
			</div>
		</>
	);
}
