import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import downIcon from "@/assets/images/general/down-icon-black.svg";
import blueCircleAvatar from "@/assets/images/general/blue-circle-avatar.svg";
import SearchIcon from "@/assets/images/general/search-icon.svg";
import SuccessfulModal from "@/library/modals/successful";
import Inputs from "@/library/inputs/inputs";
import UpdateEmailOTP from "@/library/modals/update-email-otp";
import { OTPSixDigitDataType } from "@/app/types";
import { OTPSixDigitDataList } from "@/app/home.dto";
import InvitationSuccessfulModal from "./invitation-successful";

const AddMemberCard: React.FC<{
	removeModal: () => void;
}> = ({ removeModal }) => {
	const [FormData, setFormData] = useState<{
		email: string;
		role: string;
	}>({
		email: "",
		role: "",
	});

	const [OTPFormData, setOTPFormData] =
		useState<OTPSixDigitDataType>(OTPSixDigitDataList);

	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [isOTPSent, setIsOTPSent] = useState(false);
	const [addMemberRequestSuccessful, setAddMemberRequestSuccessful] = useState<
		null | boolean
	>(null);

	const [roleType, setroleType] = useState<string | null>("User");
	const [viewRoleTypeFields, setviewRoleTypeFields] = useState(false);
	const roleTypeRef = useRef<HTMLDivElement | null>(null);




    const addAnotherMemeberHandler = () => {
        setIsOTPSent(false)
        setAddMemberRequestSuccessful(null)
    }

	return (
		<>
			{!isOTPSent && addMemberRequestSuccessful === null ? (
				<section
					className="flex flex-col bg-white h-auto min-w-[30%] TabletScreen:w-[60%] MobileScreen:w-[95%] rounded-md  p-6"
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<div className="py-4 px-6">
						<h2 className="text-xl font-semibold text-holmes-primary-blue">
							Add Members
						</h2>
					</div>

					<form>
						{/* email input */}
						<div>
							<p>Email</p>
							<div className="relative bg-[#F4F6F9]">
								<Inputs
									className={`py-[0.85rem] w-full px-3 bg-transparent border-none rounded-md focus:ring-0 focus:outline-none `}
									inputType="email"
									Name="email"
								/>
								<div className="absolute right-0 px-3 z-5 top-1/2 -translate-y-1/2">
									<Image src={SearchIcon} alt="search" />
								</div>
							</div>
						</div>

						{/* search results */}
						<div className="flex gap-2 mt-4">
							<div>
								<Image alt="avatar" src={blueCircleAvatar} />
							</div>
							<div>
								<p className="font-[500] text-lg">Chike Harvesters</p>
								<p className="text-holmes-font-light-grey">
									harvesters@gmail.com
								</p>
							</div>
						</div>

						{/* role change input */}
						<div className="mt-4">
							<p>Role</p>
							<div
								className="relative flex justify-between items-center px-2 bg-[#F4F6F9]"
								ref={roleTypeRef}
							>
								<div
									className={`py-[0.85rem] w-full px-3 bg-transparent border-none rounded-md`}
									onClick={() => {
										setviewRoleTypeFields(!viewRoleTypeFields);
									}}
								>
									{roleType}
								</div>
								<div className="flex items-end mx-3">
									<Image src={downIcon} alt="down-icon" />
								</div>
								<AnimatePresence>
									{viewRoleTypeFields && (
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
														className={`py-2 px-3 text-center  hover:bg-white hover:border-black hover:border-[0.2px] hover:rounded-sm cursor-pointer whitespace-nowrap ${roleType === item ? "bg-white border-black border rounded-sm" : ""}`}
														onClick={() => {
															setroleType(item);
															setviewRoleTypeFields(false);
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
					</form>

					{/* submit or cancel */}
					<div className="flex text-sm justify-end gap-4 my-4">
						<motion.button
							className="border border-black p-2 rounded-md"
							onClick={removeModal}
						>
							Cancel
						</motion.button>
						<motion.button
							className="bg-holmes-primary-dark-brown text-white p-2 rounded-md"
							onClick={() => {
								setIsOTPSent(true);
							}}
						>
							Add
						</motion.button>
					</div>
				</section>
			) : isOTPSent && addMemberRequestSuccessful ? (
		<InvitationSuccessfulModal removeModal={removeModal} refresh={addAnotherMemeberHandler}/>
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

export default AddMemberCard;

