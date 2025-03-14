import ToggleButton from "@/library/buttons/toggle-button";
import { SubscriptionTierItem } from "../../../types.dto";
import editIcon from "@/assets/images/general/black-edit-icon.svg";
import deleteIcon from "@/assets/images/general/red-delete-icon.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SubscriptionItem: React.FC<{ item: SubscriptionTierItem,
	setModal: React.Dispatch<React.SetStateAction<{
		showCard: boolean,
		title: string,
	}>>
 }> = ({
	item, setModal
}) => {
	const getStatusStyles = (status) => {
		switch (status) {
			case "Active":
				return "bg-green-100 text-[#00D800]";
			case "Inactive":
				return "bg-red-100 text-red-700";
			case "Disabled":
				return "bg-orange-100 text-orange-700";
			case "Processing":
				return "bg-gray-100 text-gray-700";
			default:
				return "";
		}
	};

	return (
		<div className="DesktopScreen:w-[31%] w-full p-3 shadow-lg rounded-md">
			<div
				className={`${item.plan === "Basic" ? "bg-[#FBF6F3] text-holmes-primary-dark-brown" : item.plan === "Pro" ? "text-green-600 bg-[#F2FDF2]" : "text-holmes-primary-blue bg-holmes-background-grey"} px-2 py-3 rounded-md`}
			>
				{item.plan}
			</div>

			<div className="py-4 my-2">
				<h2 className=" font-semibold">{item.title}</h2>
				<div className="text-holmes-font-grey">{item.description}</div>
			</div>

			<div className="my-2 flex justify-between">
				<div className="">
					<h2 className=" font-semibold">N{item.monthlyPrice}</h2>
					<div className="text-holmes-font-grey">Monthly</div>
				</div>
				<div className="">
					<h2 className=" font-semibold">N{item.yearlyPrice}</h2>
					<div className="text-holmes-font-grey">Yearly</div>
				</div>
			</div>

			<div className="my-2 flex justify-between items-center border-t border-b py-2 border-[#ECEEF0]">
				{/* status */}
				<div className="p-4 MobileScreen:p-2">
					<span
						className={`px-3 py-2 rounded-full  font-medium ${getStatusStyles(
							item.status,
						)}`}
					>
						{item.status}
					</span>
				</div>
				<ToggleButton
					onToggle={() => {
						("");
					}}
					isToggled={item.status === "Active" ? true : false}
				/>
			</div>
			<div className="my-2 flex justify-between items-center py-2 ">
				{/* Edit and delete */}
				<motion.button
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.5 },
					}}
					whileTap={{ scale: 0.9 }}
					className={
						"p-2 px-4 w-[47%] rounded-md border-black border text-sm flex justify-center items-center gap-3"
					}
					onClick={(event) => {
						event.preventDefault();
						if(item.plan === 'Basic'){
							setModal({
								showCard: true,
								title: 'basic-information'
							})
						}
					}}
				>
					<div>
						<Image alt="edit" src={editIcon} />
					</div>
					Edit
				</motion.button>
				<motion.button
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.5 },
					}}
					whileTap={{ scale: 0.9 }}
					className={
						"p-2 px-4 w-[47%] rounded-md border-red-300 text-red-500 border text-sm flex justify-center items-center gap-3"
					}
					onClick={(event) => {
						event.preventDefault();
					}}
				>
					<div>
						<Image alt="delete" src={deleteIcon} />
					</div>
					Delete
				</motion.button>
			</div>
		</div>
	);
};

export default SubscriptionItem;

