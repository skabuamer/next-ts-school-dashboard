"use client";
import { calendarEvents } from "@/lib/data";
import moment from "moment";
import { useState } from "react";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const BigCalender = () => {
	const [view, setView] = useState<View>(Views.WORK_WEEK);
	const selectedDate = new Date(2026, 5, 12);

	const handleViewChange = (newView: View) => {
		setView(newView);
	};

	return <Calendar localizer={localizer} events={calendarEvents} startAccessor="start" endAccessor="end" views={["work_week", "day"]} view={view} style={{ height: "97.5%" }} min={new Date(2001, 1, 1, 8, 0, 0)} max={new Date(3000, 1, 1, 17, 0, 0)} defaultDate={selectedDate} onView={handleViewChange} />;
};

export default BigCalender;
