import greyAgentDashboardIcon from "@/assets/images/agent/dashboard-icon.svg";
import greyAgentPropertyIcon from "@/assets/images/agent/grey-home-icon.svg";
import greyAgentSubscriptionsIcon from "@/assets/images/agent/subscriptions-icon.svg";
import greyAgentAdPerformanceIcon from "@/assets/images/agent/ad-performance-icon.svg";
import greyAgentPaymentsIcon from "@/assets/images/agent/grey-settings-icon.svg";
import greyAgentSupportIcon from "@/assets/images/agent/grey-settings-icon.svg";
import greyAgentInquiriesIcon from "@/assets/images/agent/grey-mailbox-icon.svg";
import allPropertiesIcon from "@/assets/images/agent/white-home-icon.svg";
import pendingIcon from "@/assets/images/agent/white-edit-icon.svg";
import viewsIcon from "@/assets/images/agent/white-eye-icon.svg";
import favoritesIcon from "@/assets/images/general/white-favorite-icon.svg";
import genericAvatar from "@/assets/images/general/generic-avatar.svg";
import holmesImage1 from "@/assets/images/general/holmes-image2.jpeg";
import holmesImage2 from "@/assets/images/general/holmes-image2.jpeg";
import holmesImage3 from "@/assets/images/general/holmes-image2.jpeg";
import {
	LeadManagementDetailArrayType,
	ReviewsArray,
	smallNotificationType,
	TransactionsArray,
} from "./types.dto";
import greyAdminDashboardIcon from "@/assets/images/admin/sidebar/grey-dashboard-icon.svg";
import greyAdminPropertyListingsIcon from "@/assets/images/admin/sidebar/grey-property-listings-icon.svg";
import greyAdminUserManagementIcon from "@/assets/images/admin/sidebar/grey-user-management-icon.svg";
import greyAdminAdManagementIcon from "@/assets/images/admin/sidebar/grey-ad-management-icon.svg";
import greyAdminAnalyticsIcon from "@/assets/images/admin/sidebar/grey-analytics-icon.svg";
import greyAdminTransactionsIcon from "@/assets/images/admin/sidebar/grey-transactions-icon.svg";
import greyAdminContentModerationIcon from "@/assets/images/admin/sidebar/grey-content-moderation-icon.svg";
import greyAdminMessagesIcon from "@/assets/images/admin/sidebar/grey-messages-icon.svg";
import greyAdminSettingsIcon from "@/assets/images/admin/sidebar/grey-settings-icon.svg";
import whiteAdminDashboardIcon from "@/assets/images/admin/sidebar/white-dashboard-icon.svg";
import whiteAdminPropertyListingsIcon from "@/assets/images/admin/sidebar/white-property-listings.svg";
import whiteAdminUserManagementIcon from "@/assets/images/admin/sidebar/white-user-management-icon.svg";
import whiteAdminAdManagementIcon from "@/assets/images/admin/sidebar/white-ad-management-icon.svg";
import whiteAdminAnalyticsIcon from "@/assets/images/admin/sidebar/white-analytics-icon.svg";
import whiteAdminTransactionsIcon from "@/assets/images/admin/sidebar/white-transactions-icon.svg";
import whiteAdminContentModerationIcon from "@/assets/images/admin/sidebar/white-content-moderation-icon.svg";
import whiteAdminMessagesIcon from "@/assets/images/admin/sidebar/white-messages-icon.svg";
import whiteAdminSettingsIcon from "@/assets/images/admin/sidebar/white-settings-icon.svg";
import unitRentIcon from "@/assets/images/admin/dashboard/unit-rent-icon.svg";

export const agentSidebarFields = [
	{
		Icon: {
			active: whiteAdminUserManagementIcon,
			inactive: greyAgentDashboardIcon,
		},
		text: "Dashboard",
		route: "dashboard",
	},
	{
		Icon: {
			active: whiteAdminUserManagementIcon,
			inactive: greyAgentPropertyIcon,
		},
		text: "My Listings",
		route: "property-listings",
	},
	{
		Icon: {
			active: whiteAdminUserManagementIcon,
			inactive: greyAgentAdPerformanceIcon,
		},
		text: "Performance & Analytics",
		route: "performance-and-analytics",
	},
	{
		Icon: {
			active: whiteAdminUserManagementIcon,
			inactive: greyAgentSubscriptionsIcon,
		},
		text: "Payments",
		route: "payments",
	},

	{
		Icon: {
			active: whiteAdminUserManagementIcon,
			inactive: greyAgentInquiriesIcon,
		},
		text: "Inquiries & Messages",
		route: "messages",
	},
	{
		Icon: {
			active: whiteAdminUserManagementIcon,
			inactive: greyAgentInquiriesIcon,
		},
		text: "Reviews",
		route: "reviews",
	},
	{
		Icon: {
			active: whiteAdminUserManagementIcon,
			inactive: greyAgentSupportIcon,
		},
		text: "Help & FAQ",
		route: "help-and-faq",
	},
];

