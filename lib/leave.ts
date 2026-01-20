// 회계연도 기준 로직
export function calcCalendarLeave(joinedAt: Date, year: number) {
	const joinYear = joinedAt.getFullYear();

	if (joinYear > year) return 0;

	if (joinYear === year) {
		const joinMonth = joinedAt.getMonth() + 1;
		return Math.floor(((12 - joinMonth + 1) / 12) * 15);
	}

	return 15;
}

// 입사일 기준
export function calcAnniversaryLeave(joinedAt: Date, year: number) {
	const yearStart = new Date(year, 0, 1);
	const yearEnd = new Date(year, 11, 31);

	let days = 0;
	let cursor = new Date(joinedAt);

	// 1년 미만: 월차
	while (cursor < yearEnd) {
		const next = new Date(cursor);
		next.setMonth(next.getMonth() + 1);

		if (
			next >= yearStart &&
			next <= yearEnd &&
			next <= addYears(joinedAt, 1)
		) {
			days += 1;
		}

		cursor = next;
	}

	// 1년 도달 시 15일
	const oneYear = addYears(joinedAt, 1);
	if (oneYear >= yearStart && oneYear <= yearEnd) {
		days += 15;
	}

	return days;
}

function addYears(date: Date, years: number) {
	const d = new Date(date);
	d.setFullYear(d.getFullYear() + years);
	return d;
}

export function isMonthlyLeaveAccrualDay(joinedAt: Date, today: Date) {
	if (today <= joinedAt) return false;

	const months =
		(today.getFullYear() - joinedAt.getFullYear()) * 12 +
		(today.getMonth() - joinedAt.getMonth());

	if (months <= 0 || months >= 12) return false;

	return today.getDate() === joinedAt.getDate();
}
