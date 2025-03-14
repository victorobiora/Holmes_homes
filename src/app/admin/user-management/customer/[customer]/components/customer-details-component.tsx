import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { customerItemStructure } from "../../customer-management.dto";
import bgLocationImage from "@/assets/images/general/bg_location_image.png";
import { motion } from "framer-motion";
import downloadIcon from "@/assets/images/general/grey-download-icon.svg";
import greenPdfIcon from "@/assets/images/general/green-pdf-icon.svg";
import redImgIcon from "@/assets/images/general/red-img-icon.svg";
import redTrashIcon from "@/assets/images/general/red-trashcan-icon.svg";
import greenLocationIcon from "@/assets/images/general/green-pen-icon.svg";
import greenCallIcon from "@/assets/images/general/green-call-icon.svg";
import greenEmailIcon from "@/assets/images/general/green-message-icon.svg";
import homeIcon from "@/assets/images/admin/management/blue-home-icon.svg";
import cardIcon from "@/assets/images/admin/management/blue-card-icon.svg";
import profileIcon from "@/assets/images/admin/management/blue-profile-icon.svg";
import { ProgressCircleHero } from "@/library/progress-bar/circular-progress-bar";
import StarRating from "@/library/star/star-rating";

const CustomerDetailsComponent = () => {
	const [propertiesShowing, setPropertiesShowing] = useState({
		index: 0,
		data: customerItemStructure.propertyStatus.properties[0],
	});
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages =
		customerItemStructure.propertyStatus.properties.length <= 3
			? customerItemStructure.propertyStatus.properties.length
			: 3;

	const handlePrevious = () => {
		if (currentPage > 1) {
			setPropertiesShowing((prevState) => {
				const prevIndex =
					customerItemStructure.propertyStatus.properties.findIndex(
						(el, index) => prevState.index === index,
					);
				return {
					index: prevIndex - 1,
					data: customerItemStructure.propertyStatus.properties[prevIndex - 1],
				};
			});
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNext = () => {
		if (currentPage < totalPages) {
			setPropertiesShowing((prevState) => {
				console.log(prevState);
				const prevIndex =
					customerItemStructure.propertyStatus.properties.findIndex(
						(el, index) => prevState.index === index,
					);
				return {
					index: prevIndex + 1,
					data: customerItemStructure.propertyStatus.properties[prevIndex + 1],
				};
			});
			setCurrentPage(currentPage + 1);
		}
	};

	const getStatusStyles = (status) => {
		switch (status) {
			case "active":
				return "bg-green-100 text-[#00D800]";
			case "inactive":
				return "bg-red-100 text-red-700";
			case "pending":
				return "bg-orange-100 text-orange-700";
			case "processing":
				return "bg-gray-100 text-gray-700";
			default:
				return "";
		}
	};

	return (
		<section>
			<div className="p-4 bg-white rounded-md shadow-md mb-5">
				<div className="font-bold text-xl my-2">Customer Details</div>
				<div className="w-full h-[15rem]">
					<Image
						src={
							customerItemStructure.propertyStatus.properties[0]
								.propertyPhotos[0]
						}
						alt="selected-customer-image"
						className="w-full h-full rounded-md object-cover"
					/>
				</div>
			</div>
			<div className="flex DesktopScreen:flex-row flex-col  justify-between ">
				<div className="p-4 shadow-md bg-white DesktopScreen:w-[68%] rounded-md">
					<div className="flex justify-between items-center mb-3">
						{/* profile pic and name */}
						<div className="p-4 flex items-center gap-4">
							<Image
								src={customerItemStructure.profilePicture}
								alt=""
								className="w-12 h-12 rounded-full object-cover"
							/>
							<div>
								<h3 className="font-[500] text-black">
									{customerItemStructure.name}
								</h3>
							</div>
						</div>

						{/* status */}
						<div className="p-4 MobileScreen:p-2">
							<span
								className={`px-3 py-2 rounded-full  font-medium ${getStatusStyles(
									customerItemStructure.status,
								)}`}
							>
								{customerItemStructure.status}
							</span>
						</div>

						<div className="flex gap-2">
							{/* message */}
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
								Message
							</motion.button>

							{/* delete customer */}
							<div className="p-2 bg-red-100 hover:bg-red-200 rounded flex items-center min-w-10 justify-center">
								<Image src={redTrashIcon} alt="delete-customer" />
							</div>
						</div>
					</div>

					{/* customer location, num, email */}
					<div className="my-2">
						<div className="flex gap-3 items-center text-holmes-font-grey my-2">
							<Image alt="customer-location" src={greenLocationIcon} />
							<div>{customerItemStructure.location}</div>
						</div>
						<div className="flex gap-3 items-center text-holmes-font-grey my-2">
							<Image alt="customer-number" src={greenCallIcon} />
							<div>{customerItemStructure.contact}</div>
						</div>
						<div className="flex gap-3 items-center text-holmes-font-grey my-2">
							<Image alt="customer-email" src={greenEmailIcon} />
							<div>{customerItemStructure.email}</div>
						</div>
					</div>

					{/* description */}
					<div className="my-3">
						<div className="my-2 text-xl font-bold">
							About {customerItemStructure.name}:
						</div>

						<p className="text-holmes-font-grey">
							{customerItemStructure.description}
						</p>
						<div className="my-3">
							<span className="text-xl mr-3 font-bold">Agency: </span>
							<span className="text-holmes-font-grey">
								{customerItemStructure.agency}{" "}
							</span>
						</div>
						<div className="my-3">
							<span className="text-xl mr-3 font-bold">Customer License: </span>
							<span className="text-holmes-font-grey">
								{customerItemStructure.customerLicense}{" "}
							</span>
						</div>
						<div className="my-3">
							<span className="text-xl mr-3 font-bold">Services Area: </span>
							<span className="text-holmes-font-grey">
								{customerItemStructure.servicesArea.map((el, index) => {
									if (index !== customerItemStructure.servicesArea.length - 1) {
										return `${el}, `;
									} else {
										return `${el}.`;
									}
								})}
							</span>
						</div>
						<div className="my-3">
							<div className="text-xl mr-3 font-bold">Property Status: </div>
							{/* property stats */}
							<div className="flex DesktopScreen:flex-row flex-col my-3 justify-between">
								<div className="bg-white border rounded-md p-6 DesktopScreen:my-0 my-2">
									<div className="bg-gray-100 rounded-full p-2 my-2 h-12 w-12 flex justify-center items-center">
										<span className="text-2xl">
											<Image alt="total-listing" src={homeIcon} />
										</span>
									</div>
									<div className="flex gap-4">
										<div className="flex flex-col justify-between">
											<p className="text-holmes-font-grey my-3 ">
												Total Listings
											</p>
											<div className="text-xl font-bold">
												{customerItemStructure.propertyStatus.totalListings}
											</div>
										</div>
										<ProgressCircleHero progress={80} color="green" />
									</div>
								</div>
								<div className="bg-white border rounded-md p-6 DesktopScreen:my-0 my-2">
									<div className="bg-gray-100 rounded-full p-2 my-2 h-12 w-12 flex justify-center items-center">
										<span className="text-2xl">
											<Image alt="property-sold" src={cardIcon} />
										</span>
									</div>
									<div className="flex gap-4">
										<div className="flex flex-col justify-between">
											<p className="text-holmes-font-grey my-3 ">
												Property Sold
											</p>
											<div className="text-xl font-bold">
												{customerItemStructure.propertyStatus.propertiesSold}
											</div>
										</div>
										<ProgressCircleHero progress={80} color="orange" />
									</div>
								</div>
								<div className="bg-white border rounded-md p-6 DesktopScreen:my-0 my-2">
									<div className="bg-gray-100 rounded-full p-2 my-2 h-12 w-12 flex justify-center items-center">
										<span className="text-2xl">
											<Image alt="property-rent" src={profileIcon} />
										</span>
									</div>
									<div className="flex gap-4">
										<div className="flex flex-col justify-between">
											<p className="text-holmes-font-grey my-3 ">
												Property Rent
											</p>
											<div className="text-xl font-bold">
												{customerItemStructure.propertyStatus.propertiesRent}
											</div>
										</div>
										<ProgressCircleHero progress={80} color="slate" />
									</div>
								</div>
							</div>
						</div>

						{/* Reviews */}
						<div className="my-3">
							<div className="text-xl mr-3 font-bold">Reviews: </div>
							<div className="flex DesktopScreen:flex-row flex-col my-3 justify-between">
								{customerItemStructure.reviews.map((el, index) => {
									if (index > 1) {
										return;
									} else {
										return (
											<div className="bg-white border rounded-md p-3 DesktopScreen:w-[49%] w-full my-2 ">
												{/* reviewer detail */}
												<div className="p-4 flex items-center gap-4">
													<Image
														src={el.picture}
														alt=""
														className="w-12 h-12 rounded-full object-cover"
													/>
													<div>
														<h3 className="font-[500] text-black">
															{el.reviewer}
														</h3>
														<div>
															<p className="my-2 text-holmes-font-grey">
																{el.username}
															</p>
														</div>
													</div>
												</div>

												<div className="my-2 text-holmes-font-grey">
													"{el.comment}"
												</div>

												<div className="my-6 flex item-center font-[500]">
													<StarRating rating={el.rating} />{" "}
												</div>

												<div className="text-holmes-font-grey">{el.date}</div>
											</div>
										);
									}
								})}
							</div>
						</div>

						{/* Property Files */}
						<div className="my-3">
							<div className="text-xl mr-3 font-bold">Reviews: </div>
							<div className="flex justify-between flex-wrap my-2">
								{customerItemStructure.propertyFiles?.map((document, index) => {
									return (
										<div
											key={index}
											className="DesktopScreen:w-[45%] min-w-[9rem] p-2 flex justify-between items-center bg-white border rounded-md m-2"
										>
											<div className="flex">
												<Image
													alt="docType"
													src={
														document.docType === "pdf"
															? greenPdfIcon
															: redImgIcon
													}
												/>
												<div className="mx-2">
													<p>{document.name}</p>
													<p className="mt-1 text-holmes-font-grey">
														{document.size}
													</p>
												</div>
											</div>

											<div>
												<Image
													alt="download"
													src={downloadIcon}
													onClick={() => {}}
												/>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>

				{/* Second Container. location */}
				<div className="p-4 px-6 shadow-md bg-white rounded-md DesktopScreen:w-[30%] DesktopScreen:my-0 my-2  flex flex-col">
					<div className="font-[500] my-2 text-xl">Property Photos</div>

					<div className="h-[30%] w-full rounded-md my-4">
						<Image
							alt="first_image"
							src={propertiesShowing.data.propertyPhotos[0]}
							className="h-full w-full rounded-md object-cover"
						/>
					</div>

					<div className="font-[500] my-2 text-xl">Location:</div>
					<div className="relative flex-1">
						<div className="h-full w-full ">
							<Image
								alt="demo_image_for_location_tag"
								src={bgLocationImage}
								className="h-full w-full object-cover"
							/>
						</div>

						<div className=" absolute left-1/2 -translate-x-1/2  bottom-2 p-2 bg-white rounded-md w-[80%] ">
							<div className="bg-holmes-background-grey h-full w-full p-2">
								<div className="font-bold my-2">
									{propertiesShowing.data.name}
								</div>
								<div className="text-holmes-font-grey my-2">
									{propertiesShowing.data.location.name}
								</div>

								<div className="flex gap-3 items-center">
									<div className="font-bold">
										{propertiesShowing.data.propertyRating}.0
									</div>
									<StarRating rating={propertiesShowing.data.propertyRating} />
								</div>

								<div className="text-holmes-font-grey my-2">
									{`(${propertiesShowing.data.numberOfReviews} Reviews)`}
								</div>
							</div>
						</div>
					</div>

					{/* Pagination */}
					<div className="bg-white flex items-center justify-between my-4">
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
					<div className="h-40% rounded-md"></div>
				</div>
			</div>
		</section>
	);
};

export default CustomerDetailsComponent;

