"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { CompleteVerifcationList } from "../../verify.dto";
import Image from "next/image";
import editPencil from "@/assets/images/general/pencil-icon.svg";

const VerifyUserDetails = () => {
	const router = useRouter();
	return (
		<section className="w-screen h-screen flex justify-center">
			<main className="py-20 flex flex-col items-center">
				<h1 className="text-3xl">Hello, {"Williams"}! You're almost there!</h1>
				<p className="text-holmes-font-light-grey my-2">
					We only need a few info to review before unlocking your full access
				</p>

				{/* <div className="my-4">-------------------</div> */}

				{CompleteVerifcationList.map((detail, index) => {
					return (
						<div className="py-2 px-4 bg-white shadow-lg my-3 flex justify-between items-center rounded-lg">
							<div>
								<p className="text-lg my-1">{detail.headingText}</p>
								<p className=" text-holmes-font-light-grey">{detail.subText}</p>
							</div>

							{detail.completed ? (
								<motion.button
									whileHover={{
										scale: 1.1,
										transition: { duration: 0.5 },
									}}
									whileTap={{ scale: 0.9 }}
									className={`px-4 py-2 my-4 ml-4 rounded-md text-holmes-primary-blue bg-holmes-background-light-grey shadow-md flex items-center`}
									onClick={(event) => {
										event.preventDefault();
										router.push(detail.link);
									}}
								>
									<Image alt="edit" src={editPencil} className="mr-1" />
									Edit
								</motion.button>
							) : (
								<motion.button
									whileHover={{
										scale: 1.1,
										transition: { duration: 0.5 },
									}}
									whileTap={{ scale: 0.9 }}
									className={`px-4 py-2 my-4 ml-4 rounded-md text-white bg-holmes-primary-dark-brown `}
									onClick={() => {
										router.push(detail.link);
									}}
								>
									Proceed
								</motion.button>
							)}
						</div>
					);
				})}

				{/* Cancel/continue */}
				<div className="flex justify-center my-10">
					<motion.button
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						className={`px-4 py-2 mx-4 ml-4 rounded-md text-[#435769] bg-holmes-background-light-grey shadow-md`}
						onClick={() => {
							("");
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
						onClick={() => {
							("");
						}}
					>
						Continue
					</motion.button>
				</div>
			</main>
		</section>
	);
};

export default VerifyUserDetails;

