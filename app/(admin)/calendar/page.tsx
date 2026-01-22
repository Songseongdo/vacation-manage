"use client";

import Calendar from "@/app/components/Calendar";
import { DateClickArg } from "@fullcalendar/interaction/index.js";
import { useEffect, useState } from "react";
import VacationCreateModal from "./VacationCreateModal";
import {
	EmployeeWithVacations,
	getEmployeesList,
	VacationsWithUsages,
	VacationUsage,
} from "./actions";
import { EventClickArg, EventInput } from "@fullcalendar/core/index.js";
import { normalizeDate, typeUIText } from "@/app/util";
import VacationDeleteModal, { IVacationExtra } from "./VacationDeleteModal";

export default function AdminCalendarPage() {
	const [createModalOpen, setCreateModalOpen] = useState(false);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [employees, setEmployees] = useState<EmployeeWithVacations[]>([]);
	const [range, setRange] = useState<{
		startDate: string;
		endDate: string;
	} | null>(null);
	const [clickDate, setClickDate] = useState(new Date());
	const [deleteModalData, setDeleModalData] = useState<IVacationExtra>();
	const [refreshKey, setRefreshKey] = useState(0);

	useEffect(() => {
		if (!range) return;
		(async () => {
			const data = await getEmployeesList(range);
			setEmployees(data);
		})();
	}, [range, refreshKey]);

	const handleDateClick = (arg: DateClickArg) => {
		setCreateModalOpen(true);
		setClickDate(arg.date);
	};
	const handleEventClick = (arg: EventClickArg) => {
		if (arg.event.extendedProps === undefined) return;

		console.log("handleEventClick", arg.event.extendedProps);

		setDeleModalData({
			usage: arg.event.extendedProps.usage,
			name: arg.event.extendedProps.name,
			onSuccess: () => {
				setRefreshKey((prv) => prv + 1);
			},
		});
		setDeleteModalOpen(true);
	};

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
				onDateClick={handleDateClick}
				onEventClick={handleEventClick}
			/>
			{createModalOpen ? (
				<VacationCreateModal
					open={createModalOpen}
					onClose={() => setCreateModalOpen(false)}
					title="휴가 등록"
					employees={employees}
					clickDate={clickDate}
					onSuccess={() => {
						setRefreshKey((v) => v + 1);
					}}
				/>
			) : null}
			{deleteModalOpen && deleteModalData ? (
				<VacationDeleteModal
					open={deleteModalOpen}
					onClose={() => setDeleteModalOpen(false)}
					title="휴가 내역"
					usage={deleteModalData.usage}
					name={deleteModalData.name}
					onSuccess={deleteModalData.onSuccess}
				/>
			) : null}
		</div>
	);
}
