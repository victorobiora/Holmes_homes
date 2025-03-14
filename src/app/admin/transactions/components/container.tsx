"use client";

import React, { useState } from "react";
import { Sidebar } from "../../generalcomponents/admin-sidebar";
import TransactionsMainSection from "./main-section";

const Container = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="flex h-screen overflow-hidden">
			<Sidebar openMenu={isOpen} setOpenMenu={setIsOpen} />
			{/* Main content */}
			<div className="flex-1 h-screen overflow-auto">
				<TransactionsMainSection toggleSidebar={toggleSidebar} />
			</div>
		</div>
	);
};

export default Container;

