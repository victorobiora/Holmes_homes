import { demoPropertyListings } from "../../admin.dto";
import { useRef, useState, useEffect } from "react";
import { StaticImageData } from "next/image";
import { AnimatePresence } from "framer-motion";
import downIcon from "@/assets/images/general/down-icon-black.svg";
import Image from "next/image";
import SearchIcon from "@/assets/images/general/search-icon.svg";
import Inputs from "@/library/inputs/inputs";
import { motion } from "framer-motion";
import whiteDownloadIcon from "@/assets/images/general/white-download-icon.svg";
import filterIcon from "@/assets/images/general/black-filter-icon.svg";
import { useRouter } from "next/navigation";
import UserManagementAgentTable from "./tables/agent-table";
import UserManagementCustomerTable from "./tables/customer-table";
import UserManagementAffliateTable from "./tables/affliate-table";

const UserManagementTableContainer = () => {
	const [selectedTable, setSelectedTable] = useState("agent");

	return (
		<section>
			<div className="p-4 bg-white shadow-md rounded-md  MobileScreen:mt-4 MobileScreen:relative">
				<div className="flex gap-4">
					{/* agent */}
					<div
						className="min-w-[5rem] flex flex-col items-center cursor-pointer"
						onClick={() => setSelectedTable("agent")}
					>
						<p
							className={`mb-2 font-bold 	${
								selectedTable === "agent"
									? " text-holmes-primary-blue"
									: "text-holmes-border-grey"
							}`}
						>
							Agent
						</p>
						<div
							className={`w-full h-1 rounded-md ${selectedTable === "agent" ? " bg-holmes-primary-blue" : "bg-holmes-border-grey"}`}
						></div>
					</div>

					{/* customer */}
					<div
						className="min-w-[5rem] flex flex-col items-center cursor-pointer"
						onClick={() => setSelectedTable("customer")}
					>
						<p
							className={`mb-2 font-bold 	${
								selectedTable === "customer"
									? " text-holmes-primary-blue"
									: "text-holmes-border-grey"
							}`}
						>
							Customer
						</p>
						<div
							className={`w-full h-1 rounded-md ${selectedTable === "customer" ? " bg-holmes-primary-blue" : "bg-holmes-border-grey"}`}
						></div>
					</div>

					{/* affliate */}
					<div
						className="min-w-[5rem] flex flex-col items-center cursor-pointer"
						onClick={() => setSelectedTable("affliate")}
					>
						<p
							className={`mb-2 font-bold 	${
								selectedTable === "affliate"
									? " text-holmes-primary-blue"
									: "text-holmes-border-grey"
							}`}
						>
							Affliate
						</p>
						<div
							className={`w-full h-1 rounded-md ${selectedTable === "affliate" ? " bg-holmes-primary-blue" : "bg-holmes-border-grey"}`}
						></div>
					</div>
				</div>

				<>
					{selectedTable === "agent" ? (
						<UserManagementAgentTable />
					) : selectedTable === "customer" ? (
						<UserManagementCustomerTable/>
					) : selectedTable === "affliate" ? (
					<UserManagementAffliateTable/>
					) : (
						""
					)}
				</>
			</div>
		</section>
	);
};

export default UserManagementTableContainer;

