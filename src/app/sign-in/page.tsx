'use client'

import SignInForm from "./components/sign-in-form";
import { useState, useRef, useEffect } from "react";
import NavBar from "@/app/user/guest/guest-navbar";
import MobileDropDownNavBar from "../user/guest/guest-mobile-drop-down-navbar";

const Page = () => {
	const [activeSection, setActiveSection] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const sidebarRef = useRef<HTMLDivElement>(null);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};


	useEffect(() => {
		if (typeof window !== "undefined") {
			if (isOpen) {
		  document.body.style.overflow = "hidden"; 
		} else {
		  document.body.style.overflow = ""; 
		}
	
		// Cleanup when component is unmounted
		return () => {
		  document.body.style.overflow = "";
		};	
		}
	
	  }, [isOpen]);


	return (
		<section className="relative">
			<div className="sticky top-0 z-[1000] shadow-md">
				<NavBar
					setActiveSection={setActiveSection}
					toggleSidebar={toggleSidebar}
					activeSection={activeSection}
				/>
			</div>
			<>
				{isOpen && (
					<div
						ref={sidebarRef}
						className="min-h-full  w-full z-[900] absolute bg-transparent DesktopScreen:hidden  transition-all duration-300 border-r-[1px] border-[#E4E7EC]"
					>
						<div className="h-full">
							<MobileDropDownNavBar
								activeSection={activeSection}
								setActiveSection={setActiveSection}
								remove={() => {
									setIsOpen(false);
								}}
							/>
						</div>
						{/* <aside className="mt-[65.43px]"></aside> */}
					</div>
				)}
			</>
			<SignInForm />
		</section>
	);
};


export default Page;