export const adminSidebarFields = [
	{
		Icon: {
			active: whiteAdminDashboardIcon,
			inactive: greyAdminDashboardIcon,
		},
		text: "Dashboard",
		route: "dashboard",
	},
	{
		Icon: {
			active: whiteAdminPropertyListingsIcon,
			inactive: greyAdminPropertyListingsIcon,
		},
		text: "Property Listings & Management",
		route: "property-listings-and-management",
	},
	{
		Icon: {
			active: whiteAdminUserManagementIcon,
			inactive: greyAdminUserManagementIcon,
		},
		text: "User Management",
		route: "user-management",
	},
	{
		Icon: {
			active: whiteAdminAdManagementIcon,
			inactive: greyAdminAdManagementIcon,
		},
		text: "Ad Management",
		route: "ad-management",
	},
	{
		Icon: {
			active: whiteAdminAnalyticsIcon,
			inactive: greyAdminAnalyticsIcon,
		},
		text: "Analytics",
		route: "analytics",
	},
	{
		Icon: {
			active: whiteAdminTransactionsIcon,
			inactive: greyAdminTransactionsIcon,
		},
		text: "Transactions",
		route: "transactions",
	},
	{
		Icon: {
			active: whiteAdminContentModerationIcon,
			inactive: greyAdminContentModerationIcon,
		},
		text: "Content Moderation",
		route: "content-moderation",
	},
	{
		Icon: {
			active: whiteAdminMessagesIcon,
			inactive: greyAdminMessagesIcon,
		},
		text: "Inquiries And Messages",
		route: "inquiries-and-messages",
	},
	{
		Icon: {
			active: whiteAdminSettingsIcon,
			inactive: greyAdminSettingsIcon,
		},
		text: "Settings",
		route: "settings",
	},
];

export const adminStatsDataStructure = [
	{
		name: "All Properties",
		value: 1700000,
		icon: allPropertiesIcon,
	},
	{
		name: "Total Pending",
		value: 200,
		icon: pendingIcon,
	},
	{
		name: "Total Views",
		value: 4400,
		icon: viewsIcon,
	},
	{
		name: "Total Favourites",
		value: 2000,
		icon: favoritesIcon,
	},
];
export const propertyStatsDataStructure = [
	{
		name: "Total Income",
		value: 1700000,
		icon: allPropertiesIcon,
	},
	{
		name: "Total Properties",
		value: 200,
		icon: pendingIcon,
	},
	{
		name: "Units Sold",
		value: 4400,
		icon: viewsIcon,
	},
	{
		name: "Unit Rent",
		value: 2000,
		icon: unitRentIcon,
	},
];

export const demoSmallNotificationsArray: smallNotificationType[] = [
	{
		id: 9302649,
		notification: "you have 5 users waiting for your approval",
	},
	{
		id: 930293649,
		notification: "you recieved a message from ken",
	},
	{
		id: 49,
		notification: "a property review request has been made",
	},
];

export const demoLeadStatsDetails = {
	StatsChartData: [
		{
			date: "jan",
			amount: 79,
		},
		{
			date: "feb",
			amount: 429,
		},
		{
			date: "mar",
			amount: 129,
		},
		{
			date: "apr",
			amount: 189,
		},
		{
			date: "may",
			amount: 102,
		},
		{
			date: "jun",
			amount: 229,
		},
		{
			date: "jul",
			amount: 1019,
		},
		{
			date: "aug",
			amount: 1029,
		},
		{
			date: "sep",
			amount: 400,
		},
		{
			date: "oct",
			amount: 219,
		},
		{
			date: "nov",
			amount: 712,
		},
		{
			date: "dec",
			amount: 200,
		},
	],
	dailyLeads: [
		{
			date: "13 Sep 2024",
			from_phone: 24,
			from_message: 12,
			id: '9243BGCUD'
		},
		{
			date: "13 Sep 2024",
			from_phone: 24,
			from_message: 12,
				id: '9243BJGCUD'
		},
		{
			date: "13 Sep 2024",
			from_phone: 24,
			from_message: 12,
				id: '9243BIDJGCUD'
		},
	],
};

export const SalesChartData = [
	{
		date: "jan",
		amount: 79,
	},
	{
		date: "feb",
		amount: 429,
	},
	{
		date: "mar",
		amount: 129,
	},
	{
		date: "apr",
		amount: 189,
	},
	{
		date: "may",
		amount: 102,
	},
	{
		date: "jun",
		amount: 229,
	},
	{
		date: "jul",
		amount: 1019,
	},
	{
		date: "aug",
		amount: 1029,
	},
	{
		date: "sep",
		amount: 400,
	},
	{
		date: "oct",
		amount: 219,
	},
	{
		date: "nov",
		amount: 712,
	},
	{
		date: "dec",
		amount: 200,
	},
];

