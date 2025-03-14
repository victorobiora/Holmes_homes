"use client";

import Image from "next/image";
import proPic from "@/assets/images/general/user-profile-icon.svg";
import { useRouter } from "next/navigation";
import downIcon from "@/assets/images/general/down-icon-black.svg";
import Inputs from "@/library/inputs/inputs";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nonAuthRoutes } from "@/utils/urls";

const PersonalDetailsForm = () => {
	const router = useRouter();
	const [gender, setGender] = useState<string | null>("Gender");
	const [disability, setDisability] = useState<string | null>("Disability");
	const [viewGenderFields, setViewGenderFields] = useState(false);
	const [viewDisabilityFields, setViewDisabilityFields] = useState(false);
	const genderRef = useRef<HTMLDivElement | null>(null);
	const disabilityRef = useRef<HTMLDivElement | null>(null);

	// Handle clicks outside gender fields
	useEffect(() => {
		if(typeof window !== 'undefined'){
			const handleClickOutside = (event: MouseEvent) => {
			console.log(genderRef.current?.contains(event.target as Node));
			if (
				viewGenderFields &&
				genderRef.current &&
				!genderRef.current.contains(event.target as Node)
			) {
				setViewGenderFields(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};		
		}

	}, [viewGenderFields]);

	// Handle clicks outside disability fields
	useEffect(() => {
		if(typeof window !== 'undefined'){
		const handleClickOutsideDisability = (event: MouseEvent) => {
			console.log(disabilityRef.current?.contains(event.target as Node));
			if (
				viewDisabilityFields &&
				disabilityRef.current &&
				!disabilityRef.current.contains(event.target as Node)
			) {
				setViewDisabilityFields(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutsideDisability);

		return () => {
			document.removeEventListener("mousedown", handleClickOutsideDisability);
		};		
		}
	
	}, [viewDisabilityFields]);

	return (
		<main className="py-2 px-8 bg-white shadow-lg my-3 flex flex-col justify-center items-center rounded-lg w-[50%]">
			<div className="rounded-full w-16 h-16 my-4">
				<Image alt="profile_pic" src={proPic} className="rounded-full" />
			</div>
			<div className="text-[#435769] mb-6">
				<h1 className="block text-center text-xl">Hey {"Williams"}!</h1>
				<p className="block text-center">Let’s setup your holmes profile</p>
			</div>

			<div className="flex flex-col items-start w-full mb-4">
				<h1 className="my-1 font-bold">Personal Details</h1>
				<p>We want to know a bit more about you.</p>
			</div>

			<form className="w-full">
				{/* upload photo */}
				<div className="flex cursor-pointer my-2 items-center bg-holmes-background-light-grey py-3">
					<div className="rounded-full w-12 h-12 mx-4 bg-white">
						<Image alt="profile_pic" src={proPic} className="rounded-full" />
					</div>
					<div className="text-holmes-primary-dark-brown">Upload new Photo</div>
				</div>

				{/* first name */}
				<div className="my-3">
					<label htmlFor="firstName" className="block text-sm my-1">
						First Name
					</label>
					<Inputs
						inputType="text"
						placeholder="First Name"
						Name="firstName"
						className="bg-holmes-background-light-grey border-none w-full py-3"
					/>
				</div>

				{/* last name */}
				<div className="my-3">
					<label htmlFor="lastName" className="block text-sm my-1">
						Last Name
					</label>
					<Inputs
						inputType="text"
						placeholder="Last Name"
						Name="lastName"
						className="bg-holmes-background-light-grey border-none w-full py-3"
					/>
				</div>


				{/* email */}
				<div className="my-3">
					<label htmlFor="email" className="block text-sm my-1">
					Email
					</label>
					<Inputs
						inputType="text"
						placeholder="Email"
						Name="email"
						className="bg-holmes-background-light-grey border-none w-full py-3"
					/>
				</div>

				{/* Gender */}
				<div className=" my-3 relative" ref={genderRef}>
					<div>
						<label htmlFor="firstName" className="block text-sm my-1">
							Gender
						</label>
						<div
							className={`px-3 cursor-pointer bg-holmes-background-light-grey border-none w-full py-3 flex justify-between ${gender === "Gender" ? "text-[#959596] " : "text-black"}`}
							onClick={() => {
								setViewGenderFields((prevState) => !prevState);
							}}
						>
							{gender}
							<div className="flex items-end">
								<Image src={downIcon} alt="down-icon" />
							</div>
						</div>
					</div>
					<AnimatePresence>
						{viewGenderFields && (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.2 }}
								className="bg-holmes-background-light-grey w-full  absolute top-[120%] flex flex-col text-md z-[900]"
							>
								{["Male", "Female", `I'd rather not say`].map((item, index) => {
									return (
										<div
											key={index}
											className={`py-2 px-3 text-center  hover:bg-white hover:border-black hover:border-[0.2px] hover:rounded-sm cursor-pointer whitespace-nowrap ${gender === item ? "bg-white border-black border rounded-sm" : ""}`}
											onClick={() => {
												setGender(item);
												setViewGenderFields(false);
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

				{/* Disability */}
				<div className=" my-3 relative" ref={disabilityRef}>
					<div>
						<label htmlFor="firstName" className="block text-sm my-1">
							Disability
						</label>
						<div
							className={`px-3 cursor-pointer bg-holmes-background-light-grey border-none w-full py-3 flex justify-between ${disability === "Disability" ? "text-[#959596] " : "text-black"}`}
							onClick={() => {
								setViewDisabilityFields((prevState) => !prevState);
							}}
						>
							{disability}
							<div className="flex items-end">
								<Image src={downIcon} alt="down-icon" />
							</div>
						</div>
					</div>
					<AnimatePresence>
						{viewDisabilityFields && (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.2 }}
								className="bg-holmes-background-light-grey w-full  absolute top-[120%] flex flex-col text-md z-[900]"
							>
								{["Blindness", "Hearing Loss", `I'd rather not say`].map(
									(item, index) => {
										return (
											<div
												key={index}
												className={`py-2 px-3 text-center  hover:bg-white hover:border-black hover:border-[0.2px] hover:rounded-sm cursor-pointer whitespace-nowrap ${disability === item ? "bg-white border-black border rounded-sm" : ""}`}
												onClick={() => {
													setDisability(item);
													setViewDisabilityFields(false);
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
				{/* Cancel/continue */}
				<div className="flex justify-end my-10">
					<motion.button
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						className={`px-4 py-2 mx-4 ml-4 rounded-md text-[#435769] bg-holmes-background-light-grey shadow-md`}
						onClick={(event) => {
							event.preventDefault();
							router.push(nonAuthRoutes.verifyAgent);
						}}
					>
						Cancel
					</motion.button>
					<motion.button
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						className={`px-4 py-2 rounded-md text-white bg-holmes-primary-dark-brown `}
						onClick={(event) => {
							event.preventDefault();
							router.push(nonAuthRoutes.verifyAgent);
						}}
					>
						Continue
					</motion.button>
				</div>
			</form>
		</main>
	);
};

export default PersonalDetailsForm;

