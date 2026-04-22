const announcements = [
	{
		id: 1,
		title: "Data Update",
		time: "20:08, 20 Sept 2026",
		description: "Students Cultral Arts Competition",
	},
	{
		id: 2,
		title: "New Student Enrollment",
		time: "08:34, 30 May 2024",
		description: "Parent Meeting with Parents of Students",
	},
	{
		id: 3,
		title: "Parent's Dashboard Update",
		time: "12:00 PM -2:00 PM",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
];
const Announcements = () => {
	return (
		<div className="bg-gray-100 p-4 rounded-md">
			<div className="flex justify-between gap-4 items-center mb-3">
				<span className="block font-semibold text-lg">Announcements</span>
				<button>View All </button>
			</div>
			<div className="space-y-4">
				{announcements.map((announcement) => (
					<div className="bg-blue-100 rounded-md p-4" key={announcement.id}>
						<div className="flex items-center justify-between">
							<h2 className="font-medium">{announcement.title}</h2>
							<span className="text-xs text-gray-400 bg-white rounded-md px-2 py-1">{announcement.time}</span>
						</div>
						<p className="text-sm text-gray-400">{announcement.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Announcements;