export const demoActivityItemsList = [
	{
		nameOfActivityCreator: " Olubi Makinde",
		online: false,
		date: "Nov 22",
		profilePictureOfActivityCreator: genericAvatar,
		activitySubHeading: "Property Added",
		activityText:
			"I sent you a message about the house you showed me the last timee. Is it ready now or you still need time?",
		documents: [
			{
				docType: "pdf",
				name: "Details.pdf",
				size: "2.4 mb",
				link: "https://kvidmofs.com",
			},
			{
				docType: "img",
				name: "property.jpg",
				size: "2.4 mb",
				link: "https://kvidmofs.com",
			},
		],
	},
	{
		nameOfActivityCreator: " Josh King",
		online: false,
		date: "Nov 22",
		profilePictureOfActivityCreator: genericAvatar,
		activitySubHeading: "Property Inquiry",
		activityText:
			"I sent you a message about the house you showed me the last timee. Is it ready now or you still need time?",
		documents: [
			{
				docType: "pdf",
				name: "Details.pdf",
				size: "2.4 mb",
				link: "https://kvidmofs.com",
			},
			{
				docType: "img",
				name: "property.jpg",
				size: "2.4 mb",
				link: "https://kvidmofs.com",
			},
		],
	},
	{
		nameOfActivityCreator: " Josh King",
		online: false,
		date: "Nov 22",
		profilePictureOfActivityCreator: genericAvatar,
		activitySubHeading: "Property Inquiry",
		activityText:
			"I sent you a message about the house you showed me the last timee. Is it ready now or you still need time?",
		documents: [
			{
				docType: "pdf",
				name: "Details.pdf",
				size: "2.4 mb",
				link: "https://kvidmofs.com",
			},
			{
				docType: "img",
				name: "property.jpg",
				size: "2.4 mb",
				link: "https://kvidmofs.com",
			},
		],
	},
];

export const demoRecentListings = [
	{
		title: "Galaxy Flat",
		address: "42 Olumide Street, Lagos",
		price: "₦35,909",
		date: "13 Jan, 2024",
		views: 1290,
		status: "Active",
		image: holmesImage1,
	},
	{
		title: "Galaxy Flat",
		address: "42 Olumide Street, Lagos",
		price: "₦35,909",
		date: "13 Jan, 2024",
		views: 1290,
		status: "Pending",
		image: holmesImage2,
	},
	{
		title: "Galaxy Flat",
		address: "42 Olumide Street, Lagos",
		price: "₦35,909",
		date: "13 Jan, 2024",
		views: 1290,
		status: "Processing",
		image: holmesImage3,
	},
];

export const demoLatestTransactions = [
	{
		id: "#202",
		buyerName: "James Milner",
		buyerImage: genericAvatar,
		invoice: "IN-8993",
		date: "Sep 7, 2024",
		amount: "₦45,842",
		paymentMethod: "Mastercard",
		status: "Completed",
	},
	{
		id: "#203",
		buyerName: "James Milner",
		buyerImage: genericAvatar,
		invoice: "IN-8993",
		date: "Sep 7, 2024",
		amount: "₦45,842",
		paymentMethod: "Mastercard",
		status: "Canceled",
	},
	{
		id: "#204",
		buyerName: "James Milner",
		buyerImage: genericAvatar,
		invoice: "IN-8993",
		date: "Sep 7, 2024",
		amount: "₦45,842",
		paymentMethod: "Mastercard",
		status: "Pending",
	},
];

