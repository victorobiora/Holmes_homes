/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logOutIcon from "@/assets/images/general/red-logout-icon.svg";
import { usePathname, useRouter } from "next/navigation";
import { adminSidebarFields } from "../admin.dto";

export const AdminSidebarList = ({ isOpen }: { isOpen?: unknown }) => {
	const urlSegments = usePathname().split("/");
	const currentRoute = urlSegments[2];
	const lastRoute = urlSegments[urlSegments.length - 1];

	const [activeHoverIndex, setactiveHoverIndex] = useState<number | null>(null);
	const router = useRouter();

	const routingHandler = (obj, index) => {
		// first check if logout button is what is clicked
		if (obj.text === "Log Out") {
			// logOutHandler(router);
		} else if (obj.subRoutes) {
			activeHoverIndex === index
				? setactiveHoverIndex(null)
				: setactiveHoverIndex(index);
		} else {
			router.push(`/admin/${obj.route}`);
		}
	};

	/** Desktop View */
	const desktopView = () => {
		return (
			<>
				{adminSidebarFields.map((item, index) => (
					<div key={index} className="px-4 my-2 ">
						<div
							className={`flex items-center py-4 px-5 TabletScreen:hidden MobileScreen:hidden rounded-xl hover:bg-holmes-primary-blue hover:text-white cursor-pointer ${
								item.route?.includes(currentRoute)
									? "bg-holmes-primary-blue text-white font-[500]"
									: "hover:bg-holmes-primary-blue hover:text-white "
							}`}
							onClick={() => routingHandler(item, index)}
						>
							<Image
								className="hover:text-white"
								src={
									item.route?.includes(currentRoute)
										? item.Icon.active
										: item.Icon.inactive
								}
								alt={item.text}
							></Image>
							<span
								className={`ml-4 ${!isOpen && "hidden"} font-[400] hover:font-[500] text-[16px] leading-[19.09px] group-hover:block select-none`}
							>
								{item.text}
							</span>
						</div>
					</div>
				))}

				<div className="my-20 px-4 TabletScreen:hidden MobileScreen:hidden  ">
					<div className="flex items-center py-4 px-5  hover:bg-[#0000001A] rounded-xl  cursor-pointer text-red-500">
						<Image src={logOutIcon} alt="logout" />
						<span
							className={
								"ml-4  font-[400] hover:font-[500] text-[16px] leading-[19.09px] group-hover:block select-none"
							}
						>
							Log Out
						</span>
					</div>
				</div>
			</>
		);
	};

	/** Tablet View */
	const tabletView = () => {
		return (
			<section 
			className="DesktopScreen:hidden MobileScreen:hidden ">
				{adminSidebarFields.map((item, index) => (
					<div
					key={index}
					>
						<div
							className={`flex items-center  py-4 px-5  hover:bg-holmes-primary-blue hover:text-white cursor-pointer ${
								activeHoverIndex === index
									? "bg-holmes-primary-blue text-white font-[500]"
									: "hover:bg-holmes-primary-blue hover:text-white"
							} `}
							onClick={() => routingHandler(item, index)}
						>
							<Image
								className="hover:text-white"
								src={
									item.route?.includes(currentRoute)
										? item.Icon.active
										: item.Icon.inactive
								}
								alt={item.text}
							></Image>
							<span
								className={
									"ml-4  font-[400] hover:font-[500] text-[16px] leading-[19.09px] group-hover:block select-none"
								}
							>
								{item.text}
							</span>
						</div>
					</div>
				))}

				<div className="mt-20 mb-4 DesktopScreen:hidden MobileScreen:hidden text-red-500 flex items-center py-4 px-5  hover:bg-[#0000001A] rounded-xl  cursor-pointer">
					<Image src={logOutIcon} alt="logout" />
					<span
						className={
							"ml-4  font-[400] hover:font-[500] text-[16px] leading-[19.09px] group-hover:block select-none"
						}
					>
						Log Out
					</span>
				</div>

				<motion.button
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						className={`px-4 py-2 mx-4 ml-2 rounded-md text-[#435769] bg-holmes-background-light-grey shadow-md`}
						onClick={(event) => {
							event.preventDefault();
							router.push("/");
						}}
					>
						Go to User
					</motion.button>
			</section>
		);
	};

	/** Mobile View */
	const mobileView = () => {
		return (
			<section className="DesktopScreen:hidden TabletScreen:hidden">
				{adminSidebarFields.map((item, index) => (
					<div key={index} >
						<div
							key={index}
							className={`flex items-center  py-4 px-5  hover:bg-holmes-primary-blue hover:text-white cursor-pointer ${
								item.route?.includes(currentRoute)
									? "bg-holmes-primary-blue text-white font-[500]"
									: "hover:bg-holmes-primary-blue hover:text-white "
							}`}
							onClick={() => routingHandler(item, index)}
						>
							<Image
								className="hover:text-white"
								src={
									item.route?.includes(currentRoute)
										? item.Icon.active
										: item.Icon.inactive
								}
								alt={item.text}
							></Image>
							<span className="ml-4 font-[400] hover:font-[500] text-[16px] leading-[19.09px] group-hover:block select-none">
								{item.text}
							</span>
						</div>
					</div>
				))}
				<div className="mt-20 mb-4 DesktopScreen:hidden TabletScreen:hidden text-red-500 flex items-center py-4 px-5  hover:bg-[#0000001A] rounded-xl cursor-pointer">
					<Image src={logOutIcon} alt="logout" />
					<span
						className={
							"ml-4  font-[400] hover:font-[500] text-[16px] leading-[19.09px] group-hover:block select-none"
						}
					>
						Log Out
					</span>
				</div>

				<motion.button
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						className={`px-4 py-2 mx-4 ml-2 rounded-md text-[#435769] bg-holmes-background-light-grey shadow-md`}
						onClick={(event) => {
							event.preventDefault();
							router.push("/");
						}}
					>
						Go to User
					</motion.button>
			</section>
		);
	};
	return (
		<section>
			{desktopView()}
			{tabletView()}
			{mobileView()}
		</section>
	);
};

