import { signUpFormDataType } from "@/utils/types";
import axios from "axios";

const signUpHandler = async (
	formData: signUpFormDataType,
	router,
	setLoading,
	toast
) => {
	setLoading(true);
	try {
		//after asking backend to include rememberMe field, will update to just take formData
		const signin = await axios.post(
			"/api/sign-up",
			JSON.stringify({
				email: formData.email,
				password: formData.password,
                first_name: formData.first_name,
                last_name: formData.last_name,
                profile_type: formData.profile_type,
                phone_number: formData.phone_number
			}),
		);


		toast.success("Sign Up Successful");

		router.push("/sign-in");
	} catch (error: any) {
		toast.error(error.response.data.detail)
		console.log(error);
	} finally {
		setLoading(false);
	}
};

export { signUpHandler };

