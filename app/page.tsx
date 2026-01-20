// app/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EntryPage() {
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const router = useRouter();

	const submit = async () => {
		setError("");
		const res = await fetch("/api/auth/login", {
			method: "POST",
			body: JSON.stringify({ password }),
		});

		if (res.ok) {
			router.push("/employees");
		} else {
			setError("비밀번호가 올바르지 않습니다");
		}
	};

	return (
		<div className="h-screen flex items-center justify-center">
			<div className="w-80 space-y-4">
				<h1 className="text-xl font-bold text-center">
					휴가 관리 시스템
				</h1>

				<div className="relative">
					<input
						type="password"
						placeholder="관리자 비밀번호"
						className="w-full border px-4 py-2 pr-10 rounded"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						onKeyDown={(e) => e.key === "Enter" && submit()}
					/>
					<button
						onClick={submit}
						className="absolute right-2 top-2 text-gray-500 hover:text-black"
					>
						&rarr;
					</button>
				</div>

				{error && <p className="text-sm text-red-500">{error}</p>}

				<button
					onClick={() => router.push("/calendar-view")}
					className="w-full border py-2 rounded hover:bg-gray-100"
				>
					공용 페이지로 이동
				</button>
			</div>
		</div>
	);
}
