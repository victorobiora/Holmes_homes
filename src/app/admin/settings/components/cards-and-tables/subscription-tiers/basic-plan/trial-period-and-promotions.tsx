import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ToggleButton from "@/library/buttons/toggle-button";
import downIcon from "@/assets/images/general/down-icon-black.svg";
import Image from "next/image";
import Stepper from "@/library/progress-bar/stepper-progress-bar";
import PremuimAdPlacement from "../../feature-management/premuim-ad-placement";
import { DatePicker , Switch } from "@tremor/react";

const TrialPeriodAndPromotions: React.FC<{
	nextStep: (step) => void;
	prevStep: (step) => void;
}> = ({ nextStep, prevStep }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [inputRecommendedToggleState, setRecommendedToggleState] =
		useState(false);

	const [durationTypeChosen, setDurationTypeChosen] = useState<string | null>(
		"Select",
	);
	const [viewDurationTypeChosenFields, setViewDurationTypeChosenFields] =
		useState(false);
	const durationTypeChosenRef = useRef<HTMLDivElement | null>(null);

	// Handle clicks outside durationTypeChosen fields
	useEffect(() => {
		if(typeof window !== 'undefined'){
			const handleClickOutsideDurationTypeChosen = (event: MouseEvent) => {
			console.log(
				durationTypeChosenRef.current?.contains(event.target as Node),
			);
			if (
				viewDurationTypeChosenFields &&
				durationTypeChosenRef.current &&
				!durationTypeChosenRef.current.contains(event.target as Node)
			) {
				setViewDurationTypeChosenFields(false);
			}
		}

		document.addEventListener(
			"mousedown",
			handleClickOutsideDurationTypeChosen,
		);

		return () => {
			document.removeEventListener(
				"mousedown",
				handleClickOutsideDurationTypeChosen,
			);
		};	
		}
	
	}, [viewDurationTypeChosenFields]);
	//////////////////////////////////////////////////////////////////////////

	const [discountTypeChosen, setDiscountTypeChosen] = useState<string | null>(
		"Select",
	);
	const [viewDiscountTypeChosenFields, setViewDiscountTypeChosenFields] =
		useState(false);
	const discountTypeChosenRef = useRef<HTMLDivElement | null>(null);

	// Handle clicks outside discountTypeChosen fields
	useEffect(() => {
		if(typeof window !== 'undefined'){
			const handleClickOutsideDiscountTypeChosen = (event: MouseEvent) => {
			console.log(
				discountTypeChosenRef.current?.contains(event.target as Node),
			);
			if (
				viewDiscountTypeChosenFields &&
				discountTypeChosenRef.current &&
				!discountTypeChosenRef.current.contains(event.target as Node)
			) {
				setViewDiscountTypeChosenFields(false);
			}
		}

		document.addEventListener(
			"mousedown",
			handleClickOutsideDiscountTypeChosen,
		);

		return () => {
			document.removeEventListener(
				"mousedown",
				handleClickOutsideDiscountTypeChosen,
			);
		};	
		}
	
	}, [viewDiscountTypeChosenFields]);

	return (
		<>
			<header>
				<div className="py-4">
					<h2 className="text-xl font-semibold">Basic Plan</h2>
					<div className="text-holmes-font-grey">
						Manage your subscription tiers
					</div>
				</div>
			</header>

			{/* basic information */}
			<main className="">
				<div className="text-center text-xl font-bold">
					Trial Period And Promotions
				</div>
				<div className="text-center text-sm text-holmes-font-light-grey">
					We only need a few info to review before unlocking your full access
				</div>

				<div className="flex justify-center w-full">
				<div className="p-8 MobileScreen:p-2 DesktopScreen:w-[50%] w-full my-6 DesktopScreen:my-0 text-center">
						<Stepper steps={5} currentStep={3} />
					</div>
				</div>

				<div className="flex justify-center ">
					<Formik
						initialValues={{
							trial_period: false,
							duration_value: 1,
							duration_type: "Days",
							promotional_discount: false,
							discount_type: "Percentage",
							discount_value: 1,
							start_date: "",
							end_date: "",
						}}
						validationSchema={Yup.object({
							tier_name: Yup.string()
								.required("Please Choose a tier name")
								.min(2, "Too short")
								.max(70, "Too long"),
							description: Yup.string()
								.required("Please give a short description of the new tier")
								.min(2, "Too short")
								.max(70, "Too long"),
							monthly_price: Yup.number()
								.required("Please set a monthly price rate")
								.min(200, "Too short"),
							yearly_price: Yup.number()
								.required("Please set a price rate for a year")
								.min(200, "Too short"),
							billing_cycle: Yup.string().required(
								"Please select a billing cycle",
							),
						})}
						onSubmit={(values) => {}}
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
								<Form className="relative flex flex-col items-center  rounded-2xl z-50 p-2 DesktopScreen:p-6 DesktopScreen:w-2/3 w-full ">
									{/* trial period */}
									<div className="flex justify-between w-full ">
										<p className="text-lg text-holmes-primary-blue">
											{" "}
											Trial Period
										</p>
										<ToggleButton
											isToggled={values.trial_period}
											onToggle={() =>
												setFieldValue("trial_period", !values.trial_period)
											}
										/>
									</div>

									{/* duration type and value */}
									<div className="flex w-full DesktopScreen:flex-row DesktopScreen:justify-between justify-normal flex-col ">
										{/* duration_value */}
										<div className="DesktopScreen:p-3 DesktopScreen:w-[49%] w-full my-2">
											<div className="font-[500]">Duration</div>
											<Field
												type="number"
												className={`py-[0.85rem] mt-2 w-full px-3 bg-[#F4F6F9] border-none rounded-md focus:ring-0 focus:outline-none ${
													touched.duration_value && errors.duration_value
														? "text-red-500" // Invalid field
														: "" // Default
												}`}
												name="duration_value"
												placeholder="Input Duration"
											/>
											<ErrorMessage
												name="duration_value"
												render={(errorText) => (
													<div className=" mt-2 pl-1 text-left text-red-400">
														{errorText}
													</div>
												)}
											/>
										</div>

										{/* duration type */}
										<div
											className=" DesktopScreen:my-3 my-1 relative w-full"
											ref={durationTypeChosenRef}
										>
											<div className=" DesktopScreen:block hidden my-2 h-6"></div>
											<div>
												<div
													className={`px-2 py-[0.85rem] cursor-pointer bg-[#F4F6F9]  rounded-md w-full flex justify-between items-center `}
													onClick={() => {
														setViewDurationTypeChosenFields(
															(prevState) => !prevState,
														);
													}}
												>
													{values.duration_type}
													<div className="flex items-end mx-1">
														<Image src={downIcon} alt="down-icon" />
													</div>
												</div>
											</div>
											<AnimatePresence>
												{viewDurationTypeChosenFields && (
													<motion.div
														initial={{ opacity: 0, scale: 0.9 }}
														animate={{ opacity: 1, scale: 1 }}
														exit={{ opacity: 0, scale: 0.9 }}
														transition={{ duration: 0.2 }}
														className="bg-holmes-background-light-grey w-full  absolute top-[110%] flex flex-col text-md z-[900]"
													>
														{["Days", "Weeks", "Months"].map((item, index) => {
															return (
																<div
																	key={index}
																	className={`py-2 px-3 text-center  hover:bg-white hover:border-black hover:border-[0.2px] hover:rounded-sm cursor-pointer whitespace-nowrap `}
																	onClick={() => {
																		setFieldValue("duration_type", item);
																		setViewDurationTypeChosenFields(false);
																	}}
																>
																	{item}
																</div>
															);
														})}
													</motion.div>
												)}
											</AnimatePresence>
										</div>
									</div>

									{/* promotional discount */}
									<div className="flex justify-between w-full mt-5">
										<p className="text-lg text-holmes-primary-blue">
											{" "}
											Promotional Discounts
										</p>
										<ToggleButton
											isToggled={values.promotional_discount}
											onToggle={() =>
												setFieldValue(
													"promotional_discount",
													!values.promotional_discount,
												)
											}
										/>
									</div>

									{/* type of discount and value */}
									<div className="flex w-full items-center DesktopScreen:flex-row DesktopScreen:justify-between justify-normal flex-col ">
										{/* discount type */}
										<div
											className=" my-2 relative w-full"
											ref={discountTypeChosenRef}
										>
											<div className="">Type</div>
											<div>
												<div
													className={`px-2 py-[0.85rem] mt-2 cursor-pointer bg-[#F4F6F9]  rounded-md w-full flex justify-between items-center`}
													onClick={() => {
														setViewDiscountTypeChosenFields(
															(prevState) => !prevState,
														);
													}}
												>
													{values.discount_type}
													<div className="flex items-end mx-1">
														<Image src={downIcon} alt="down-icon" />
													</div>
												</div>
											</div>
											<AnimatePresence>
												{viewDiscountTypeChosenFields && (
													<motion.div
														initial={{ opacity: 0, scale: 0.9 }}
														animate={{ opacity: 1, scale: 1 }}
														exit={{ opacity: 0, scale: 0.9 }}
														transition={{ duration: 0.2 }}
														className="bg-holmes-background-light-grey w-full  absolute top-[110%] flex flex-col text-md z-[900]"
													>
														{["Percentage", "Fixed rate"].map((item, index) => {
															return (
																<div
																	key={index}
																	className={`py-2 px-3 text-center  hover:bg-white hover:border-black hover:border-[0.2px] hover:rounded-sm cursor-pointer whitespace-nowrap ${durationTypeChosen === item ? "bg-white border-black border rounded-sm" : ""}`}
																	onClick={() => {
																		setFieldValue("discount_type", item);
																		setViewDiscountTypeChosenFields(false);
																	}}
																>
																	{item}
																</div>
															);
														})}
													</motion.div>
												)}
											</AnimatePresence>
										</div>

										{/* discount_value */}
										<div className="DesktopScreen:p-3 DesktopScreen:w-[49%] w-full DesktopScreen:my-2 my-1">
											<div className="font-[500]">Value</div>
											<Field
												type="number"
												className={`py-[0.85rem] mt-2 w-full px-3 bg-[#F4F6F9] border-none rounded-md focus:ring-0 focus:outline-none ${
													touched.discount_value && errors.discount_value
														? "text-red-500" // Invalid field
														: "" // Default
												}`}
												name="discount_value"
												placeholder="Input Value"
											/>
											<ErrorMessage
												name="monthly_price"
												render={(errorText) => (
													<div className=" mt-2 pl-1 text-left text-red-400">
														{errorText}
													</div>
												)}
											/>
										</div>
									</div>

									{/* start and end dates */}
									<div className="flex w-full items-center justify-between MobileScreen:justify-normal MobileScreen:flex-col ">
										{/* start date */}
										<div className="w-[48%] MobileScreen:w-full">
											<div className="my-2">Start Date</div>
											<DatePicker className="w-full datepicker-css" />
										</div>
										{/* end date */}
										<div className="w-[48%] MobileScreen:w-full">
									<div className="my-2">End Date</div>
                                    <DatePicker className="w-full datepicker-css" />
								</div>
									</div>

									{/* submit or cancel */}
									<div className="flex text-sm justify-end gap-4 my-4 w-full">
										<motion.button className="border border-black p-2 rounded-md" onClick={() => {
											prevStep('feature-management')
										}} >
											Previous
										</motion.button>
										<motion.button
											className="bg-holmes-primary-dark-brown text-white p-2 rounded-md"
											onClick={() => {
												nextStep("basic-preview");
											}}
										>
											Continue
										</motion.button>
									</div>
								</Form>
							);
						}}
					</Formik>
				</div>
			</main>
		</>
	);
};

export default TrialPeriodAndPromotions;

