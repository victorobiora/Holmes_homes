
import { demoTransactionsDetails } from "@/app/admin/admin.dto";
import { useRef, useState, useEffect } from "react";
import { StaticImageData } from "next/image";
import { AnimatePresence } from "framer-motion";
import MastercardIcon from "@/assets/images/general/mastercard-icon.svg";
import VisaIcon from "@/assets/images/general/visa-icon.svg";
import PaypalIcon from "@/assets/images/general/paypal-icon.svg";
import downIcon from "@/assets/images/general/down-icon-black.svg";
import Image from "next/image";
import SearchIcon from "@/assets/images/general/search-icon.svg";
import Inputs from "@/library/inputs/inputs";
import { motion } from "framer-motion";
import whiteDownloadIcon from "@/assets/images/general/white-download-icon.svg";
import filterIcon from "@/assets/images/general/black-filter-icon.svg";
import { useRouter } from "next/navigation";
import { TransactionsArray, userManagementArray } from "@/app/admin/types.dto";

function paginate<T>(data: T[]): T[][] {
	const itemsPerPage = 5;
	const result: T[][] = [];

	for (let i = 0; i < data.length; i += itemsPerPage) {
		const page = data.slice(i, i + itemsPerPage);
		result.push(page);
	}

	return result;
}

const paginatedProperties = paginate(demoTransactionsDetails);

console.log(paginatedProperties);

