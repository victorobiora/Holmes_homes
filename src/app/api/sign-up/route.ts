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

  console.log(formData)

  try {
    const response = await axios.post(apiBaseUrl + "/auth/signup/", formData);
    const responseData = response.data;

    // Return the response
    return new Response(JSON.stringify(responseData), { status: 200 });

  } catch (error: any) {
    console.log(error.response.data)
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
