import { StaticImageData } from "next/image";

export interface membersManagementTable {
	memberID: string;
	image: string | StaticImageData; 
	address: string;
	email: string;
	contact: string;
	experience: string;
	date: string; 
	status: string;
	id:string;
	role: string
  }
  
  export type membersManagementArray = membersManagementTable[];


  export type SubscriptionTierItem = {
	plan: string;
	title: string;
	description: string;
	monthlyPrice: string;
	yearlyPrice: string;
	status: string;

  };
  

  export type AllNotificationDetails = {
	id: string;
	title: string;
	audience: string;
	deliveryType: string[];
	setDate: string;
	status: string;

  };
  