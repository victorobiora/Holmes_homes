export interface CookieData {
	name: string;
	value: string;
	path?: string;
	secure?: boolean;
}

export interface signInFormDataType {
    email: string;
    password: string;
	rememberMe: boolean
  }

  export interface signUpFormDataType {
	first_name: string;
	last_name: string;
	profile_type: string;
	email: string;
	password: string;
	phone_number: string;
  }
  