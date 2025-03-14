import Image, { StaticImageData } from "next/image";
import aboutUsImage from "@/assets/images/general/holmes-about-us-image.jpeg";
import view3DIcon from "@/assets/images/general/view-3d.svg";
import bedroomIcon from "@/assets/images/general/bedroom-icon.svg";
import bathroomIcon from "@/assets/images/general/bathroom-icon.svg";
import parkingIcon from "@/assets/images/general/parking-icon.svg";
import squareFeetIcon from "@/assets/images/general/square-feet-icon.svg";
import { motion } from "framer-motion";
import { SpecialOfferPropertyType } from "@/app/types";

const SpecialOffer: React.FC<{
	propertyDetails: SpecialOfferPropertyType;
}> = ({ propertyDetails }) => {

	const desktopView = () => {
		return (
			<section className="pr-10 pl-28 flex justify-between my-20 h-[32rem] TabletScreen:hidden MobileScreen:hidden">
				<div className="w-[45%] px-3 py-7">
					<div
						className={`p-2 w-[10rem] bg-[#FBF6F3] text-holmes-primary-dark-brown text-center`}
					>
						Special Offer
					</div>
	
					<h1 className="my-3 text-3xl w-[70%] font-[500]">
						Today's Best Selling Properties
					</h1>
					<p className="text-holmes-font-light-grey my-5">
						Lorem ipsum dolor sit amet consectetur. Sed urna faucibus. Lorem ipsum
						dolor sit amet consectetur. Sed urna faucibus.
					</p>
	
					<div className="bg-holmes-background-light-grey p-2 w-full flex justify-between items-center text-sm  text-holmes-font-grey">
						<div>
							<div className="flex justify-center items-center">
								{" "}
								<div
									className="mr-2"
									onClick={() => {
										("");
									}}
								>
									<Image alt="bedroom" src={bedroomIcon} />
								</div>
								{propertyDetails.bedrooms}
							</div>
							<div>Bedrooms</div>
						</div>
	
						<div>
							<div className="flex justify-center items-center">
								{" "}
								<div
									className="mr-2"
									onClick={() => {
										("");
									}}
								>
									<Image alt="bathroom" src={bathroomIcon} />
								</div>
								{propertyDetails.bathrooms}
							</div>
							<div>Bathrooms</div>
						</div>
	
						<div>
							<div className="flex justify-center items-center">
								{" "}
								<div
									className="mr-2"
									onClick={() => {
										("");
									}}
								>
									<Image alt="parking" src={parkingIcon} />
								</div>
								{propertyDetails.bathrooms}
							</div>
							<div>Parking</div>
						</div>
	
						<div>
							<div className="flex  justify-center items-center">
								<div
									className="mr-2"
									onClick={() => {
										("");
									}}
								>
									<Image alt="sq-ft" src={squareFeetIcon} />
								</div>
								{propertyDetails.squareFeet}
							</div>
							<div>Square Ft.</div>
						</div>
					</div>
	
					{/*  */}
					<div className="flex flex-wrap ">
						<div className="w-1/2 flex items-center my-2">
							<div className=" flex justify-center items-center bg-[#F7EEE8] rounded-full h-10 w-10 ">
								<Image alt="notif" src={view3DIcon} className="w-1/2 h-1/2" />
							</div>
							<p className="text-holmes-primary-dark-brown mx-3  text-sm font-bold">
								Smart Home Design
							</p>
						</div>
						<div className="w-1/2 flex items-center my-2">
							<div className=" flex justify-center items-center bg-[#F7EEE8] rounded-full h-10 w-10 ">
								<Image alt="notif" src={view3DIcon} className="w-1/2 h-1/2" />
							</div>
							<p className="text-holmes-primary-dark-brown mx-3 text-sm font-bold">
								Beautiful Scene around
							</p>
						</div>
						<div className="w-1/2 flex items-center my-2">
							<div className=" flex justify-center items-center bg-[#F7EEE8] rounded-full h-10 w-10 ">
								<Image alt="notif" src={view3DIcon} className="w-1/2 h-1/2" />
							</div>
							<p className="text-holmes-primary-dark-brown mx-3 text-sm font-bold">
								Beautiful Scene around
							</p>
						</div>
						<div className="w-1/2 flex items-center my-2">
							<div className=" flex justify-center items-center bg-[#F7EEE8] rounded-full h-10 w-10 ">
								<Image alt="notif" src={view3DIcon} className="w-1/2 h-1/2" />
							</div>
							<p className="text-holmes-primary-dark-brown mx-3 text-sm font-bold">
								Beautiful Scene around
							</p>
						</div>
					</div>
	
					{/* special Offer Images */}
					<div className="flex justify-around my-4">
						{propertyDetails.images.map((el, index) => (
							<div key={index} className="h-24 w-36">
								<Image
									alt="property-image"
									src={el}
									className="w-full h-full rounded-3xl"
								/>
							</div>
						))}
					</div>
				</div>
	
				<div className="relative flex justify-between w-[55%] ">
					<div className="w-[50%]">
						<Image
							alt="special_offer_image"
							src={propertyDetails.images[0]}
							className="w-full h-full object-cover"
						/>
					</div>
	
					<div className="flex flex-col justify-between w-[45%]">
						<div className="h-[45%]">
							<Image
								alt="special_offer_image"
								src={propertyDetails.images[1]}
								className="w-full h-full object-cover"
							/>
						</div>
	
						<div className="h-[45%]">
							<Image
								alt="special_offer_image"
								src={propertyDetails.images[2]}
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>
			</section>
		);
	};

	const tabletMobileView = () => {
		return (
			<section className="px-2 flex flex-col justify-between my-4 DesktopScreen:hidden">
				<div className=" px-3 py-7">
					<div
						className={`p-2 w-[10rem] bg-[#FBF6F3] text-holmes-primary-dark-brown text-center`}
					>
						Special Offer
					</div>
	
					<h1 className="my-3 text-3xl  font-[500]">
						Today's Best Selling Properties
					</h1>
					<p className="text-holmes-font-light-grey my-5">
						Lorem ipsum dolor sit amet consectetur. Sed urna faucibus. Lorem ipsum
						dolor sit amet consectetur. Sed urna faucibus.
					</p>
	
					<div className="bg-holmes-background-light-grey p-2 w-full flex justify-between items-center text-sm  text-holmes-font-grey">
						<div>
							<div className="flex justify-center items-center">
								{" "}
								<div
									className="mr-2"
									onClick={() => {
										("");
									}}
								>
									<Image alt="bedroom" src={bedroomIcon} />
								</div>
								{propertyDetails.bedrooms}
							</div>
							<div>Bedrooms</div>
						</div>
	
						<div>
							<div className="flex justify-center items-center">
								{" "}
								<div
									className="mr-2"
									onClick={() => {
										("");
									}}
								>
									<Image alt="bathroom" src={bathroomIcon} />
								</div>
								{propertyDetails.bathrooms}
							</div>
							<div>Bathrooms</div>
						</div>
	
						<div>
							<div className="flex justify-center items-center">
								{" "}
								<div
									className="mr-2"
									onClick={() => {
										("");
									}}
								>
									<Image alt="parking" src={parkingIcon} />
								</div>
								{propertyDetails.bathrooms}
							</div>
							<div>Parking</div>
						</div>
	
						<div>
							<div className="flex  justify-center items-center">
								<div
									className="mr-2"
									onClick={() => {
										("");
									}}
								>
									<Image alt="sq-ft" src={squareFeetIcon} />
								</div>
								{propertyDetails.squareFeet}
							</div>
							<div>Square Ft.</div>
						</div>
					</div>
	
					{/*  */}
					<div className="flex flex-col ">
						<div className="flex items-center my-2">
							<div className=" flex justify-center items-center bg-[#F7EEE8] rounded-full h-10 w-10 ">
								<Image alt="notif" src={view3DIcon} className="w-1/2 h-1/2" />
							</div>
							<p className="text-holmes-primary-dark-brown mx-3  text-sm font-bold">
								Smart Home Design
							</p>
						</div>
						<div className=" flex items-center my-2">
							<div className=" flex justify-center items-center bg-[#F7EEE8] rounded-full h-10 w-10 ">
								<Image alt="notif" src={view3DIcon} className="w-1/2 h-1/2" />
							</div>
							<p className="text-holmes-primary-dark-brown mx-3 text-sm font-bold">
								Beautiful Scene around
							</p>
						</div>
						<div className="flex items-center my-2">
							<div className=" flex justify-center items-center bg-[#F7EEE8] rounded-full h-10 w-10 ">
								<Image alt="notif" src={view3DIcon} className="w-1/2 h-1/2" />
							</div>
							<p className="text-holmes-primary-dark-brown mx-3 text-sm font-bold">
								Beautiful Scene around
							</p>
						</div>
						<div className=" flex items-center my-2">
							<div className=" flex justify-center items-center bg-[#F7EEE8] rounded-full h-10 w-10 ">
								<Image alt="notif" src={view3DIcon} className="w-1/2 h-1/2" />
							</div>
							<p className="text-holmes-primary-dark-brown mx-3 text-sm font-bold">
								Beautiful Scene around
							</p>
						</div>
					</div>
	
					{/* special Offer Images */}
					<div className="flex justify-between my-4">
						{propertyDetails.images.map((el, index) => (
							<div key={index} className="h-24 w-[30%]">
								<Image
									alt="property-image"
									src={el}
									className="w-full h-full rounded-3xl"
								/>
							</div>
						))}
					</div>
				</div>
	
				<div className="relative px-8 ">
					<div className="mb-2 h-[20rem]">
						<Image
							alt="special_offer_image"
							src={propertyDetails.images[0]}
							className="w-full h-full object-cover"
						/>
					</div>
	
					<div className="flex flex-col justify-between">
						<div className="h-[10rem] my-2">
							<Image
								alt="special_offer_image"
								src={propertyDetails.images[1]}
								className="w-full h-full object-cover"
							/>
						</div>
	
						<div className="h-[10rem] my-2">
							<Image
								alt="special_offer_image"
								src={propertyDetails.images[2]}
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>
			</section>
		);
	};

return <>
{desktopView()}
{tabletMobileView()}
</>
	
};

export default SpecialOffer;

