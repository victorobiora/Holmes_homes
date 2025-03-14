import axios from "axios";
import localStorageHandler from "./local-storage-handler";

/** Get the current customer type */
const customerType = localStorageHandler.getProfileType();
console.log(" customerType ==>", customerType);

/** Base Url for API - PRODUCTION */
// const apiBaseUrl = "https://api.holmes.com/api";

/** Base Url for API - STAGING */
const apiBaseUrl = process.env.API_BASE_URL;

/** Base Url for API - LOCAL */
// const apiBaseUrl = "http://localhost:8080/api";

/** API URL */
const apiUrl = `${apiBaseUrl}/${customerType}`;


export {
    apiUrl, apiBaseUrl
    
}