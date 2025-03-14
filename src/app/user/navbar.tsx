"use client";

import holmesLogoSideWays from "@/assets/images/general/holmes-logo.png";
import Image from "next/image";
import Inputs from "@/library/inputs/inputs";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import SearchIcon from "@/assets/images/general/search-icon.svg";
import downIcon from "@/assets/images/general/down-icon-black.svg";
import MenuIcon from "@/assets/images/general/menu-icon.svg";
import genericAvatar from "@/assets/images/general/generic-avatar.svg";
import NotificationsIcon from "@/assets/images/general/notification-icon.svg";
import { navigationIcons } from "../home.dto";
import NotificationIcon from "@/assets/images/general/notification-icon-2.svg";
import FavoritesIcon from "@/assets/images/general/black-love-icon.svg";
import NavigationModal from "./navigation-modal";
import { useEffect } from "react";
import { GeneralNonAuthRoutes } from "@/utils/urls";

const NavBar: React.FC<{
	toggleSidebar: () => void;
}> = ({ toggleSidebar}) => {
	const router = useRouter();
	const [viewNotifications, setViewNotifications] = useState(false);
	const [viewNavigationModal, setViewNavigationModal] = useState(false);
	const navigationRef = useRef<HTMLDivElement | null>(null);

	// Handle clicks outside periodChosen fields
	useEffect(() => {
		if(typeof window !== 'undefined'){
			const handleClickOutsidePeriodChosen = (event: MouseEvent) => {
			if (
				viewNavigationModal &&
				navigationRef.current &&
				!navigationRef.current.contains(event.target as Node)
			) {
				setViewNavigationModal(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutsidePeriodChosen);

		return () => {
			document.removeEventListener("mousedown", handleClickOutsidePeriodChosen);
		}
		} 
	
	}, [viewNavigationModal]);

	/** Desktop View */
	const desktopView = () => {
		return (
			<section className=" MobileScreen:hidden TabletScreen:hidden w-full h-[5rem] py-2 px-10 bg-white flex justify-between items-center">
				<div
					className=" cursor-pointer"
					onClick={() => router.push(GeneralNonAuthRoutes.homePage)}
				>
					<Image alt="logo" src={holmesLogoSideWays} className="w-full h-full" />
				</div>

				<div className="w-[40%] h-[44px] flex flex-row rounded-[10px] border-[1px]">
					<Inputs
						className="w-full p-2 text-sm border-none rounded-[100px] focus:outline-none focus:ring-0"
						Name={"search"}
						inputType={"text"}
						placeholder="Search Dashboard"
					></Inputs>
					<Image
						className="my-[13px] mx-[24px] cursor-pointer"
						src={SearchIcon}
						alt={"Search Icon"}
					></Image>
				</div>

				{/* account details */}
				<div className="flex justify-end my-10">
					<div className="flex">
						<div className="flex flex-row items-center gap-6 mx-6">
						<motion.button
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						className={`px-2 py-2 mx-4 ml-2 rounded-md text-[#435769] bg-holmes-background-light-grey shadow-md`}
						onClick={(event) => {
							event.preventDefault();
							router.push("/admin/dashboard");
						}}
					>
					Go to Admin
					</motion.button>
							<div className="relative">
								<Image
									className="cursor-pointer z-[2]"
									src={NotificationIcon}
									alt={"notification"}
								></Image>
								<div className="z-[3] absolute text-white flex justify-center items-center text-xs -right-3 -top-2 w-4 h-4 p-3 bg-holmes-primary-dark-brown rounded-full">
									12
								</div>
							</div>
							<div className="relative">
								<Image
									className="cursor-pointer z-[2]"
									src={FavoritesIcon}
									alt={"favorite"}
								></Image>
								<div className="z-[3] absolute text-white flex justify-center items-center text-xs -right-3 -top-2 w-4 h-4 p-3 bg-holmes-primary-dark-brown rounded-full">
									14
								</div>
							</div>

							<div className="font-bold cursor-pointer">Saved Listings</div>
							<div
								ref={navigationRef}
								className="relative "
								onClick={() => {
									setViewNavigationModal(!viewNavigationModal);
								}}
							>
								<div className="flex gap-2 cursor-pointer items-center">
									<Image
										className=" z-[2]"
										src={genericAvatar}
										alt={"avatar"}
									></Image>
									<div className="flex items-end">
										<Image src={downIcon} alt="down-icon" />
									</div>
								</div>
								<AnimatePresence>
									{viewNavigationModal && <NavigationModal />}
								</AnimatePresence>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	};

	/** Tablet View */
	const tableView = () => {
		return (
			<div className="DesktopScreen:hidden MobileScreen:hidden bg-white flex flex-row justify-between py-[13px] px-[24px] shadow-md">
				<div
					className="h-24 w-[10rem] cursor-pointer"
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
					className="h-24 w-[10rem] cursor-pointer"
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

export default NavBar;

