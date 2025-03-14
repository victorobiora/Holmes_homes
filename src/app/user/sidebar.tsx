import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SideBarFilter from "./guest/guest-sidebar-filter";
import MobileDropDownNavBar from "./mobile-drop-down-navbar ";


export const Sidebar = ({ openMenu, setOpenMenu, activeSection, setActiveSection }) => {
	const router = useRouter();
	const sidebarRef = useRef<HTMLDivElement>(null);



	/** Desktop View */

	const desktopView = () => {
		return (
			<div
				className = {`h-full w-[280px] TabletScreen:hidden MobileScreen:hidden transition-all duration-300 border-r-[1px] border-b-[1px] shadow-md border-[#E4E7EC] bg-white pt-[2rem] pb-32`}
			>
				<SideBarFilter
					remove={() => {
						setOpenMenu(false);
					}}
				/>
			</div>
		);
	};

	/** Tablet and Mobile View */
	const tabletmobileView = () => {
		return (
			<>
				{openMenu && (
					<div
						ref={sidebarRef}
						className="min-h-full  w-full z-[900] absolute bg-transparent DesktopScreen:hidden  transition-all duration-300 border-r-[1px] border-[#E4E7EC]"
					>
						<div className="h-full">
							<MobileDropDownNavBar activeSection={activeSection} setActiveSection={setActiveSection}
								remove={() => {
									setOpenMenu(false);
								}}
							/>
						</div>
						{/* <aside className="mt-[65.43px]"></aside> */}
					</div>
				)}
			</>
		);
	};

	return (
		<>
			{desktopView()}
			{tabletmobileView()}
		</>
	);
};

// className="relative flex justify-between p-[30px] pr-[10px] pl-[20px]"
