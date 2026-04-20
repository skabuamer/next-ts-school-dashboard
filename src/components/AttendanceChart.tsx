"use client";
import Image from "next/image";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

// #region Sample data
const data = [
	{ name: "Mon", present: 4000, absent: 2400 },
	{ name: "Tue", present: 3000, absent: 1398 },
	{ name: "Wed", present: 2000, absent: 9800 },
	{ name: "Thu", present: 2780, absent: 3908 },
	{ name: "Fri", present: 1890, absent: 4800 },
];

// #endregion
const AttendanceChart = () => {
	return (
		<div className="p-4 bg-gray-100 rounded-2xl">
			<div className="flex justify-between gap-4 items-center">
				<span className="block font-semibold text-lg">Attendance</span>
				<button>
					<Image src="/moreDark.png" alt="Image" width={16} height={16} />
				</button>
			</div>
			<BarChart
				style={{ width: "100%", maxWidth: "700px", maxHeight: "70vh", aspectRatio: 1.618 }}
				responsive
				data={data}
				margin={{
					top: 5,
					right: 0,
					left: 0,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
				<XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "##979797" }} />
				<YAxis width="auto" axisLine={false} tickLine={false} tick={{ fill: "##979797" }} />
				<Tooltip />
				<Legend />
				<Bar dataKey="absent" fill="#8884d8" activeBar={{ fill: "pink", stroke: "blue" }} radius={[10, 10, 0, 0]} />
				<Bar dataKey="present" fill="#82ca9d" activeBar={{ fill: "gold", stroke: "purple" }} radius={[10, 10, 0, 0]} />
			</BarChart>
		</div>
	);
};

export default AttendanceChart;
