import React, { useState } from "react";
import Image from "next/image";
import SearchIcon from "@/assets/images/general/search-icon.svg";
import MenuIcon from "@/assets/images/general/menu-icon.svg";
import holmesLogoSideWays from "@/assets/images/general/holmes-logo.png";
import NotificationsIcon from "@/assets/images/general/notification-icon.svg";
import optionsIcon from "@/assets/images/general/black-down-icon.svg";
import { useRouter } from "next/navigation";
import Inputs from "@/library/inputs/inputs";
import { motion } from "framer-motion";
import genericAvatar from "@/assets/images/general/generic-avatar.svg";
import ViewNotificationsModal from "./view-notifications";
import { BlueBackdrop } from "@/library/modals/blue-backdrop";


export const AgentNavBar: React.FC<{
	toggleSidebar: () => void;
}> = ({ toggleSidebar }) => {
	const [showAddMemberModal, setshowAddMemberModal] = useState(false);

	const removeModal = () => {
		setshowAddMemberModal(false);
	};

	const router = useRouter();
	const [viewNotifications, setViewNotifications] = useState(false);
	/** Desktop View */
	const desktopView = () => {
		return (
			<div
				className="TabletScreen:hidden MobileScreen:hidden bg-white flex flex-row justify-between items-center gap-[151px] border-b-[1px]
			       border-l-[1px] h-[4.6rem] px-10"
			>
				<h1 className="text-xl"></h1>

				<div className="w-[30%] h-[44px] flex flex-row rounded-[10px] border-[1px]">
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

				<div className="flex">
					<div className="flex flex-row gap-[12px] mx-3">
						<Image
							onClick={() => {
								setViewNotifications(true);
							}}
							className="cursor-pointer"
							src={NotificationsIcon}
							alt="notifications"
						></Image>
					</div>

					<motion.button
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						className={"p-2 rounded-md text-white bg-holmes-primary-dark-brown "}
						onClick={(event) => {
							event.preventDefault();
					router.push('/agent/new-listing');
						}}
					>
						<span className="mx-1"> + </span> Add Listing
					</motion.button>

					<div className=" flex justify-center items-center bg-white rounded-full min-h-8 min-w-8 ml-4 mr-1">
						<Image alt="avatar" src={genericAvatar} className="w-full h-full" />
					</div>

					<div className=" cursor-pointer self-center">
						<Image alt="options" src={optionsIcon} />
					</div>
				</div>
			</div>
		);
	};

	/** Tablet View */
	const tableView = () => {
		return (
			<div className="DesktopScreen:hidden MobileScreen:hidden bg-white flex flex-row justify-between py-[13px] px-[24px] shadow-md">
				<div
					className="h-10 w-[10rem]"
					// onClick={() => router.push(GeneralNonAuthRoutes.landingPage)}
				>
					<Image alt="logo" src={holmesLogoSideWays} className="w-full h-full" />
				</div>
				<div className="flex flex-row items-center gap-[12px]">
					<Image
						className="cursor-pointer w-8 h-8"
						src={NotificationsIcon}
						alt="notifications"
					></Image>
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
					className="h-10 w-[10rem]"
					// onClick={() => router.push(GeneralNonAuthRoutes.landingPage)}
				>
					<Image alt="logo" src={holmesLogoSideWays} className="w-full h-full" />
				</div>
				<div className="flex flex-row items-center gap-[12px]">
					<Image
						onClick={() => {
							setViewNotifications(true);
						}}
						className="cursor-pointer w-8 h-8"
						src={NotificationsIcon}
						alt="notifications"
					></Image>
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
			{viewNotifications && (
				<ViewNotificationsModal
					removeNotifications={() => {
						setViewNotifications(false);
					}}
				/>
			)}
			{/** a section for the task in particular in which the card has been selected */}
			{showAddMemberModal && (
				<BlueBackdrop onClick={removeModal}>
		
				</BlueBackdrop>
			)}
			{desktopView()}
			{tableView()}
			{mobileView()}
		</section>
	);
};

