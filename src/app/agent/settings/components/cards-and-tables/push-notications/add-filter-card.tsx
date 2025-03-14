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

const AddFilterCard: React.FC<{
	removeModal: () => void;
}> = ({ removeModal }) => {
	const [FormData, setFormData] = useState<{
		email: string;
		audienceType: string;
	}>({
		email: "",
		audienceType: "",
	});

	const [OTPFormData, setOTPFormData] =
		useState<OTPSixDigitDataType>(OTPSixDigitDataList);

	const router = useRouter();

	const [notificationType, setnotificationType] = useState<string | null>(
		"Notification Type",
	);
	const [viewNotificationTypeFields, setviewNotificationTypeFields] =
		useState(false);
	const notificationTypeRef = useRef<HTMLDivElement | null>(null);

	// Handle clicks outside notificationType fields
	useEffect(() => {
		if(typeof window !== 'undefined'){
			const handleClickOutsidenotificationType = (event: MouseEvent)  => {
			if (
				viewNotificationTypeFields &&
				notificationTypeRef.current &&
				!notificationTypeRef.current.contains(event.target as Node)
			) {
				setviewNotificationTypeFields(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutsidenotificationType);

		return () => {
			document.removeEventListener(
				"mousedown",
				handleClickOutsidenotificationType,
			);
		};	
		}
	
	}, [viewNotificationTypeFields]);

	const [audienceType, setaudienceType] = useState<string | null>(
		"Audience Type",
	);
	const [viewAudienceTypeFields, setviewAudienceTypeFields] = useState(false);
	const audienceTypeRef = useRef<HTMLDivElement | null>(null);

	// Handle clicks outside audienceType fields
	useEffect(() => {
		if(typeof window !== 'undefined'){
		const handleClickOutsideaudienceType = (event: MouseEvent) => {
			if (
				viewAudienceTypeFields &&
				audienceTypeRef.current &&
				!audienceTypeRef.current.contains(event.target as Node)
			) {
				setviewAudienceTypeFields(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutsideaudienceType);

		return () => {
			document.removeEventListener("mousedown", handleClickOutsideaudienceType);
		};	
		}
		
	}, [viewAudienceTypeFields]);

	return (
		<>
			<section
				className="flex h-[25rem] flex-col bg-white overflow-y-scroll min-w-[20rem] right-0 rounded-md  p-6 absolute top-[120%] z-[1600] MobileScreen:fixed MobileScreen:top-[20%] MobileScreen:right-10"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div className="py-4">
					<h2 className="text-xl font-semibold">Filters</h2>
				</div>

				<form>
					{/* date */}
					<div className="flex w-[100%] justify-between items-center gap-3 MobileScreen:justify-normal MobileScreen:flex-col ">
						{/* start date */}
						<div className="w-[45%] MobileScreen:w-full">
							<DatePicker
								placeholder="Start Date"
								className="w-full datepicker-css"
							/>
						</div>
						{/* choose time */}
						<div className="w-[45%] MobileScreen:w-full">
							<DatePicker
								placeholder="End Date"
								className="w-full datepicker-css"
							/>
						</div>
					</div>

					{/* notification type */}
					{
						<div
							className="relative my-4  flex justify-between items-center px-2 bg-[#F4F6F9]"
							ref={notificationTypeRef}
						>
							<div
								className={`py-[0.85rem] text-sm cursor-pointer w-full bg-transparent border-none rounded-md ${notificationType === "Notification Type" && "text-holmes-font-grey"}`}
								onClick={() => {
									setviewNotificationTypeFields(!viewNotificationTypeFields);
								}}
							>
								{notificationType}
							</div>
							<div className="flex items-end mx-3">
								<Image src={downIcon} alt="down-icon" />
							</div>
							<AnimatePresence>
								{viewNotificationTypeFields && (
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
													className={`py-2 px-3 text-center text-sm  hover:bg-white hover:border-black hover:border-[0.2px] hover:rounded-sm cursor-pointer whitespace-nowrap ${notificationType === item ? "bg-white border-black border rounded-sm" : ""}`}
													onClick={() => {
														setnotificationType(item);
														setviewNotificationTypeFields(false);
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

					{/* audience type */}
					{
						<div
							className="relative my-4  flex justify-between items-center px-2 bg-[#F4F6F9]"
							ref={audienceTypeRef}
						>
							<div
								className={`py-[0.85rem] text-sm cursor-pointer w-full bg-transparent border-none rounded-md ${audienceType === "Audience Type" && "text-holmes-font-grey"}`}
								onClick={() => {
									setviewAudienceTypeFields(!viewAudienceTypeFields);
								}}
							>
								{audienceType}
							</div>
							<div className="flex items-end mx-3">
								<Image src={downIcon} alt="down-icon" />
							</div>
							<AnimatePresence>
								{viewAudienceTypeFields && (
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
													className={`py-2 px-3 text-center text-sm  hover:bg-white hover:border-black hover:border-[0.2px] hover:rounded-sm cursor-pointer whitespace-nowrap ${audienceType === item ? "bg-white border-black border rounded-sm" : ""}`}
													onClick={() => {
														setaudienceType(item);
														setviewAudienceTypeFields(false);
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
				</form>

				{/* submit or cancel */}
				<motion.button
					className=" bg-holmes-primary-blue text-white border border-black p-2 rounded-md"
					onClick={removeModal}
				>
					Search
				</motion.button>
			</section>
		</>
	);
};

export default AddFilterCard;

