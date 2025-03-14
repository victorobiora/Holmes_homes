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
import UpdateEmailOTP from "../../../../../../library/modals/update-email-otp";
import SuccessfulModal from "../../../../../../library/modals/successful";

const ChangeAdminPasswordCard: React.FC<{
	removeModal: () => void;
}> = ({ removeModal }) => {
	const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
	const [newPasswordVisible, setNewPasswordVisible] = useState(false);
	const [confirmNewPasswordVisible, setConfirmNewPasswordVisible] =
		useState(false);
	const [OTPFormData, setOTPFormData] =
		useState<OTPSixDigitDataType>(OTPSixDigitDataList);
	const [isOTPSent, setIsOTPSent] = useState(false);

	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [updateProfileRequestSuccessful, setUpdateProfileSuccessful] = useState<
		null | boolean
	>(null);

	const toggleOldPasswordVisibility = () => {
		setOldPasswordVisible(!oldPasswordVisible);
	};

	const toggleNewPasswordVisibility = () => {
		setNewPasswordVisible(!newPasswordVisible);
	};

	const toggleConfirmNewPasswordVisibility = () => {
		setConfirmNewPasswordVisible(!confirmNewPasswordVisible);
	};

	return (
		<>
			{!isOTPSent && updateProfileRequestSuccessful === null ? (
				<section
					className="flex flex-col bg-white h-auto w-[30%] TabletScreen:w-[70%] MobileScreen:w-[95%] rounded-md  p-6"
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<div className="py-4">
						<h2 className="text-xl font-semibold">Change Password</h2>
						<div className="text-holmes-font-grey">
							Change your holmes Account Password.
						</div>
					</div>
					<Formik
						initialValues={{
							old_password: "",
							password: "",
							confirm_new_password: "",
						}}
						validationSchema={Yup.object({
							old_password: Yup.string()
								.required("Enter your old password")
								.min(2, "Too short")
								.max(70, "Too long"),
							password: newPasswordSchema,
							confirm_new_password: confirmPasswordSchema,
						})}
						onSubmit={(values) => {
							console.log("Form submitted:", values);
							setIsOTPSent(true);
							const formData = {};
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
								<Form className="relative flex flex-col rounded-2xl z-50">
									{/* Old Password */}
									<div className="relative w-full my-2">
										<div className="my-2">Old Password</div>
										<div className="w-full relative">
											<Field
												type={oldPasswordVisible ? "text" : "password"}
												name={"old_password"}
												placeholder="Enter your old Password"
												className={`py-[0.85rem] w-full rounded-md border border-gray-200 bg-[#F4F6F9] px-3 focus:bg-white focus:ring-0 focus:outline-none  ${
													touched.old_password && errors.old_password
														? "border-red-500"
														: touched.old_password && !errors.old_password
															? ""
															: "border-gray-200"
												}`}
											/>
											<div
												className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
												onClick={toggleOldPasswordVisibility}
											>
												{oldPasswordVisible ? (
													<Image
														className="cursor-pointer"
														src={SlashEye}
														alt="Slash Eye"
													/>
												) : (
													<Image
														className="cursor-pointer"
														src={Eye}
														alt="Eye"
													/>
												)}
											</div>
										</div>
										<ErrorMessage
											name="old_password"
											render={(errorText) => (
												<div className=" mt-2 pl-1  text-left text-red-400">
													{errorText}
												</div>
											)}
										/>
									</div>

									{/* Password */}
									<div className="relative w-full my-2">
										<div className="my-2">New Password</div>
										<div className="w-full relative">
											<Field
												type={newPasswordVisible ? "text" : "password"}
												name={"password"}
												placeholder="New Password"
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
												onClick={toggleNewPasswordVisibility}
											>
												{newPasswordVisible ? (
													<Image
														className="cursor-pointer"
														src={SlashEye}
														alt="Slash Eye"
													/>
												) : (
													<Image
														className="cursor-pointer"
														src={Eye}
														alt="Eye"
													/>
												)}
											</div>
										</div>
										<ErrorMessage
											name="password"
											render={(errorText) => (
												<div className=" mt-2 pl-1  text-left text-red-400">
													{errorText}
												</div>
											)}
										/>
									</div>

									{/* Confirm Password */}
									<div className="relative w-full my-2">
										<div className="my-2">Confirm New Password</div>
										<div className="w-full relative">
											<Field
												type={confirmNewPasswordVisible ? "text" : "password"}
												name={"confirm_new_password"}
												placeholder="Confirm Password"
												className={`py-[0.85rem] w-full rounded-md border border-gray-200 bg-[#F4F6F9] px-3 focus:bg-white focus:ring-0 focus:outline-none  ${
													touched.confirm_new_password &&
													errors.confirm_new_password
														? "border-red-500"
														: touched.confirm_new_password &&
															  !errors.confirm_new_password
															? "border-green-500 shadow-md"
															: "border-gray-200"
												}`}
											/>
											<div
												className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
												onClick={toggleConfirmNewPasswordVisibility}
											>
												{confirmNewPasswordVisible ? (
													<Image
														className="cursor-pointer"
														src={SlashEye}
														alt="Slash Eye"
													/>
												) : (
													<Image
														className="cursor-pointer"
														src={Eye}
														alt="Eye"
													/>
												)}
											</div>
										</div>
										<ErrorMessage
											name="confirm_new_password"
											render={(errorText) => (
												<div className="mt-2 pl-1 text-left text-red-400">
													{errorText}
												</div>
											)}
										/>
									</div>
									<div className="text-holmes-primary-dark-brown cursor-pointer">
										Forgot password
									</div>
									{/* submit or cancel */}
									<div className="flex text-sm justify-end gap-4 my-4 w-full">
										<motion.button
											className="border border-black p-2 rounded-md"
											onClick={removeModal}
										>
											Cancel
										</motion.button>

										<motion.button
											type="submit"
											title="verify"
											className={`bg-holmes-primary-dark-brown text-white p-3 rounded-md  disabled:opacity-50 disabled:cursor-not-allowed ${
												isValid && dirty ? "" : "opacity-50 cursor-not-allowed"
											}`}
											disabled={!(isValid && dirty)}
										>
											{isLoading ? (
												<div className="loader"></div>
											) : (
												<p className="text-lg">Verify</p>
											)}
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
					updateSuccessfulModal={setUpdateProfileSuccessful}
					removeModal={removeModal}
					setOTPFormData={setOTPFormData}
					OTPFormData={OTPFormData}
				/>
			)}
		</>
	);
};

export default ChangeAdminPasswordCard;

