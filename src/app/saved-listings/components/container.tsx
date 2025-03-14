"use client";

import React, { useState } from "react";
import { UserSidebar } from "@/app/user/user-sidebar";
import SavedListingsMainSection from "./main-section";
import Footer from "@/app/user/welcome/footer/footer";

const Container = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<div className="flex h-screen overflow-hidden">
				<UserSidebar openMenu={isOpen} setOpenMenu={setIsOpen} />
				{/* Main content */}
				<div className="flex-1 h-screen overflow-auto">
					<SavedListingsMainSection toggleSidebar={toggleSidebar} />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Container;

