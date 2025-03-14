import { PropertyItemType } from "@/app/types";
import Image from "next/image";
import shareIcon from "@/assets/images/general/grey-share-icon.svg";
import locationIcon from "@/assets/images/general/grey-location-icon.svg";
import greyLoveIcon from "@/assets/images/general/grey-love-icon.svg";
import view3DIcon from "@/assets/images/general/view-3d.svg";
import editIcon from "@/assets/images/general/edit-icon.svg";
import bedroomIcon from "@/assets/images/general/bedroom-icon.svg";
import bathroomIcon from "@/assets/images/general/bathroom-icon.svg";
import parkingIcon from "@/assets/images/general/parking-icon.svg";
import squareFeetIcon from "@/assets/images/general/square-feet-icon.svg";
import genericAvatar from "@/assets/images/general/generic-avatar.svg";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { verifyRoutes } from "@/utils/urls";

const PropertyItem: React.FC<{
	item: PropertyItemType;
}> = ({ item }) => {
	const router = useRouter();
	const index = 1;
	const [displayedImage, setDisplayedImage] = useState(item.images[0]);
	const editRef = useRef<HTMLDivElement | null>(null);
	const [clickedIndex, setClickedIndex] = useState<null | number>(null);
	const [isVisible, setIsVisible] = useState(false);
	// const [showFullDescription, setShowFullDescription] = useState(false);
	// const [description, setDescription] = useState(
	// 	item.description.slice(0, 150),
	// );

	const description = item.description.slice(0, 150)

	// useEffect(() => {
	// 	if (showFullDescription) {
	// 		setDescription(item.description);
	// 	} else {
	// 		setDescription(item.description.slice(0, 150));
	// 	}
	// }, [setShowFullDescription]);

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
		};		
		}

	}, [isVisible, clickedIndex]);

	const desktopTabletView = () => {
		return (
			<motion.section
				whileHover={{
					scale: 1.02,
					transition: { duration: 0.2 },
				}}
				whileTap={{ scale: 0.9 }}
				className="flex-shrink-0 bg-white rounded-md mx-1 w-[31%] TabletScreen:w-[50%] my-3 shadow-md pb-5 cursor-pointer MobileScreen:hidden"
				onClick={() => {
					router.push(verifyRoutes.propertyItem + item.id);
				}}
			>
				{/* image section */}
				<div className="relative h-[15rem] w-full ">
					<Image
						alt="item"
						src={displayedImage}
						className="w-full h-full z-10 rounded-t-md"
					/>
					<div className="absolute left-3 top-2 bg-white rounded-full p-3 z-20">
						{item.rating}.0
					</div>
					<div
						className="absolute flex justify-center items-center right-3 top-2 bg-white rounded-full h-10 w-10 z-20 cursor-pointer"
						onClick={() => {
							// route to view 3d of property
						}}
					>
						<Image alt="view-3d" src={view3DIcon} className="w-1/2 h-1/2" />
					</div>
					{/* 
					<div className="absolute left-3 bottom-2 bg-white z-20">-----</div> */}
				</div>
	
				{/* property data section */}
	
				<main className="px-3">
					{/* advertise/share */}
					<div className="flex justify-between my-3 items-center">
						<div
							className={`p-2 bg-[#FBF6F3] text-holmes-primary-dark-brown ${!item.advertised ? "opacity-0" : ""}`}
						>
							Featured
						</div>
	
						<div className="text-holmes-font-grey flex items-center cursor-pointer">
							<div
								className="mx-3"
								onClick={() => {
									("");
								}}
							>
								<Image alt="share" src={shareIcon} />
							</div>
							Share
						</div>
					</div>
	
					{/* name */}
	
					<div className="text-lg my-3">{item.nameOfProperty}</div>
	
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
						{item.location}
					</div>
	
					{/* property details */}
					<div className="bg-holmes-background-light-grey p-2 w-full flex justify-between items-center text-sm text-holmes-font-grey">
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
								{item.propertyDetails.bedrooms}
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
								{item.propertyDetails.bathrooms}
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
								{item.propertyDetails.bathrooms}
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
								{item.propertyDetails.bathrooms}
							</div>
							<div>Square Ft.</div>
						</div>
					</div>
	
					{/* property description */}
	
					<div className="my-2 ">
						{description}...
	{/* 
						<span
							className="text-blue-700 text-sm hover:underline cursor-pointer"
							onClick={(event) => {
								event.stopPropagation();
								setShowFullDescription((prevState) => !prevState);
					
	
					
							}}
						>
							{showFullDescription ? "show Less" : "...show More"}
						</span> */}
					</div>
	
					{/* assigned agent */}
					<div className="p-2 border rounded-md flex items-center justify-between">
						<div className=" flex justify-center items-center bg-white rounded-full min-h-10 min-w-10 mr-3">
							<Image
								alt="assigned-agent"
								src={genericAvatar}
								className="w-full h-full"
							/>
						</div>
						<div>
							<h2 className="max-w-[8rem]">{item.assignedAgent.name}</h2>
							<p className="text-holmes-font-grey">{item.assignedAgent.status}</p>
						</div>
						<div className="text-[#435769] bg-holmes-background-light-grey shadow-lg p-2 text-sm rounded-lg cursor-pointer">
							Show Contact
						</div>
					</div>
	
					{/* price */}
	
					<div className="my-3">
						<span className="font-[500]">
							{" "}
							{`${item.type === "Rental" ? "Rental" : ""} Price: ${item.price}`}{" "}
						</span>
						<span className="text-holmes-font-grey">
							{" "}
							{item.type === "Rental" ? "/month" : ""}
						</span>
					</div>
	
					{/* buy/ favorite /more */}
	
					<div className="my-3 flex justify-between items-center">
						<motion.button
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.5 },
							}}
							whileTap={{ scale: 0.9 }}
							className={
								"px-8 py-2 rounded-md text-white bg-holmes-primary-blue mr-4"
							}
							onClick={(event) => {
								event.preventDefault();
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
				</main>
			</motion.section>
		);
	}
	const mobileView = () => {
		return (
			<motion.section
				whileHover={{
					scale: 1.02,
					transition: { duration: 0.2 },
				}}
				whileTap={{ scale: 0.9 }}
				className="bg-white rounded-md mx-1 flex-shrink-0 w-[90%] my-3 shadow-md pb-5 cursor-pointer DesktopScreen:hidden TabletScreen:hidden"
				onClick={() => {
					router.push(verifyRoutes.propertyItem + item.id);
				}}
			>
				{/* image section */}
				<div className="relative h-[15rem] w-full ">
					<Image
						alt="item"
						src={displayedImage}
						className="w-full h-full z-10 rounded-t-md"
					/>
					<div className="absolute left-3 top-2 bg-white rounded-full p-3 z-20">
						{item.rating}.0
					</div>
					<div
						className="absolute flex justify-center items-center right-3 top-2 bg-white rounded-full h-10 w-10 z-20 cursor-pointer"
						onClick={() => {
							// route to view 3d of property
						}}
					>
						<Image alt="view-3d" src={view3DIcon} className="w-1/2 h-1/2" />
					</div>
					{/* 
					<div className="absolute left-3 bottom-2 bg-white z-20">-----</div> */}
				</div>
	
				{/* property data section */}
	
				<main className="px-3">
					{/* advertise/share */}
					<div className="flex justify-between my-3 items-center">
						<div
							className={`p-2 bg-[#FBF6F3] text-holmes-primary-dark-brown ${!item.advertised ? "opacity-0" : ""}`}
						>
							Featured
						</div>
	
						<div className="text-holmes-font-grey flex items-center cursor-pointer">
							<div
								className="mx-3"
								onClick={() => {
									("");
								}}
							>
								<Image alt="share" src={shareIcon} />
							</div>
							Share
						</div>
					</div>
	
					{/* name */}
	
					<div className="text-lg my-3">{item.nameOfProperty}</div>
	
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
						{item.location}
					</div>
	
					{/* property details */}
					<div className="bg-holmes-background-light-grey p-2 w-full flex gap-2 items-center text-sm  text-holmes-font-grey">
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
								{item.propertyDetails.bedrooms}
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
								{item.propertyDetails.bathrooms}
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
								{item.propertyDetails.bathrooms}
							</div>
							<div>Parking</div>
						</div>
	
						
					</div>
	
					{/* property description */}
	
					<div className="my-2 ">
						{description}...
	{/* 
						<span
							className="text-blue-700 text-sm hover:underline cursor-pointer"
							onClick={(event) => {
								event.stopPropagation();
								setShowFullDescription((prevState) => !prevState);
					
	
					
							}}
						>
							{showFullDescription ? "show Less" : "...show More"}
						</span> */}
					</div>
	
					{/* assigned agent */}
					<div className="p-2 border rounded-md flex items-center justify-between">
						<div className=" flex justify-center items-center bg-white rounded-full min-h-10 min-w-10 mr-3">
							<Image
								alt="assigned-agent"
								src={genericAvatar}
								className="w-full h-full"
							/>
						</div>
						<div>
							<h2 className="max-w-[8rem]">{item.assignedAgent.name}</h2>
							<p className="text-holmes-font-grey">{item.assignedAgent.status}</p>
						</div>
						<div className="text-[#435769] bg-holmes-background-light-grey shadow-lg p-2 text-sm rounded-lg cursor-pointer">
							Show Contact
						</div>
					</div>
	
					{/* price */}
	
					<div className="my-3">
						<span className="font-[500]">
							{" "}
							{`${item.type === "Rental" ? "Rental" : ""} Price: ${item.price}`}{" "}
						</span>
						<span className="text-holmes-font-grey">
							{" "}
							{item.type === "Rental" ? "/month" : ""}
						</span>
					</div>
	
					{/* buy/ favorite /more */}
	
					<div className="my-3 flex justify-between items-center">
						<motion.button
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.5 },
							}}
							whileTap={{ scale: 0.9 }}
							className={
								"px-8 py-2 rounded-md text-white bg-holmes-primary-blue mr-4"
							}
							onClick={(event) => {
								event.preventDefault();
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
				</main>
			</motion.section>
		);
	}

	return <>
		{desktopTabletView()}
		{mobileView()}
	</>

	
};

export default PropertyItem;

