import { handleLoginRoute, handleSignupRoute } from "../helpers";
import agentProfileIcon from "@/assets/images/general/agent-profile-icon.svg";
import userProfileIcon from "@/assets/images/general/user-profile-icon.svg";
import affliatetProfileIcon from "@/assets/images/general/affliate-profile-icon.svg";

// Function to generate selectAccountData array
const selectAccountData =  [
	{
		name: "User",
		profileType: 'user',
		icon: userProfileIcon,
		alt: "user Icon",
		text: "Lorem ipsum dolor sit amet consectetur. Fermentum elit ut dui velit.",
	},
	{
		name: "Vendor/Agent",
		profileType: 'agent',
		icon: agentProfileIcon,
		text: "Lorem ipsum dolor sit amet consectetur. Fermentum elit ut dui velit.",
		alt: "agent Icon",

	},
	{
		name: "Affliate",
		profileType: 'affliate',
		icon: affliatetProfileIcon,
		text: "I’m a talent",
		alt: "affliate Icon",

		
	},
];

export { selectAccountData };

