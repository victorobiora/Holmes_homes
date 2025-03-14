import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Footer from "@/app/user/welcome/footer/footer";
import PhoneInput from "react-phone-input-2";
import { useFormikContext } from "formik";
import holmesIcon from "@/assets/images/general/holmes-logo.png";
import Inputs from "@/library/inputs/inputs";
import Eye from "@/assets/images/general/eye.svg";
import SlashEye from "@/assets/images/general/slash-eye.svg";
import bgImage from "@/assets/images/general/holmes-image2.jpeg";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { signUpHandler } from "../helpers";
import { motion } from "framer-motion";
import googleIcon from "@/assets/images/general/google-icon.svg";
import formUserIcon from "@/assets/images/general/small-user-profile-icon.svg";
import SendVerifyEmail from "./send-verify-email";
import { newPasswordSchema, confirmPasswordSchema } from "@/utils/yupschemas";

import ProfileToggleComponent from "@/library/buttons/profile-type-button";

const SignUpFormTest = () => {
	const profileTypes = ["user", "agent", "affiliate"];
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [signUpRequestSuccessful, setSignUpRequestSuccessful] = useState<
		null | boolean
	>(null);

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	const toggleConfirmPasswordVisibility = () => {
		setConfirmPasswordVisible(!confirmPasswordVisible);
	};





	const DesktopView = ({
		handleSubmit,
		errors,
		touched,
		values,
		setFieldValue,
		isValid,
		dirty,
		setFieldTouched,
	}) => {
		return (
			<>
				<section className="TabletScreen:hidden MobileScreen:hidden">
					{/* Form Section */}
					<div className="flex justify-center px-20 mt-10">
						<section className=" relative w-auto rounded-xl py-10  bg-white border-2">
							<p className="text-2xl font-bold w-[30rem] px-6 text-start">
								Sign Up To Enjoy Luxury Like Never Before
							</p>

							<Form className="relative flex flex-col items-center rounded-2xl z-50  p-6">
								{/* First name */}
								<div className="w-full my-2">
									<div
										className={` flex bg-[#F4F6F9]  rounded-md border ${
											touched.first_name && errors.first_name
												? "border-red-500"
												: touched.first_name && !errors.first_name
													? "border-green-500 shadow-md"
													: "border-gray-200"
										}`}
									>
										<div className=" w-[10%] flex items-center p-2 rounded-tl-md rounded-bl-md rounded-">
											<Image
												src={formUserIcon}
												alt="User Icon"
												className="w-full h-5"
											/>
										</div>

										<Field
											type="textbox"
											className={`py-[0.85rem] w-[90%] px-3 bg-transparent border-none focus:bg-white rounded-md focus:ring-0 focus:outline-none ${
												touched.first_name && errors.first_name
													? "text-red-500" // Invalid field
													: touched.first_name && !errors.first_name
														? "text-green-500" // Valid field
														: "" // Default
											}`}
											name="first_name"
											placeholder="First Name"
										/>
									</div>
									<ErrorMessage
										name="first_name"
										render={(errorText) => (
											<div className=" mt-2 pl-1 text-left text-red-400">
												{errorText}
											</div>
										)}
									/>
								</div>

								{/* Last Name */}
								<div className="w-full my-2">
									<div
										className={` flex bg-[#F4F6F9]  rounded-md border ${
											touched.last_name && errors.last_name
												? "border-red-500"
												: touched.last_name && !errors.last_name
													? "border-green-500 shadow-md"
													: "border-gray-200"
										}`}
									>
										<div className=" w-[10%] flex items-center p-2 rounded-tl-md rounded-bl-md rounded-">
											<Image
												src={formUserIcon}
												alt="User Icon"
												className="w-full h-5"
											/>
										</div>

										<Field
											type="textbox"
											className={`py-[0.85rem] w-[90%] px-3 bg-transparent border-none focus:bg-white rounded-md focus:ring-0 focus:outline-none ${
												touched.last_name && errors.last_name
													? "text-red-500" // Invalid field
													: touched.last_name && !errors.last_name
														? "text-green-500" // Valid field
														: "" // Default
											}`}
											name="last_name"
											placeholder="Last Name"
										/>
									</div>
									<ErrorMessage
										name="last_name"
										render={(errorText) => (
											<div className=" mt-2 pl-1 text-left text-red-400">
												{errorText}
											</div>
										)}
									/>
								</div>
								{/* Phone Number */}
								<div className="my-2 w-full">
									<div>
										<PhoneInput
											country={"ng"}
											value={values.phone_number}
											onChange={(num) => {
												setFieldValue("phone_number", num);
												setFieldTouched("phone_number", true);
											}}
											inputProps={{
												name: "phone_number",
												required: true,
												autoFocus: true,
											}}
											containerStyle={{ width: "100%" }}
											inputStyle={{
												width: "100%",
												height: "55px",
												borderRadius: "8px",
												color:
													touched.phone_number && errors.phone_number
														? "red"
														: touched.phone_number && !errors.phone_number
															? "#22c55e"
															: "black",
												outline: "none",
												boxShadow:
													touched.phone_number && !errors.phone_number
														? "0 4px 6px rgba(72, 187, 120, 0.2)"
														: "none",
												borderColor:
													touched.phone_number && errors.phone_number
														? "red"
														: touched.phone_number && !errors.phone_number
															? "#22c55e"
															: "#D4D4D8",
												paddingLeft: "50px",
											}}
											buttonStyle={{
												borderRadius: "8px 0 0 8px",
												borderColor: "#D4D4D8",
											}}
										/>
									</div>

									<ErrorMessage
										name="phone_number"
										render={(errorText) => (
											<div className=" mt-2 pl-1 text-left text-red-400">
												{errorText}
											</div>
										)}
									/>
								</div>
								{/* Email Address */}
								<div className="w-full my-2">
									<div
										className={` flex bg-[#F4F6F9]  rounded-md border ${
											touched.email && errors.email
												? "border-red-500"
												: touched.email && !errors.email
													? "border-green-500 shadow-md"
													: "border-gray-200"
										}`}
									>
										<div className=" w-[10%] flex items-center p-2 rounded-tl-md rounded-bl-md rounded-">
											<Image
												src={formUserIcon}
												alt="User Icon"
												className="w-full h-5"
											/>
										</div>

										<Field
											type="email"
											className={`py-[0.85rem] w-[90%] px-3 bg-transparent border-none rounded-md focus:bg-white focus:ring-0 focus:outline-none ${
												touched.email && errors.email
													? "text-red-500" // Invalid field
													: touched.email && !errors.email
														? "text-green-500" // Valid field
														: "" // Default
											}`}
											name="email"
											placeholder="Email address"
										/>
									</div>
									<ErrorMessage
										name="email"
										render={(errorText) => (
											<div className=" mt-2 pl-1 text-left text-red-400">
												{errorText}
											</div>
										)}
									/>
								</div>

								{/* Password */}
								<div className="relative w-full my-2">
									<div className="w-full relative">
										<Field
											type={passwordVisible ? "text" : "password"}
											name={"password"}
											placeholder="Password"
											className={`py-[0.85rem] w-full rounded-md border border-gray-200 bg-[#F4F6F9] px-3 focus:bg-white focus:ring-0 focus:outline-none  ${
												touched.password && errors.password
													? "border-red-500"
													: touched.password && !errors.password
														? "border-green-500 shadow-md"
														: "border-gray-200"
											}`}
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
									<ErrorMessage
										name="password"
										render={(errorText) => (
											<div className=" mt-2 pl-1 max-w-[28rem] text-left text-red-400">
												{errorText}
											</div>
										)}
									/>
								</div>

								{/* Confirm Password */}
								<div className="relative w-full my-2">
									<div className="w-full relative">
										<Field
											type={confirmPasswordVisible ? "text" : "password"}
											name={"confirm_password"}
											placeholder="Confirm Password"
											className={`py-[0.85rem] w-full rounded-md border border-gray-200 bg-[#F4F6F9] px-3 focus:bg-white focus:ring-0 focus:outline-none  ${
												touched.confirm_password && errors.confirm_password
													? "border-red-500"
													: touched.confirm_password && !errors.confirm_password
														? "border-green-500 shadow-md"
														: "border-gray-200"
											}`}
										/>
										<div
											className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
											onClick={toggleConfirmPasswordVisibility}
										>
											{confirmPasswordVisible ? (
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
									<ErrorMessage
										name="confirm_password"
										render={(errorText) => (
											<div className=" mt-2 pl-1 max-w-[28rem] text-left text-red-400">
												{errorText}
											</div>
										)}
									/>
								</div>

								<div className=" bg-holmes-font-grey w-[80%] h-[0.5px] my-2"></div>
								{/* choosing customer type */}
								<div className="my-3 w-full">
									<div className="flex flex-col justify-center items-center">
										<p className="font-bold text-lg">
											Choose Your Profile Type
										</p>
										<p className="text-sm text-holmes-font-grey">
											How are you planning to use holmes?
										</p>
									</div>

									<div className="flex gap-2 justify-center w-full my-3">
										{/* <div className="] p-3 border flex items-center justify-center"></div> */}
										{profileTypes.map((item, index) => {
											return (
												<ProfileToggleComponent
													key={index}
													name={item}
													selectedType={values.profile_type}
													setChecked={(selected) =>
														setFieldValue("profile_type", selected)
													}
												/>
											);
										})}
									</div>
								</div>

								<div className="p-3 bg-holmes-background-grey text-holmes-primary-blue flex gap-3 items-center">
									<Field
										type="checkbox"
										name="recieve_updates"
										onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
											setFieldValue("recieve_updates", event.target.checked)
										}
										className="mr-2 checked:bg-holmes-primary-blue focus:ring-0 focus:checked:bg-holmes-primary-blue cursor-pointer"
									/>

									<p className="text-sm max-w-[25rem]">
										I agree to regular updates of property listings, new
										projects development from holmes. (You can unsubscribe or
										update your preferences at any time)
									</p>
								</div>
								{/* sign up Button */}
								<div className="relative w-full mt-5 mb-3">
									<motion.button
										type="submit"
										title="Sign Up"
										className={`bg-holmes-primary-dark-brown flex justify-center w-full font-[800] text-[16px] text-white rounded-[8px] py-[0.85rem] ${
											isValid && dirty ? "" : "opacity-50 cursor-not-allowed"
										}`}
										disabled={!(isValid && dirty)} // Button is disabled if the form is invalid or untouched
										onClick={(event) => handleSubmit(event)} // Submit form on click
									>
										{isLoading ? (
											<div className="loader"></div> // Loading indicator when processing
										) : (
											<p className="text-lg">Sign Up</p> // Default button text
										)}
									</motion.button>
								</div>
								{/* Sign Up with google button */}
								<div className="relative w-full mt-5 mb-3 ">
									<motion.button
										type="submit"
										title="Google Sign up"
										className={`bg-white border w-full font-[800] text-[16px] text-black rounded-[8px] py-[0.85rem] flex justify-center`}
										onClick={() => {}}
									>
										<span className="mx-3 h-full w-6">
											<Image
												src={googleIcon}
												alt="google-sign-up"
												className="w-full h-full"
											/>
										</span>
										Sign Up with Google
									</motion.button>
								</div>
								{/* Sign In call to account */}
								<div className="my-4  text-center">
									Already have an account?{" "}
									<span
										className="font-bold cursor-pointer underline
				"
										onClick={() => {}}
									>
										Sign in
									</span>
								</div>
								<div className="my-6  text-center">
									By clicking "Sign Up", you agree to <br />
									<span
										className="font-bold cursor-pointer underline
				"
										onClick={() => {}}
									>
										holmes's Terms of Service
									</span>{" "}
									and{" "}
									<span
										className="font-bold cursor-pointer underline
				"
										onClick={() => {}}
									>
										Privacy Policy
									</span>
								</div>
							</Form>
						</section>
					</div>

					<Footer />
				</section>
			</>
		);
	};

	const TabletMobileView = ({
		handleSubmit,
		errors,
		touched,
		values,
		setFieldValue,
		isValid,
		dirty,
		setFieldTouched,
	}) => {
		return (
			<section className=" TabletScreen:h-screen  DesktopScreen:hidden">
				{/* Form Section */}
				<div className="flex justify-center px-20 MobileScreen:px-10 mt-10">
					<section className=" relative w-auto min-w-full rounded-xl py-10  bg-white border-2">
						<p className="text-2xl font-bold  px-6 text-start">
							Sign Up To Enjoy Luxury Like Never Before
						</p>

						<Form className="relative flex flex-col items-center rounded-2xl z-50  p-6">
							{/* First name */}
							<div className="w-full my-2">
								<div
									className={` flex bg-[#F4F6F9]  rounded-md border ${
										touched.first_name && errors.first_name
											? "border-red-500"
											: touched.first_name && !errors.first_name
												? "border-green-500 shadow-md"
												: "border-gray-200"
									}`}
								>
									<div className=" w-[10%] flex items-center p-2 rounded-tl-md rounded-bl-md rounded-">
										<Image
											src={formUserIcon}
											alt="User Icon"
											className="w-full h-5"
										/>
									</div>

									<Field
										type="textbox"
										className={`py-[0.85rem] w-[90%] px-3 bg-transparent border-none focus:bg-white rounded-md focus:ring-0 focus:outline-none ${
											touched.first_name && errors.first_name
												? "text-red-500" // Invalid field
												: touched.first_name && !errors.first_name
													? "text-green-500" // Valid field
													: "" // Default
										}`}
										name="first_name"
										placeholder="First Name"
									/>
								</div>
								<ErrorMessage
									name="first_name"
									render={(errorText) => (
										<div className=" mt-2 pl-1 text-left text-red-400">
											{errorText}
										</div>
									)}
								/>
							</div>

							{/* Last Name */}
							<div className="w-full my-2">
								<div
									className={` flex bg-[#F4F6F9]  rounded-md border ${
										touched.last_name && errors.last_name
											? "border-red-500"
											: touched.last_name && !errors.last_name
												? "border-green-500 shadow-md"
												: "border-gray-200"
									}`}
								>
									<div className=" w-[10%] flex items-center p-2 rounded-tl-md rounded-bl-md rounded-">
										<Image
											src={formUserIcon}
											alt="User Icon"
											className="w-full h-5"
										/>
									</div>

									<Field
										type="textbox"
										className={`py-[0.85rem] w-[90%] px-3 bg-transparent border-none focus:bg-white rounded-md focus:ring-0 focus:outline-none ${
											touched.last_name && errors.last_name
												? "text-red-500" // Invalid field
												: touched.last_name && !errors.last_name
													? "text-green-500" // Valid field
													: "" // Default
										}`}
										name="last_name"
										placeholder="Last Name"
									/>
								</div>
								<ErrorMessage
									name="last_name"
									render={(errorText) => (
										<div className=" mt-2 pl-1 text-left text-red-400">
											{errorText}
										</div>
									)}
								/>
							</div>
							{/* Phone Number */}
							<div className="my-2 w-full">
								<div>
									<PhoneInput
										country={"ng"}
										value={values.phone_number}
										onChange={(num) => {
											setFieldValue("phone_number", num);
											setFieldTouched("phone_number", true);
										}}
										inputProps={{
											name: "phone_number",
											required: true,
											autoFocus: true,
										}}
										containerStyle={{ width: "100%" }}
										inputStyle={{
											width: "100%",
											height: "55px",
											borderRadius: "8px",
											color:
												touched.phone_number && errors.phone_number
													? "red"
													: touched.phone_number && !errors.phone_number
														? "#22c55e"
														: "black",
											outline: "none",
											boxShadow:
												touched.phone_number && !errors.phone_number
													? "0 4px 6px rgba(72, 187, 120, 0.2)"
													: "none",
											borderColor:
												touched.phone_number && errors.phone_number
													? "red"
													: touched.phone_number && !errors.phone_number
														? "#22c55e"
														: "#D4D4D8",
											paddingLeft: "50px",
										}}
										buttonStyle={{
											borderRadius: "8px 0 0 8px",
											borderColor: "#D4D4D8",
										}}
									/>
								</div>

								<ErrorMessage
									name="phone_number"
									render={(errorText) => (
										<div className=" mt-2 pl-1 text-left text-red-400">
											{errorText}
										</div>
									)}
								/>
							</div>
							{/* Email Address */}
							<div className="w-full my-2">
								<div
									className={` flex bg-[#F4F6F9]  rounded-md border ${
										touched.email && errors.email
											? "border-red-500"
											: touched.email && !errors.email
												? "border-green-500 shadow-md"
												: "border-gray-200"
									}`}
								>
									<div className=" w-[10%] flex items-center p-2 rounded-tl-md rounded-bl-md rounded-">
										<Image
											src={formUserIcon}
											alt="User Icon"
											className="w-full h-5"
										/>
									</div>

									<Field
										type="email"
										className={`py-[0.85rem] w-[90%] px-3 bg-transparent border-none rounded-md focus:bg-white focus:ring-0 focus:outline-none ${
											touched.email && errors.email
												? "text-red-500" // Invalid field
												: touched.email && !errors.email
													? "text-green-500" // Valid field
													: "" // Default
										}`}
										name="email"
										placeholder="Email address"
									/>
								</div>
								<ErrorMessage
									name="email"
									render={(errorText) => (
										<div className=" mt-2 pl-1 text-left text-red-400">
											{errorText}
										</div>
									)}
								/>
							</div>

							{/* Password */}
							<div className="relative w-full my-2">
								<div className="w-full relative">
									<Field
										type={passwordVisible ? "text" : "password"}
										name={"password"}
										placeholder="Password"
										className={`py-[0.85rem] w-full rounded-md border border-gray-200 bg-[#F4F6F9] px-3 focus:bg-white focus:ring-0 focus:outline-none  ${
											touched.password && errors.password
												? "border-red-500"
												: touched.password && !errors.password
													? "border-green-500 shadow-md"
													: "border-gray-200"
										}`}
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
								<ErrorMessage
									name="password"
									render={(errorText) => (
										<div className=" mt-2 pl-1 max-w-[28rem] text-left text-red-400">
											{errorText}
										</div>
									)}
								/>
							</div>

							{/* Confirm Password */}
							<div className="relative w-full my-2">
								<div className="w-full relative">
									<Field
										type={confirmPasswordVisible ? "text" : "password"}
										name={"confirm_password"}
										placeholder="Confirm Password"
										className={`py-[0.85rem] w-full rounded-md border border-gray-200 bg-[#F4F6F9] px-3 focus:bg-white focus:ring-0 focus:outline-none  ${
											touched.confirm_password && errors.confirm_password
												? "border-red-500"
												: touched.confirm_password && !errors.confirm_password
													? "border-green-500 shadow-md"
													: "border-gray-200"
										}`}
									/>
									<div
										className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
										onClick={toggleConfirmPasswordVisibility}
									>
										{confirmPasswordVisible ? (
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
								<ErrorMessage
									name="confirm_password"
									render={(errorText) => (
										<div className=" mt-2 pl-1 max-w-[28rem] text-left text-red-400">
											{errorText}
										</div>
									)}
								/>
							</div>

							<div className=" bg-holmes-font-grey w-[80%] h-[0.5px] my-2"></div>
							{/* choosing customer type */}
							<div className="my-3 w-full">
								<div className="flex flex-col justify-center items-center">
									<p className="font-bold text-lg">Choose Your Profile Type</p>
									<p className="text-sm text-holmes-font-grey">
										How are you planning to use holmes?
									</p>
								</div>
								<div>
									<div className="flex gap-2 justify-center w-full my-3 MobileScreen:flex-col">
										{/* <div className="] p-3 border flex items-center justify-center"></div> */}
										{profileTypes.map((item, index) => {
											return (
												<ProfileToggleComponent
													key={index}
													name={item}
													selectedType={values.profile_type}
													setChecked={(selected) =>
														setFieldValue("profile_type", selected)
													}
												/>
											);
										})}
									</div>
									<ErrorMessage
										name="profile_type"
										render={(errorText) => (
											<div className=" mt-2 pl-1 text-left text-red-400">
												{errorText}
											</div>
										)}
									/>
								</div>
							</div>

							<div className="p-3 bg-holmes-background-grey text-holmes-primary-blue flex gap-3 items-center">
								<Field
									type="checkbox"
									name="recieve_updates"
									onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
										setFieldValue("recieve_updates", event.target.checked)
									}
									className="mr-2 checked:bg-holmes-primary-blue focus:ring-0 focus:checked:bg-holmes-primary-blue cursor-pointer"
								/>

								<p className="text-sm max-w-[25rem]">
									I agree to regular updates of property listings, new projects
									development from holmes. (You can unsubscribe or update your
									preferences at any time)
								</p>
							</div>
							{/* sign up Button */}
							<div className="relative w-full mt-5 mb-3">
								<motion.button
									type="submit"
									title="Sign Up"
									className={`bg-holmes-primary-dark-brown flex justify-center w-full font-[800] text-[16px] text-white rounded-[8px] py-[0.85rem] ${
										isValid && dirty ? "" : "opacity-50 cursor-not-allowed"
									}`}
									disabled={!(isValid && dirty)}
									onClick={(event) => handleSubmit(event)}
								>
									{isLoading ? (
										<div className="loader"></div>
									) : (
										<p className="text-lg">Sign Up</p>
									)}
								</motion.button>
							</div>
							{/* Sign Up with google button */}
							<div className="relative w-full mt-5 mb-3 ">
								<motion.button
									type="submit"
									title="Google Sign up"
									className={`bg-white border w-full font-[800] text-[16px] text-black rounded-[8px] py-[0.85rem] flex justify-center`}
									onClick={(event) => {
										event?.preventDefault();
									}}
								>
									<span className="mx-3 h-full w-6">
										<Image
											src={googleIcon}
											alt="google-sign-up"
											className="w-full h-full"
										/>
									</span>
									Sign Up with Google
								</motion.button>
							</div>
							{/* Sign In call to account */}
							<div className="my-4  text-center">
								Already have an account?{" "}
								<span
									className="font-bold cursor-pointer underline
				"
									onClick={() => {}}
								>
									Sign in
								</span>
							</div>
							<div className="my-6  text-center">
								By clicking "Sign Up", you agree to <br />
								<span
									className="font-bold cursor-pointer underline
				"
									onClick={() => {}}
								>
									holmes's Terms of Service
								</span>{" "}
								and{" "}
								<span
									className="font-bold cursor-pointer underline
				"
									onClick={() => {}}
								>
									Privacy Policy
								</span>
							</div>
						</Form>
					</section>
				</div>

				<Footer />
			</section>
		);
	};

	return (
		<>
			{signUpRequestSuccessful === null ? (
				<Formik
					initialValues={{
						recieve_updates: "",
						first_name: "",
						last_name: "",
						phone_number: "",
						email: "",
						password: "",
						confirm_password: "",
						profile_type: "",
					}}
					validationSchema={Yup.object({
						first_name: Yup.string()
							.required("Enter your first name")
							.min(2, "Too short")
							.max(70, "Too long"),
						last_name: Yup.string()
							.required("Enter your last name")
							.min(2, "Too short")
							.max(70, "Too long"),
						email: Yup.string()
							.email("Invalid email")
							.required("Email is Needed"),
						password: newPasswordSchema,
						confirm_password: confirmPasswordSchema,
						phone_number: Yup.string()
							.matches(
								/^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\(?(\d{1,4})\)?[\s-]?\d{1,4}[\s-]?\d{1,4}$/,
								"Invalid phone number",
							)
							.min(6, "Phone number too short")
							.required("Phone number is required"),
						profile_type: Yup.string().required("Choose a type"),
					})}
					onSubmit={(values) => {
						console.log("Form submitted:", values);
						const formData = {
							email: values.email,
							password: values.password,
							profile_type: values.profile_type,
							phone_number: values.phone_number,
							first_name: values.first_name,
							last_name: values.last_name,
						};

						signUpHandler(formData, router, setIsLoading, toast);
					}}
				>
					{({
						handleSubmit,
						errors,
						touched,
						values,
						setFieldValue,
						dirty,
						isValid,
						setFieldTouched,
					}) => {
						return (
							<>
								<TabletMobileView
									handleSubmit={handleSubmit}
									isValid={isValid}
									dirty={dirty}
									values={values}
									errors={errors}
									touched={touched}
									setFieldValue={setFieldValue}
									setFieldTouched={setFieldTouched}
								/>
								<DesktopView
									dirty={dirty}
									isValid={isValid}
									handleSubmit={handleSubmit}
									values={values}
									errors={errors}
									touched={touched}
									setFieldValue={setFieldValue}
									setFieldTouched={setFieldTouched}
								/>
							</>
						);
					}}
				</Formik>
			) : (
				<SendVerifyEmail emailName="chikechidi@gmail.com" />
			)}
		</>
	);
};

export default SignUpFormTest;

