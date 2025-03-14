import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import cardIcon from "@/assets/images/admin/management/blue-card-icon.svg";
import profileIcon from "@/assets/images/admin/management/blue-profile-icon.svg";
import logoutIcon from "@/assets/images/general/blue-log-out-icon.svg";

const NavigationModal = () => {
	const router = useRouter();
	return (
		<>
			<motion.section
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.9 }}
				transition={{ duration: 0.2 }}
				className="flex flex-col gap-5 bg-white overflow-y-scroll min-w-[20rem] right-0 rounded-md  p-6 absolute top-[200%] z-[1600] text-holmes-primary-blue"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div
					className="flex gap-2 items-center cursor-pointer"
					onClick={() => {
						router.push("/account");
					}}
				>
					<Image alt="account" src={profileIcon} />
					<p>My Account</p>
				</div>
				<div className="flex gap-2 items-center cursor-pointer" onClick={() => {
						router.push("/messages");
					}}>
					<Image alt="messages" src={profileIcon} />
					<p>Messages</p>
				</div>
				<div className="flex gap-2 items-center cursor-pointer" onClick={() => {
						router.push("/orders");
					}}>
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
			</motion.section>
		</>
	);
};

export default NavigationModal;

