"use client";
import Image from "next/image";
import { Legend, RadialBar, RadialBarChart, Tooltip } from "recharts";

// #region Sample data
const data = [
	{
		name: "Boys",
		count: 48,
		fill: "#8884d8",
	},
	{
		name: "Girls",
		count: 53,
		fill: "#83a6ed",
	},
];

const CountChart = () => {
	return (
		<div className="p-4 bg-gray-100 rounded-2xl h-full">
			<div className="flex justify-between gap-4 items-center">
				<span className="block font-semibold text-lg">Students</span>
				<button>
					<Image src="/moreDark.png" alt="Image" width={16} height={16} />
				</button>
			</div>
			<div className="w-full h-[75%] relative">
				<RadialBarChart style={{ width: "100%", maxHeight: "90vh", aspectRatio: 1 }} responsive cx="50%" barSize={32} data={data} innerRadius="40%" outerRadius="90%">
					<RadialBar label={{ position: "insideStart", fill: "#fff" }} background dataKey="count" />
					<Legend iconSize={18} layout="horizontal" verticalAlign="bottom" iconType="circle" wrapperStyle={{}} />
					<Tooltip />
				</RadialBarChart>
				<Image src="/malefemale.png" alt="images" height={50} width={50} className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></Image>
			</div>
		</div>
	);
};

export default CountChart;
