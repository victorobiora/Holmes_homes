import { StaticImageData } from 'next/image';

export type SelectedPropertyResponseType = {
  type: string;
  favorited: boolean;
  images: {
    name: string;
    link: string | StaticImageData;
  }[];
  title: string;
  description: string;
  location: string;
  price: string;
  squareFeet: number;
  parking: number;
  bathrooms: number;
  bedrooms: number;
  PropertyOwner: {
    ownerName: string;
    rating: number;
    assignedAgentName: string;
    assignedAgentStatus: string;
    assignedAgentPhoto: string | StaticImageData;
    assignedAgentContact: string;
  };
};
