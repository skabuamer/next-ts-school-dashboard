import Announcements from "@/components/Announcements";
import BigCalender from "@/components/BigCalender";

const parentDash = () => {
	return (
		<div className="p-4 flex gap-4 flex-col xl:flex-row min-h-screen">
			{/* LEFT */}
			<div className="w-full xl:w-2/3">
				<div className="h-full bg-gray-100 p-4 rounded-md">
					<h1 className="text-xl font-semibold mb-3">Schedule (Martin)</h1>
					<BigCalender />
				</div>
			</div>
			{/* RIGHT */}
			<div className="w-full xl:w-1/3 flex flex-col gap-8">
				<Announcements />
			</div>
		</div>
	);
};

export default parentDash;
