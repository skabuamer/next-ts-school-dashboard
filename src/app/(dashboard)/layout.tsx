import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const dashboardLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className="flex min-h-screen">
			<div className="w-[14%] md:w-[8%] lg:w-[14%] bg-gray-50 p-4 sticky top-0 h-screen overflow-auto">
				<Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
					<Image src="/logo.png" alt="logo" width={32} height={32} />
					<span className="hidden lg:block">Amer School</span>
				</Link>
				<Menu />
			</div>
			<div className="w-[86%] md:w-[92%] lg:w-[86%]">
				<Navbar />
				<div>{children}</div>
			</div>
		</div>
	);
};

export default dashboardLayout;
