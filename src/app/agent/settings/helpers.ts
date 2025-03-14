/** Handle verifyig the OTP sent to the email address within a period */
export const verifyEmailOTP = async (
	setIsLoading,
	formData,
	setCountdown,
	router,
	toast,
) => {
	console.log(formData);
	setIsLoading(true);
	try {
	} catch (error: any) {}
};

/** Handle verifyig the OTP sent to the email address within a period */
export const resendEmailOTP = async (
	setIsResendVisible,
	email,
	setCountdown,
	toast,
) => {
	console.log(email);

	try {
	
	} catch (error: any) {
		setIsResendVisible(true);
		console.error("error message ==>", error);
		toast.error(error.response.data.message);
	}
};

