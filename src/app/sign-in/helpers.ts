import localStorageHandler from "@/utils/local-storage-handler";
import { signInFormDataType } from "@/utils/types";
import axios from "axios";

const signInHandler = async (
	formData: signInFormDataType,
	router,
	setLoading,
	toast
) => {
	setLoading(true);
	try {
		//after asking backend to include rememberMe field, will update to just take formData
		const signin = await axios.post(
			"/api/sign-in",
			JSON.stringify({
				email: formData.email,
				password: formData.password,
			}),
		);


		toast.success("Sign In Successful");
		localStorageHandler.setIsAuthenticated()

		router.push("/");
	} catch (error: any) {
		toast.error(error.response.data.detail)
		console.log(error);
	} finally {
		setLoading(false);
	}
};

export { signInHandler };

