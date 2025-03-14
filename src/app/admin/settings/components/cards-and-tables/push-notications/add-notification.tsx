import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import UploadIcon from "@/assets/images/general/upload-square-icon.svg";
import downIcon from "@/assets/images/general/down-icon-black.svg";
import blueCircleAvatar from "@/assets/images/general/blue-circle-avatar.svg";
import SearchIcon from "@/assets/images/general/search-icon.svg";
import SuccessfulModal from "../../../../../../library/modals/successful";
import Inputs from "@/library/inputs/inputs";
import filterIcon from "@/assets/images/general/black-filter-icon.svg";
import UpdateEmailOTP from "../../../../../../library/modals/update-email-otp";
import { OTPSixDigitDataType } from "@/app/types";
import { OTPSixDigitDataList } from "@/app/home.dto";
import InvitationSuccessfulModal from "@/app/admin/generalcomponents/invitation-successful";
import { DatePicker, Switch } from "@tremor/react";
import ToggleButton from "@/library/buttons/toggle-button";

const AddNotificationCard: React.FC<{
	removeModal: () => void;
}> = ({ removeModal }) => {
	const [FormData, setFormData] = useState<{
		email: string;
		specificGroup: string;
	}>({
		email: "",
		specificGroup: "",
	});

	const [OTPFormData, setOTPFormData] =
		useState<OTPSixDigitDataType>(OTPSixDigitDataList);

	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [isOTPSent, setIsOTPSent] = useState(false);
	const [addMemberRequestSuccessful, setAddMemberRequestSuccessful] = useState<
		null | boolean
	>(null);

	const [specificGroupType, setspecificGroupType] = useState<string | null>(
		"Select Group",
	);
	const [viewSpecificGroupTypeFields, setviewSpecificGroupTypeFields] =
		useState(false);
	const specificGroupTypeRef = useRef<HTMLDivElement | null>(null);

	// Handle clicks outside specificGroupType fields
	useEffect(() => {
		if(typeof window !== 'undefined'){
			const handleClickOutsidespecificGroupType = (event: MouseEvent) => {
			if (
				viewSpecificGroupTypeFields &&
				specificGroupTypeRef.current &&
				!specificGroupTypeRef.current.contains(event.target as Node)
			) {
				setviewSpecificGroupTypeFields(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutsidespecificGroupType);

		return () => {
			document.removeEventListener(
				"mousedown",
				handleClickOutsidespecificGroupType,
			);
		};		
		}

	}, [viewSpecificGroupTypeFields]);

	const addAnotherMemeberHandler = () => {
		setIsOTPSent(false);
		setAddMemberRequestSuccessful(null);
	};

	return (
		<>
			{!isOTPSent && addMemberRequestSuccessful === null ? (
				<section
					className="flex flex-col bg-white h-[90%] overflow-y-scroll min-w-[50%] MobileScreen:w-[95%] rounded-md  p-6"
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<div className="py-4">
						<h2 className="text-xl font-semibold">New Notification</h2>
						<h2 className="my-4 font-semibold">Notification Details</h2>
					</div>

					<form>
						{/* title input */}
						<div>
							<p>Title</p>
							<div className="relative my-2">
								<Inputs
									className={`py-[0.85rem] w-full px-3 border border-holmes-font-grey rounded-md focus:ring-0 focus:outline-none `}
									inputType="text"
									Name="title"
									placeholder="a concise notification title"
								/>
							</div>
						</div>
						{/* message input */}
						<div>
							<p>Message</p>
							<div className="relative my-2">
								<input
									className={`py-[0.85rem] h-40 w-full px-3 border border-holmes-font-grey rounded-md focus:ring-0 focus:outline-none `}
									type="textarea"
									name="message"
									placeholder="The main body of the notification"
								/>
							</div>
						</div>

						{/* attachments */}
						<div className="my-2">
							<p>
								Attachment(s){" "}
								<span className="text-holmes-font-grey">(Optional)</span>
							</p>
							<div
								className="flex my-2 flex-col justify-start gap-[6.5px] items-center w-full  font-[400] text-[#71717A]
						 text-[14px] py-[15px] px-[20px] rounded cursor-pointer  border-dashed border-[2px]"
							>
								<Image src={UploadIcon} alt={"Upload Icon"} />
								<div className="flex flex-col items-center font-[400] text-[#71717A] text-[12px]">
									<span>Click here to upload file or drag and drop file </span>
									<span>File type: .pdf, .esv, .doc | Max. size 1mb </span>
								</div>
							</div>
						</div>
						{/* recipient settings  */}
						<div className="border-b pb-5">
							<div className="mt-8 mb-4">
								<h2 className="my-2 font-semibold">Reciepient Settings</h2>
								<h2 className="my-2 font-semibold text-sm">Target audience:</h2>
							</div>
							{/* users */}
							<div className="flex justify-between items-center my-3">
								<div className="flex gap-2 items-center">
									<Inputs
										inputType="checkbox"
										Name="all-users"
										className="rounded-full checked:bg-holmes-primary-blue focus:ring-0 focus:checked:bg-holmes-primary-blue"
									/>
									<span>All Users</span>
								</div>
								<motion.button
									whileHover={{
										scale: 1.1,
										transition: { duration: 0.5 },
									}}
									whileTap={{ scale: 0.9 }}
									className={
										"py-2 px-3 h-auto rounded-md border-black border flex gap-[0.3rem] items-center"
									}
									onClick={(event) => {
										event.preventDefault();
									}}
								>
									<span className="mx-1">
										{" "}
										<Image alt="filter" src={filterIcon} />{" "}
									</span>{" "}
									Filters
								</motion.button>
							</div>
							{/* specific groups */}
							<div className="flex justify-between items-center my-3">
								<div className="flex gap-2 items-center">
									<Inputs
										inputType="checkbox"
										Name="specific-groups"
										className="rounded-full checked:bg-holmes-primary-blue focus:ring-0 focus:checked:bg-holmes-primary-blue"
									/>
									<span>Specific Groups</span>
								</div>
								{
									<div
										className="relative  flex justify-between items-center px-2 bg-[#F4F6F9]"
										ref={specificGroupTypeRef}
									>
										<div
											className={`py-[0.5rem] text-sm cursor-pointer w-full px-3 bg-transparent border-none rounded-md ${specificGroupType === "Select Group" && "text-holmes-font-grey"}`}
											onClick={() => {
												setviewSpecificGroupTypeFields(
													!viewSpecificGroupTypeFields,
												);
											}}
										>
											{specificGroupType}
										</div>
										<div className="flex items-end mx-3">
											<Image src={downIcon} alt="down-icon" />
										</div>
										<AnimatePresence>
											{viewSpecificGroupTypeFields && (
												<motion.div
													initial={{ opacity: 0, scale: 0.9 }}
													animate={{ opacity: 1, scale: 1 }}
													exit={{ opacity: 0, scale: 0.9 }}
													transition={{ duration: 0.2 }}
													className="bg-holmes-background-light-grey w-full top-[120%]  absolute flex flex-col text-md z-[2500]"
												>
													{["User", "Agent", `Editor`].map((item, index) => {
														return (
															<div
																key={index}
																className={`py-2 px-3 text-center text-sm  hover:bg-white hover:border-black hover:border-[0.2px] hover:rounded-sm cursor-pointer whitespace-nowrap ${specificGroupType === item ? "bg-white border-black border rounded-sm" : ""}`}
																onClick={() => {
																	setspecificGroupType(item);
																	setviewSpecificGroupTypeFields(false);
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
								}
							</div>
							{/* sending to inactive only */}
							<div className="flex justify-between items-center my-3 pt-5">
								<div className="flex gap-2 items-center">
									<Inputs
										inputType="checkbox"
										Name="all-users"
										className=" checked:bg-holmes-primary-blue focus:ring-0 focus:checked:bg-holmes-primary-blue"
									/>
									<span>Send to inactive users only</span>
								</div>
							</div>
						</div>

						{/* delivery settings  */}
						<div className="border-b pb-5">
							<div className="mt-8 mb-4">
								<h2 className="my-2 font-semibold">Delivery Settings</h2>
							</div>
							{/* immediate delivery*/}
							<div className="flex justify-between items-center my-3">
								<div className="flex gap-2 items-center">
									<Inputs
										inputType="checkbox"
										Name="immediate-delievery"
										className="rounded-full checked:bg-holmes-primary-blue focus:ring-0 focus:checked:bg-holmes-primary-blue"
									/>
									<span>Immediate Delivery</span>
								</div>
							</div>
							{/* scheduled delivery */}
							<div className="flex DesktopScreen:flex-row flex-col justify-between DesktopScreen:items-center my-3">
								<div className="flex gap-2 items-center">
									<Inputs
										inputType="checkbox"
										Name="specific-groups"
										className="rounded-full checked:bg-holmes-primary-blue focus:ring-0 focus:checked:bg-holmes-primary-blue"
									/>
									<span>Scheduled Delivery </span>
								</div>
								{/* start date and time  */}
								<div className="flex mt-4 DesktopScreen:mt-0 DesktopScreen:w-[70%] DesktopScreen:flex-row flex-col items-center gap-3 MobileScreen:justify-normal MobileScreen:flex-col ">
									{/* start date */}
									<div className="DesktopScreen:w-[40%] w-full">
										<DatePicker className="w-full datepicker-css" />
									</div>
									{/* choose time */}
									<div className="DesktopScreen:w-[40%] w-full">
										<DatePicker className="w-full datepicker-css" />
									</div>
								</div>
							</div>
						</div>

						{/* notification type */}
						<div className="border-b pb-5">
							<div className="mt-8 mb-4">
								<h2 className="my-2 font-semibold">Notification Type: </h2>
							</div>

							<div className="flex justify-between my-2">
								<p>Push Notification</p>

								<ToggleButton
									onToggle={() => {
										("");
									}}
									isToggled={true}
								/>
							</div>
							<div className="flex justify-between my-2">
								<p>Email Alert</p>

								<ToggleButton
									onToggle={() => {
										("");
									}}
									isToggled={true}
								/>
							</div>
							<div className="flex justify-between my-2">
								<p>In-App Announcement</p>

								<ToggleButton
									onToggle={() => {
										("");
									}}
									isToggled={true}
								/>
							</div>
						</div>
					</form>

					{/* submit or cancel */}
					<div className="flex text-sm justify-between gap-4 my-4">
						<motion.button
							className="border border-black p-2 rounded-md w-[30%]"
							onClick={removeModal}
						>
							Cancel
						</motion.button>
						<motion.button
							className=" bg-holmes-primary-blue text-white border border-black p-2 rounded-md  w-[30%]"
							onClick={removeModal}
						>
							Save as Draft
						</motion.button>
						<motion.button
							className="bg-holmes-primary-dark-brown text-white p-2 rounded-md  w-[30%]"
							onClick={() => {
								setIsOTPSent(true);
							}}
						>
							Send Notification
						</motion.button>
					</div>
				</section>
			) : isOTPSent && addMemberRequestSuccessful ? (
				<SuccessfulModal
					mainText="Notification saved successfully"
					subtext="Your Notification has also been saved"
					removeModal={removeModal}
				/>
			) : (
				<UpdateEmailOTP
					removeModal={removeModal}
					updateSuccessfulModal={setAddMemberRequestSuccessful}
					setOTPFormData={setOTPFormData}
					OTPFormData={OTPFormData}
				/>
			)}
		</>
	);
};

export default AddNotificationCard;

