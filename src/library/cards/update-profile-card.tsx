import { Formik, Form, ErrorMessage, Field } from "formik";
import { AnimatePresence } from "framer-motion";

import downIcon from "@/assets/images/general/down-icon-black.svg";
import { DatePicker, Switch } from "@tremor/react";
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
import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";

import { motion } from "framer-motion";
import googleIcon from "@/assets/images/general/google-icon.svg";
import formUserIcon from "@/assets/images/general/small-user-profile-icon.svg";
import { newPasswordSchema, confirmPasswordSchema } from "@/utils/yupschemas";
import { OTPSixDigitDataType } from "@/app/types";
import { OTPSixDigitDataList } from "@/app/home.dto";
import UpdateEmailOTP from "../modals/update-email-otp";
import SuccessfulModal from "../modals/successful";

const UpgradeProfileCard: React.FC<{
	removeModal: () => void;
}> = ({ removeModal }) => {
	const [OTPFormData, setOTPFormData] =
		useState<OTPSixDigitDataType>(OTPSixDigitDataList);
	const [isOTPSent, setIsOTPSent] = useState(false);

	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [updateProfileRequestSuccessful, setUpdateProfileSuccessful] = useState<
		null | boolean
	>(null);

	const [Gender, setGender] = useState<string | null>("Male");
	const [viewGenderFields, setViewGenderFields] = useState(false);
	const GenderRef = useRef<HTMLDivElement | null>(null);

	// Handle clicks outside Gender fields
	useEffect(() => {
		if(typeof window !== 'undefined'){
				const handleClickOutsideGender = (event: MouseEvent) => {
			if (
				viewGenderFields &&
				GenderRef.current &&
				!GenderRef.current.contains(event.target as Node)
			) {
				setViewGenderFields(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutsideGender);

		return () => {
			document.removeEventListener("mousedown", handleClickOutsideGender);
		};	
		}

	}, [viewGenderFields]);

	return (
		<>
			{!isOTPSent && updateProfileRequestSuccessful === null ? (
				<section
					className="flex flex-col bg-white DesktopScreen:h-auto h-[80%] overflow-x-scroll DesktopScreen:overflow-x-auto w-[50%] TabletScreen:w-[80%] MobileScreen:w-[95%] rounded-md  p-4"
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<div className="py-4 px-6">
						<h2 className="text-xl font-semibold">Your Personal Details</h2>
						<div className="text-holmes-font-grey">
							Edit your personal details on holmes.
						</div>
					</div>
					<Formik
						initialValues={{
							first_name: "",
							last_name: "",
							phone_number: "",
							email: "",
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
								profile_type: values.profile_type,
								phone_number: values.phone_number,
								first_name: values.first_name,
								last_name: values.last_name,
							};
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
								<Form className="relative flex flex-col rounded-2xl z-50  DesktopScreen:p-6 p-3">
									{/* first and last name */}
									<div className="flex flex-wrap justify-between my-2 DesktopScreen:flex-row flex-col">
										{/* First name */}
										<div className="DesktopScreen:w-[48%]">
											<div className="my-2">First name</div>
											<div
												className={` flex bg-[#F4F6F9]  rounded-md border ${
													touched.first_name && errors.first_name
														? "border-red-500"
														: touched.first_name && !errors.first_name
															? "border-green-500 shadow-md"
															: "border-gray-200"
												}`}
											>
												<Field
													type="textbox"
													className={`py-[0.85rem] w-full px-3 bg-transparent border-none focus:bg-white rounded-md focus:ring-0 focus:outline-none ${
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
										<div className="DesktopScreen:w-[48%]">
											<div className="my-2">Last name</div>
											<div
												className={` flex bg-[#F4F6F9]  rounded-md border ${
													touched.last_name && errors.last_name
														? "border-red-500"
														: touched.last_name && !errors.last_name
															? "border-green-500 shadow-md"
															: "border-gray-200"
												}`}
											>
												<Field
													type="textbox"
													className={`py-[0.85rem] w-full px-3 bg-transparent border-none focus:bg-white rounded-md focus:ring-0 focus:outline-none ${
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
									</div>

									{/* phone and email */}
									<div className="flex flex-wrap justify-between my-2 DesktopScreen:flex-row flex-col">
									<div className="DesktopScreen:w-[48%]">
											<div className="my-2">Phone Number</div>

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
										<div className="DesktopScreen:w-[48%]">
											<div className="my-2">Email</div>
											<div
												className={` flex bg-[#F4F6F9]  rounded-md border ${
													touched.email && errors.email
														? "border-red-500"
														: touched.email && !errors.email
															? "border-green-500 shadow-md"
															: "border-gray-200"
												}`}
											>
												<Field
													type="email"
													className={`py-[0.85rem] w-full px-3 bg-transparent border-none rounded-md focus:bg-white focus:ring-0 focus:outline-none ${
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
									</div>
									{/* date of birth and Gender */}
									<div className="flex flex-wrap justify-between my-2 DesktopScreen:flex-row flex-col">
										{/* Date of Birth */}
										<div className="DesktopScreen:w-[48%]">
											<div className="my-2">Date of Birth</div>
											<DatePicker className="w-full datepicker-css" />
										</div>
										<div className="DesktopScreen:w-[48%]">
											<div className="my-2">Gender</div>
											<div
												className=" DesktopScreen:my-3 relative"
												ref={GenderRef}
											>
												<div>
													<div
														className={`DesktopScreen:pl-3 DesktopScreen:pr-10 whitescape-nowrap DesktopScreen:py-3 py-2 px-3 cursor-pointer bg-[#F4F6F9] border border-gray-200 rounded-md w-full flex items-center`}
														onClick={() => {
															setViewGenderFields((prevState) => !prevState);
														}}
													>
														<div className="flex items-end mx-3">
															<Image src={downIcon} alt="down-icon" />
														</div>
														{Gender}
													</div>
												</div>
												<AnimatePresence>
													{viewGenderFields && (
														<motion.div
															initial={{ opacity: 0, scale: 0.9 }}
															animate={{ opacity: 1, scale: 1 }}
															exit={{ opacity: 0, scale: 0.9 }}
															transition={{ duration: 0.2 }}
															className="bg-holmes-background-light-grey w-full  absolute top-[120%] flex flex-col text-md z-[2500]"
														>
															{["Male", "Female", `I'd rather not say`].map(
																(item, index) => {
																	return (
																		<div
																			key={index}
																			className={`py-2 px-3 text-center  hover:bg-white hover:border-black hover:border-[0.2px] hover:rounded-sm cursor-pointer whitespace-nowrap ${Gender === item ? "bg-white border-black border rounded-sm" : ""}`}
																			onClick={() => {
																				setGender(item);
																				setViewGenderFields(false);
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
										</div>
									</div>
									{/* submit or cancel */}
									<div className="flex justify-end gap-4 my-4">
										<motion.button
											className="border border-black p-3 rounded-md"
											onClick={removeModal}
										>
											Cancel
										</motion.button>
										<motion.button className="bg-holmes-primary-dark-brown text-white p-3 rounded-md">
											Save Changes
										</motion.button>
									</div>
								</Form>
							);
						}}
					</Formik>
				</section>
			) : isOTPSent && updateProfileRequestSuccessful ? (
				<SuccessfulModal
					mainText="Changes saved successfully"
					subtext="your changes have been made "
					removeModal={removeModal}
				/>
			) : (
				<UpdateEmailOTP
					removeModal={removeModal}
					setOTPFormData={setOTPFormData}
					OTPFormData={OTPFormData}
				/>
			)}
		</>
	);
};

export default UpgradeProfileCard;

