"use client";

import { useState } from "react";
import { createEmployee } from "./actions";

export default function EmployeeModal({ onClose }: { onClose: () => void }) {
	const [loading, setLoading] = useState(false);

	return (
		<div
			className="fixed inset-0 bg-black/30 flex items-center justify-center"
			onClick={onClose}
		>
			<div
				className="bg-white p-6 w-96"
				onClick={(e) => e.stopPropagation()}
			>
				<h2 className="text-lg font-bold mb-4">직원 등록</h2>

				<form
					action={async (formData) => {
						setLoading(true);
						await createEmployee(formData);
						setLoading(false);
						onClose();
					}}
					className="space-y-3"
				>
					<input
						name="name"
						placeholder="이름"
						className="w-full border px-2 py-1"
						required
					/>

					<input
						name="joinDate"
						type="date"
						className="w-full border px-2 py-1"
						required
					/>

					<select
						name="type"
						className="w-full border px-2 py-1"
						required
					>
						<option value="">직원 구분</option>
						<option value="REGULAR">정규직</option>
						<option value="CONTRACT">계약직</option>
						<option value="PART_TIME">파트타임</option>
					</select>

					<div className="flex justify-end gap-2 pt-4">
						<button
							type="button"
							onClick={onClose}
							className="px-3 py-1 border"
						>
							취소
						</button>
						<button
							type="submit"
							disabled={loading}
							className="px-3 py-1 bg-black text-white"
						>
							{loading ? "저장 중..." : "저장"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
