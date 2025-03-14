import localStorageHandler from "./local-storage-handler"

/**This function uses local storage to check if user is logged In, if not signedIn, it returns false  */
 const checkSignedInStatus = ():boolean => {
 const signedIn = localStorageHandler.getIsAuthenticated();

  if(signedIn){
    return true
  }

  return false
}


//export const isSignedIn = checkSignedInStatus();
export const isSignedIn = false