export const demoPropertyListings = [
	{
		title: "Radisson Blu",
		address: "42 Olumide Street, Lagos",
		id: String(Math.random() * 100202930),
		price: "₦35,909",
		date: "13 Jan, 2024",
		views: 1290,
		status: "Active",
		image: holmesImage1,
	},
	{
		title: "Galaxy Flat",
		address: "42 Olumide Street, Lagos",
		price: "₦35,909",
		id: String(Math.random() * 100202930),
		date: "13 Jan, 2024",
		views: 1290,
		status: "Pending",
		image: holmesImage2,
	},
	{
		title: "Galaxy Flat",
		address: "42 Olumide Street, Lagos",
		price: "₦35,909",
		id: String(Math.random() * 100202930),
		date: "13 Jan, 2024",
		views: 1290,
		status: "Processing",
		image: holmesImage3,
	},
	{
		title: "Galaxy Flat",
		address: "42 Olumide Street, Lagos",
		price: "₦35,909",
		id: String(Math.random() * 100202930),
		date: "13 Jan, 2024",
		views: 1290,
		status: "Active",
		image: holmesImage1,
	},
	{
		title: "Galaxy Flat",
		address: "42 Olumide Street, Lagos",
		price: "₦35,909",
		id: String(Math.random() * 100202930),
		date: "13 Jan, 2024",
		views: 1290,
		status: "Pending",
		image: holmesImage2,
	},
	{
		title: "Galaxy Flat",
		address: "42 Olumide Street, Lagos",
		price: "₦35,909",
		id: String(Math.random() * 100202930),
		date: "13 Jan, 2024",
		views: 1290,
		status: "Processing",
		image: holmesImage2,
	},
	{
		title: "Galaxy Flat",
		address: "42 Olumide Street, Lagos",
		price: "₦35,909",
		id: String(Math.random() * 100202930),
		date: "13 Jan, 2024",
		views: 1290,
		status: "Active",
		image: holmesImage3,
	},
	{
		title: "Galaxy Flat",
		address: "42 Olumide Street, Lagos",
		price: "₦35,909",
		id: String(Math.random() * 100202930),
		date: "13 Jan, 2024",
		views: 1290,
		status: "Pending",
		image: holmesImage1,
	},
	{
		title: "Galaxy Mat",
		address: "42 Olumide Street, Lagos",
		price: "₦35,909",
		id: String(Math.random() * 100202930),
		date: "13 Jan, 2024",
		views: 1290,
		status: "Processing",
		image: holmesImage3,
	},
	{
		title: "Galaxy Flat",
		address: "42 Olumide Street, Lagos",
		price: "₦35,909",
		id: String(Math.random() * 100202930),
		date: "13 Jan, 2024",
		views: 1290,
		status: "Active",
		image: holmesImage1,
	},
	{
		title: "Galaxy Flat",
		address: "42 Olumide Street, Lagos",
		price: "₦35,909",
		id: String(Math.random() * 100202930),
		date: "13 Jan, 2024",
		views: 1290,
		status: "Pending",
		image: holmesImage2,
	},
	{
		title: "Galaxy Flat",
		address: "42 Olumide Street, Lagos",
		price: "₦35,909",
		date: "13 Jan, 2024",
		id: String(Math.random() * 100202930),
		views: 1290,
		status: "Processing",
		image: holmesImage3,
	},
];

export const demoLeadsManagementDetails: LeadManagementDetailArrayType = [
	{
		date: "12 Oct 2024",
		client_name: "James Milner",
		image: genericAvatar,
		client_phone_number: "+234 816-993-9485",
		medium: "Sponsored Posts",
		source: "Social Media",
		id: "#77930J",
	},
	{
		date: "12 Oct 2024",
		client_name: "James Milner",
		image: genericAvatar,
		client_phone_number: "+234 816-993-9485",
		medium: "Sponsored Posts",
		source: "Social Media",
		id: "#77930J",
	},
	{
		date: "12 Oct 2024",
		client_name: "James Milner",
		image: genericAvatar,
		client_phone_number: "+234 816-993-9485",
		medium: "Sponsored Posts",
		source: "Social Media",
		id: "#77930J",
	},
	{
		date: "12 Oct 2024",
		client_name: "James Milner",
		image: genericAvatar,
		client_phone_number: "+234 816-993-9485",
		medium: "Sponsored Posts",
		source: "Social Media",
		id: "#77930J",
	},
	{
		date: "12 Oct 2024",
		client_name: "James Milner",
		image: genericAvatar,
		client_phone_number: "+234 816-993-9485",
		medium: "Sponsored Posts",
		source: "Social Media",
		id: "#77930J",
	},
	{
		date: "12 Oct 2024",
		client_name: "James Milner",
		image: genericAvatar,
		client_phone_number: "+234 816-993-9485",
		medium: "Sponsored Posts",
		source: "Social Media",
		id: "#77930J",
	},
	{
		date: "12 Oct 2024",
		client_name: "James Milner",
		image: genericAvatar,
		client_phone_number: "+234 816-993-9485",
		medium: "Sponsored Posts",
		source: "Social Media",
		id: "#77930J",
	},
	{
		date: "12 Oct 2024",
		client_name: "James Milner",
		image: genericAvatar,
		client_phone_number: "+234 816-993-9485",
		medium: "Sponsored Posts",
		source: "Social Media",
		id: "#77930J",
	},
];

export const demoAgentManagementDetails = [
	{
		purchaseID: "Winston Kilo",
		image: holmesImage2,
		address: "Lincoln Drive Harrisburg, PA 17101 U.S.A",
		email: "jamesmilner@example.com",
		contact: "+234 803-7582-071",
		experience: "5 Years",
		date: "Oct 8, 2024",
		status: "inactive",
		id: "gudfst8289",
	},
	{
		purchaseID: "James Milner",
		image: holmesImage2,
		address: "Lincoln Drive Harrisburg, PA 17101 U.S.A",
		email: "jamesmilner@example.com",
		contact: "+234 803-7582-071",
		experience: "5 Years",
		date: "Oct 8, 2024",
		status: "active",
		id: "gudfst828swer9",
	},
	{
		purchaseID: "Osaze Adamu",
		image: holmesImage2,
		address: "Lincoln Drive Harrisburg, PA 17101 U.S.A",
		email: "jamesmilner@example.com",
		contact: "+234 803-7582-071",
		experience: "5 Years",
		date: "Oct 8, 2024",
		status: "inactive",
		id: "gudfst828df8ye99",
	},
	{
		purchaseID: "James Milner",
		image: holmesImage2,
		address: "Lincoln Drive Harrisburg, PA 17101 U.S.A",
		email: "jamesmilner@example.com",
		contact: "+234 803-7582-071",
		experience: "5 Years",
		date: "Oct 8, 2024",
		status: "inactive",
		id: "gudfst8289futw89ei",
	},
	{
		purchaseID: "James Milner",
		image: holmesImage2,
		address: "Lincoln Drive Harrisburg, PA 17101 U.S.A",
		email: "jamesmilner@example.com",
		contact: "+234 803-7582-071",
		experience: "5 Years",
		date: "Oct 8, 2024",
		status: "pending",
		id: "gudfs35t8289",
	},
];

