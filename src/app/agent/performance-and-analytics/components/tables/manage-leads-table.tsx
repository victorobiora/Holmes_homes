import { demoLeadsManagementDetails } from "@/app/agent/agent.dto";
import { useRef, useState, useEffect } from "react";
import { StaticImageData } from "next/image";
import { BlueBackdrop } from "@/library/modals/blue-backdrop";
import { AnimatePresence } from "framer-motion";
import downIcon from "@/assets/images/general/down-icon-black.svg";
import Image from "next/image";
import SearchIcon from "@/assets/images/general/search-icon.svg";
import Inputs from "@/library/inputs/inputs";
import { motion } from "framer-motion";
import whiteDownloadIcon from "@/assets/images/general/white-download-icon.svg";
import filterIcon from "@/assets/images/general/black-filter-icon.svg";
import { useRouter } from "next/navigation";
import { LeadManagementDetailArrayType } from "@/app/agent/types.dto";
import ManageLeadsFilterCard from "./manage-leads-filter-card";

function paginate<T>(data: T[]): T[][] {
	const itemsPerPage = 5;
	const result: T[][] = [];

	for (let i = 0; i < data.length; i += itemsPerPage) {
		const page = data.slice(i, i + itemsPerPage);
		result.push(page);
	}

	return result;
}

const paginatedProperties = paginate(demoLeadsManagementDetails);

console.log(paginatedProperties);

