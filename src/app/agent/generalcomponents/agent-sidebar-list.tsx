/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logOutIcon from "@/assets/images/general/red-logout-icon.svg";
import { usePathname, useRouter } from "next/navigation";
import { agentSidebarFields } from "../agent.dto";

export const AgentSidebarList = ({ isOpen }: { isOpen?: unknown }) => {
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
			router.push(`/agent/${obj.route}`);
		}
	};

	console.log(currentRoute)

	/** Desktop View */
	const desktopView = () => {
		return (
			<>
				{agentSidebarFields.map((item, index) => (
					<div key={index} className="px-4 my-2 ">
						<div
							className={`flex items-center py-4 px-5 TabletScreen:hidden MobileScreen:hidden rounded-xl hover:bg-holmes-primary-blue hover:text-white cursor-pointer ${
								 (item.route?.includes(currentRoute) || (currentRoute === 'new-listing' && item.route === 'property-listings'))
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
			<>
				{agentSidebarFields.map((item, index) => (
					<div
						key={index}
						className="DesktopScreen:hidden MobileScreen:hidden "
					>
						<div
							className={`flex items-center  py-4 px-5  hover:bg-holmes-primary-blue hover:text-white cursor-pointer ${
								(item.route?.includes(currentRoute) || (currentRoute === 'new-listing' && item.route === 'property-listings'))
									? "bg-holmes-primary-blue text-white font-[500]"
									: "hover:bg-holmes-primary-blue hover:text-white"
							} `}
							onClick={() => routingHandler(item, index)}
						>
							<Image
								className="hover:text-white"
								src={
									(item.route?.includes(currentRoute) || (currentRoute === 'new-listing' && item.route === 'property-listings'))
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

				<div className="my-20 DesktopScreen:hidden MobileScreen:hidden text-red-500 flex items-center py-4 px-5  hover:bg-[#0000001A] rounded-xl  cursor-pointer">
					<Image src={logOutIcon} alt="logout" />
					<span
						className={
							"ml-4  font-[400] hover:font-[500] text-[16px] leading-[19.09px] group-hover:block select-none"
						}
					>
						Log Out
					</span>
				</div>
			</>
		);
	};

	/** Mobile View */
	const mobileView = () => {
		return (
			<>
				{agentSidebarFields.map((item, index) => (
					<div key={index} className="DesktopScreen:hidden TabletScreen:hidden">
						<div
							key={index}
							className={`flex items-center  py-4 px-5  hover:bg-holmes-primary-blue hover:text-white cursor-pointer ${
								(item.route?.includes(currentRoute) || (currentRoute === 'new-listing' && item.route === 'property-listings'))
									? "bg-holmes-primary-blue text-white font-[500]"
									: "hover:bg-holmes-primary-blue hover:text-white "
							}`}
							onClick={() => routingHandler(item, index)}
						>
							<Image
								className="hover:text-white"
								src={
									(item.route?.includes(currentRoute) || (currentRoute === 'new-listing' && item.route === 'property-listings'))
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
				<div className="my-20 DesktopScreen:hidden TabletScreen:hidden text-red-500 flex items-center py-4 px-5  hover:bg-[#0000001A] rounded-xl cursor-pointer">
					<Image src={logOutIcon} alt="logout" />
					<span
						className={
							"ml-4  font-[400] hover:font-[500] text-[16px] leading-[19.09px] group-hover:block select-none"
						}
					>
						Log Out
					</span>
				</div>
			</>
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

