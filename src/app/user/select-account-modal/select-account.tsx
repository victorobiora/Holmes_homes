"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import holmesIcon from "@/assets/images/general/holmes-logo.png";
import { selectAccountData } from "./select-account.dto";
import { motion } from "framer-motion";
import { handleSignupRoute } from "../helpers";


const SelectAccountComponent: React.FC<{
	setAccountType: React.Dispatch<React.SetStateAction<null | string>>;
}> = ({ setAccountType }) => {
	const Router = useRouter();
	const AccountData = selectAccountData;


	return (
		<div className="flex flex-col items-center py-20 w-screen h-screen">
			<div className="w-14 h-14 my-4">
				<Image src={holmesIcon} alt="Home Icon" className="w-full h-full" />
			</div>

			<h1 className="text-3xl my-2"> Choose Your Profile Type</h1>
			<p className="text-sm text-holmes-font-grey">
				How are you planning to use holmes?
			</p>
			{/* Choose your type of account */}
			<div>
				<div className="flex justify-between mt-10">
					{AccountData.map((account, index) => {
						return (
							<motion.div
								key={index}
								className="border bg-white shadow-xl mx-2 py-2 px-3 mt-5 flex flex-col items-center justify-between w-1/3 rounded-md"
							>
								<div className="w-14 h-14 my-4">
									<Image
										src={account.icon}
										alt="Home Icon"
										className="w-full h-full"
									/>
								</div>
								<h1 className="my-3 text-xl"> {account.name}</h1>
								<p className="text-center">{account.text}</p>
								<motion.button
									whileHover={{
										scale: 1.1,
										transition: { duration: 0.5 },
									}}
									whileTap={{ scale: 0.9 }}
									className={`px-4 py-2 my-4 rounded-md text-white ${account.name === "User" ? "bg-[#435769]" : account.name === "Vendor/Agent" ? "bg-[#AB5517]" : "bg-[#000000]"}`}
									onClick={() => {
										handleSignupRoute(account.profileType);
										setAccountType(account.profileType)
									}}
								>
									Choose {account.name}
								</motion.button>
							</motion.div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SelectAccountComponent;
