import { demoNotificationSettingsDetails } from "../../../settings.dto";
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
import { userManagementArray } from "@/app/admin/types.dto";
import { AllNotificationDetails } from "../../../types.dto";



function paginate<T>(data: T[]): T[][] {
	const itemsPerPage = 5;
	const result: T[][] = [];

	for (let i = 0; i < data.length; i += itemsPerPage) {
		const page = data.slice(i, i + itemsPerPage);
		result.push(page);
	}

	return result;
}

//first we split the array to contain only scheduled notifications
    const finalDraftNotificationsArray = demoNotificationSettingsDetails.filter(el => el.status === 'Draft')

//then we paginate to show only 5 per row
const paginatedNotifications = paginate(finalDraftNotificationsArray);

console.log(paginatedNotifications);

const DraftNotificationsTable = () => {
	const router = useRouter();

	const [notificationsShowing, setNotificationsShowing] = useState<{
		index: number;
		data: AllNotificationDetails[];
	}>({ index: 0, data: paginatedNotifications[0] });

	const [currentPage, setCurrentPage] = useState(1);

	const totalPages =
		paginatedNotifications.length <= 3 ? paginatedNotifications.length : 3;

	const handlePrevious = () => {
		if (currentPage > 1) {
			setNotificationsShowing((prevState) => {
				const prevIndex = paginatedNotifications.findIndex(
					(el, index) => prevState.index === index,
				);
				return {
					index: prevIndex - 1,
					data: paginatedNotifications[prevIndex - 1],
				};
			});
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNext = () => {
		if (currentPage < totalPages) {
			setNotificationsShowing((prevState) => {
				console.log(prevState);
				const prevIndex = paginatedNotifications.findIndex(
					(el, index) => prevState.index === index,
				);
				return {
					index: prevIndex + 1,
					data: paginatedNotifications[prevIndex + 1],
				};
			});
			setCurrentPage(currentPage + 1);
		}
	};

	const getStatusStyles = (status) => {
		switch (status) {
			case "Sent":
				return "bg-green-100 text-[#00D800]";
			case "inactive":
				return "bg-red-100 text-red-700";
			case "Scheduled":
				return "bg-orange-100 text-orange-700";
			case "Draft":
				return "bg-gray-100 text-gray-700";
			default:
				return "";
		}
	};

	const desktopView = () => {
		return (
			<section className="TabletScreen:hidden MobileScreen:hidden">
				<table className="w-full border-collapse overflow-x-scroll mt-4">
					<thead className="text-left bg-gray-100 text-holmes-font-grey">
						<tr>
							<th className="p-4">
								<input type="checkbox" className="form-checkbox" />
							</th>
							<th className="p-4">Notification Title</th>
							<th className="">Audience</th>
							<th className="">Delivery Type</th>
							<th className="">Set Date</th>
							<th className="">Status</th>
							<th className="">Actions</th>
						</tr>
					</thead>
					<tbody className="bg-white">
						{notificationsShowing.data.map((item, index) => (
							<tr
								key={index}
								className="border-t hover:bg-[#0000001A] text-gray-500 cursor-pointer"
								onClick={() => {
									("");
								}}
							>
								<td className="p-4">
									<input type="checkbox" className="form-checkbox" />
								</td>
								<td className="p-4 flex items-center">
									<div>
										<h3 className="font-[500] text-black">{item.title}</h3>
									</div>
								</td>
								<td className=" text-gray-500 min-w-[7rem]">{item.audience}</td>

								<td className=" p-2 flex items-center gap-2 min-w-[10rem]">
									{item.deliveryType.map((item, index) => {
										return (
											<div
												key={index}
												className="bg-holmes-background-light-grey min-w-[4rem] text-center text-holmes-font-grey p-2 rounded-xl text-sm"
											>
												{item}
											</div>
										);
									})}
								</td>
								<td className="p-4">{item.setDate}</td>

								<td className="p-4">
									<span
										className={`px-3 py-1 rounded-full  font-medium ${getStatusStyles(
											item.status,
										)}`}
									>
										{item.status}
									</span>
								</td>
								<td className="p-4">
									<div className="flex items-center gap-2">
										<button className="p-2 bg-gray-100 hover:bg-gray-200 rounded">
											👁️
										</button>
										<button className="p-2 bg-green-100 hover:bg-green-200 rounded">
											✏️
										</button>
										<button className="p-2 bg-red-100 hover:bg-red-200 rounded">
											🗑️
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>

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
				<div className="overflow-x-scroll">
					<table className="w-full border-collapse overflow-x-scroll">
						<thead className="text-left bg-gray-100 text-holmes-font-grey">
							<tr>
								<th className="p-4">
									<input type="checkbox" className="form-checkbox" />
								</th>
								<th className="p-4">Notification Title</th>
								<th className="p-4">Audience</th>
								<th className="p-4">Delivery Type</th>
								<th className="p-4">Set Date</th>
								<th className="p-4">Status</th>
								<th className="p-4">Actions</th>
							</tr>
						</thead>
						<tbody className="bg-white">
							{notificationsShowing.data.map((item, index) => (
								<tr
									key={index}
									className="border-t hover:bg-[#0000001A] text-gray-500 cursor-pointer"
									onClick={() => {
										("");
									}}
								>
									<td className="p-4">
										<input type="checkbox" className="form-checkbox" />
									</td>
									<td className="p-4 flex items-center gap-4 min-w-[15rem]">
										<div>
											<h3 className="font-[500] text-black w-[10rem]">
												{item.title}
											</h3>
										</div>
									</td>
									<td className="p-4 min-w-[15rem] text-gray-500">
										{item.audience}
									</td>
									<td className="p-4 flex min-w-[15rem] text-lg">
										{item.deliveryType.map((item, index) => {
											return (
												<div
													key={index}
													className="bg-holmes-background-light-grey min-w-[4rem] text-center text-holmes-font-grey p-2 rounded-xl text-sm mx-2"
												>
													{item}
												</div>
											);
										})}
									</td>
									<td className="p-4 min-w-[15rem]">{item.setDate}</td>

									<td className="p-4 min-w-[15rem]">
										<span
											className={`px-3 py-1 rounded-full font-medium ${getStatusStyles(
												item.status,
											)}`}
										>
											{item.status}
										</span>
									</td>
									<td className="p-4 min-w-[15rem]">
										<div className="flex items-center gap-2">
											<button className="p-2 bg-gray-100 hover:bg-gray-200 rounded">
												👁️
											</button>
											<button className="p-2 bg-green-100 hover:bg-green-200 rounded">
												✏️
											</button>
											<button className="p-2 bg-red-100 hover:bg-red-200 rounded">
												🗑️
											</button>
										</div>
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
				<div className="overflow-x-scroll">
					<table className="w-full border-collapse overflow-x-scroll">
						<thead className="text-left bg-gray-100 text-holmes-font-grey">
							<tr>
								<th className="p-2">
									<input type="checkbox" className="form-checkbox" />
								</th>
								<th className="p-4">Notification Title</th>
								<th className="">Audience</th>
								<th className="">Delivery Type</th>
								<th className="">Set Date</th>
								<th className="">Status</th>
								<th className="">Actions</th>
							</tr>
						</thead>
						<tbody className="bg-white">
							{notificationsShowing.data.map((item, index) => (
								<tr
									key={index}
									className="border-t hover:bg-[#0000001A] cursor-pointer"
									onClick={() => {
										("");
									}}
								>
									<td className="p-2 ">
										<input type="checkbox" className="form-checkbox" />
									</td>
									<td className="p-2  flex items-center gap-2 min-w-[10rem]">
										<div>
											<h3 className="font-[500] text-xs flex items-center">
												{item.title}
											</h3>
										</div>
									</td>
									<td className="text-xs text-gray-500 min-w-[7rem]">
										{item.audience}
									</td>
									<td className=" p-2 flex gap-2 min-w-[10rem]">
										{item.deliveryType.map((item, index) => {
											return (
												<div
													key={index}
													className="bg-holmes-background-light-grey min-w-[4rem] text-center text-holmes-font-grey p-2 rounded-xl text-sm"
												>
													{item}
												</div>
											);
										})}
									</td>

									<td className="p-2 min-w-[10rem]">{item.setDate}</td>

									<td className="p-2 min-w-[10rem]">
										<span
											className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(
												item.status,
											)}`}
										>
											{item.status}
										</span>
									</td>
									<td className="p-2 ">
										<div className="flex items-center gap-2">
											<button className="p-2 bg-gray-100 hover:bg-gray-200 rounded">
												👁️
											</button>
											<button className="p-2 bg-green-100 hover:bg-green-200 rounded">
												✏️
											</button>
											<button className="p-2 bg-red-100 hover:bg-red-200 rounded">
												🗑️
											</button>
										</div>
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

export default DraftNotificationsTable;

