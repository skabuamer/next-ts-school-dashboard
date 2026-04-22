"use client";
import Image from "next/image";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
const data = [
	{
		name: "Jan",
		income: 4000,
		expense: 2400,
	},
	{
		name: "Feb",
		income: 3000,
		expense: 1398,
	},
	{
		name: "Mar",
		income: 2000,
		expense: 9800,
	},
	{
		name: "Apr",
		income: 2780,
		expense: 3908,
	},
	{
		name: "May",
		income: 1890,
		expense: 4800,
	},
	{
		name: "Jun",
		income: 2390,
		expense: 3800,
	},
	{
		name: "Jul",
		income: 3490,
		expense: 4300,
	},
	{
		name: "Aug",
		income: 3490,
		expense: 4300,
	},
	{
		name: "Sep",
		income: 3490,
		expense: 4300,
	},
	{
		name: "Oct",
		income: 12490,
		expense: 4300,
	},
	{
		name: "Nov",
		income: 3490,
		expense: 4300,
	},
	{
		name: "Dec",
		income: 3490,
		expense: 4300,
	},
];

type FinanceChartProps = {
	isAnimationActive?: boolean;
};
const FinanceChart = ({ isAnimationActive = true }: FinanceChartProps) => {
	return (
		<div className="p-4 bg-gray-100 rounded-2xl h-full mt-4">
			<div className="flex justify-between gap-4 items-center">
				<span className="block font-semibold text-lg">Finance</span>
				<button>
					<Image src="/moreDark.png" alt="Image" width={16} height={16} />
				</button>
			</div>
			<LineChart
				style={{ width: "100%", maxWidth: "100%", maxHeight: "auto", aspectRatio: 2 }}
				responsive
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
				<XAxis dataKey="name" tickLine={false} />
				<YAxis width="auto" tickLine={false} />
				<Tooltip />
				<Legend verticalAlign="top" />
				<Line type="monotone" dataKey="expense" stroke="var(--color-violet-300)" strokeWidth={4} isAnimationActive={isAnimationActive} />
				<Line type="monotone" dataKey="income" stroke="var(--color-yellow-300)" strokeWidth={4} isAnimationActive={isAnimationActive} />
			</LineChart>
		</div>
	);
};

export default FinanceChart;
