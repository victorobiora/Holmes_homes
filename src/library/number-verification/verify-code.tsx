"use client";

import React, { useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import { OTPSixDigitDataType } from "@/app/types";

const VerifyCode: React.FC<{
	setOTPFormData: React.Dispatch<React.SetStateAction<OTPSixDigitDataType>>;
	OTPFormData: OTPSixDigitDataType;
}> = ({ setOTPFormData, OTPFormData }) => {
	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: number,
	) => {
		const { name, value } = e.target;

		if (value.length <= 1) {
			setOTPFormData((prevState) => ({
				...prevState,
				[name]: value,
			}));

			if (value && index < inputRefs.current.length - 1) {
				inputRefs.current[index + 1]?.focus();
			}
		}
	};

	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>,
		index: number,
	) => {
		if (
			e.key === "Backspace" &&
			!OTPFormData[e.currentTarget.name] &&
			index > 0
		) {
			inputRefs.current[index - 1]?.focus();
		}
	};

	return (
		<section>
			<div className="flex flex-row justify-center mt-6 mb-3">
				<div className="flex gap-4 mt-2">
					{Object.keys(OTPFormData).map((key, index) => {
						const style = {
							minWidth: "4rem",
							maxWidth: "4rem",
							borderColor: "#c6c6c6",
						};

						if (window.matchMedia("(max-width: 480.5px)").matches) {
							style.minWidth = "2.5rem";
							style.maxWidth = "2.5rem";
						}

						return (
							<input
								key={key}
								ref={(item) => {
									inputRefs.current[index] = item;
								}}
								className="h-12 text-center rounded-lg border border-holmes-border-grey"
								type="text"
								maxLength={1}
								name={key}
								value={OTPFormData[key]}
								onChange={(e) => handleInputChange(e, index)}
								onKeyDown={(e) => handleKeyDown(e, index)}
								style={style}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default VerifyCode;

