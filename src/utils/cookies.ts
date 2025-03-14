"use server";
import { cookies } from "next/headers";

import { CookieData } from "./types";


async function setCookie({ name, value, path }: CookieData) {
	cookies().set({
		name: name,
		value: value,
		httpOnly: true,
		path: path,
		secure: true,
	});
}

async function deleteCookie(cookiename: string) {
	cookies().delete(cookiename);

	console.log("we were deleted");
}



export {  setCookie, deleteCookie };
