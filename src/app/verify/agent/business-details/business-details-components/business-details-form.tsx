"use client";

import Image from "next/image";
import proPic from "@/assets/images/general/user-profile-icon.svg";

import downIcon from "@/assets/images/general/down-icon-black.svg";
import Inputs from "@/library/inputs/inputs";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nonAuthRoutes } from "@/utils/urls";
import { useRouter } from "next/navigation";

const BusinessDetailsForm = () => {
	const router = useRouter()
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
				setViewGenderFields(false);
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
				<h1 className="my-1 font-bold">Business Details</h1>
				<p>
					Add your business information here. Your business name will appear on
					your invoices, contracts and other documents.
				</p>
			</div>

			<form className="w-full">
				{/* upload photo */}
				<div className="flex cursor-pointer my-2 mb-8 items-center bg-holmes-background-light-grey py-3">
					<div className="rounded-full w-12 h-12 mx-4 bg-white">
						<Image alt="profile_pic" src={proPic} className="rounded-full" />
					</div>
					<div className="text-holmes-primary-dark-brown">Upload Company Logo</div>
				</div>

				{/* business name */}
				<div className="my-3">
					<label htmlFor="businessName" className="block text-sm my-1">
						Business Name
					</label>
					<Inputs
						inputType="text"
						placeholder="Business Name"
						Name="businessName"
						className="bg-holmes-background-light-grey border-none w-full py-3"
					/>
				</div>

				{/* Rc Name */}
				<div className="my-3">
					<label htmlFor="rcNumber" className="block text-sm my-1">
						RC Number
					</label>
					<Inputs
						inputType="text"
						placeholder="RC Number"
						Name="rcNumber"
						className="bg-holmes-background-light-grey border-none w-full py-3"
					/>
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
				event.preventDefault()
				router.push(nonAuthRoutes.verifyAgent)
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
							event.preventDefault()
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

export default BusinessDetailsForm;

