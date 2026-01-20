"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { useRef } from "react";
import {
	EventClickArg,
	EventInput,
	EventSourceInput,
} from "@fullcalendar/core/index.js";

interface ISetRange {
	startDate: string;
	endDate: string;
}
interface ICalendarProps {
	onDateClick?: (arg: DateClickArg) => void;
	onEventClick?: (arg: EventClickArg) => void;
	events?: EventInput[];
	eventSources?: EventSourceInput[];
	setRange: ({ startDate, endDate }: ISetRange) => void;
}

export default function Calendar({
	onDateClick,
	onEventClick,
	events,
	eventSources,
	setRange,
}: ICalendarProps) {
	const calendarRef = useRef<FullCalendar | null>(null);

	const calendarProps = eventSources
		? { eventSources }
		: { events: events ?? [] };

	return (
		<div>
			<FullCalendar
				ref={calendarRef}
				plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
				headerToolbar={{
					left: "prev,next today",
					center: "title",
					right: "month,week,day",
				}}
				titleFormat={{
					year: "numeric",
					month: "short",
					day: "numeric",
				}}
				customButtons={{
					month: {
						text: "month",
						click: () =>
							calendarRef.current
								?.getApi()
								.changeView("dayGridMonth"),
					},
					week: {
						text: "week",
						click: () =>
							calendarRef.current
								?.getApi()
								.changeView("timeGridWeek"),
					},
					day: {
						text: "day",
						click: () =>
							calendarRef.current
								?.getApi()
								.changeView("timeGridDay"),
					},
				}}
				datesSet={(arg) => {
					setRange({
						startDate: arg.startStr,
						endDate: arg.endStr,
					});
				}}
				initialView="dayGridMonth"
				slotMinTime="08:00:00"
				slotMaxTime="20:00:00"
				selectable
				height="auto"
				dateClick={onDateClick}
				eventClick={onEventClick}
				{...calendarProps}
			/>
		</div>
	);
}
