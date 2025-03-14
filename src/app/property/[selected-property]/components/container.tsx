"use client";

import React, { useState } from "react";
import { isSignedIn } from "@/utils/auth";
import SelectedPropertyMainSection from "./main-section";
import { SelectedPropertyResponseType } from "../property-types";
import { SelectedPropertySidebar } from "./selected-property-sidebar";
import { GuestSelectedPropertySidebar } from "./guest-selected-property-sidebar";

const Container:React.FC<{
	data: SelectedPropertyResponseType;
}> = ({data}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [guestActiveSection, setGuestActiveSection] = useState("home");
	const [activeSection, setActiveSection] = useState("home");

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="flex h-screen overflow-hidden">
			{isSignedIn ? (
				<SelectedPropertySidebar
					openMenu={isOpen}
					setOpenMenu={setIsOpen}
					activeSection={activeSection}
					setActiveSection={setActiveSection}
				/>
			) : (
				<GuestSelectedPropertySidebar
					guestActiveSection={guestActiveSection}
					setGuestActiveSection={setGuestActiveSection}
					openMenu={isOpen}
					setOpenMenu={setIsOpen}
				/>
			)}
			{/* Main content */}
			<div className="flex-1 h-screen overflow-auto">
                <SelectedPropertyMainSection  data={data} toggleSideBar={toggleSidebar} />
            </div>
		</div>
	);
};

export default Container;

