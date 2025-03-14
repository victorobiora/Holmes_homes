"use client";

import React, { useState } from "react";
import { Sidebar } from "@/app/admin/generalcomponents/admin-sidebar";
import PropertyListingItemMainSection from "./main-section";
import { PropertyItemType } from "@/app/types";

const Container:React.FC<{
	fetchedData: PropertyItemType[]
}> = () => {

	// write logic here that updates the redux state and pushes the data there

	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="flex h-screen overflow-hidden">
			<Sidebar openMenu={isOpen} setOpenMenu={setIsOpen} />
			{/* Main content */}
			<div className="flex-1 h-screen overflow-auto">
				<PropertyListingItemMainSection toggleSidebar={toggleSidebar} />
			</div>
		</div>
	);
};

export default Container;

