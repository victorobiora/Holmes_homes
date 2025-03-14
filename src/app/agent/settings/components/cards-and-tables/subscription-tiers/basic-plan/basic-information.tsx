import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ToggleButton from "@/library/buttons/toggle-button";
import downIcon from "@/assets/images/general/down-icon-black.svg";
import Image from "next/image";
import Stepper from "@/library/progress-bar/stepper-progress-bar";

const BasicInformation: React.FC<{
	removeModal: () => void;
	nextStep: (step) => void;
	prevStep: (step) => void;
}> = ({ nextStep, prevStep, removeModal }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [inputRecommendedToggleState, setRecommendedToggleState] =
		useState(false);
	const [billingCycleChosen, setBillingCycleChosen] = useState<string | null>(
		"Select",
	);
	const [viewBillingCycleChosenFields, setViewBillingCycleChosenFields] =
		useState(false);
	const billingCycleChosenRef = useRef<HTMLDivElement | null>(null);

	// Handle clicks outside billingCycleChosen fields
	useEffect(() => {
		if(typeof window !== 'undefined'){
		const handleClickOutsideBillingCycleChosen = (event: MouseEvent) => {
			console.log(
				billingCycleChosenRef.current?.contains(event.target as Node),
			);
			if (
				viewBillingCycleChosenFields &&
				billingCycleChosenRef.current &&
				!billingCycleChosenRef.current.contains(event.target as Node)
			) {
				setViewBillingCycleChosenFields(false);
			}
		}

		document.addEventListener(
			"mousedown",
			handleClickOutsideBillingCycleChosen,
		);

		return () => {
			document.removeEventListener(
				"mousedown",
				handleClickOutsideBillingCycleChosen,
			);
		};		
		}
	
	}, [viewBillingCycleChosenFields]);

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
				<div className="text-center text-xl font-bold">Basic Information</div>
				<div className="text-center text-sm text-holmes-font-light-grey">
					We only need a few info to review before unlocking your full access
				</div>

				<div className="flex justify-center w-full">
					<div className="p-8 MobileScreen:p-2 DesktopScreen:w-[50%] w-full text-center">
						<Stepper steps={5} currentStep={1} />
					</div>
				</div>

				<div className="flex justify-center ">
					<Formik
						initialValues={{
							recommended: false,
							tier_name: "",
							description: "",
							monthly_price: "",
							yearly_price: "",
							billing_cycle: "",
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
								<Form className="relative flex flex-col items-center  rounded-2xl z-50 MobileScreen:p-2  p-6 DesktopScreen:w-2/3 w-full">
									<div className="flex justify-between w-full ">
										<p className="text-lg text-holmes-primary-blue">
											{" "}
											Recommended
										</p>
										<ToggleButton
											isToggled={values.recommended}
											onToggle={() =>
												setFieldValue("recommended", !values.recommended)
											}
										/>
									</div>
									{/* Tier name */}
									<div className="p-3 w-full my-2">
										<div className="font-[500]">Tier Name</div>
										<Field
											type="textbox"
											className={`py-[0.85rem] mt-2 w-full px-3 bg-[#F4F6F9] border-none rounded-md focus:ring-0 focus:outline-none ${
												touched.tier_name && errors.tier_name
													? "text-red-500" // Invalid field
													: "" // Default
											}`}
											name="tier_name"
											placeholder="Name the tier"
										/>
									</div>
									{/* description */}
									<div className="p-3 w-full DesktopScreen:my-2 my-1">
										<div className="font-[500]">Description</div>
										<Field
											as="textarea"
											className={`py-[0.85rem] h-40 w-full px-3 bg-[#F4F6F9] border-none rounded-md focus:ring-0 focus:outline-none ${
												touched.description && errors.description
													? "text-red-500"
													: "" // Default
											}`}
											name="description"
											placeholder="A brief overview of what this tier offers."
											style={{
												paddingTop: "0.5rem", // Add padding to avoid cramped text
												boxSizing: "border-box", // Ensure padding doesn't affect height
												overflow: "auto", // Handle long text gracefully
											}}
										/>
									</div>

									{/* prices */}
									<div className="flex w-full justify-between MobileScreen:justify-normal MobileScreen:flex-col ">
										{/* price per month */}
										<div className="p-3 DesktopScreen:w-[49%] w-full  my-2">
											<div className="font-[500]">Price Per Month (NGN)</div>
											<Field
												type="number"
												className={`py-[0.85rem] mt-2 w-full px-3 bg-[#F4F6F9] border-none rounded-md focus:ring-0 focus:outline-none ${
													touched.monthly_price && errors.monthly_price
														? "text-red-500" // Invalid field
														: "" // Default
												}`}
												name="monthly_price"
												placeholder="Input Price"
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
										{/* price per month */}
										<div className="p-3 DesktopScreen:w-[49%] w-full  my-2">
											<div className="font-[500]">Price Per Year (NGN)</div>
											<Field
												type="number"
												className={`py-[0.85rem] mt-2 w-full px-3 bg-[#F4F6F9] border-none rounded-md focus:ring-0 focus:outline-none ${
													touched.yearly_price && errors.yearly_price
														? "text-red-500" // Invalid field
														: "" // Default
												}`}
												name="yearly_price"
												placeholder="Input Price"
											/>
											<ErrorMessage
												name="yearly_price"
												render={(errorText) => (
													<div className=" mt-2 pl-1 text-left text-red-400">
														{errorText}
													</div>
												)}
											/>
										</div>
									</div>

									{/* Billing Cycle */}
									<div
										className=" my-3 relative w-full"
										ref={billingCycleChosenRef}
									>
										<div className="my-2">Billing Cycle</div>
										<div>
											<div
												className={`px-2 cursor-pointer bg-[#F4F6F9]  rounded-md w-full py-2 flex justify-between items-center ${billingCycleChosen === "Select" ? "text-holmes-font-grey" : ""}`}
												onClick={() => {
													setViewBillingCycleChosenFields(
														(prevState) => !prevState,
													);
												}}
											>
												{billingCycleChosen}
												<div className="flex items-end mx-1">
													<Image src={downIcon} alt="down-icon" />
												</div>
											</div>
										</div>
										<AnimatePresence>
											{viewBillingCycleChosenFields && (
												<motion.div
													initial={{ opacity: 0, scale: 0.9 }}
													animate={{ opacity: 1, scale: 1 }}
													exit={{ opacity: 0, scale: 0.9 }}
													transition={{ duration: 0.2 }}
													className="bg-holmes-background-light-grey w-full  absolute top-[120%] flex flex-col text-md z-[900]"
												>
													{["Monthly", "Yearly"].map((item, index) => {
														return (
															<div
																key={index}
																className={`py-2 px-3 text-center  hover:bg-white hover:border-black hover:border-[0.2px] hover:rounded-sm cursor-pointer whitespace-nowrap ${billingCycleChosen === item ? "bg-white border-black border rounded-sm" : ""}`}
																onClick={() => {
																	setBillingCycleChosen(item);
																	setViewBillingCycleChosenFields(false);
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

									{/* submit or cancel */}
									<div className="flex text-sm justify-end gap-4 my-4 w-full">
										<motion.button className="border border-black p-2 rounded-md">
											Cancel
										</motion.button>
										<motion.button
											className="bg-holmes-primary-dark-brown text-white p-2 rounded-md"
											onClick={() => {
												nextStep("feature-management");
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

export default BasicInformation;

