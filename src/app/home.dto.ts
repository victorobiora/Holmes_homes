import holmesImage1 from "@/assets/images/general/holmes-image2.jpeg";
import holmesImage2 from "@/assets/images/general/holmes-image2.jpeg";
import holmesImage3 from "@/assets/images/general/holmes-image2.jpeg";
import NotificationIcon from '@/assets/images/general/notification-icon-2.svg'
import MessageIcon from '@/assets/images/general/notification-icon.svg'
import greyMessageIcon from '@/assets/images/general/grey-message-icon.svg'
import greyBookmarksIcon from '@/assets/images/general/grey-bookmarks-icon.svg'
import greyQuestionMarkIcon from '@/assets/images/general/grey-question-mark-icon.svg'
import greyCardIcon from '@/assets/images/general/grey-card-icon.svg'
import whiteAccountIcon from '@/assets/images/general/white-profile-icon.svg'
import greyAccountIcon from '@/assets/images/general/grey-profile-icon.svg'
import {
	NewsItemType,
	SpecialOfferPropertyType,
	TestimonialItemType,
} from "./types";
import genericAvatar from "@/assets/images/general/generic-avatar.svg";


export const navigationIcons = [
	{
		Icon: MessageIcon,
		alt: "Message Icon",
	},
	{
		Icon: NotificationIcon,
		alt: "Notification Icon",
	},
	{
		Icon: genericAvatar,
		alt: "Profile_Pic Icon",
	},
];

export const OTPSixDigitDataList = {
	verifyOne: "",
	verifyTwo: "",
	verifyThree: "",
	verifyFour: "",
	verifyFive: "",
	verifySix: "",
};



export const propertyItemStructure = {
	type: "Rental",
	rating: 3,
	status: "Active",
	price: 30000,
	images: [
		holmesImage2,
		holmesImage1,
		holmesImage3,
		holmesImage2,
		holmesImage1,
		holmesImage3,
	],
	location: "Anthony, Lagos, Nigeria",
	id: "E291NFGM##LDH",
	advertised: true,
	nameOfProperty: "Cozy Apartment Room",
	description:
		"Lorem ipsum dolor sit amet consectetur. Dui ac feugiat morbi elementum massa venenatis. Lorem ipsum dolor sit amet consectetur. Lectus vel neque sit interdum consequat sem. Adipiscing aenean orci sem sed morbi. Auctor pulvinar purus eget gravida fringilla accumsan urna. Tincidunt scelerisque faucibus sit.Lorem ipsum dolor sit amet consectetur. Lectus vel neque sit interdum consequat sem. Adipiscing aenean orci sem sed morbi. Auctor pulvinar purus eget gravida fringilla accumsan urna. Tincidunt scelerisque faucibus sit.Lorem ipsum dolor sit amet consectetur. Lectus vel neque sit interdum consequat sem. Adipiscing aenean orci sem sed morbi. Auctor pulvinar purus eget gravida fringilla accumsan urna. Tincidunt scelerisque faucibus sit.",
	propertyDetails: {
		floorArea: 100,
		lotSize: 250,
		yearBuilt: "2012",
		dimensions: 60,
		parking: 1,
		bedrooms: 2,
		bathrooms: 2,
	},
	assignedAgent: {
		name: "Joseph McAtee",
		status: "holmes agent",
		contact: "+234 91704 58267",
		picture: genericAvatar,
	},
};

export const holmesStatisticsStructure = {
	areaSquareFeet: "200K",
	apartmentsSold: "170K",
	constructions: "150",
	apartmentRooms: "780",
};

export const specialOfferPropertyDetails: SpecialOfferPropertyType = {
	squareFeet: 1,
	parking: 2,
	bathrooms: 3,
	bedrooms: 3,
	images: [holmesImage1, holmesImage2, holmesImage3],
};

export const dummyTestimonials: TestimonialItemType = {
	name: "Chike Edet",
	image: genericAvatar,
	position: "Selling Agent",
	text: "Lorem ipsum dolor sit amet consectetur. Tortor dui non tincidunt rhoncus augue. Mattis duis lectus leo placerat arcu sem justo curabitur. Quis at ut mauris eget nec vel elit magnis. Porta adipiscing lectus dui amet ipsum. Suspendisse a sapien nunc ultricies adipiscing proin sit nullam. Ridiculus eget enim a nunc. Senectus.",
};

export const dummyNewsList: NewsItemType[] = [
	{
		nameOfNews: "10 Brilliant ways to decorate your home",
		image: holmesImage1,
		category: "Decoration",
		date: "20th October, 2024",
	},
	{
		nameOfNews: "Marbles: a new way to reinvent floors ",
		image: holmesImage2,
		category: "Decoration",
		date: "20th October, 2024",
	},
	{
		nameOfNews: "10 Brilliant ways to decorate your home",
		image: holmesImage3,
		category: "Decoration",
		date: "20th October, 2024",
	},
];




export const userSidebarFields = [

	{
		Icon: {
			active: whiteAccountIcon,
			inactive: greyAccountIcon,
		},
		text: "My Account",
		route: "account",
	},
	{
		Icon: {
			active: greyBookmarksIcon,
			inactive: greyBookmarksIcon,
		},
		text: "Saved Listings",
		route: "saved-listings",
	},
	{
		Icon: {
			active: greyCardIcon,
			inactive: greyCardIcon,
		},
		text: "My Orders",
		route: "orders",
	},
	{
		Icon: {
			active: greyMessageIcon,
			inactive: greyMessageIcon,
		},
		text: "Inquiries & Messages",
		route: "inquiries-and-messages",
	},
	{
		Icon: {
			active: greyQuestionMarkIcon,
			inactive: greyQuestionMarkIcon,
		},
		text: "Help & Support",
		route: "help-and-support",
	},
	
];