export const demoCustomerManagementDetails = [
	{
		purchaseID: "James Milner",
		image: holmesImage2,
		address: "Lincoln Drive Harrisburg, PA 17101 U.S.A",
		email: "jamesmilner@example.com",
		contact: "+234 803-7582-071",
		experience: "5 Years",
		date: "Oct 8, 2024",
		status: "inactive",
		id: "gudfst828e2rssd9",
	},
	{
		purchaseID: "James Milner",
		image: holmesImage1,
		address: "Lincoln Drive Harrisburg, PA 17101 U.S.A",
		email: "jamesmilner@example.com",
		contact: "+234 803-7582-071",
		experience: "5 Years",
		date: "Oct 8, 2024",
		status: "active",
		id: "gudfst8qefwg289",
	},
	{
		purchaseID: "James Milner",
		image: holmesImage3,
		address: "Lincoln Drive Harrisburg, PA 17101 U.S.A",
		email: "jamesmilner@example.com",
		contact: "+234 803-7582-071",
		experience: "5 Years",
		date: "Oct 8, 2024",
		status: "inactive",
		id: "gudfwrghwyietwast8289",
	},
	{
		purchaseID: "James Milner",
		image: holmesImage2,
		address: "Lincoln Drive Harrisburg, PA 17101 U.S.A",
		email: "jamesmilner@example.com",
		contact: "+234 803-7582-071",
		experience: "5 Years",
		date: "Oct 8, 2024",
		status: "pending",
		id: "gudfst828-397874509",
	},
	{
		purchaseID: "James Milner",
		image: holmesImage2,
		address: "Lincoln Drive Harrisburg, PA 17101 U.S.A",
		email: "jamesmilner@example.com",
		contact: "+234 803-7582-071",
		experience: "5 Years",
		date: "Oct 8, 2024",
		status: "pending",
		id: "udfst8289",
	},
];
export const demoAffliateManagementDetails = [
	{
		purchaseID: "Chike Abih",
		image: holmesImage2,
		address: "Lincoln Drive Harrisburg, PA 17101 U.S.A",
		email: "jamesmilner@example.com",
		contact: "+234 803-7582-071",
		experience: "5 Years",
		date: "Oct 8, 2024",
		status: "inactive",
		id: "gudfstfesge5ergewgw8289",
	},
	{
		purchaseID: "Chike Abih",
		image: holmesImage1,
		address: "Lincoln Drive Harrisburg, PA 17101 U.S.A",
		email: "jamesmilner@example.com",
		contact: "+234 803-7582-071",
		experience: "5 Years",
		date: "Oct 8, 2024",
		status: "active",
		id: "gu8289",
	},
	{
		purchaseID: "Chike Abih",
		image: holmesImage3,
		address: "Lincoln Drive Harrisburg, PA 17101 U.S.A",
		email: "jamesmilner@example.com",
		contact: "+234 803-7582-071",
		experience: "5 Years",
		date: "Oct 8, 2024",
		status: "inactive",
		id: "gudfewey356y45fst8289",
	},
	{
		purchaseID: "James Milner",
		image: holmesImage2,
		address: "Lincoln Drive Harrisburg, PA 17101 U.S.A",
		email: "jamesmilner@example.com",
		contact: "+234 803-7582-071",
		experience: "5 Years",
		date: "Oct 8, 2024",
		status: "pending",
		id: "gudfst89",
	},
	{
		purchaseID: "James Milner",
		image: holmesImage2,
		address: "Lincoln Drive Harrisburg, PA 17101 U.S.A",
		email: "jamesmilner@example.com",
		contact: "+234 803-7582-071",
		experience: "5 Years",
		date: "Oct 8, 2024",
		status: "pending",
		id: "gudfsthytjrjt8289",
	},
];

