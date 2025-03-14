"use client";

import React, { useState } from "react";
import { UserSidebar } from "@/app/user/user-sidebar";
import MessagesContents from "./messages-contents";

/** Messages */
export default function Messages() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="flex h-screen overflow-hidden">
				<UserSidebar openMenu={isOpen} setOpenMenu={setIsOpen} />
			{/* Main content */}
			<div className="flex-1 overflow-auto">
				<MessagesContents toggleSidebar={toggleSidebar} />
			</div>
		</div>
	);
}
