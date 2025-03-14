"use client";

import NavBar from "@/app/user/navbar";
import GuestNavBar from "@/app/user/guest/guest-navbar";
import { SelectedPropertyResponseType } from "../property-types";
import editIcon from "@/assets/images/general/edit-icon.svg";
import greyLoveIcon from "@/assets/images/general/grey-love-icon.svg";
import SelectedPropertyImageSection from "./image-section";
import bedroomIcon from "@/assets/images/general/bedroom-icon.svg";
import bathroomIcon from "@/assets/images/general/bathroom-icon.svg";
import parkingIcon from "@/assets/images/general/parking-icon.svg";
import squareFeetIcon from "@/assets/images/general/square-feet-icon.svg";
import copyIcon from "@/assets/images/general/blue-copy-icon.svg";
import Image from "next/image";
import locationIcon from "@/assets/images/general/grey-location-icon.svg";
import StarRating from "@/library/star/star-rating";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { isSignedIn } from "@/utils/auth";
import { BlueBackdrop } from "@/library/modals/blue-backdrop";
import BuyNowCard from "./buy-now";

const SelectedPropertyMainSection: React.FC<{
	data: SelectedPropertyResponseType;
	toggleSideBar: () => void;
}> = ({ data, toggleSideBar }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [showBuyNowModal, setShowBuyModal] = useState(false);
	const [guestActiveSection, setGuestActiveSection] = useState("home");
	const [activeSection, setActiveSection] = useState("home");


	const removeModal = () => {
		setShowBuyModal(false);
	};

	const index = 1;

	const editRef = useRef<HTMLDivElement | null>(null);
	const [clickedIndex, setClickedIndex] = useState<null | number>(null);
	const [isVisible, setIsVisible] = useState(false);

	// Handle clicks outside the edit element
	useEffect(() => {
		/**
		 * This function checks if anywhere else was clicked besides the edit modal and its icon.
		 *  if so it removes the modal, if not, it means the modal itself was clicked and we leave the onClick method attached to do its job.
		 * Due to useRef not being accurate when working with dynamically rendered content eg lists built with .map()(it always returns false)
		 *  I used Identifiers for each individual item to ensure the edit modal does not continuosly rerender
		 * Also, useEffect code runs first before any state updating changes.  */
		if(typeof window !== 'undefined'){
		const handleClickItem = (event: MouseEvent) => {
			const clickedImage = document.getElementById(`image-${clickedIndex}`);

			if (
				isVisible &&
				editRef.current &&
				!editRef.current.contains(event.target as Node) &&
				clickedImage &&
				!clickedImage.contains(event.target as Node)
			) {
				setIsVisible(false);
			}
		}

		document.addEventListener("mousedown", handleClickItem);

		return () => {
			document.removeEventListener("mousedown", handleClickItem);
		}	
		};
	}, [isVisible, clickedIndex]);

	useEffect(() => {
		if (showBuyNowModal) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		// Cleanup when component is unmounted
		return () => {
			document.body.style.overflow = "";
		};
	}, [showBuyNowModal]);

	return (
		<>
			{showBuyNowModal && (
				<BlueBackdrop onClick={removeModal}>
					<BuyNowCard removeModal={removeModal} />
				</BlueBackdrop>
			)}
			<section className="h-screen ">
				{isSignedIn ? (
					<NavBar toggleSidebar={toggleSideBar} />
				) : (
					<GuestNavBar
						setActiveSection={setGuestActiveSection}
						toggleSidebar={toggleSideBar}
						activeSection={guestActiveSection}
					/>
				)}
				<div className="DesktopScreen:px-10 px-2 h-[55%] mt-[1rem]">
					<SelectedPropertyImageSection images={data.images} />
				</div>
				<main className="DesktopScreen:px-10 px-4 py-10 flex items-end DesktopScreen:flex-row flex-col">
					<div className="DesktopScreen:w-1/2 w-full">
						{/* name */}
						<h1 className="text-xl font-bold">{data.title}</h1>
						{/* location */}
						<div className="text-holmes-font-grey my-2 flex items-center cursor-pointer">
							<div
								className="mr-2"
								onClick={() => {
									("");
								}}
							>
								<Image alt="location" src={locationIcon} />
							</div>
							{data.location}
						</div>
						{/* description */}
						<div>
							<p>Description:</p>
							<p>{data.description}</p>
						</div>
						{/* images */}

						<div className="flex justify-around my-4">
							<div className="h-24 w-36 mr-2">
								<Image
									alt="property-image"
									src={data.images[0].link}
									className="w-full h-full rounded-3xl"
								/>
							</div>
							<div className="h-24 w-36 mx-2">
								<Image
									alt="property-image"
									src={data.images[1].link}
									className="w-full h-full rounded-3xl"
								/>
							</div>
							<div className="h-24 w-36 mx-2">
								<Image
									alt="property-image"
									src={data.images[2].link}
									className="w-full h-full rounded-3xl"
								/>
							</div>
							<div className="h-24 w-36">
								<Image
									alt="property-image"
									src={data.images[3].link}
									className="w-full h-full rounded-3xl"
								/>
							</div>
						</div>
					</div>

					{/* detail card */}
					<div className="DesktopScreen:w-auto w-full DesktopScreen:ml-[5rem] bg-white px-6 pt-10 pb-4 rounded-xl shadow-xl flex flex-col justify-between h-[80%]">
						<h1 className="text-xl font-bold">
							Owner: {data.PropertyOwner.ownerName}
						</h1>
						{/* star rating */}
						<div className="my-3 flex items-center">
							<div className=" text-xl self-end">
								{data.PropertyOwner.rating}.0
							</div>
							<div className="mx-5">
								<StarRating rating={4} />
							</div>
						</div>

						<div>
							{/* assigned agent */}
							<div className="p-2 border rounded-md flex items-center justify-between my-5">
								<div className=" flex justify-center items-center bg-white rounded-full min-h-10 min-w-10 mr-3">
									<Image
										alt="assigned-agent"
										src={data.PropertyOwner.assignedAgentPhoto}
										className="w-full h-full"
									/>
								</div>
								<div>
									<h2 className="max-w-[8rem]">
										{data.PropertyOwner.assignedAgentName}
									</h2>
									<p className="text-holmes-font-grey">
										{data.PropertyOwner.assignedAgentStatus}
									</p>
								</div>
								<div className="text-[#435769] bg-holmes-background-light-grey shadow-lg p-2 text-sm rounded-lg flex items-center">
									<div>{data.PropertyOwner.assignedAgentContact}</div>
									<Image alt="copy" src={copyIcon} className="mx-2" />
								</div>
							</div>

							{/* property details */}
							<div className="bg-holmes-background-light-grey p-2 w-full flex justify-between items-center text-sm  text-holmes-font-grey my-3">
								<div>
									<div className="flex justify-center items-center">
										{" "}
										<div
											className="mr-2"
											onClick={() => {
												("");
											}}
										>
											<Image alt="bedroom" src={bedroomIcon} />
										</div>
										{data.bedrooms}
									</div>
									<div>Bedrooms</div>
								</div>

								<div>
									<div className="flex justify-center items-center">
										{" "}
										<div
											className="mr-2"
											onClick={() => {
												("");
											}}
										>
											<Image alt="bathroom" src={bathroomIcon} />
										</div>
										{data.bathrooms}
									</div>
									<div>Bathrooms</div>
								</div>

								<div>
									<div className="flex justify-center items-center">
										{" "}
										<div
											className="mr-2"
											onClick={() => {
												("");
											}}
										>
											<Image alt="parking" src={parkingIcon} />
										</div>
										{data.bathrooms}
									</div>
									<div>Parking</div>
								</div>

								<div>
									<div className="flex  justify-center items-center">
										<div
											className="mr-2"
											onClick={() => {
												("");
											}}
										>
											<Image alt="sq-ft" src={squareFeetIcon} />
										</div>
										{data.bathrooms}
									</div>
									<div>Square Ft.</div>
								</div>
							</div>

							{/* price */}

							<div className="my-3">
								<span className="font-[500]">
									{" "}
									{`${data.type === "Rental" ? "Rental" : ""} Price: ${data.price}`}{" "}
								</span>
								<span className="text-holmes-font-grey">
									{" "}
									{data.type === "Rental" ? "/month" : ""}
								</span>
							</div>
							{/* buy/ favorite /more */}

							<div className="mt-3 flex justify-between items-center">
								<motion.button
									whileHover={{
										scale: 1.1,
										transition: { duration: 0.5 },
									}}
									whileTap={{ scale: 0.9 }}
									className={
										"w-[60%] py-2 rounded-md text-white bg-holmes-primary-blue mr-4"
									}
									onClick={(event) => {
										event.preventDefault();
										setShowBuyModal(true);
									}}
								>
									Buy Now
								</motion.button>

								<div className="bg-holmes-background-light-grey py-2 px-3 rounded-md cursor-pointer">
									<Image src={greyLoveIcon} alt="not-favorited" />
								</div>

								<div
									className="flex-shrink-0 relative cursor-pointer  flex  items-center justify-center my-2"
									ref={editRef}
									id={`edit-${index}`}
								>
									<div
										className="bg-holmes-background-light-grey rounded-md py-5 px-4 text-2xl font-bold flex justify-center items-start h-auto"
										onClick={() => {
											setIsVisible((prevState) => !prevState);
											setClickedIndex(index);
										}}
									>
										{" "}
										<Image alt="see-more" src={editIcon} />
									</div>

									<AnimatePresence>
										{clickedIndex === index && isVisible && (
											<motion.section
												initial={{ opacity: 0, scale: 0.9 }}
												animate={{ opacity: 1, scale: 1 }}
												exit={{ opacity: 0, scale: 0.9 }}
												transition={{ duration: 0.2 }}
												className="z-[900] absolute top-[2.5rem] min-w-[120px] w-full h-full my-2"
											>
												<ul className="list-none absolute w-full  bg-[#f5f5f6]">
													<li
														className="my-2 p-2  cursor-pointer text-sm"
														onClick={() => {}}
													>
														Edit
													</li>
													<li
														className="my-2 p-2  cursor-pointer text-sm"
														onClick={() => {}}
													>
														Close Round
													</li>
													<li
														className="my-2 p-2 cursor-pointer text-sm"
														onClick={() => {}}
													>
														Delete Round
													</li>
												</ul>
											</motion.section>
										)}
									</AnimatePresence>
								</div>
							</div>
						</div>
					</div>
				</main>
			</section>
		</>
	);
};

export default SelectedPropertyMainSection;

