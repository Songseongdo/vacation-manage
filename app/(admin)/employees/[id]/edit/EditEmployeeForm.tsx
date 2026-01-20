"use client";

import { updateEmployee } from "./actions";
import VacationYearGroup from "./VacationYearGroup";

export default function EditEmployeeForm({ employee }: any) {
	const joinedDate = employee.joinedAt.toISOString().slice(0, 10);

	return (
		<form action={updateEmployee} className="space-y-6 flex flex-col gap-2">
			<input type="hidden" name="employeeId" value={employee.id} />
			<div className="flex items-center gap-2">
				<label htmlFor="name" className="w-12 font-medium">
					이름
				</label>
				<input
					id="name"
					name="name"
					defaultValue={employee.name}
					className="border p-2 flex-1"
				/>
			</div>
			<div className="flex items-center gap-2">
				<label htmlFor="joinedAt" className="w-12 font-medium">
					입사일
				</label>
				<input
					type="date"
					name="joinedAt"
					defaultValue={joinedDate}
					className="border p-2"
				/>
			</div>

			<fieldset className="flex flex-col gap-2">
				<legend className="font-medium mb-2">직원 구분</legend>
				<div className="pl-3">
					<label className="flex items-center gap-2">
						<input
							type="radio"
							name="type"
							value="REGULAR"
							defaultChecked={employee.type === "REGULAR"}
						/>
						정규직
					</label>
					<label className="flex items-center gap-2">
						<input
							type="radio"
							name="type"
							value="CONTRACT"
							defaultChecked={employee.type === "CONTRACT"}
						/>
						계약직
					</label>
					<label className="flex items-center gap-2">
						<input
							type="radio"
							name="type"
							value="PART_TIME"
							defaultChecked={employee.type === "PART_TIME"}
						/>
						파트타임
					</label>
				</div>
			</fieldset>

			{/* 4. 퇴사 여부 */}
			<fieldset className="flex flex-col gap-2">
				<legend className="font-medium mb-2">재직 상태</legend>
				<div className="pl-3">
					<label className="flex items-center gap-2">
						<input
							type="radio"
							name="resigned"
							value="false"
							defaultChecked={!employee.resignedAt}
						/>
						재직
					</label>
					<label className="flex items-center gap-2">
						<input
							type="radio"
							name="resigned"
							value="true"
							defaultChecked={!!employee.resignedAt}
						/>
						퇴사
					</label>
				</div>
			</fieldset>

			<div className="w-full flex justify-end items-center">
				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded-2xl mt-5"
				>
					저장
				</button>
			</div>

			<div>
				{/* 5. 연차 수정 */}
				<div className="flex flex-col gap-2">
					<label className="font-bold">연차 정보</label>
					{employee.vacations.map((v: any) => (
						<VacationYearGroup
							key={`${v.id}-${v.totalHours}-${v.usedHours}`}
							employeeId={employee.id}
							vacation={v}
						/>
					))}
				</div>
			</div>
		</form>
	);
}
