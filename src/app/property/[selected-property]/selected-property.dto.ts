import holmesImage1 from "@/assets/images/general/holmes-image2.jpeg";
import holmesImage2 from "@/assets/images/general/holmes-image2.jpeg";
import holmesImage3 from "@/assets/images/general/holmes-image2.jpeg";
import genericAvatar from "@/assets/images/general/generic-avatar.svg";
import { SelectedPropertyResponseType } from "./property-types";

export const selectedPropertyResponse: SelectedPropertyResponseType = {
    type: 'Rental',
    favorited: true,
	images: [
		{
			name: "Living Room",
			link: holmesImage1,
		},
		{
			name: "BedRoom",
			link: holmesImage2,
		},
		{
			name: "Bathroom",
			link: holmesImage3,
		},
		{
			name: "Veranda",
			link: holmesImage3,
		},
	],
	title: "Cozy Apartment For Sale",
	price: '70000',
	description:
		"Lorem ipsum dolor sit amet consectetur. Lectus vel neque sit interdum consequat sem. Adipiscing aenean orci sem sed morbi. Auctor pulvinar purus eget gravida fringilla accumsan urna. Tincidunt scelerisque faucibus sit.Lorem ipsum dolor sit amet consectetur. Lectus vel neque sit interdum consequat sem. Adipiscing aenean orci sem sed morbi. Auctor pulvinar purus eget gravida fringilla accumsan urna. Tincidunt scelerisque faucibus sit.Lorem ipsum dolor sit amet consectetur. Lectus vel neque sit interdum consequat sem. Adipiscing aenean orci sem sed morbi. Auctor pulvinar purus eget gravida fringilla accumsan urna. Tincidunt scelerisque faucibus sit.",
        location: 'Alapere, Lagos, Nigeria',
        squareFeet: 1,
        parking: 2,
        bathrooms: 3,
        bedrooms: 3,
        PropertyOwner: {
            ownerName: `holmes Agency`,
            rating: 4,
            assignedAgentName: "William Salako",
            assignedAgentStatus: "holmes Agent",
            assignedAgentPhoto: genericAvatar,
            assignedAgentContact: '+2347051037829',
        }
};

