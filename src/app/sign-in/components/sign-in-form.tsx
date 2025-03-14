"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import holmesIcon from "@/assets/images/general/holmes-logo.png";
import Inputs from "@/library/inputs/inputs";
import Eye from "@/assets/images/general/eye.svg";
import SlashEye from "@/assets/images/general/slash-eye.svg";
import bgImage from "@/assets/images/general/holmes-image2.jpeg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import googleIcon from "@/assets/images/general/google-icon.svg";
import formUserIcon from "@/assets/images/general/small-user-profile-icon.svg";
import { signInHandler } from "../helpers";

const SignInForm = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [isFormValid, setIsFormValid] = useState(false);
	const [SignInRequestSuccessful, setSignInRequestSuccessful] = useState<
		null | boolean
	>(true);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		rememberMe: false,
	});

	const [passwordVisible, setPasswordVisible] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleRememberMe = (e) => {
		setFormData((prevState) => ({
			...prevState,
			rememberMe: e.target.checked,
		}));
	};

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		signInHandler(formData, router, setIsLoading, toast);
	};

	useEffect(() => {
		if (
			formData.email.length > 0 &&
			formData.password.length > 0 &&
			formData.password.trim().length > 0
		) {
			setIsFormValid(true);
		} else {
			setIsFormValid(false);
		}
	}, [formData]);

	const desktopView = () => {
		return (
			<>
				<section className="flex justify-between px-20 py-10 h-screen TabletScreen:hidden MobileScreen:hidden">
					<div className="px-10 py-12 flex flex-col items-center">
						<div className="my-4 mb-8 flex justify-center">
							<Image
								src={holmesIcon}
								alt="Home Icon"
								className="w-[12rem] h-40"
								onClick={() => {
									router.push("/");
								}}
							/>
						</div>

						<h1 className="text-4xl my-2 text-center w-[60%]">
							{" "}
							Welcome! <br /> Sign in To Continue Enjoying Luxury
						</h1>
					</div>
					{/* Form Section */}
					<section className=" relative w-[45%] rounded-xl py-20 flex justify-center items-center">
						<div className="w-full h-full z-40 absolute left-0 top-0">
							<div className="backdrop"></div>
							<Image
								src={bgImage}
								quality={50}
								placeholder="blur"
								alt="bg-image"
								className="object-cover w-full h-full rounded-2xl"
							/>
						</div>
						<form className="relative rounded-2xl z-50 bg-holmes-primary-blue p-6 w-[80%]">
							{/* Email Address */}
							<div className="relative w-full my-2 ">
								{/* <div className=" bg-white absolute z-10 p-2 rounded-tl-md rounded-bl-md rounded-">
						<Image src={formUserIcon} alt="User Icon" className="w-4 h-4" />
					</div> */}
								<Inputs
									className="py-[0.85rem]  w-full rounded-md z-5"
									Id={"emailDesktop"}
									Name="email"
									inputType="email"
									placeholder="Email address"
									onChange={handleInputChange}
									value={formData.email}
								/>
							</div>
							{/* Password */}
							<div className="relative w-full">
								<Inputs
									Id={"passwordDesktop"}
									Name={"password"}
									placeholder="Password"
									className="w-full rounded-[8px] border-[0.6px] py-[0.85rem] border-[#C6C6C6] focus:border-slate-300"
									inputType={passwordVisible ? "text" : "password"}
									onChange={handleInputChange}
									value={formData.password}
								/>
								<div
									className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
									onClick={togglePasswordVisibility}
								>
									{passwordVisible ? (
										<Image
											className="cursor-pointer"
											src={SlashEye}
											alt="Slash Eye"
										/>
									) : (
										<Image className="cursor-pointer" src={Eye} alt="Eye" />
									)}
								</div>
							</div>
							{/* remember me check and forgot password link */}
							<div className="flex justify-between my-2">
								<div className="flex items-center text-white">
									<Inputs
										inputType="checkbox"
										Name="rememberMe"
										onChange={(event) => handleRememberMe(event)}
										className="mr-2  checked:bg-holmes-primary-light-brown focus:ring-0 focus:checked:bg-holmes-primary-light-brown"
									/>
									<p>Remember Me</p>
								</div>
								<div className=" text-holmes-primary-light-brown text-center">
									<span
										className=" cursor-pointer underline
				"
										onClick={() => {}}
									>
										Forgot Password?
									</span>
								</div>
							</div>
							{/* sign in Button */}
							<div className="relative w-full mt-5 mb-3">
								<motion.button
									type="submit"
									title="sign in"
									className={`bg-holmes-primary-dark-brown flex justify-center w-full font-[800] text-[16px] text-white rounded-[8px] py-[0.85rem] ${isFormValid ? "" : "opacity-50 cursor-not-allowed"}`}
									disabled={!isFormValid}
									onClick={(event) => {
										handleSubmit(event);
									}}
								>
						{isLoading ? (
									<div className="loader"></div>
								) : (
									<>
										<p className=" text-lg">Sign In</p>
									</>
								)}
								</motion.button>
							</div>
							{/* sign in with google button */}
							<div className="relative w-full mt-5 mb-3 ">
								<motion.button
									type="submit"
									title="Google sign in"
									className={`bg-white w-full font-[800] text-[16px] text-black rounded-[8px] py-[0.85rem] flex justify-center`}
									onClick={() => {}}
								>
									<span className="mx-3 h-full w-6">
										<Image
											src={googleIcon}
											alt="google-sign-up"
											className="w-full h-full"
										/>
									</span>
									Sign in with Google
								</motion.button>
							</div>
							{/* Sign In call to account */}
							<div className="my-4 text-white text-center">
								Don't have an account?{" "}
								<span
									className="font-bold cursor-pointer underline
				"
									onClick={() => {
										router.push("/sign-up");
									}}
								>
									Sign Up
								</span>
							</div>
						</form>
					</section>
				</section>
			</>
		);
	};

	const tabletMobileView = () => {
		return (
			<section className="flex flex-col justify-center py-10 mt-20 MobileScreen:mt-2 items-center TabletScreen:h-screen  DesktopScreen:hidden gap-3">
				<div className="flex flex-col items-center">
					<div className="flex justify-center">
						<Image
							src={holmesIcon}
							alt="Home Icon"
							className="MobileScreen:w-[5rem] MobileScreen:h-20 w-40 h-30"
							onClick={() => {
								router.push("/");
							}}
						/>
					</div>

					<h1 className="text-2xl my-2 text-center w-[60%]">
						{" "}
						Welcome! <br /> Sign in To Continue Enjoying Luxury
					</h1>
				</div>
				{/* Form Section */}
				<section className=" relative w-[90%] rounded-xl py-20 flex justify-center items-center">
					<div className="w-full h-full z-40 absolute left-0 top-0">
						<div className="backdrop"></div>
						<Image
							src={bgImage}
							quality={50}
							placeholder="blur"
							alt="bg-image"
							className="object-cover w-full h-full rounded-2xl"
						/>
					</div>
					<form className="relative rounded-2xl z-50 bg-holmes-primary-blue p-6 w-[90%]">
						{/* Email Address */}
						<div className="relative w-full my-2 ">
							{/* <div className=" bg-white absolute z-10 p-2 rounded-tl-md rounded-bl-md rounded-">
						<Image src={formUserIcon} alt="User Icon" className="w-4 h-4" />
					</div> */}
							<Inputs
								className="py-[0.85rem]  w-full rounded-md z-5"
								Id="email"
								Name="email"
								inputType="email"
								placeholder="Email address"
								value={formData.email}
								onChange={handleInputChange}
							/>
						</div>
						{/* Password */}
						<div className="relative w-full">
							<Inputs
								Id={"password"}
								Name={"password"}
								placeholder="Password"
								className="w-full rounded-[8px] border-[0.6px] py-[0.85rem] border-[#C6C6C6] focus:border-slate-300"
								inputType={passwordVisible ? "text" : "password"}
								onChange={handleInputChange}
								value={formData.password}
							/>
							<div
								className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
								onClick={togglePasswordVisibility}
							>
								{passwordVisible ? (
									<Image
										className="cursor-pointer"
										src={SlashEye}
										alt="Slash Eye"
									/>
								) : (
									<Image className="cursor-pointer" src={Eye} alt="Eye" />
								)}
							</div>
						</div>
						{/* remember me check and forgot password link */}
						<div className="flex justify-between my-2 text-sm">
							<div className="flex items-center text-white">
								<Inputs
									inputType="checkbox"
									Name="rememberMe"
									onChange={(event) => handleRememberMe(event)}
									className="mr-1  checked:bg-holmes-primary-light-brown focus:ring-0 focus:checked:bg-holmes-primary-light-brown"
								/>
								<p>Remember Me</p>
							</div>
							<div className=" text-holmes-primary-light-brown text-center">
								<span
									className=" cursor-pointer underline
				"
									onClick={() => {}}
								>
									Forgot Password?
								</span>
							</div>
						</div>
						{/* sign in Button */}
						<div className="relative w-full mt-5 mb-3">
							<motion.button
								type="submit"
								title="sign in"
								className={`bg-holmes-primary-dark-brown flex justify-center w-full font-[800] text-[16px] text-white rounded-[8px] py-[0.85rem] ${isFormValid ? "" : "opacity-50 cursor-not-allowed"}`}
								disabled={!isFormValid}
								onClick={(event) => {
									handleSubmit(event)
								}}
							>
								{isLoading ? (
									<div className="loader"></div>
								) : (
									<>
										<p className=" text-lg">Sign In</p>
									</>
								)}
							</motion.button>
						</div>
						{/* sign in with google button */}
						<div className="relative w-full mt-5 mb-3 ">
							<motion.button
								type="submit"
								title="Google sign in"
								className={`bg-white w-full font-[800] text-[16px] text-black rounded-[8px] py-[0.85rem] flex justify-center`}
								onClick={() => {}}
							>
								<span className="mx-3 h-full w-6">
									<Image
										src={googleIcon}
										alt="google-sign-up"
										className="w-full h-full"
									/>
								</span>
								Sign in with Google
							</motion.button>
						</div>
						{/* Sign In call to account */}
						<div className="my-4 text-white text-center">
							Don't have an account?{" "}
							<span
								className="font-bold cursor-pointer underline
				"
								onClick={() => {
									router.push("/sign-up");
								}}
							>
								Sign Up
							</span>
						</div>
					</form>
				</section>
			</section>
		);
	};

	return (
		<>
			{desktopView()}
			{tabletMobileView()}
		</>
	);
};

export default SignInForm;

