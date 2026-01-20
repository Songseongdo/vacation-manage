"use client";

import { Vacation } from "@/app/const";
import { useEffect, useState, useTransition } from "react";
import VacationUsageList from "./VacationUsageList";
import { formatVacationDays, hoursToDays } from "@/app/util";
import { updateVacation, deleteUsage } from "./actions";

type Props = {
	employeeId: number;
	vacation: Vacation;
};

export default function VacationYearGroup({ employeeId, vacation }: Props) {
	const [open, setOpen] = useState(false);
	const [totalHours, setTotalHours] = useState(0);
	// const [usedHours, setUsedHours] = useState(0);
	const [isPending, startTransition] = useTransition();

	const handleUpdate = (totalDays: number) => {
		startTransition(async () => {
			await updateVacation(
				employeeId,
				vacation.id,
				Math.round(totalDays * 8)
			);
		});
	};
	const handleDelete = async (usageId: number) => {
		await deleteUsage(employeeId, usageId);
	};

	useEffect(() => {
		setTotalHours(hoursToDays(vacation.totalHours));
		// setUsedHours(hoursToDays(vacation.usedHours));
	}, [vacation]);

	return (
		<section className="border rounded-lg p-4">
			{/* ===== Header ===== */}
			<div className="flex justify-between items-center">
				<div>
					<h3 className="text-lg font-semibold">
						{vacation.year}년 연차
					</h3>
					<p className="text-sm text-gray-600">
						<span className="mr-3">
							발생일 {formatVacationDays(vacation.totalHours)}
						</span>
						사용일 {formatVacationDays(vacation.usedHours)}
					</p>
				</div>

				<button
					type="button"
					onClick={() => setOpen(!open)}
					className="text-sm text-blue-600"
				>
					{open ? "접기 ▲" : "펼치기 ▼"}
				</button>
			</div>

			{/* ===== Body ===== */}

			{open && (
				<div className="mt-4 space-y-4">
					<div className="flex gap-4 items-end">
						{/* <div>
							<label
								htmlFor="usedHours"
								className="block text-sm"
							>
								사용 시간
							</label>
							<input
								id="usedHours"
								type="number"
								value={usedHours}
								disabled
								onChange={(e) => setUsedHours(+e.target.value)}
							/>
						</div> */}

						<div className="flex flex-col items-center">
							<label
								htmlFor="totalHours"
								className="block text-sm"
							>
								총 일수
							</label>
							<input
								id="totalHours"
								type="number"
								step="0.25"
								min="0"
								value={totalHours}
								disabled={isPending}
								onChange={(e) => setTotalHours(+e.target.value)}
								className="border px-2 py-1 w-20 h-7"
							/>
						</div>

						<button
							type="button"
							onClick={() => handleUpdate(totalHours)}
							className="px-3 py-1 border rounded text-sm"
						>
							수정
						</button>
					</div>

					{/* 연차 사용 내역 */}
					<VacationUsageList
						usages={vacation.vacationUsages}
						onDelete={handleDelete}
					/>
				</div>
			)}
		</section>
	);
}
