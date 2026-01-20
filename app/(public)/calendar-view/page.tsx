import {
	EmployeeWithVacations,
	getEmployeesList,
	VacationsWithUsages,
	VacationUsage,
} from "@/app/(admin)/calendar/actions";
import Calendar from "@/app/components/Calendar";
import { normalizeDate, typeUIText } from "@/app/util";
import { EventInput } from "@fullcalendar/core/index.js";
import { useState } from "react";

export default function Page() {
	const [, setRange] = useState<{
		startDate: string;
		endDate: string;
	} | null>(null);

	function transformToEvents(
		employees: EmployeeWithVacations[]
	): EventInput[] {
		const events: EventInput[] = [];

		employees.forEach((emp) => {
			emp.vacations.forEach((vac: VacationsWithUsages) => {
				vac.vacationUsages.forEach((u: VacationUsage) => {
					const endDate = new Date(u.endDate);
					let allDay = false;
					let end = "";

					if (u.type === "FULL") {
						endDate.setDate(endDate.getDate() + 1);
						allDay = true;
						end = normalizeDate(endDate);
					}

					events.push({
						id: String(u.id),
						title: `${emp.name}(${typeUIText(u.type)})`,
						start: allDay
							? normalizeDate(u.startDate)
							: u.startDate,
						end: allDay ? end : u.endDate,
						allDay,

						extendedProps: {
							name: emp.name,
							usage: u,
						},
					});
				});
			});
		});

		return events;
	}

	return (
		<div>
			<Calendar
				setRange={setRange}
				eventSources={[
					{
						events: async (
							fetchInfo,
							successCallback,
							failureCallback
						) => {
							try {
								const data = await getEmployeesList({
									startDate: fetchInfo.startStr,
									endDate: fetchInfo.endStr,
								});

								successCallback(transformToEvents(data));
							} catch (e) {
								if (e instanceof Error) {
									failureCallback(e);
								} else {
									failureCallback(new Error("Unknown error"));
								}
							}
						},
					},
				]}
			/>
		</div>
	);
}
