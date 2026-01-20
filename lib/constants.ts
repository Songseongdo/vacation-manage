export const LEAVE_POLICY_CUTOFF = new Date("2023-01-01");

export const LEAVE_POLICY = {
	CALENDAR: "CALENDAR",
	ANNIVERSARY: "ANNIVERSARY",
} as const;

export const EMPLOYEE_TYPE_LABEL: Record<string, string> = {
	REGULAR: "정규직",
	CONTRACT: "계약직",
	PART_TIME: "파트타임",
};

export const VACATION_TYPES = {
	FULL: "FULL",
	HALF: "HALF",
	HOURLY: "HOURLY",
} as const;

export type VacationType = (typeof VACATION_TYPES)[keyof typeof VACATION_TYPES];
