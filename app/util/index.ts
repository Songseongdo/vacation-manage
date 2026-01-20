export function hoursToDays(hours: number) {
	return Number((hours / 8).toFixed(2));
}

export function formatVacationDays(hours: number) {
	const days = hours / 8;
	return `${days}일`;
}

export function typeUIText(type: string) {
	switch (type) {
		case "FULL":
			return "연차";
		case "HALF":
			return "반차";
		case "HOURLY":
			return "반반차";
	}
}

export function normalizeDate(date: Date): string {
	const y = date.getFullYear();
	const m = String(date.getMonth() + 1).padStart(2, "0");
	const d = String(date.getDate()).padStart(2, "0");

	return `${y}-${m}-${d}`;
}
