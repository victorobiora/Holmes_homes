"use client";

import Image from "next/image";
import proPic from "@/assets/images/general/user-profile-icon.svg";
import Avatar from "@/assets/images/agent/record-video-avatar.svg";
import StartIcon from "@/assets/images/agent/white-play-icon.svg";
import { DateRangePicker } from "@tremor/react";
import downIcon from "@/assets/images/general/down-icon-black.svg";
import Inputs from "@/library/inputs/inputs";
import { useState, useRef, useEffect } from "react";
import cloudIcon from "@/assets/images/general/cloud-icon.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { nonAuthRoutes } from "@/utils/urls";

const RecordVideoForm = () => {
	const router = useRouter();


	return (
		<main className="py-2 px-8 bg-white shadow-lg my-3 flex flex-col justify-center items-center rounded-lg w-[50%] overflow-y-scroll">
			<div className="rounded-full w-14 h-14 my-4">
				<Image alt="profile_pic" src={proPic} className="rounded-full" />
			</div>
			<div className="text-[#435769] mb-6">
				<h1 className="block text-center text-xl">Hey {"Williams"}!</h1>
				<p className="block text-center">Let’s setup your holmes profile</p>
			</div>

			<div className="flex flex-col items-start w-full mb-4">
				<h1 className="my-1 font-bold">Record a short selfie video</h1>
				<p>
					Stay in a well lit area, position your face within the video and click
					the Start button.
				</p>
			</div>

			<form className="w-full">
				{/* video section */}
				<div className="flex justify-center items-center relative">
					<div className="w-[15rem] flex justify-center h-[15rem] p-5 rounded-full border border-black relative">
						<Image src={Avatar} alt="reccord-video" className="h-full " />
					</div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						<Image src={StartIcon} alt="start-video" className="h-full cursor-pointer" />
					</div>
				</div>
				{/* Cancel/continue */}
				<div className="flex justify-center my-10">
					<motion.button
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						className={`px-4 py-2 mx-4 ml-4 rounded-md text-[#435769] bg-holmes-background-light-grey shadow-md`}
						onClick={(event) => {
							event.preventDefault()
							router.push(nonAuthRoutes.verifyAgent);
						}}
					>
						Skip
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

export default RecordVideoForm;

