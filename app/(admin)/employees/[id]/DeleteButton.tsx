"use client";

import { useRouter } from "next/navigation";
import { deleteEmployee } from "./actions";

export default function DeleteButton({ employeeId }: { employeeId: number }) {
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		const ok = window.confirm(
			"직원을 삭제하시겠습니까?\n삭제 시 복구할 수 없습니다."
		);

		if (!ok) {
			e.preventDefault();
		}

		router.push("/employees");
	};

	return (
		<form action={deleteEmployee} onSubmit={handleSubmit}>
			<input type="hidden" name="employeeId" value={employeeId} />
			<button type="submit" className="text-red-600">
				삭제
			</button>
		</form>
	);
}
