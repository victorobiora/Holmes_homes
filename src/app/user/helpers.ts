import Cookies from "js-cookie";
import { nonAuthRoutes } from "@/utils/urls";

export const handleLoginRoute = async ( profileType) => {
	await Cookies.set("profileType", profileType);
	console.log("Cookies.set profileType ==>", Cookies.get("profileType"));

};


export const handleSignupRoute = async (profileType) => {
	await Cookies.set("profileType", profileType);
	console.log("Cookies.set profileType ==>", Cookies.get("profileType"));

};