const PerformanceAndAnalyticsManageLeadsTable = () => {
	const [showAddFiltersModal, setshowAddFiltersModal] = useState(false);
	const router = useRouter();

	const [periodChosen, setPeriodChosen] = useState<string | null>("This Month");
	const [viewPeriodChosenFields, setViewPeriodChosenFields] = useState(false);
	const periodChosenRef = useRef<HTMLDivElement | null>(null);

	const [propertiesShowing, setPropertiesShowing] = useState<{
		index: number;
		data: LeadManagementDetailArrayType;
	}>({ index: 0, data: paginatedProperties[0] });

	const [currentPage, setCurrentPage] = useState(1);

	const totalPages =
		paginatedProperties.length <= 3 ? paginatedProperties.length : 3;

	const handlePrevious = () => {
		if (currentPage > 1) {
			setPropertiesShowing((prevState) => {
				const prevIndex = paginatedProperties.findIndex(
					(el, index) => prevState.index === index,
				);
				return {
					index: prevIndex - 1,
					data: paginatedProperties[prevIndex - 1],
				};
			});
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNext = () => {
		if (currentPage < totalPages) {
			setPropertiesShowing((prevState) => {
				console.log(prevState);
				const prevIndex = paginatedProperties.findIndex(
					(el, index) => prevState.index === index,
				);
				return {
					index: prevIndex + 1,
					data: paginatedProperties[prevIndex + 1],
				};
			});
			setCurrentPage(currentPage + 1);
		}
	};

	const removeModal = () => {
		setshowAddFiltersModal(false);
	};

	// Handle clicks outside periodChosen fields
	useEffect(() => {
		if(typeof window !== 'undefined'){
			const handleClickOutsidePeriodChosen = (event: MouseEvent) =>  {
			console.log(periodChosenRef.current?.contains(event.target as Node));
			if (
				viewPeriodChosenFields &&
				periodChosenRef.current &&
				!periodChosenRef.current.contains(event.target as Node)
			) {
				setViewPeriodChosenFields(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutsidePeriodChosen);

		return () => {
			document.removeEventListener("mousedown", handleClickOutsidePeriodChosen);
		};		
		}

	}, [viewPeriodChosenFields]);


	const desktopView = () => {
		return (
			<section className="TabletScreen:hidden MobileScreen:hidden">
				<div className="px-2 py-4 bg-white flex justify-between items-center">
					<h2 className="text-xl font-semibold">Leads</h2>
					<div className="flex gap-[2rem] items-center">
						{/* choose Period */}
						<div className=" my-3 relative" ref={periodChosenRef}>
							<div>
								<div
									className={`px-2 cursor-pointer bg-white border border-black rounded-md w-full py-2 flex justify-between items-center`}
									onClick={() => {
										setViewPeriodChosenFields((prevState) => !prevState);
									}}
								>
									<div className="flex items-end mx-1">
										<Image src={downIcon} alt="down-icon" />
									</div>
									{periodChosen}
								</div>
							</div>
							<AnimatePresence>
								{viewPeriodChosenFields && (
									<motion.div
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.9 }}
										transition={{ duration: 0.2 }}
										className="bg-holmes-background-light-grey w-full  absolute top-[120%] flex flex-col text-md z-[900]"
									>
										{["This week", "This month", `This Year`].map(
											(item, index) => {
												return (
													<div
														key={index}
														className={`py-2 px-3 text-center  hover:bg-white hover:border-black hover:border-[0.2px] hover:rounded-sm cursor-pointer whitespace-nowrap ${periodChosen === item ? "bg-white border-black border rounded-sm" : ""}`}
														onClick={() => {
															setPeriodChosen(item);
															setViewPeriodChosenFields(false);
														}}
													>
														{item}
													</div>
												);
											},
										)}
									</motion.div>
								)}
							</AnimatePresence>
						</div>

						<motion.button
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.5 },
							}}
							whileTap={{ scale: 0.9 }}
							className={
								"p-2 h-auto rounded-md text-white bg-holmes-primary-dark-brown flex gap-[0.3rem] items-center"
							}
							onClick={(event) => {
								event.preventDefault();
							}}
						>
							<span className="mx-1">
								{" "}
								<Image alt="export" src={whiteDownloadIcon} />{" "}
							</span>{" "}
							Export
						</motion.button>

						<div className="w-[15rem] h-[44px] flex flex-row rounded-[10px] border-[1px]">
							<Inputs
								className="w-full p-2 text-sm border-none rounded-[100px] focus:outline-none focus:ring-0"
								Name={"search"}
								inputType={"text"}
								placeholder="Search Properties"
							></Inputs>
							<Image
								className="my-[13px] mx-[24px] cursor-pointer"
								src={SearchIcon}
								alt={"Search Icon"}
							></Image>
						</div>
						<div className="relative">
							<motion.button
								whileHover={{
									scale: 1.1,
									transition: { duration: 0.5 },
								}}
								whileTap={{ scale: 0.9 }}
								className={
									"py-2 px-3 h-auto rounded-md border-black border flex gap-[0.3rem] items-center"
								}
								onClick={(event) => {
									event.preventDefault();
									setshowAddFiltersModal(true);
								}}
							>
								<span className="mx-1">
									{" "}
									<Image alt="filter" src={filterIcon} />{" "}
								</span>{" "}
								Filters
							</motion.button>
							{showAddFiltersModal && (
								<ManageLeadsFilterCard removeModal={removeModal} />
							)}
						</div>
					</div>
				</div>
				{/* table */}
				<div className="overflow-x-scroll">
					<table className="w-full border-collapse overflow-x-scroll">
						<thead className="text-left bg-gray-100 text-holmes-font-grey">
							<tr>
								<th className="p-4">
									<input type="checkbox" className="form-checkbox" />
								</th>
								<th className="p-4">Date</th>
								<th className="p-4">Client Name</th>
								<th className="p-4">Client Phone</th>
								<th className="p-4">Medium</th>
								<th className="p-4">Source</th>
								<th className="p-4">Property ID</th>
							</tr>
						</thead>
						<tbody className="bg-white">
							{propertiesShowing.data.map((listing, index) => (
								<tr
									key={index}
									className="border-t hover:bg-[#0000001A] text-gray-500 cursor-pointer"
									onClick={() => {
										router.push(
											`/admin/user-management/affliate/${listing.id}`,
										);
									}}
								>
									<td className="p-4">
										<input type="checkbox" className="form-checkbox" />
									</td>
									<td className="p-4 min-w-[12rem]">{listing.date}</td>
									<td className="p-4 pt-6 flex items-center gap-4 min-w-[15rem]">
										<Image
											src={listing.image}
											alt=""
											className="w-8 h-8 rounded-full object-cover"
										/>
										<div>
											<h3 className="font-[500] text-black">
												{listing.client_name}
											</h3>
										</div>
									</td>
									<td className=" text-gray-500 min-w-[15rem] px-3">
										{listing.client_phone_number}
									</td>
									<td className="text-lg min-w-[12rem]">{listing.medium}</td>
									<td className="p-4 min-w-[12rem]">{listing.source}</td>
									<td className="p-4 flex items-center gap-2">
										{listing.id}
										<button className="p-2 bg-gray-100 hover:bg-gray-200 rounded">
											👁️
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* pagination */}
				<div className="bg-white flex justify-between px-2">
					<div>
						Showing entries <span className="font-bold">1-5</span> of{" "}
						<span className="font-bold">5</span>
					</div>

					<div className="flex items-center border rounded-md">
						<button
							onClick={handlePrevious}
							className={`px-3 py-1 rounded-md ${
								currentPage === 1
									? "text-gray-400 cursor-not-allowed"
									: "text-gray-600 hover:bg-gray-100"
							}`}
							disabled={currentPage === 1}
						>
							Previous
						</button>
						{Array.from({ length: totalPages }, (_, index) => {
							const pageNumber = index + 1;
							return (
								<button
									key={pageNumber}
									onClick={() => setCurrentPage(pageNumber)}
									className={`px-3 py-1 ${
										currentPage === pageNumber
											? "bg-gray-800 text-white"
											: "text-gray-600 hover:bg-gray-100"
									}`}
								>
									{pageNumber}
								</button>
							);
						})}
						<button
							onClick={handleNext}
							className={`px-3 py-1 rounded-md ${
								currentPage === totalPages
									? "text-gray-400 cursor-not-allowed"
									: "text-gray-600 hover:bg-gray-100"
							}`}
							disabled={currentPage === totalPages}
						>
							Next
						</button>
					</div>
				</div>
			</section>
		);
	};
	const tabletView = () => {
		return (
			<section className="MobileScreen:hidden DesktopScreen:hidden">
				<div className="px-2 py-4 bg-white flex justify-between items-center">
					<h2 className="text-xl font-semibold">Leads</h2>
					<div className="flex gap-[0.5rem] items-center">
						{/* choose Period
						<div className=" my-3 relative" ref={periodChosenRef}>
							<div>
								<div
									className={`px-2 cursor-pointer bg-white border border-black rounded-md w-full py-2 flex justify-between items-center`}
									onClick={() => {
										setViewPeriodChosenFields((prevState) => !prevState);
									}}
								>
									<div className="flex items-end mx-1">
										<Image src={downIcon} alt="down-icon" />
									</div>
									{periodChosen}
								</div>
							</div>
							<AnimatePresence>
								{viewPeriodChosenFields && (
									<motion.div
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.9 }}
										transition={{ duration: 0.2 }}
										className="bg-holmes-background-light-grey w-full  absolute top-[120%] flex flex-col text-md z-[900]"
									>
										{["This week", "This month", `This Year`].map(
											(item, index) => {
												return (
													<div
														key={index}
														className={`py-2 px-3 text-center  hover:bg-white hover:border-black hover:border-[0.2px] hover:rounded-sm cursor-pointer whitespace-nowrap ${periodChosen === item ? "bg-white border-black border rounded-sm" : ""}`}
														onClick={() => {
															setPeriodChosen(item);
															setViewPeriodChosenFields(false);
														}}
													>
														{item}
													</div>
												);
											},
										)}
									</motion.div>
								)}
							</AnimatePresence>
						</div> */}

						<motion.button
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.5 },
							}}
							whileTap={{ scale: 0.9 }}
							className={
								"p-2 h-auto rounded-md text-white bg-holmes-primary-dark-brown flex gap-[0.3rem] items-center"
							}
							onClick={(event) => {
								event.preventDefault();
							}}
						>
							<span className="mx-1">
								{" "}
								<Image alt="export" src={whiteDownloadIcon} />{" "}
							</span>{" "}
							Export
						</motion.button>

						<div className="w-[12rem] h-[44px] flex flex-row rounded-[10px] border-[1px]">
							<Inputs
								className="w-full p-2 text-sm border-none rounded-[100px] focus:outline-none focus:ring-0"
								Name={"search"}
								inputType={"text"}
								placeholder="Search Properties"
							></Inputs>
							<Image
								className="my-[13px] mx-[24px] cursor-pointer"
								src={SearchIcon}
								alt={"Search Icon"}
							></Image>
						</div>
						<div className="relative">
							<motion.button
								whileHover={{
									scale: 1.1,
									transition: { duration: 0.5 },
								}}
								whileTap={{ scale: 0.9 }}
								className={
									"py-2 px-3 h-auto rounded-md border-black border flex gap-[0.3rem] items-center"
								}
								onClick={(event) => {
									event.preventDefault();
									setshowAddFiltersModal(true);
								}}
							>
								<span className="mx-1">
									{" "}
									<Image alt="filter" src={filterIcon} />{" "}
								</span>{" "}
								Filters
							</motion.button>
							{showAddFiltersModal && (
								<ManageLeadsFilterCard removeModal={removeModal} />
							)}
						</div>
					</div>
				</div>
				<div className="overflow-x-scroll">
					<table className="w-full border-collapse overflow-x-scroll">
						<thead className="text-left bg-gray-100 text-holmes-font-grey">
							<tr>
								<th className="p-4">
									<input type="checkbox" className="form-checkbox" />
								</th>
								<th className="p-4">Date</th>
								<th className="p-4">Client Name</th>
								<th className="p-4">Client Phone</th>
								<th className="p-4">Medium</th>
								<th className="p-4">Source</th>
								<th className="p-4">Property ID</th>
							</tr>
						</thead>
						<tbody className="bg-white">
							{propertiesShowing.data.map((item, index) => (
								<tr
									key={index}
									className="border-t hover:bg-[#0000001A] text-gray-500 cursor-pointer"
									onClick={() => {
										router.push(`/admin/user-management/agent/${item.id}`);
									}}
								>
									<td className="p-4">
										<input type="checkbox" className="form-checkbox" />
									</td>
									<td className="p-4 min-w-[12rem]">{item.date}</td>
									<td className="p-4 flex items-center gap-4 min-w-[12rem]">
										<Image
											src={item.image}
											alt=""
											className="w-10 h-10 rounded-full object-cover"
										/>
										<div>
											<h3 className="font-[500] text-black w-[10rem]">
												{item.client_name}
											</h3>
										</div>
									</td>
									<td className="p-4 min-w-[12rem] text-gray-500">
										{item.client_phone_number}
									</td>
									<td className="p-4 min-w-[12rem] text-lg">{item.medium}</td>
									<td className="p-4 min-w-[12rem]">{item.source}</td>
									<td className="p-4 min-w-[12rem] ">
										{item.id}
										<button className="p-2 bg-gray-100 hover:bg-gray-200 rounded mx-3">
											👁️
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* pagination */}
				<div className="bg-white flex justify-between px-2">
					<div>
						Showing entries <span className="font-bold">1-5</span> of{" "}
						<span className="font-bold">5</span>
					</div>

					<div className="flex items-center border rounded-md">
						<button
							onClick={handlePrevious}
							className={`px-3 py-1 rounded-md ${
								currentPage === 1
									? "text-gray-400 cursor-not-allowed"
									: "text-gray-600 hover:bg-gray-100"
							}`}
							disabled={currentPage === 1}
						>
							Previous
						</button>
						{Array.from({ length: totalPages }, (_, index) => {
							const pageNumber = index + 1;
							return (
								<button
									key={pageNumber}
									onClick={() => setCurrentPage(pageNumber)}
									className={`px-3 py-1 ${
										currentPage === pageNumber
											? "bg-gray-800 text-white"
											: "text-gray-600 hover:bg-gray-100"
									}`}
								>
									{pageNumber}
								</button>
							);
						})}
						<button
							onClick={handleNext}
							className={`px-3 py-1 rounded-md ${
								currentPage === totalPages
									? "text-gray-400 cursor-not-allowed"
									: "text-gray-600 hover:bg-gray-100"
							}`}
							disabled={currentPage === totalPages}
						>
							Next
						</button>
					</div>
				</div>
			</section>
		);
	};
	const mobileView = () => {
		return (
			<section className="DesktopScreen:hidden TabletScreen:hidden">
				<div className="px-2 py-4 bg-white flex justify-between items-center">
					<h2 className="text-xl font-semibold ">Leads</h2>
					<div className="flex gap-[2rem] items-center">
					<div className="relative">
							<motion.button
								whileHover={{
									scale: 1.1,
									transition: { duration: 0.5 },
								}}
								whileTap={{ scale: 0.9 }}
								className={
									"py-2 px-3 h-auto rounded-md border-black border flex gap-[0.3rem] items-center"
								}
								onClick={(event) => {
									event.preventDefault();
									setshowAddFiltersModal(true);
								}}
							>
								<span className="mx-1">
									{" "}
									<Image alt="filter" src={filterIcon} />{" "}
								</span>{" "}
								Filters
							</motion.button>
							{showAddFiltersModal && (
								<ManageLeadsFilterCard removeModal={removeModal} />
							)}
						</div>
					</div>
				</div>
				<div className="overflow-x-scroll">
					<table className="w-full border-collapse overflow-x-scroll">
						<thead className="text-left bg-gray-100 text-holmes-font-grey">
							<tr>
								<th className="p-2">
									<input type="checkbox" className="form-checkbox" />
								</th>
								<th className="p-4">Date</th>
								<th className="p-4">Client Name</th>
								<th className="p-4">Client Phone</th>
								<th className="p-4">Medium</th>
								<th className="p-4">Source</th>
								<th className="p-4">Property ID</th>
							</tr>
						</thead>
						<tbody className="bg-white">
							{propertiesShowing.data.map((listing, index) => (
								<tr
									key={index}
									className="border-t hover:bg-[#0000001A] cursor-pointer"
									onClick={() => {
										router.push(
											`/admin/user-management/affliate/${listing.id}`,
										);
									}}
								>
									<td className="p-2 ">
										<input type="checkbox" className="form-checkbox" />
									</td>
									<td className="p-2 min-w-[10rem]">{listing.date}</td>
									<td className="p-2 pt-4  flex items-center gap-2 w-[12rem]">
										<Image
											src={listing.image}
											alt=""
											className="w-8 h-8 rounded-full object-cover"
										/>
										<div>
											<h3 className="font-[500]">
												{listing.client_name}
											</h3>
										</div>
									</td>
									<td className=" text-gray-500 min-w-[12rem] p-2">
										{listing.client_phone_number}
									</td>
									<td className="p-2 min-w-[12rem]">{listing.medium}</td>
									<td className="p-2 min-w-[12rem]">{listing.source}</td>
									<td className="p-2 flex items-center gap-2 min-w-[12rem]">
										{listing.id}
										<button className="p-1 bg-gray-100 hover:bg-gray-200 rounded">
											👁️
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				{/* pagination */}
				<div className="bg-white flex justify-between items-center px w-full text-sm">
					<div className="mr-1">
						Showing entries <span className="font-bold">1-5</span> of{" "}
						<span className="font-bold">5</span>
					</div>

					<div className="flex items-center py-1 border rounded-md">
						<button
							onClick={handlePrevious}
							className={`px-1 py-1 rounded-md ${
								currentPage === 1
									? "text-gray-400 cursor-not-allowed"
									: "text-gray-600 hover:bg-gray-100"
							}`}
							disabled={currentPage === 1}
						>
							Previous
						</button>
						{Array.from({ length: totalPages }, (_, index) => {
							const pageNumber = index + 1;
							return (
								<button
									key={pageNumber}
									onClick={() => setCurrentPage(pageNumber)}
									className={`px-2 py-1 ${
										currentPage === pageNumber
											? "bg-gray-800 text-white"
											: "text-gray-600 hover:bg-gray-100"
									}`}
								>
									{pageNumber}
								</button>
							);
						})}
						<button
							onClick={handleNext}
							className={`px-3 py-1 rounded-md ${
								currentPage === totalPages
									? "text-gray-400 cursor-not-allowed"
									: "text-gray-600 hover:bg-gray-100"
							}`}
							disabled={currentPage === totalPages}
						>
							Next
						</button>
					</div>
				</div>
			</section>
		);
	};

	return (
		<section>
				{showAddFiltersModal && (
				<BlueBackdrop onClick={removeModal}></BlueBackdrop>
			)}
			{desktopView()}
			{tabletView()}
			{mobileView()}
		</section>
	);
};

export default PerformanceAndAnalyticsManageLeadsTable;

