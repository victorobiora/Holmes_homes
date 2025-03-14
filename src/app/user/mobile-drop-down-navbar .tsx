
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import cardIcon from "@/assets/images/admin/management/blue-card-icon.svg";
import profileIcon from "@/assets/images/admin/management/blue-profile-icon.svg";
import logoutIcon from "@/assets/images/general/blue-log-out-icon.svg";


const MobileDropDownNavBar: React.FC<{
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
			<div className="flex TabletScreen:justify-end justify-center w-full h-screen">
				<div
					className="py-5 rounded-md px-3 TabletScreen:w-[50%] w-[80%] h-[50%] bg-white relative top-5 TabletScreen:right-5 flex flex-col"
					onClick={(event) => {
						event.stopPropagation();
                
					}}
				>
				<div className="flex flex-col gap-7 py-5">
				<div className="flex gap-2 items-center cursor-pointer">
					<Image alt="account" src={profileIcon} />
					<p>My Account</p>
				</div>
				<div className="flex gap-2 items-center cursor-pointer">
					<Image alt="messages" src={profileIcon} />
					<p>Messages</p>
				</div>
				<div className="flex gap-2 items-center cursor-pointer">
					<Image alt="orders" src={cardIcon} />
					<p>Orders</p>
				</div>
				<div className="flex gap-2 items-center cursor-pointer">
					<Image alt="vouchers" src={cardIcon} />
					<p>Voucher</p>
				</div>

				{/* logout */}
				<motion.button className=" bg-[#F6F7F7] items-center shadow-md flex gap-2 justify-center text-holmes-primary-blue border  p-2 rounded-md">
					<Image alt="logout" src={logoutIcon} />
					Logout
				</motion.button>
				<motion.button
						whileHover={{
							scale: 1.05,
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

export default MobileDropDownNavBar