const TransactionsTable = () => {
	const router = useRouter();

	const [periodChosen, setPeriodChosen] = useState<string | null>("This Month");
	const [viewPeriodChosenFields, setViewPeriodChosenFields] = useState(false);
	const periodChosenRef = useRef<HTMLDivElement | null>(null);

	const [transactionsShowing, setTransactionsShowing] = useState<{
		index: number;
		data: TransactionsArray;
	}>({ index: 0, data: paginatedProperties[0] });

	const [currentPage, setCurrentPage] = useState(1);

	const getCardIcon = (cardType: string): StaticImageData | string => {
		if (cardType === "Visa") {
			return VisaIcon;
		} else if (cardType === "Mastercard") {
			return MastercardIcon;
		} else if (cardType === "Paypal") {
			return PaypalIcon;
		} else {
			return "";
		}
	};

	const totalPages =
		paginatedProperties.length <= 3 ? paginatedProperties.length : 3;

	const handlePrevious = () => {
		if (currentPage > 1) {
			setTransactionsShowing((prevState) => {
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
			setTransactionsShowing((prevState) => {
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

	// Handle clicks outside periodChosen fields
	useEffect(() => {
		if(typeof window !== 'undefined'){
			const handleClickOutsidePeriodChosen = (event: MouseEvent) => {
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

	const getStatusStyles = (status) => {
		switch (status) {
			case "Completed":
				return "bg-green-100 text-[#00D800]";
			case "Canceled":
				return "bg-red-100 text-red-700";
			case "Pending":
				return "bg-orange-100 text-orange-700";
			case "processing":
				return "bg-gray-100 text-gray-700";
			default:
				return "";
		}
	};

	const desktopView = () => {
		return (
			<section className="TabletScreen:hidden MobileScreen:hidden shadow-xl py-3 flex-1  bg-white ">
				<div className="px-4 py-4 flex justify-between items-center w-full ">
					<h2 className="text-xl font-semibold">All Transactions</h2>
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

						<div className="w-[20rem] h-[44px] flex flex-row rounded-[10px] border-[1px]">
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
							}}
						>
							<span className="mx-1">
								{" "}
								<Image alt="filter" src={filterIcon} />{" "}
							</span>{" "}
							Filters
						</motion.button>
					</div>
				</div>
<div className="overflow-x-scroll">
	<table className="w-full border-collapse ">
					<thead className="text-left bg-gray-100 text-holmes-font-grey">
						<tr>
							<th className="p-4">
								<input type="checkbox" className="form-checkbox" />
							</th>
							<th className="p-4">Transactions ID</th>
							<th className="p-4">Customer ID</th>
							<th className="p-4">Date</th>
							<th className="p-4">Amount</th>
							<th className="p-4">Payment Method</th>
							<th className="p-4">Invested Property</th>
							<th className="p-4">Status</th>
						</tr>
					</thead>
					<tbody className="bg-white">
						{transactionsShowing.data.map((item, index) => (
							<tr
								key={index}
								className="border-t hover:bg-[#0000001A]  text-gray-500 cursor-pointer"
								onClick={() => {
									router.push(`/admin/user-management/agent/${item.id}`);
								}}
							>
								<td className="p-4">
									<input type="checkbox" className="form-checkbox" />
								</td>
								<td className=" p-4 text-gray-500 min-w-[10rem]">{item.transactionsID}</td>
								<td className="p-4 flex items-center gap-4 min-w-[15rem]">
									<Image
										src={item.image}
										alt=""
										className="w-8 h-8 rounded-full object-cover"
									/>
									<div>
										<h3 className="font-[500] text-black">
											{item.customerID}
										</h3>
									</div>
								</td>

								<td className="text-lg text-holmes-font-grey min-w-[10rem]">{item.date}</td>
								<td className="p-4 text-holmes-font-grey min-w-[10rem]">N {item.amount}</td>
								<td className="p-4 flex gap-2 items-center min-w-[16rem]">
									<div>
										<Image
											src={getCardIcon(item.paymentMethod.gateway)}
											alt="payment-icon"
										/>
									</div>
									<div className="flex flex-col gap-2">
										<div className="font-bold">
											{item.paymentMethod.identifier}
										</div>
										<div className="text-holmes-font-grey">
											{item.paymentMethod.paymentType}
										</div>
									</div>
								</td>
								<td className="p-4 text-holmes-font-grey min-w-[15rem]">{item.investedProperty}</td>
								<td className="p-4 ">
									<span
										className={`px-3 py-1 rounded-full  font-medium ${getStatusStyles(
											item.status,
										)}`}
									>
										{item.status}
									</span>
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
				<div className="px-2 py-4 bg-white flex justify-between items-center shadow-xl">
					<h2 className="text-xl font-semibold">All Transactions</h2>
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
							}}
						>
							<span className="mx-1">
								{" "}
								<Image alt="filter" src={filterIcon} />{" "}
							</span>{" "}
							Filters
						</motion.button>
					</div>
				</div>
				<div className="overflow-x-scroll">
					<table className="w-full border-collapse overflow-x-scroll">
						<thead className="text-left bg-gray-100 text-holmes-font-grey">
							<tr>
								<th className="p-4">
									<input type="checkbox" className="form-checkbox" />
								</th>
								<th className="p-4">Transactions ID</th>
								<th className="p-4">Customer ID</th>
								<th className="p-4">Date</th>
								<th className="p-4">Amount</th>
								<th className="p-4">Payment Method</th>
								<th className="p-4">Invested Property</th>
								<th className="p-4">Status</th>
							</tr>
						</thead>
						<tbody className=" bg-white">
							{transactionsShowing.data.map((item, index) => (
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
									<td className="p-4 min-w-[15rem] text-gray-500">
										{item.transactionsID}
									</td>
									<td className="p-4 flex items-center gap-4 min-w-[15rem]">
										<Image
											src={item.image}
											alt=""
											className="w-10 h-10 rounded-full object-cover"
										/>
										<div>
											<h3 className="font-[500] text-black w-[10rem]">
												{item.customerID}
											</h3>
										</div>
									</td>

									<td className="p-4 min-w-[15rem] text-lg text-holmes-font-grey">{item.date}</td>
									<td className="p-4 min-w-[15rem] text-holmes-font-grey">N {item.amount}</td>
									<td className="p-4 min-w-[20rem] flex gap-2 items-center">
										<div>
											<Image
												src={getCardIcon(item.paymentMethod.gateway)}
												alt="payment-icon"
											/>
										</div>
										<div className="flex flex-col gap-2">
											<div className="font-bold">
												{item.paymentMethod.identifier}
											</div>
											<div className="text-holmes-font-grey">
												{item.paymentMethod.paymentType}
											</div>
										</div>
									</td>
									<td className="p-4 min-w-[15rem] text-holmes-font-grey">
										{item.investedProperty}
									</td>
									<td className="p-4 min-w-[10rem]">
										<span
											className={`px-3 py-1 rounded-full font-medium ${getStatusStyles(
												item.status,
											)}`}
										>
											{item.status}
										</span>
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
				<div className="px-2 py-4 bg-white shadow-xl flex justify-between items-center">
					<h2 className="text-xl font-semibold ">All Transactions</h2>
					<div className="flex gap-[2rem] items-center">
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
							}}
						>
							<span className="mx-1">
								{" "}
								<Image alt="filter" src={filterIcon} />{" "}
							</span>{" "}
							Filters
						</motion.button>
					</div>
				</div>
				<div className="overflow-x-scroll">
					<table className="w-full border-collapse overflow-x-scroll">
						<thead className="text-left bg-gray-100 text-holmes-font-grey">
							<tr>
								<th className="p-2">
									<input type="checkbox" className="form-checkbox" />
								</th>
								<th className="p-2">Transactions ID</th>
								<th className="p-2">Customer ID</th>
								<th className="p-2">Date</th>
								<th className="p-2">Amount</th>
								<th className="p-2">Payment Method</th>
								<th className="p-2">Invested Property</th>
								<th className="p-2">Status</th>
							</tr>
						</thead>
						<tbody className="bg-white">
							{transactionsShowing.data.map((item, index) => (
								<tr
									key={index}
									className="border-t hover:bg-[#0000001A] cursor-pointer"
									onClick={() => {
										router.push(`/admin/user-management/agent/${item.id}`);
									}}
								>
									<td className="p-2 ">
										<input type="checkbox" className="form-checkbox" />
									</td>
									<td className="p-2 text-gray-500 min-w-[10rem]">
										{item.transactionsID}
									</td>
									<td className="p-2  flex items-center gap-2 min-w-[15rem]">
										<Image
											src={item.image}
											alt=""
											className="w-10 h-10 rounded-full object-cover"
										/>
										<div>
											<h3 className="font-[500]">
												{item.customerID}
											</h3>
										</div>
									</td>

									<td className=" p-2 min-w-[10rem] text-holmes-font-grey">{item.date}</td>
									<td className="p-2 min-w-[15rem] text-holmes-font-grey">N {item.amount}</td>
									<td className="p-2 flex gap-2 items-center min-w-[20rem]">
										<div>
											<Image
												src={getCardIcon(item.paymentMethod.gateway)}
												alt="payment-icon"
											/>
										</div>
										<div className="flex flex-col gap-2">
											<div className="font-bold">
												{item.paymentMethod.identifier}
											</div>
											<div className="text-holmes-font-grey">
												{item.paymentMethod.paymentType}
											</div>
										</div>
									</td>
									<td className="p-2 min-w-[15rem] text-holmes-font-grey">{item.investedProperty}</td>
									<td className="p-2 min-w-[10rem]">
										<span
											className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(
												item.status,
											)}`}
										>
											{item.status}
										</span>
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
			{desktopView()}
			{tabletView()}
			{mobileView()}
		</section>
	);
};

export default TransactionsTable;

