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
import PaymentTypeToggleComponent from "@/library/buttons/payment-type-button";
import SuccessfulModal from "@/library/modals/successful";
import SubmittingModal from "@/library/modals/submitting";
import SuccessfulOrderModal from "@/library/modals/successful-order";

const BuyNowCard: React.FC<{
	removeModal: () => void;
}> = ({ removeModal }) => {
	const paymentTypes = [
		{
			type: "card",
			name: "Card",
		},
		{
			type: "paypal",
			name: "Pay with PayPal",
		},
		{
			type: "apple-pay",
			name: "Pay with Apple Pay",
		},
	];
	const [chosenPaymentType, setChosenPaymentType] = useState("card");
	const [OTPFormData, setOTPFormData] =
		useState<OTPSixDigitDataType>(OTPSixDigitDataList);
	const [createOrderRequestMade, setCreateOrderRequestMade] = useState(false);

	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [createOrderRequestSuccessful, setCreateOrderRequestSuccessful] =
		useState<null | boolean>(null);

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
		}	
		};
	}, [viewGenderFields]);

	return (
		<>
			{!createOrderRequestMade && createOrderRequestSuccessful === null ? (
				<section
					className="flex flex-col DesktopScreen:flex-row bg-white DesktopScreen:h-auto h-[90%] DesktopScreen:overflow-auto overflow-y-scroll w-[75%] MobileScreen:w-[95%] rounded-md  p-6"
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					{/* payment details */}
					<div className="py-4 px-2 DesktopScreen:w-1/2 w-full">
						<h2 className="text-xl font-semibold">Make Payment</h2>

						<div className="py-3 border-b">
							<p>Bill to</p>
							<div className="w-full bg-holmes-background-grey p-3">
								Frank Nwakachukwu
							</div>
						</div>

						<div className="py-2">
							<h2 className="text-xl font-semibold "> Payment Details</h2>
							<div className="flex MobileScreen:flex-col gap-2 justify-center w-full my-3">
								{paymentTypes.map((item, index) => {
									return (
										<PaymentTypeToggleComponent
											key={index}
											item={item}
											selectedType={chosenPaymentType}
											setChecked={(selected) => setChosenPaymentType(selected)}
										/>
									);
								})}
							</div>
							{chosenPaymentType === "card" ? (
								<Formik
									initialValues={{
										card_number: "",
										expiration: "",
										cvv: "",
										country: "",
										zip_code: "",
									}}
									validationSchema={Yup.object({
										card_number: Yup.number()
											.required("Enter your cvv")
											.min(2, "Too short")
											.max(70, "Too long"),
										expiration: Yup.string()
											.required("Enter your Card Expiration Date (mm/yy)")
											.min(2, "Too short")
											.max(70, "Too long"),
										cvv: Yup.number()
											.required("Enter your cvv")
											.min(2, "Too short")
											.max(70, "Too long"),
									})}
									onSubmit={(values) => {
										console.log("Form submitted:", values);
										const formData = {
											expiration: values.expiration,
											cvv: values.cvv,
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
											<Form className="relative flex flex-col rounded-2xl z-50  p-2">
												{/* card number type */}
												<div className="w-full">
													<div
														className={` flex bg-[#F4F6F9]  rounded-md border ${
															touched.card_number && errors.card_number
																? "border-red-500"
																: touched.card_number && !errors.card_number
																	? " "
																	: "border-gray-200"
														}`}
													>
														<Field
															type="number"
															className={`py-[0.85rem] w-full px-3 bg-transparent border-none focus:bg-white rounded-md focus:ring-0 focus:outline-none ${
																touched.card_number && errors.card_number
																	? "text-red-500" // Invalid field
																	: touched.card_number && !errors.card_number
																		? "" // Valid field
																		: "" // Default
															}`}
															name=" card_number"
															placeholder="Card Number"
														/>
													</div>
													<ErrorMessage
														name="card_number"
														render={(errorText) => (
															<div className=" mt-2 pl-1 text-left text-red-400">
																{errorText}
															</div>
														)}
													/>
												</div>
												{/* expiration and cvv*/}
												<div className="flex flex-wrap justify-between my-2">
													{/* Expiration */}
													<div className="w-[49%]">
														<div
															className={` flex bg-[#F4F6F9]  rounded-md border ${
																touched.expiration && errors.expiration
																	? "border-red-500"
																	: touched.expiration && !errors.expiration
																		? " "
																		: "border-gray-200"
															}`}
														>
															<Field
																type="textbox"
																className={`py-[0.85rem] w-full px-3 bg-transparent border-none focus:bg-white rounded-md focus:ring-0 focus:outline-none ${
																	touched.expiration && errors.expiration
																		? "text-red-500" // Invalid field
																		: touched.expiration && !errors.expiration
																			? "" // Valid field
																			: "" // Default
																}`}
																name="expiration"
																placeholder="Expiration"
															/>
														</div>
														<ErrorMessage
															name="expiration"
															render={(errorText) => (
																<div className=" mt-2 pl-1 text-left text-red-400">
																	{errorText}
																</div>
															)}
														/>
													</div>

													{/* cvv */}
													<div className="w-[49%] ">
														<div
															className={` flex bg-[#F4F6F9]  rounded-md border ${
																touched.cvv && errors.cvv
																	? "border-red-500"
																	: touched.cvv && !errors.cvv
																		? " "
																		: "border-gray-200"
															}`}
														>
															<Field
																type="textbox"
																className={`py-[0.85rem] w-full px-3 bg-transparent border-none focus:bg-white rounded-md focus:ring-0 focus:outline-none ${
																	touched.cvv && errors.cvv
																		? "text-red-500" // Invalid field
																		: touched.cvv && !errors.cvv
																			? "" // Valid field
																			: "" // Default
																}`}
																name="cvv"
																placeholder="CVV"
															/>
														</div>
														<ErrorMessage
															name="cvv"
															render={(errorText) => (
																<div className=" mt-2 pl-1 text-left text-red-400">
																	{errorText}
																</div>
															)}
														/>
													</div>
												</div>

												{/* zip code */}
												<div className="w-full">
													<div
														className={` flex bg-[#F4F6F9]  rounded-md border ${
															touched.zip_code && errors.zip_code
																? "border-red-500"
																: touched.zip_code && !errors.zip_code
																	? " "
																	: "border-gray-200"
														}`}
													>
														<Field
															type="number"
															className={`py-[0.85rem] w-full px-3 bg-transparent border-none focus:bg-white rounded-md focus:ring-0 focus:outline-none ${
																touched.zip_code && errors.zip_code
																	? "text-red-500" // Invalid field
																	: touched.zip_code && !errors.zip_code
																		? "" // Valid field
																		: "" // Default
															}`}
															name="zip_code"
															placeholder="ZIP"
														/>
													</div>
													<ErrorMessage
														name="zip_code"
														render={(errorText) => (
															<div className=" mt-2 pl-1 text-left text-red-400">
																{errorText}
															</div>
														)}
													/>
												</div>

												<div className="p-2 bg-holmes-background-grey text-holmes-primary-blue text-sm mt-4 rounded-md">
													By providing your card information you allow holmes to
													charge for your payment now and in the future
													according with their terms
												</div>
											</Form>
										);
									}}
								</Formik>
							) : (
								""
							)}
						</div>
					</div>

					{/* payment details */}
					<div className="py-4 px-2 DesktopScreen:w-1/2 w-full">
						<h2 className="text-3xl font-semibold">N8,000,000.00</h2>
						{/* summary */}
						<div className="my-3 flex flex-col gap-4">
							<h2 className="text-lg font-semibold mb-3">Summary</h2>
							{/* amount */}
							<div className="flex justify-between items-center">
								<div>
									<h3>Items Subtotal:</h3>
									<p className="text-holmes-font-grey mt-2">1 item</p>
								</div>
								{/* price */}
								<div className="font-semibold">N8,000,000.00</div>
							</div>
							{/* tax */}
							<div className="flex justify-between items-center">
								<div>
									<h3>Tax:</h3>
								</div>
								{/* price */}
								<div className="font-semibold">N10,000.00</div>
							</div>
							{/* total */}
							<div className="flex justify-between items-center">
								<div>
									<h3>Order Total:</h3>
								</div>
								{/* price */}
								<div className="font-semibold">N8,010,000.00</div>
							</div>
							{/* add ons */}
							<div className="">
								<h3>Add Ons:</h3>

								<div className="p-2 bg-holmes-background-grey text-holmes-primary-blue text-sm mt-4 rounded-md">
									<div className="flex gap-2 items-center">
										<input
											type="checkbox"
											className=" checked:bg-holmes-primary-blue focus:ring-0 focus:checked:bg-holmes-primary-blue"
										/>
										<div className="flex flex-col gap-1 text-black mb-2">
											<h4 className="font-bold">Add-on title</h4>
											<p className="font-semibold">N8,000,000.00</p>
										</div>
									</div>
									Add-on description goes here. Mind you this is will refresh
									the total and summary above
								</div>
							</div>

							<motion.button
								whileHover={{
									scale: 1.02,
									transition: { duration: 0.5 },
								}}
								whileTap={{ scale: 0.9 }}
								className={
									"p-2 h-auto rounded-md text-white bg-holmes-primary-dark-brown flex justify-center gap-[0.3rem] items-center"
								}
								onClick={(event) => {
									event.preventDefault();
									setCreateOrderRequestMade(true);

									setTimeout(() => {
										setCreateOrderRequestSuccessful(true);
									}, 2000);
								}}
							>
								Pay Now
							</motion.button>

							<div className="my-6  text-center">
								By continuing, you agree to <br />
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
						</div>
					</div>
				</section>
			) : createOrderRequestMade && createOrderRequestSuccessful ? (
				<SuccessfulOrderModal
					mainText="Congratulations"
					subtext="Thanks for your order! We’ve sent your receipt to amodujohn@example.com "
					removeModal={removeModal}
				/>
			) : (
				<SubmittingModal
					removeModal={removeModal}
					mainText="Hold tight, we are submitting your order."
				/>
			)}
		</>
	);
};

export default BuyNowCard;

