import { StaticImageData } from "next/image";

export interface sideBarType {
	openMenu: boolean;
	setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface smallNotificationType {
	id: number;
	notification: string;
}

export interface userManagementTable {
	purchaseID: string;
	image: string | StaticImageData; 
	address: string;
	email: string;
	contact: string;
	experience: string;
	date: string; 
	status: string;
	id:string;
  }
  
  export type userManagementArray = userManagementTable[];
  

interface PaymentMethod {
    gateway: string;
    identifier: string;
	paymentType: string;
}

interface Transaction {
    transactionsID: string;
    customerID: string;
    image: string | StaticImageData;
    amount: string;
    paymentMethod: PaymentMethod;
    investedProperty: string;
    date: string; 
    status: string;
    id: string;
}


export type TransactionsArray = Transaction[]


type ReviewText = {
	heading: string;
	text: string;
  };
  
  type Review = {
	propertyName: string;
	id: string
	propertyImages: (string | StaticImageData)[];
	date: string;
	customerName: string;
	propertyAddress: string;
	rating: number;
	review: ReviewText;
	status: string
  };

  export type ReviewsArray = Review[]