"use client";

import Image from "next/image";

import downIcon from "@/assets/images/general/down-icon-black.svg";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nonAuthRoutes } from "@/utils/urls";
import filterIcon from "@/assets/images/general/black-filter-icon.svg";

const BackgroundFilter:React.FC<{
	toggleFilter: () => void
}> = ({toggleFilter}) => {

	const [areaChosen, setAreaChosen] = useState<string | null>("Choose Area");
	const [viewAreaChosenFields, setViewAreaChosenFields] = useState(false);
	const areaChosenRef = useRef<HTMLDivElement | null>(null);

	const [propertyStatus, setPropertyStatus] = useState<string | null>(
		"Property Status",
	);
	const [viewPropertyStatusFields, setViewPropertyStatusFields] =
		useState(false);
	const propertyStatusRef = useRef<HTMLDivElement | null>(null);

	const [propertyType, setPropertyType] = useState<string | null>(
		"Property Type",
	);
	const [viewPropertyTypeFields, setViewPropertyTypeFields] = useState(false);
	const propertyTypeRef = useRef<HTMLDivElement | null>(null);

	// Handle clicks outside areaChosen fields
	useEffect(() => {
		if(typeof window !== 'undefined'){
			const handleClickOutsideAreaChosen = (event: MouseEvent) => {
			if (
				viewAreaChosenFields &&
				areaChosenRef.current &&
				!areaChosenRef.current.contains(event.target as Node)
			) {
				setViewAreaChosenFields(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutsideAreaChosen);

		return () => {
			document.removeEventListener("mousedown", handleClickOutsideAreaChosen);
		};	
		}
	
	}, [viewAreaChosenFields]);

	// Handle clicks outside propertyStatus fields
	useEffect(() => {
		if(typeof window !== 'undefined'){
				const handleClickOutsidePropertyStatus = (event: MouseEvent) => {
			if (
				viewPropertyStatusFields &&
				propertyStatusRef.current &&
				!propertyStatusRef.current.contains(event.target as Node)
			) {
				setViewPropertyStatusFields(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutsidePropertyStatus);

		return () => {
			document.removeEventListener(
				"mousedown",
				handleClickOutsidePropertyStatus,
			);
		};	
		}

	}, [viewPropertyStatusFields]);

	// Handle clicks outside propertyType fields
	useEffect(() => {
		if(typeof window !== 'undefined'){
			const handleClickOutsidePropertyType = (event: MouseEvent) => {
			if (
				viewPropertyTypeFields &&
				propertyTypeRef.current &&
				!propertyTypeRef.current.contains(event.target as Node)
			) {
				setViewPropertyTypeFields(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutsidePropertyType);

		return () => {
			document.removeEventListener("mousedown", handleClickOutsidePropertyType);
		};
		}
		
	}, [viewPropertyTypeFields]);

	return (
		<form className="flex gap-3 MobileScreen:gap-3 DesktopScreen:flex-row flex-col w-full justify-center DesktopScreen:items-center">
			{/* choose Area */}
			<div className=" DesktopScreen:my-3 relative" ref={areaChosenRef}>
				<div>
					<div
						className={`DesktopScreen:pl-3 DesktopScreen:pr-10 whitescape-nowrap DesktopScreen:py-3 py-2 px-3 cursor-pointer bg-white border border-black rounded-md w-full  flex DesktopScreen:justify-between items-center`}
						onClick={() => {
							setViewAreaChosenFields((prevState) => !prevState);
						}}
					>
						<div className="flex items-end mx-3">
							<Image src={downIcon} alt="down-icon" />
						</div>
						{areaChosen}
					</div>
				</div>
				<AnimatePresence>
					{viewAreaChosenFields && (
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{ duration: 0.2 }}
							className="bg-holmes-background-light-grey w-full  absolute top-[120%] flex flex-col text-md z-[900]"
						>
							{["Island", "Mainland", `Others`].map((item, index) => {
								return (
									<div
										key={index}
										className={`py-2 px-3 text-center  hover:bg-white hover:border-black hover:border-[0.2px] hover:rounded-sm cursor-pointer whitespace-nowrap ${areaChosen === item ? "bg-white border-black border rounded-sm" : ""}`}
										onClick={() => {
											setAreaChosen(item);
											setViewAreaChosenFields(false);
										}}
									>
										{item}
									</div>
								);
							})}
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* property status */}

			<div className=" DesktopScreen:my-3 relative" ref={propertyStatusRef}>
				<div>
					<div
						className={`DesktopScreen:pl-3 DesktopScreen:pr-10 whitescape-nowrap DesktopScreen:py-3 py-2 px-3 cursor-pointer bg-white border border-black rounded-md w-full  flex DesktopScreen:justify-between items-center`}
						onClick={() => {
							setViewPropertyStatusFields((prevState) => !prevState);
						}}
					>
						<div className="flex items-end mx-3">
							<Image src={downIcon} alt="down-icon" />
						</div>
						{propertyStatus}
					</div>
				</div>
				<AnimatePresence>
					{viewPropertyStatusFields && (
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{ duration: 0.2 }}
							className="bg-holmes-background-light-grey w-full  absolute top-[120%] flex flex-col text-md z-[900]"
						>
							{["Rented", "Bought", `For Sale`].map((item, index) => {
								return (
									<div
										key={index}
										className={`py-2 px-3 text-center  hover:bg-white hover:border-black hover:border-[0.2px] hover:rounded-sm cursor-pointer whitespace-nowrap ${propertyStatus === item ? "bg-white border-black border rounded-sm" : ""}`}
										onClick={() => {
											setPropertyStatus(item);
											setViewPropertyStatusFields(false);
										}}
									>
										{item}
									</div>
								);
							})}
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* property Type */}
			<div className=" DesktopScreen:my-3 relative" ref={propertyTypeRef}>
				<div>
					<div
						className={`DesktopScreen:pl-3 DesktopScreen:pr-10 whitescape-nowrap DesktopScreen:py-3 py-2 px-3 cursor-pointer bg-white border border-black rounded-md w-full  flex DesktopScreen:justify-between items-center`}
						onClick={() => {
							setViewPropertyTypeFields((prevState) => !prevState);
						}}
					>
						<div className="flex items-end mx-3">
							<Image src={downIcon} alt="down-icon" />
						</div>
						{propertyType}
					</div>
				</div>
				<AnimatePresence>
					{viewPropertyTypeFields && (
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{ duration: 0.2 }}
							className="bg-holmes-background-light-grey w-full  absolute top-[120%] flex flex-col text-md z-[900]"
						>
							{["Duplex", "Bungalow", `Double-Storey`].map((item, index) => {
								return (
									<div
										key={index}
										className={`py-2 px-3 text-center  hover:bg-white hover:border-black hover:border-[0.2px] hover:rounded-sm cursor-pointer whitespace-nowrap ${propertyType === item ? "bg-white border-black border rounded-sm" : ""}`}
										onClick={() => {
											setPropertyType(item);
											setViewPropertyTypeFields(false);
										}}
									>
										{item}
									</div>
								);
							})}
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			<div className="flex justify-between">
				<motion.button
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.5 },
					}}
					whileTap={{ scale: 0.9 }}
					className={
						"p-3 h-auto rounded-md border-black border flex gap-[0.3rem] items-center"
					}
					onClick={(event) => {
						event.preventDefault();
						toggleFilter()
					}}
				>
					<span className="mx-1">
						{" "}
						<Image alt="filter" src={filterIcon} />{" "}
					</span>{" "}
					Filters
				</motion.button>
				<motion.button
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.5 },
					}}
					whileTap={{ scale: 0.9 }}
					className={`p-3 mx-4 ml-2 rounded-md text-white bg-holmes-primary-dark-brown shadow-md`}
					onClick={(event) => {
						event.preventDefault();
					}}
				>
					Find Home
				</motion.button>
			</div>

			{/* search button */}
		</form>
	);
};

export default BackgroundFilter;

