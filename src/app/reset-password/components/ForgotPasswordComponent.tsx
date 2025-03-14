"use client";

import holmesLogo from "@/assets/images/general/holmes-logo.png";
import Image from "next/image";
import Inputs from "@/library/inputs/inputs";
import { motion } from "framer-motion";
import { useState } from "react";
import ResetPassEmailSentComponent from "./ResetPassEmailSent";

const ForgotPasswordComponent = () => {
	const [isRequestSuccessful, setIsRequestSuccessful] = useState(false);


	return (
		<>
			{isRequestSuccessful ? (
				<ResetPassEmailSentComponent emailName="chike@gmail.com" />
			) : (
				<section className="flex flex-col justify-center items-center">
					<Image src={holmesLogo} alt="logo" className="w-20 h-20" />

					<form className="my-8 bg-white shadow-md flex-center-col w-[50%] p-5">
						<div className="text-2xl font-bold">Forgot Password</div>
						<p className="text-holmes-primary-blue text-center my-3">
							Enter the email address you registered with and we will send you a
							link to create a new password.
						</p>

						{/* Email Address */}
						<div className="my-3 w-full">
							<Inputs
								inputType="text"
								placeholder="Email Address"
								Name="emailAddress"
								className="bg-holmes-background-light-grey border-none w-full py-3"
							/>
						</div>

						<motion.button
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.5 },
							}}
							whileTap={{ scale: 0.9 }}
							className={`px-4 py-2 w-full rounded-md text-white bg-holmes-primary-dark-brown my-3`}
							onClick={() => {
								("");
							}}
						>
							Send Link
						</motion.button>

						<div className="my-4 text-holmes-primary-blue text-center">
							Remember Password?{" "}
							<span
								className="font-bold cursor-pointer underline
				"
								onClick={() => {}}
							>
								Sign in now
							</span>
						</div>
					</form>
				</section>
			)}
		</>
	);
};

export default ForgotPasswordComponent;

