"use client";

import { useRouter } from "next/navigation";
import { resignEmployee } from "./actions";

export default function ResignButton({ employeeId }: { employeeId: number }) {
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		const ok = window.confirm("직원을 퇴사 처리하시겠습니까?");

		if (!ok) {
			e.preventDefault();
		}

		router.push("/employees");
	};

	return (
		<form action={resignEmployee} onSubmit={handleSubmit}>
			<input type="hidden" name="employeeId" value={employeeId} />
			<button type="submit" className="text-blue-600">
				퇴사
			</button>
		</form>
	);
}
