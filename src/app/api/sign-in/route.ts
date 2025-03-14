//THIS IS THE APP ROUTER. WE USE ROUTE HANDLERS, DIFFERENT FROM API ROUTES FOR PAGE ROUTER
//due to the fact that cookies were set using nextjs next/header, cookies wont be accessible on client side
//this means we can only access them using server side code, that is why i choose to use api routes
//to maintain consistency
//Things are done way different in the app directory
import axios, { AxiosError } from "axios";
import { apiBaseUrl } from "@/utils/config";
import { setCookie } from "@/utils/cookies";

export async function POST(request: Request) {
  const formData = await request.json();

  try {
    const response = await axios.post(apiBaseUrl + "/auth/signin/", formData);
    const responseData = response.data;

    const accessToken = responseData.access;
    const refreshToken = responseData.refresh;
    const tokenRegTime = new Date().getTime().toString();

    // Set cookies
    await setCookie({
      name: "access-token",
      value: accessToken,
      path: "/",
    });

    await setCookie({
      name: "refresh-token",
      value: refreshToken,
      path: "/",
    });

    await setCookie({
      name: "token-reg-time",
      value: tokenRegTime,
      path: "/",
    });

    // Return the response
    return new Response(JSON.stringify(responseData), { status: 200 });

  } catch (error) {
    console.log(error)
    if (error instanceof AxiosError) {
      return new Response(
        JSON.stringify({
          status: error.response?.status,
          message: error.response?.statusText,
          detail: error.response?.data.detail
        }),
        { status: error.response?.status || 500 }
      );
    } else {
      // Handle other errors
      return new Response("We can't tell you the error", { status: 500 });
    }
  }
}
