import PropertyItem from "../property/property-item";
import { propertyItemStructure } from "@/app/home.dto";


const FeaturedListings = () => {
	return (
		<section className="my-10 flex flex-col justify-center items-center">
			<div className={`p-2 bg-[#FBF6F3] text-holmes-primary-dark-brown mb-3`}>
				Properties
			</div>

			<h1 className="text-2xl font-bold my-4">Featured Listings</h1>

  
			<div className="flex gap-2 flex-nowrap w-full DesktopScreen:px-24 px-2 DesktopScreen:flex-wrap justify-between MobileScreen:w-[20rem] DesktopScreen:overflow-x-hidden overflow-x-scroll">
				<PropertyItem item={propertyItemStructure} />
				<PropertyItem item={propertyItemStructure} />
				<PropertyItem item={propertyItemStructure} />
			</div>
		</section>
	);
};


export default FeaturedListings;