import { StaticImageData } from "next/image";

export interface PropertyItemType {
	type: string;
	rating: number;
	price: number;
	status: string;
	images: (string | StaticImageData)[];
	id: string;
	location: string;
	advertised: boolean;
	nameOfProperty: string;
	description: string;
	propertyDetails: {
		floorArea: number;
		lotSize: number;
		yearBuilt: string;
		dimensions: number;
		parking: number;
		bedrooms: number;
		bathrooms: number;
	};
	assignedAgent: {
		name: string;
		status: string;
		contact: string;
		picture: string;
	};
}

export interface SpecialOfferPropertyType {
	squareFeet: number;
	parking: number;
	bedrooms: number;
	bathrooms: number;
	images: (string | StaticImageData)[];
}

export interface TestimonialItemType {
	name: string;
	image: string | StaticImageData;
	text: string;
	position: string;
}

export interface NewsItemType {
	image: StaticImageData | string;
	nameOfNews: string;
	category: string,
	date: string
}

export interface OTPSixDigitDataType {
	verifyOne: string;
	verifyTwo: string;
	verifyThree: string;
	verifyFour: string;
	verifyFive: string;
	verifySix: string;
}
