import holmesImage1 from "@/assets/images/general/holmes-image2.jpeg";
import holmesImage3 from "@/assets/images/general/holmes-image2.jpeg";
import genericAvatar from "@/assets/images/general/generic-avatar.svg";

export const agentItemStructure = {
	name: "Chike Chidi",
	id: 12345,
	status: "active",
	location: "Ikeja, Lagos",
	contact: "+234 8904 8993",
	email: "john.doe@example.com",
	description:
		"Lorem ipsum dolor sit amet consectetur. Varius quam eu vitae tellus vel feugiat eros. Tellus sapien malesuada auctor nunc purus porttitor lectus. Elementum amet faucibus praesent tellus turpis feugiat aenean. Tellus erat sed aliquet a platea nec eu. Eu vitae elit malesuada diam non. Faucibus tellus in nisi lorem euismod lectus scelerisque. Tortor adipiscing eu feugiat.",
	agency: "holmes Agency Inc.",
	agentLicense: "LC-5758-2048-3944",
	servicesArea: ["Linclion Drive, Ikeja"],
	propertyStatus: {
		totalListings: 200,
		propertiesSold: 123,
		propertiesRent: 122,
		properties: [
			{
				propertyPhotos: [holmesImage1, holmesImage1, holmesImage1],
				id: "068kdsiu3",
				name: "Walker Park Lane",
				location: { name: "Linclion Drive, Ikeja", tag: "cvduhdsf" },
				numberOfReviews: 74377,
				propertyRating: 3,
			},
			{
				propertyPhotos: [holmesImage3, holmesImage1, holmesImage1],
				id: "068kdsiu3",
				name: "Old Trafford",
				location: { name: "Linclion Drive, Manchester", tag: "cvduhdsf" },
				numberOfReviews: 742117,
				propertyRating: 4,
			},
			{
				propertyPhotos: [holmesImage1, holmesImage1, holmesImage1],
				id: "068kdsiu3",
				name: "Selhurst Park",
				location: { name: "Cambodian Ends, London", tag: "cvduhdsf" },
				numberOfReviews: 74377,
				propertyRating: 3,
			},
		],
	},
	profilePicture: genericAvatar,
	reviews: [
		{
			reviewer: "Alice",
			picture: genericAvatar,
			username: "alice45",
			rating: 5,
			comment:
				"The team at agent went above and beyond to understand my needs and tailor their solutions to fit my business requirements Not only did they exceed our expectations.",
			date: "3 days ago",
		},
		{
			reviewer: "Bob",
			picture: genericAvatar,
			username: "bob678",
			rating: 4,
			comment:
				"The team at agent went above and beyond to understand my needs and tailor their solutions to fit my business requirements Not only did they exceed our expectations.",
			date: "4 days ago",
		},
	],
	propertyFiles: [
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
};

