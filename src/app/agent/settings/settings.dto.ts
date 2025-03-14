import genericAvatar from "@/assets/images/general/generic-avatar.svg";
import holmesImage1 from "@/assets/images/general/holmes-image2.jpeg";
import holmesImage2 from "@/assets/images/general/holmes-image2.jpeg";
import holmesImage3 from "@/assets/images/general/holmes-image2.jpeg";
import { AllNotificationDetails, membersManagementArray } from "./types.dto";

export const personalDetailsArray = {
    first_name: 'Quadri',
    last_name: 'Chike',
    profilePhoto: {
        link: genericAvatar,
        name: 'Profile.jpeg'
    },
    email: 'olayinkachike@gmail.com',
    phone_number: '09044548748' ,
    date_of_birth: '14th August, 1997',
    gender: 'Male',
    profile_type: 'admin'

}




export const signInandSettingsDetailsArray = {

    email: 'olayinkachike@gmail.com',
    phone_number: '09044548748',
    
}


export const demoMembersManagementDetails:membersManagementArray = [
	{
		memberID: "James Milner",
		image: holmesImage2,
		address: "Lincoln Drive Harrisburg, PA 17101 U.S.A",
		email: "jamesmilner@example.com",
		contact: "+234 803-7582-071",
		experience: "5 Years",
		date: "Oct 8, 2024",
		status: "active",
		id: "gudfst828e2rssd9",
		role: 'User'
	},
	{
		memberID: "James Milner",
		image: holmesImage1,
		address: "Lincoln Drive Harrisburg, PA 17101 U.S.A",
		email: "jamesmilner@example.com",
		contact: "+234 803-7582-071",
		experience: "5 Years",
		date: "Oct 8, 2024",
		status: "active",
		id: "gudfst8qefwg289",
		role: 'User'
	},
	{
		memberID: "James Milner",
		image: holmesImage3,
		address: "Lincoln Drive Harrisburg, PA 17101 U.S.A",
		email: "jamesmilner@example.com",
		contact: "+234 803-7582-071",
		experience: "5 Years",
		date: "Oct 8, 2024",
		status: "active",
		id: "gudfwrghwyietwast8289",
		role: 'Agent'
	},
	{
		memberID: "James Milner",
		image: holmesImage2,
		address: "Lincoln Drive Harrisburg, PA 17101 U.S.A",
		email: "jamesmilner@example.com",
		contact: "+234 803-7582-071",
		experience: "5 Years",
		date: "Oct 8, 2024",
		status: "pending",
		id: "gudfst828-397874509",
		role: 'Editor'
	},
	{
		memberID: "James Milner",
		image: holmesImage2,
		address: "Lincoln Drive Harrisburg, PA 17101 U.S.A",
		email: "jamesmilner@example.com",
		contact: "+234 803-7582-071",
		experience: "5 Years",
		date: "Oct 8, 2024",
		status: "pending",
		id: "udfst8289",
		role: 'Agent'
	},
];



export const subscriptionTiersData = [
	{
	plan: 'Basic',
	title: 'Aboki',
	description: 'This tier is the least in terms of features',
	monthlyPrice: '50,000',
	yearlyPrice: '600,000',
	status: 'Active',
},
	{
	plan: 'Premuim',
	title: 'Chief',
	description: 'This tier is the least in terms of features',
	monthlyPrice: '50,000',
	yearlyPrice: '600,000',
	status: 'Disabled',
},
	{
	plan: 'Pro',
	title: 'Oga Patapata',
	description: 'This tier is the least in terms of features',
	monthlyPrice: '50,000',
	yearlyPrice: '600,000',
	status: 'Active',
},

]


export const demoNotificationSettingsDetails:AllNotificationDetails[] = [
	{
	  id: "1",
	  title: "Propose value",
	  audience: "All Users",
	  deliveryType: ["Push", "In-App", "Email"],
	  setDate: "Oct 8, 2024",
	  status: "Sent",
	
	},
	{
	  id: "2",
	  title: "Offer a welcome gift",
	  audience: "Agents",
	  deliveryType: ["Push", "In-App", "Email"],
	  setDate: "Oct 8, 2024",
	  status: "Sent",
	
	},
	{
	  id: "3",
	  title: "Call to action",
	  audience: "Users",
	  deliveryType: ["Push", "In-App", "Email"],
	  setDate: "Oct 8, 2024",
	  status: "Scheduled",
	
	},
	{
	  id: "4",
	  title: "Generate leads",
	  audience: "Affiliates",
	  deliveryType: ["Push", "In-App", "Email"],
	  setDate: "Oct 8, 2024",
	  status: "Scheduled",
	
	},
	{
	  id: "5",
	  title: "Ask for feedback",
	  audience: "All Users",
	  deliveryType: ["Push", "In-App", "Email"],
	  setDate: "Oct 8, 2024",
	  status: "Draft",
	
	},
	{
	  id: "6",
	  title: "Use humor to boost engagement",
	  audience: "Premium Subscribers",
	  deliveryType: ["Push", "In-App", "Email"],
	  setDate: "Oct 8, 2024",
	  status: "Scheduled",
	
	},
  ];
  



export const initialUserDataManagementRolePermissions = {
	"Super-Admin": {
		View: true,
		Edit: true,
		Approve: true,
		Decline: true,
		Delete: true,
	},
	Admin: { View: true, Edit: true, Approve: true, Decline: true, Delete: true },
	Editor: {
		View: true,
		Edit: true,
		Approve: true,
		Decline: true,
		Delete: false,
	},
	User: {
		View: false,
		Edit: false,
		Approve: false,
		Decline: false,
		Delete: false,
	},
};