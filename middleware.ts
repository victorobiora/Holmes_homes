import { NextResponse, type NextRequest } from 'next/server'
import { cookies } from 'next/headers';
import axios from 'axios';

import { apiBaseUrl as baseURL}  from '@/utils/config';
import { setCookie } from '@/utils/cookies';

 
export async function middleware(request: NextRequest) {

  const accessToken = cookies().get('access-token')?.value
  const tokenRegistrationTime = Number(cookies().get('token-reg-time')?.value) 


const checkAccessTokenExpiry = () => {

  if (accessToken && tokenRegistrationTime) {

    const currentDate = Number(new Date().getTime());

    //time length per access token
   const thirtyMinutes = (30 * 60 * 1000);

   const timeDifference = currentDate - tokenRegistrationTime



    if (timeDifference > thirtyMinutes) {
      // Access token is expired
      return true; 
    } else {
      // Access token is still valid
      return false; 
    }
  } else {
    // Access token or expiry date not found
    // Token is considered expired if not found
    console.log('Access token or expiry date not found');
    return true; 
  }
}




  const requestHeaders = new Headers(request.headers);

  // first we check presence of refresh tokens 

  const refreshToken = cookies().get('refresh-token')
  console.log(refreshToken)

  if(refreshToken){
   const hasAccessExpired =  checkAccessTokenExpiry();

    if(hasAccessExpired){
      try{

         const getNewAccessToken = await axios.post(baseURL + '/auth/refresh-token', {
              refreshToken: refreshToken?.value
           })

           const newToken: string = getNewAccessToken.data?.data;

           const newTokenRegistrationTime = new Date().getTime().toString()

        //delete previous cookies and then set new ones
           cookies().delete('access-token');
           cookies().delete('token-reg-time');

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

      }catch(error){
        console.log(error)
        //when we cannot fetch a new access token, we redirect as well to login page 
        const url = request.nextUrl.clone()
  
        url.pathname='/sign-in'
        return NextResponse.redirect(url)
      }  

      }else {
        //if accessToken has not expired, we progress with setting necessary data
        requestHeaders.set('Auth', `Bearer: ${accessToken ? accessToken : ''}`);
        const response = NextResponse.next({
          request: {
            headers: requestHeaders
          }
        })
      
      
        return response

      }


  }else {
     // direct the user to login page 
     const url = request.nextUrl.clone()
  
     url.pathname='/login'
     return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: [
   /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - THIS IS A REGEX 
*/ 
'/((?!api|_next/static|_next/image|favicon.ico|login).*)',

  ]
}

