"use client";

import holmesLogoSideWays from "@/assets/images/general/holmes-logo.png";
import Image from "next/image";
import Inputs from "@/library/inputs/inputs";
import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import SearchIcon from "@/assets/images/general/search-icon.svg";
import MenuIcon from "@/assets/images/general/menu-icon.svg";
import genericAvatar from "@/assets/images/general/generic-avatar.svg";
import NotificationsIcon from "@/assets/images/general/notification-icon.svg";
import { GeneralNonAuthRoutes } from "@/utils/urls";

const GuestNavBar: React.FC<{
	toggleSidebar: () => void;
	setActiveSection: React.Dispatch<React.SetStateAction<string>>;
	activeSection: string;
}> = ({ toggleSidebar, setActiveSection, activeSection }) => {
	const router = useRouter();
	const [viewNotifications, setViewNotifications] = useState(false);

	/** Desktop View */
	const desktopView = () => {
		return (
			<section className=" MobileScreen:hidden TabletScreen:hidden w-full h-[5rem] py-2 px-10 bg-white flex justify-between items-center">
				<div
					className="h-20 w-20 cursor-pointer"
					onClick={() => router.push(GeneralNonAuthRoutes.homePage)}
				>
					<Image alt="logo" src={holmesLogoSideWays} className="w-full h-full" />
				</div>
				<div className="flex">
					<div
						className={`mx-3 cursor-pointer ${activeSection === "home" ? "text-black border-b-4 border-black " : "text-holmes-font-light-grey"}`}
						onClick={() => {
							setActiveSection("home");
						}}
					>
						Home
					</div>

					<div
						className={`mx-3 cursor-pointer ${activeSection === "about-us" ? "text-black border-b-4 border-black " : "text-holmes-font-light-grey"}`}
						onClick={() => {
							setActiveSection("about-us");
						}}
					>
						About Us
					</div>
					<div
						className={`mx-3 cursor-pointer ${activeSection === "news" ? "text-black border-b-4 border-black " : "text-holmes-font-light-grey"}`}
						onClick={() => {
							setActiveSection("news");
						}}
					>
						News
					</div>
					<div
						className={`mx-3 cursor-pointer ${activeSection === "contact" ? "text-black border-b-4 border-black " : "text-holmes-font-light-grey"}`}
						onClick={() => {
							setActiveSection("contact");
						}}
					>
						Contact
					</div>
				</div>

				{/* Sign up/ Sign In */}
				<div className="flex justify-end my-10">
					<motion.button
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						className={`px-4 py-2 mx-4 ml-2 rounded-md text-[#435769] bg-holmes-background-light-grey shadow-md`}
						onClick={(event) => {
							event.preventDefault();
							router.push("/admin/dashboard");
						}}
					>
						Go to Admin
					</motion.button>
					<motion.button
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						className={`px-4 py-2 mx-4 ml-2 rounded-md text-[#435769] bg-holmes-background-light-grey shadow-md`}
						onClick={(event) => {
							event.preventDefault();
							router.push("/sign-in");
						}}
					>
						Sign In
					</motion.button>
					<motion.button
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						className={`px-2 py-2 rounded-md text-white bg-holmes-primary-blue `}
						onClick={(event) => {
							event.preventDefault();
							router.push("/sign-up");
						}}
					>
						Sign Up
					</motion.button>
				</div>
			</section>
		);
	};

	/** Tablet View */
	const tableView = () => {
		return (
			<div className="DesktopScreen:hidden MobileScreen:hidden bg-white flex flex-row justify-between py-[13px] px-[24px] shadow-md">
				<div
					className="h-20 w-20 cursor-pointer"
					onClick={() => router.push(GeneralNonAuthRoutes.homePage)}
				>
					<Image alt="logo" src={holmesLogoSideWays} className="w-full h-full" />
				</div>
				<div className="flex flex-row items-center gap-[12px]">
					{/* <Image
						className="cursor-pointer w-8 h-8"
						src={NotificationsIcon}
						alt="notifications"
					></Image> */}
					<Image src={SearchIcon} alt={"Search Icon"}></Image>
					<Image
						src={MenuIcon}
						alt={" Menu Icon"}
						className="cursor-pointer"
						onClick={toggleSidebar}
					></Image>
				</div>
			</div>
		);
	};

	/** Mobile View */
	const mobileView = () => {
		return (
			<div className="DesktopScreen:hidden TabletScreen:hidden bg-white flex flex-row justify-between py-[13px] px-[24px] shadow-md">
				<div
					className="h-20 w-20 cursor-pointer"
					onClick={() => router.push(GeneralNonAuthRoutes.homePage)}
				>
					<Image alt="logo" src={holmesLogoSideWays} className="w-full h-full" />
				</div>
				<div className="flex flex-row items-center gap-[12px]">
					{/* <Image
						onClick={() => {
							setViewNotifications(true);
						}}
						className="cursor-pointer w-8 h-8"
						src={NotificationsIcon}
						alt="notifications"
					></Image> */}
					<Image src={SearchIcon} alt={" Search Icon"}></Image>
					<Image
						src={MenuIcon}
						alt={" Menu Icon"}
						className="cursor-pointer"
						onClick={toggleSidebar}
					></Image>
				</div>
			</div>
		);
	};

	return (
		<section>
			{desktopView()}
			{tableView()}
			{mobileView()}
		</section>
	);
};

export default GuestNavBar;

