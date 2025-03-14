/** Local Storage Handler: used for manipulating all data stored in the browser local storage. */
const localStorageHandler = {
	handle(token: string) {
		this.set(token);
	},
	set(token: string) {
		if (typeof window !== "undefined") {
			localStorage.setItem("verified", token);
		}
	},
	setProfileType(profileType: string) {
		if (typeof window !== "undefined") {
			localStorage.setItem("profileType", profileType);
		}
	},
	getProfileType() {
		if (typeof window !== "undefined") {
			localStorage.getItem("profileType");
		}
	},
	setIsAuthenticated(){
		if (typeof window !== "undefined") {
			localStorage.setItem('isAuthenticated', JSON.stringify(true));
		}
	},
	getIsAuthenticated(){
		if (typeof window !== "undefined") {
		return	localStorage.getItem("isAuthenticated");
		}
	}
	
};

export default localStorageHandler;
