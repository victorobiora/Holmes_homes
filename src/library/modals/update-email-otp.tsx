import VerifyCode from "@/library/number-verification/verify-code";
import { OTPSixDigitDataType } from "@/app/types";
import { OTPSixDigitDataList } from "@/app/home.dto";
import { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";
import Buttons from "@/library/buttons/buttons";
import { toast } from "react-toastify";

const UpdateEmailOTP: React.FC<{
	updateSuccessfulModal?: React.Dispatch<React.SetStateAction<boolean | null>>;
	setOTPFormData: React.Dispatch<React.SetStateAction<OTPSixDigitDataType>>;
	OTPFormData: OTPSixDigitDataType;
	removeModal: () => void;
}> = ({ setOTPFormData, OTPFormData, removeModal, updateSuccessfulModal }) => {
	const emailToBeVerified = "marakachi@gmail.com";
	const [isResendVisible, setIsResendVisible] = useState(false);
	const [countdown, setCountdown] = useState(60);
	const [isLoading, setIsLoading] = useState(false);
	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
	const isFormComplete = Object.values(OTPFormData).every(
		(val) => val.length === 1,
	);

	const handlePaste = (e) => {
		const paste = e.clipboardData.getData("text");
		const isCorrectCode = paste === "123456";

		if (isCorrectCode) {
			toast.success("Verification successful!");
			setIsResendVisible(false);
		} else {
			toast.error("Verification failed. Please try again.");
			setIsResendVisible(true);
			setCountdown(60);
		}

		if (paste.length === 6) {
			const formValues = {
				verifyOne: paste[0] || "",
				verifyTwo: paste[1] || "",
				verifyThree: paste[2] || "",
				verifyFour: paste[3] || "",
				verifyFive: paste[4] || "",
				verifySix: paste[5] || "",
			};
			setOTPFormData(formValues);
			inputRefs.current.forEach((ref, idx) => {
				if (ref) {
					// eslint-disable-next-line no-param-reassign
					ref.value = paste[idx] || "";
				}
			});
			inputRefs.current[5]?.focus();
		}
		e.preventDefault();
	};

	const handleClick = () => {
		const updatedFormData = {
			email: emailToBeVerified,
			otp: Number(Object.values(OTPFormData).join("")),
		};
	};

	const handleResend = () => {};

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsResendVisible(true);
		}, 60000);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		const countdownTimer = setInterval(() => {
			setCountdown((prevCountdown) =>
				prevCountdown > 0 ? prevCountdown - 1 : 0,
			);
		}, 1000);

		return () => {
			clearInterval(countdownTimer);
			if (countdown === 0) {
				setIsResendVisible(true);
			}
		};
	}, [countdown]);

	return (
		<section
			className="flex flex-col bg-white p-6 items-center justify-center  MobileScreen:w-[95%] rounded-md"
			onClick={(e) => {
				e.stopPropagation();
			}}
		>
			<div className="py-4 px-6 MobileScreen:px-3">
				<h2 className="text-xl font-semibold">Enter OTP</h2>
				<div className="text-holmes-font-grey">
					Enter the One-Time-Password sent to your email address
				</div>
				<VerifyCode setOTPFormData={setOTPFormData} OTPFormData={OTPFormData} />
				{!isResendVisible && (
					<center className="mt-8">
						<p className=" font-[400] text-[#7E7E7E] text-[16px] leading-[19.09px]">
							Didn’t receive the code?
						</p>
						<p className=" font-[600] text-sefarvest-green leading-[19.09px] mt-[8px]">
							Resend in {countdown}s
						</p>
					</center>
				)}
			</div>
			<div>
				{isResendVisible && (
					<Buttons
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						loading={isLoading}
						onClick={() => handleResend()}
						type="button"
						title="Resend OTP"
						className=" w-full  text-holmes-primary-dark-brown rounded-[8px] pt-[16px] pr-[32px] pb-[16px] pl-[32px]"
					>
						Resend OTP
					</Buttons>
				)}
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
					className="bg-holmes-primary-dark-brown text-white p-3 rounded-md  disabled:opacity-50 disabled:cursor-not-allowed"
					disabled={!isFormComplete || isLoading}
					onClick={() => {
						updateSuccessfulModal && updateSuccessfulModal(true);
					}}
				>
					Verify
				</motion.button>
			</div>
		</section>
	);
};

export default UpdateEmailOTP;

