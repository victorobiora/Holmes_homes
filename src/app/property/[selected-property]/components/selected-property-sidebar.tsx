import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MobileDropDownNavBar from "@/app/user/mobile-drop-down-navbar ";


export const SelectedPropertySidebar = ({ openMenu, setOpenMenu, activeSection, setActiveSection }) => {
	const router = useRouter();
	const sidebarRef = useRef<HTMLDivElement>(null);



	/** Desktop View */

	const desktopView = () => {
		return (
		''
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

