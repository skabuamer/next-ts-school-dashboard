"use client";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
	{
		id: 1,
		title: "Cultral Arts",
		time: "12:00 PM - 2:00 PM",
		description: "Students Cultral Arts Competition",
	},
	{
		id: 2,
		title: "Parential Meeting",
		time: "12:00 PM - 2:00 PM",
		description: "Parent Meeting with Parents of Students",
	},
	{
		id: 3,
		title: "Sports Competition",
		time: "12:00 PM -2:00 PM",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
];

function EventCalender() {
	const [value, onChange] = useState<Value>(new Date());

	return (
		<div className="bg-gray-100 p-4 rounded-md">
			<Calendar onChange={onChange} value={value} className="mb-5" />
			<div className="flex justify-between gap-4 items-center mb-3">
				<span className="block font-semibold text-lg">Finance</span>
				<button>
					<Image src="/moreDark.png" alt="Image" width={16} height={16} />
				</button>
			</div>
			<div className="space-y-4">
				{events.map((event) => (
					<div key={event.id} className="border-t-3 odd:border-t-purple-300 even:border-t-yellow-300 p-3 border border-gray-200 rounded-md">
						<div className="flex items-center justify-between mb-2">
							<h2 className="text-[18px] font-semibold ">{event.title}</h2>
							<p className="text-[16px] text-gray-600">{event.time}</p>
						</div>
						<p className="text-[14px] text-gray-500">{event.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default EventCalender;
