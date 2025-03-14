import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { apiBaseUrl } from "@/utils/config";
import { redirect } from 'next/navigation'
import { setCookie } from "@/utils/cookies";




const storedAccessToken = async () => {


  const accessToken = cookies().get("access-token")?.value;
  const tokenRegistrationTime = Number(cookies().get("token-reg-time")?.value);

  const checkAccessTokenExpiry = () => {
    if (accessToken && tokenRegistrationTime) {
      const currentDate = Number(new Date().getTime());

      //time length per access token
      const thirtyMinutes = 30 * 60 * 1000;

      const timeDifference = currentDate - tokenRegistrationTime;

      if (timeDifference > thirtyMinutes) {
        // Access token is expired
        return true;
      } else {
        // Access token is still valid
        return false;
      }
    } else {
      // Access token or expiry date not found in local storage
      // Token is considered expired if not found
      console.log("Access token or expiry date not found");
      return true;
    }
  };


  // first we check presence of refresh tokens
  const refreshToken = cookies().get("refresh-token");
  console.log(refreshToken);

  if (refreshToken) {
    const hasAccessExpired = checkAccessTokenExpiry();

    if (hasAccessExpired) {
      console.log('access token expired so we try to fetch a new one for you')
      try {
        const getNewAccessToken = await axios.post(
          apiBaseUrl + "/admin/auth/refresh-token",
          {
            refreshToken: refreshToken?.value,
          },
        );

        const newToken: string = getNewAccessToken.data?.data;

        const newTokenRegistrationTime = new Date().getTime().toString();

        //delete previous cookies and then set new ones
        cookies().delete("access-token");
        cookies().delete("token-reg-time");

        await setCookie({
          name: "access-token",
          value: newToken,
          path: "/",
        });

        await setCookie({
          name: "token-reg-time",
          value: newTokenRegistrationTime,
          path: "/",
        });

        return accessToken;

      } catch (error) {
        //if there is an error with the refresh token, it's best to try to login again 
        redirect('/sign-in')
      }
    } else {
      //if accessToken has not expired, we return the accesstoken
      return accessToken;
    }

  } else {
    // direct the user to login page if there is no refresh token
    redirect('/sign-in')
  }
};

export default storedAccessToken;
