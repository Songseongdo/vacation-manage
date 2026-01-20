// app/(admin)/employees/EmployeePageClient.tsx
"use client";

import { useState } from "react";
import EmployeeModal from "./EmployeeModal";
import Link from "next/link";

export default function EmployeePageClient({
	employees,
}: {
	employees: any[];
}) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div className="flex justify-between mb-4">
				<h1 className="text-xl font-bold">직원 목록</h1>
				<button
					onClick={() => setOpen(true)}
					className="px-3 py-1 bg-black text-white"
				>
					직원 등록
				</button>
			</div>

			{employees.length === 0 ? (
				<div className="text-gray-500">등록된 직원이 없습니다.</div>
			) : (
				<table className="w-full border border-gray-300">
					<thead className="bg-gray-100">
						<tr>
							<th className="border px-2 py-1">이름</th>
							<th className="border px-2 py-1">입사일</th>
							<th className="border px-2 py-1">총 휴가일</th>
							<th className="border px-2 py-1">남은 휴가일</th>
							<th className="border px-2 py-1">직원 구분</th>
							<th className="border px-2 py-1">퇴사 여부</th>
						</tr>
					</thead>
					<tbody>
						{employees.map((emp) => {
							const vacation = emp.vacations[0];
							const totalDays = vacation
								? vacation.totalHours / 8
								: 0;
							const remainDays = vacation
								? (vacation.totalHours - vacation.usedHours) / 8
								: 0;

							return (
								<tr key={emp.id} className="text-center">
									<td className="border px-2 py-1">
										<Link
											href={`/employees/${emp.id}`}
											className="text-blue-600"
										>
											{emp.name}
										</Link>
									</td>
									<td className="border px-2 py-1">
										{emp.joinedAt
											.toISOString()
											.slice(0, 10)}
									</td>
									<td className="border px-2 py-1">
										{totalDays}
									</td>
									<td className="border px-2 py-1">
										{remainDays}
									</td>
									<td className="border px-2 py-1">
										{emp.type}
									</td>
									<td className="border px-2 py-1">
										{emp.resignedAt === null
											? "재직"
											: "퇴사"}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			)}

			{open && <EmployeeModal onClose={() => setOpen(false)} />}
		</>
	);
}
