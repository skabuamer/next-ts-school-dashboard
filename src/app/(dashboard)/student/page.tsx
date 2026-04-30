import Announcements from "@/components/Announcements";
import BigCalender from "@/components/BigCalender";
import EventCalender from "@/components/EventCalender";

const studentDash = () => {
	return (
		<div className="p-4 flex gap-4 flex-col xl:flex-row">
			{/* LEFT */}
			<div className="w-full xl:w-2/3">
				<div className="h-full bg-gray-100 p-4 rounded-md">
					<h1 className="text-xl font-semibold mb-3">Schedule (4A)</h1>
					<BigCalender />
				</div>
			</div>
			{/* RIGHT */}
			<div className="w-full xl:w-1/3 flex flex-col gap-8">
				<EventCalender />
				<Announcements />
			</div>
		</div>
	);
};

export default studentDash;
