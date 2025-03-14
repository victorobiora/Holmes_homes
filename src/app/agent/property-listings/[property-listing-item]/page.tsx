import Container from "./components/container";
import { useState, useEffect } from "react";
import { propertyItemStructure } from "@/app/home.dto";


const PropertyListingItemPage = () => {
// emulating the fetch request for the server component 
const data = [propertyItemStructure]

	return (
		<section>
			<Container fetchedData = {data} />
		</section>
	);
};

export default PropertyListingItemPage;

