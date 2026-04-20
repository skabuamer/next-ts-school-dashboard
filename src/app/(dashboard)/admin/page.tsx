import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";

const adminPage = () => {
	return (
		<div className="p-4 flex h-full flex-col md:flex-row gap-4">
			<div className="w-full lg:w-2/3">
				<div className="flex flex-wrap gap-4 mb-4">
					<UserCard type="Students" />
					<UserCard type="Tachers" />
					<UserCard type="Parents" />
					<UserCard type="Staffs" />
				</div>
				<div className="flex gap-4 flex-col lg:flex-row">
					<div className="w-full lg:w-1/3 min-h-112.5">
						<CountChart />
					</div>
					<div className="w-full lg:w-2/3 min-h-112.5">
						<AttendanceChart />
					</div>
				</div>
			</div>
			<div className="w-full lg:w-1/3"></div>
		</div>
	);
};

export default adminPage;
