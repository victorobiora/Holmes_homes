import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";


const GuestMobileDropDownNavBar: React.FC<{
	remove: () => void;	
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
	activeSection: string;
}> = ({ remove, activeSection, setActiveSection }) => {

   
	const router = useRouter();


	return (
		<section
			className="top-0 left-0 h-full w-full bg-[#43576980] DesktopScreen:hidden"
			onClick={(event) => {
				event.stopPropagation();
				remove();
			}}
		>
			<div className="flex justify-center w-full h-screen">
				<div
					className="py-5 rounded-md px-3 w-[80%] h-[70%] bg-white  relative top-5 flex flex-col"
					onClick={(event) => {
						event.stopPropagation();
                
					}}
				>
				<div className="flex flex-col items-end gap-5">
					<div
						className={`mx-3 cursor-pointer ${activeSection === "home" ? "text-black border-b-4 border-black " : "text-holmes-font-light-grey"}`}
						onClick={() => {
							setActiveSection("home");
							router.push('/')
                            remove();
						}}
					>
						Home
					</div>

					<div
						className={`mx-3 cursor-pointer ${activeSection === "about-us" ? "text-black border-b-4 border-black " : "text-holmes-font-light-grey"}`}
						onClick={() => {
							setActiveSection("about-us");
                            remove();
						}}
					>
						About Us
					</div>
					<div
						className={`mx-3 cursor-pointer ${activeSection === "news" ? "text-black border-b-4 border-black " : "text-holmes-font-light-grey"}`}
						onClick={() => {
							setActiveSection("news");
                            remove();
						}}
					>
						News
					</div>
					<div
						className={`mx-3 cursor-pointer ${activeSection === "contact" ? "text-black border-b-4 border-black " : "text-holmes-font-light-grey"}`}
						onClick={() => {
							setActiveSection("contact");
                            remove();
						}}
					>
						Contact
					</div>
				</div>

				{/* Sign up/ Sign In */}
				<div className="flex flex-col items-end gap-6 my-10">
					<motion.button
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						className={`w-1/2 px-4 py-2 rounded-md text-[#435769] bg-holmes-background-light-grey shadow-md`}
						onClick={(event) => {
							event.preventDefault();
							router.push("/sign-in");
						}}
					>
						Sign In
					</motion.button>
					<motion.button
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						className={`w-1/2 px-2 py-2 rounded-md text-white bg-holmes-primary-blue `}
						onClick={(event) => {
							event.preventDefault();
							router.push("/sign-up");
						}}
					>
						Sign Up
					</motion.button>
					<motion.button
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						className={`px-4 py-2 mx-4 ml-2 rounded-md text-[#435769] bg-holmes-background-light-grey shadow-md`}
						onClick={(event) => {
							event.preventDefault();
							router.push("/admin/dashboard");
						}}
					>
						Go to Admin
					</motion.button>
				</div>

                </div>
			</div>
		</section>
	);
};

export default GuestMobileDropDownNavBar;
