import { VacationUsage } from "@/app/const";

export default function VacationUsageList({
	usages,
	onDelete,
}: {
	usages: VacationUsage[];
	onDelete: (usageId: number) => void;
}) {
	if (!usages || usages.length === 0) {
		return <p className="text-sm text-gray-500">사용 내역 없음</p>;
	}

	const clickDelete = (u: VacationUsage) => {
		if (confirm("연차 사용 내역으르 삭제하시겠습니까?")) {
			onDelete(u.id);
		}
	};

	return (
		<ul className="space-y-2">
			{usages.map((u) => (
				<li key={u.id} className="flex justify-between border-b pb-1">
					<div>
						<p className="text-sm">
							{u.date.toISOString().slice(0, 10)} · {u.hours}h
						</p>
						{u.reason && (
							<p className="text-xs text-gray-500">{u.reason}</p>
						)}
					</div>

					<button
						type="button"
						onClick={() => clickDelete(u)}
						className="text-red-600 text-sm"
					>
						삭제
					</button>
				</li>
			))}
		</ul>
	);
}
