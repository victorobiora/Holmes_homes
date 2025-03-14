"use client";

import Image from "next/image";
import greyCheck from "@/assets/images/general/grey-check-icon.svg";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { nonAuthRoutes } from "@/utils/urls";

const Page = () => {
	const router = useRouter();


	return (
		<section className="flex justify-center items-center w-screen h-screen">
			<div className="bg-white w-[35%] flex flex-col items-center justify-center shadow-md px-5">
				<Image src={greyCheck} alt="check" />
				<div className="text-3xl font-bold  mt-3 mb-2 text-center">Account Created Successfully</div>
				<p className="mt-1 mb-4 text-holmes-primary-blue">We are excited to have you experience luxury with holmes</p>

				<motion.button
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.5 },
					}}
					whileTap={{ scale: 0.9 }}
					className={`px-4 py-2 w-full rounded-md text-white bg-holmes-primary-dark-brown my-3`}
					onClick={(event) => {
				event.preventDefault()
				router.push(nonAuthRoutes.signIn)
					}}
				>
					Let's go
				</motion.button>
			</div>
		</section>
	);
};

export default Page;