export const demoTransactionsDetails: TransactionsArray = [
	{
		transactionsID: "TXN-201",
		customerID: "Winston Kilo",
		image: holmesImage2,
		amount: "909,201",
		paymentMethod: {
			gateway: "Mastercard",
			identifier: "***** 0805",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 8, 2024",
		status: "Pending",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Mark Mbappe",
		image: genericAvatar,
		amount: "909,201",
		paymentMethod: {
			gateway: "Visa",
			identifier: "***** 0805",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 8, 2024",
		status: "Completed",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Chidi Biao",
		image: genericAvatar,
		amount: "909,201",
		paymentMethod: {
			gateway: "Paypal",
			identifier: "winstongyalis@gmail.com",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 10, 2024",
		status: "Canceled",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Winston Kilo",
		image: holmesImage2,
		amount: "909,201",
		paymentMethod: {
			gateway: "Mastercard",
			identifier: "***** 0805",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 8, 2024",
		status: "Pending",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Mark Mbappe",
		image: genericAvatar,
		amount: "909,201",
		paymentMethod: {
			gateway: "Visa",
			identifier: "***** 0805",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 8, 2024",
		status: "Completed",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Chidi Biao",
		image: genericAvatar,
		amount: "909,201",
		paymentMethod: {
			gateway: "Paypal",
			identifier: "winstongyalis@gmail.com",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 10, 2024",
		status: "Canceled",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Winston Kilo",
		image: holmesImage2,
		amount: "909,201",
		paymentMethod: {
			gateway: "Mastercard",
			identifier: "***** 0805",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 8, 2024",
		status: "Pending",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Mark Mbappe",
		image: genericAvatar,
		amount: "909,201",
		paymentMethod: {
			gateway: "Visa",
			identifier: "***** 0805",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 8, 2024",
		status: "Completed",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Chidi Biao",
		image: genericAvatar,
		amount: "909,201",
		paymentMethod: {
			gateway: "Paypal",
			identifier: "winstongyalis@gmail.com",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 10, 2024",
		status: "Canceled",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Winston Kilo",
		image: holmesImage2,
		amount: "909,201",
		paymentMethod: {
			gateway: "Mastercard",
			identifier: "***** 0805",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 8, 2024",
		status: "Pending",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Mark Mbappe",
		image: genericAvatar,
		amount: "909,201",
		paymentMethod: {
			gateway: "Visa",
			identifier: "***** 0805",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 8, 2024",
		status: "Completed",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Chidi Biao",
		image: genericAvatar,
		amount: "909,201",
		paymentMethod: {
			gateway: "Paypal",
			identifier: "winstongyalis@gmail.com",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 10, 2024",
		status: "Canceled",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Winston Kilo",
		image: holmesImage2,
		amount: "909,201",
		paymentMethod: {
			gateway: "Mastercard",
			identifier: "***** 0805",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 8, 2024",
		status: "Pending",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Mark Mbappe",
		image: genericAvatar,
		amount: "909,201",
		paymentMethod: {
			gateway: "Visa",
			identifier: "***** 0805",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 8, 2024",
		status: "Completed",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Chidi Biao",
		image: genericAvatar,
		amount: "909,201",
		paymentMethod: {
			gateway: "Paypal",
			identifier: "winstongyalis@gmail.com",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 10, 2024",
		status: "Canceled",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Winston Kilo",
		image: holmesImage2,
		amount: "909,201",
		paymentMethod: {
			gateway: "Mastercard",
			identifier: "***** 0805",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 8, 2024",
		status: "Pending",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Mark Mbappe",
		image: genericAvatar,
		amount: "909,201",
		paymentMethod: {
			gateway: "Visa",
			identifier: "***** 0805",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 8, 2024",
		status: "Completed",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Chidi Biao",
		image: genericAvatar,
		amount: "909,201",
		paymentMethod: {
			gateway: "Paypal",
			identifier: "winstongyalis@gmail.com",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 10, 2024",
		status: "Canceled",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Winston Kilo",
		image: holmesImage2,
		amount: "909,201",
		paymentMethod: {
			gateway: "Mastercard",
			identifier: "***** 0805",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 8, 2024",
		status: "Pending",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Mark Mbappe",
		image: genericAvatar,
		amount: "909,201",
		paymentMethod: {
			gateway: "Visa",
			identifier: "***** 0805",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 8, 2024",
		status: "Completed",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Chidi Biao",
		image: genericAvatar,
		amount: "909,201",
		paymentMethod: {
			gateway: "Paypal",
			identifier: "winstongyalis@gmail.com",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 10, 2024",
		status: "Canceled",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Winston Kilo",
		image: holmesImage2,
		amount: "909,201",
		paymentMethod: {
			gateway: "Mastercard",
			identifier: "***** 0805",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 8, 2024",
		status: "Pending",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Mark Mbappe",
		image: genericAvatar,
		amount: "909,201",
		paymentMethod: {
			gateway: "Visa",
			identifier: "***** 0805",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 8, 2024",
		status: "Completed",
		id: "gudfst8289",
	},
	{
		transactionsID: "TXN-201",
		customerID: "Chidi Biao",
		image: genericAvatar,
		amount: "909,201",
		paymentMethod: {
			gateway: "Paypal",
			identifier: "winstongyalis@gmail.com",
			paymentType: "Card Payment",
		},
		investedProperty: "W. straat 102 DK Deventer",
		date: "Oct 10, 2024",
		status: "Canceled",
		id: "gudfst8289",
	},
];

export const demoReviewsDetails: ReviewsArray = [
	{
		propertyName: "Galaxy Block A Flat",
		id: "dgviofb21",
		propertyImages: [holmesImage1, holmesImage2, holmesImage3],
		date: "7 Jan, 2024",
		customerName: "James Milner",
		propertyAddress: "Linclin Road, Ibeju-Lekki",
		rating: 4,
		review: {
			heading: "Best for home living",
			text: "The team at agent went above and beyond to understand my needs and tailor their solutions to fit my business requirements Not only did they exceed our expectations.",
		},
		status: "Published",
	},
	{
		propertyName: "7 Ilupeju Axis",
		id: "dgviofb21",
		propertyImages: [holmesImage2, holmesImage1, holmesImage3],
		date: "7 Jan, 2024",
		customerName: "	Chidi Kessie",
		propertyAddress: "Linclin Road, Ibeju-Lekki",
		rating: 5,
		review: {
			heading: "Best for Events living",
			text: "The team at agent went above and beyond to understand my needs and tailor their solutions to fit my business requirements Not only did they exceed our expectations.",
		},
		status: "Pending",
	},
	{
		propertyName: "Galaxy Block A Flat",
		id: "dgviofb21",
		propertyImages: [holmesImage1, holmesImage2, holmesImage3],
		date: "7 Jan, 2024",
		customerName: "James Milner",
		propertyAddress: "Linclin Road, Ibeju-Lekki",
		rating: 4,
		review: {
			heading: "Best for home living",
			text: "The team at agent went above and beyond to understand my needs and tailor their solutions to fit my business requirements Not only did they exceed our expectations.",
		},
		status: "Published",
	},
	{
		propertyName: "7 Ilupeju Axis",
		id: "dgviofb21",
		propertyImages: [holmesImage2, holmesImage1, holmesImage3],
		date: "7 Jan, 2024",
		customerName: "	Chidi Kessie",
		propertyAddress: "Linclin Road, Ibeju-Lekki",
		rating: 5,
		review: {
			heading: "Best for Events living",
			text: "The team at agent went above and beyond to understand my needs and tailor their solutions to fit my business requirements Not only did they exceed our expectations.",
		},
		status: "Pending",
	},
	{
		propertyName: "Galaxy Block A Flat",
		id: "dgviofb21",
		propertyImages: [holmesImage1, holmesImage2, holmesImage3],
		date: "7 Jan, 2024",
		customerName: "James Milner",
		propertyAddress: "Linclin Road, Ibeju-Lekki",
		rating: 4,
		review: {
			heading: "Best for home living",
			text: "The team at agent went above and beyond to understand my needs and tailor their solutions to fit my business requirements Not only did they exceed our expectations.",
		},
		status: "Published",
	},
	{
		propertyName: "7 Ilupeju Axis",
		id: "dgviofb21",
		propertyImages: [holmesImage2, holmesImage1, holmesImage3],
		date: "7 Jan, 2024",
		customerName: "	Chidi Kessie",
		propertyAddress: "Linclin Road, Ibeju-Lekki",
		rating: 5,
		review: {
			heading: "Best for Events living",
			text: "The team at agent went above and beyond to understand my needs and tailor their solutions to fit my business requirements Not only did they exceed our expectations.",
		},
		status: "Pending",
	},
	{
		propertyName: "Galaxy Block A Flat",
		id: "dgviofb21",
		propertyImages: [holmesImage1, holmesImage2, holmesImage3],
		date: "7 Jan, 2024",
		customerName: "James Milner",
		propertyAddress: "Linclin Road, Ibeju-Lekki",
		rating: 4,
		review: {
			heading: "Best for home living",
			text: "The team at agent went above and beyond to understand my needs and tailor their solutions to fit my business requirements Not only did they exceed our expectations.",
		},
		status: "Published",
	},
	{
		propertyName: "7 Ilupeju Axis",
		id: "dgviofb21",
		propertyImages: [holmesImage2, holmesImage1, holmesImage3],
		date: "7 Jan, 2024",
		customerName: "	Chidi Kessie",
		propertyAddress: "Linclin Road, Ibeju-Lekki",
		rating: 5,
		review: {
			heading: "Best for Events living",
			text: "The team at agent went above and beyond to understand my needs and tailor their solutions to fit my business requirements Not only did they exceed our expectations.",
		},
		status: "Pending",
	},
	{
		propertyName: "Galaxy Block A Flat",
		id: "dgviofb21",
		propertyImages: [holmesImage1, holmesImage2, holmesImage3],
		date: "7 Jan, 2024",
		customerName: "James Milner",
		propertyAddress: "Linclin Road, Ibeju-Lekki",
		rating: 4,
		review: {
			heading: "Best for home living",
			text: "The team at agent went above and beyond to understand my needs and tailor their solutions to fit my business requirements Not only did they exceed our expectations.",
		},
		status: "Published",
	},
	{
		propertyName: "7 Ilupeju Axis",
		id: "dgviofb21",
		propertyImages: [holmesImage2, holmesImage1, holmesImage3],
		date: "7 Jan, 2024",
		customerName: "	Chidi Kessie",
		propertyAddress: "Linclin Road, Ibeju-Lekki",
		rating: 5,
		review: {
			heading: "Best for Events living",
			text: "The team at agent went above and beyond to understand my needs and tailor their solutions to fit my business requirements Not only did they exceed our expectations.",
		},
		status: "Pending",
	},
	{
		propertyName: "Galaxy Block A Flat",
		id: "dgviofb21",
		propertyImages: [holmesImage1, holmesImage2, holmesImage3],
		date: "7 Jan, 2024",
		customerName: "James Milner",
		propertyAddress: "Linclin Road, Ibeju-Lekki",
		rating: 4,
		review: {
			heading: "Best for home living",
			text: "The team at agent went above and beyond to understand my needs and tailor their solutions to fit my business requirements Not only did they exceed our expectations.",
		},
		status: "Published",
	},
	{
		propertyName: "7 Ilupeju Axis",
		id: "dgviofb21",
		propertyImages: [holmesImage2, holmesImage1, holmesImage3],
		date: "7 Jan, 2024",
		customerName: "	Chidi Kessie",
		propertyAddress: "Linclin Road, Ibeju-Lekki",
		rating: 5,
		review: {
			heading: "Best for Events living",
			text: "The team at agent went above and beyond to understand my needs and tailor their solutions to fit my business requirements Not only did they exceed our expectations.",
		},
		status: "Pending",
	},
	{
		propertyName: "Galaxy Block A Flat",
		id: "dgviofb21",
		propertyImages: [holmesImage1, holmesImage2, holmesImage3],
		date: "7 Jan, 2024",
		customerName: "James Milner",
		propertyAddress: "Linclin Road, Ibeju-Lekki",
		rating: 4,
		review: {
			heading: "Best for home living",
			text: "The team at agent went above and beyond to understand my needs and tailor their solutions to fit my business requirements Not only did they exceed our expectations.",
		},
		status: "Published",
	},
	{
		propertyName: "7 Ilupeju Axis",
		id: "dgviofb21",
		propertyImages: [holmesImage2, holmesImage1, holmesImage3],
		date: "7 Jan, 2024",
		customerName: "	Chidi Kessie",
		propertyAddress: "Linclin Road, Ibeju-Lekki",
		rating: 5,
		review: {
			heading: "Best for Events living",
			text: "The team at agent went above and beyond to understand my needs and tailor their solutions to fit my business requirements Not only did they exceed our expectations.",
		},
		status: "Pending",
	},
	{
		propertyName: "Galaxy Block A Flat",
		id: "dgviofb21",
		propertyImages: [holmesImage1, holmesImage2, holmesImage3],
		date: "7 Jan, 2024",
		customerName: "James Milner",
		propertyAddress: "Linclin Road, Ibeju-Lekki",
		rating: 4,
		review: {
			heading: "Best for home living",
			text: "The team at agent went above and beyond to understand my needs and tailor their solutions to fit my business requirements Not only did they exceed our expectations.",
		},
		status: "Published",
	},
	{
		propertyName: "7 Ilupeju Axis",
		id: "dgviofb21",
		propertyImages: [holmesImage2, holmesImage1, holmesImage3],
		date: "7 Jan, 2024",
		customerName: "	Chidi Kessie",
		propertyAddress: "Linclin Road, Ibeju-Lekki",
		rating: 5,
		review: {
			heading: "Best for Events living",
			text: "The team at agent went above and beyond to understand my needs and tailor their solutions to fit my business requirements Not only did they exceed our expectations.",
		},
		status: "Pending",
	},
	{
		propertyName: "Galaxy Block A Flat",
		id: "dgviofb21",
		propertyImages: [holmesImage1, holmesImage2, holmesImage3],
		date: "7 Jan, 2024",
		customerName: "James Milner",
		propertyAddress: "Linclin Road, Ibeju-Lekki",
		rating: 4,
		review: {
			heading: "Best for home living",
			text: "The team at agent went above and beyond to understand my needs and tailor their solutions to fit my business requirements Not only did they exceed our expectations.",
		},
		status: "Published",
	},
	{
		propertyName: "7 Ilupeju Axis",
		id: "dgviofb21",
		propertyImages: [holmesImage2, holmesImage1, holmesImage3],
		date: "7 Jan, 2024",
		customerName: "	Chidi Kessie",
		propertyAddress: "Linclin Road, Ibeju-Lekki",
		rating: 5,
		review: {
			heading: "Best for Events living",
			text: "The team at agent went above and beyond to understand my needs and tailor their solutions to fit my business requirements Not only did they exceed our expectations.",
		},
		status: "Pending",
	},
];

