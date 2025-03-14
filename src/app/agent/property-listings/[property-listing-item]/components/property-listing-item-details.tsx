import { propertyItemStructure } from "@/app/home.dto";
import locationIcon from "@/assets/images/general/grey-location-icon.svg";
import copyIcon from "@/assets/images/general/blue-copy-icon.svg";
import bedroomIcon from "@/assets/images/general/bedroom-icon.svg";
import bathroomIcon from "@/assets/images/general/bathroom-icon.svg";
import parkingIcon from "@/assets/images/general/parking-icon.svg";
import squareFeetIcon from "@/assets/images/general/square-feet-icon.svg";
import StarRating from "@/library/star/star-rating";
import Image from "next/image";
import { useState } from "react";

const DetailsComponent = () => {
	const [copied, setCopied] = useState(false);

	const handleCopy = async (text) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
			alert("contact copied");
			setTimeout(() => setCopied(false), 2000);
		} catch (error) {
			console.error("Failed to copy text:", error);
		}
	};
	/** Desktop View */
	const desktopTabletView = () => {
		return (
			<section className="bg-white my-2 rounded-md w-full p-4 shadow-md MobileScreen:hidden">
				<div className="flex justify-between">
					<p className="font-bold text-lg">Property Details</p>
					<div className="flex gap-[1rem] items-center">
						<p>Status:</p>

						<div className="p-2 rounded-md border">
							{propertyItemStructure.status}
						</div>
					</div>
				</div>

				{/* Images section */}
				<div className="my-2">
					<div className="h-[25rem] w-full rounded-md my-2">
						<Image
							alt="big-property-image"
							src={propertyItemStructure.images[0]}
							className="w-full h-full object-cover rounded-md"
						/>
					</div>

					<div className="flex justify-between my-4">
						{propertyItemStructure.images.map((image, index) => {
							if (index < 4) {
								return (
									<div key={index} className="h-28 w-[23%] rounded-md">
										<Image
											alt="property-image"
											src={image}
											className="w-full h-full rounded-md"
										/>
									</div>
								);
							} else {
								return "";
							}
						})}
					</div>
				</div>

				<div className="my-6 font-[500] text-xl">
					{propertyItemStructure.nameOfProperty}
				</div>

				<div className="text-holmes-font-grey my-2 flex items-center cursor-pointer">
					<div
						className="mr-2"
						onClick={() => {
							("");
						}}
					>
						<Image alt="location" src={locationIcon} />
					</div>
					{propertyItemStructure.location}
				</div>

				<div>
					<p className="font-bold">Description: </p>
					<div>{propertyItemStructure.description}</div>
				</div>

				<div className="mx-3 rounded-md shadow-xl p-4">
					<div className="flex items-center my-3">
						<span className="mr-3 text-lg font-bold">
							{propertyItemStructure.rating}.0
						</span>
						<StarRating rating={propertyItemStructure.rating} />
					</div>

					{/* assigned agent */}
					<div className="p-2 py-4 border rounded-md flex items-center justify-between">
						<div className="flex gap-[0.5rem]">
							<div className=" flex justify-center items-center bg-white rounded-full min-h-10 min-w-10 mr-3">
								<Image
									alt="assigned-agent"
									src={propertyItemStructure.assignedAgent.picture}
									className="w-full h-full"
								/>
							</div>
							<div>
								<h2 className="max-w-[8rem]">
									{propertyItemStructure.assignedAgent.name}
								</h2>
								<p className="text-holmes-font-grey">
									{propertyItemStructure.assignedAgent.status}
								</p>
							</div>
						</div>

						<div className="text-[#435769] bg-holmes-background-light-grey shadow-lg p-2 text-sm rounded-lg flex items-center">
							<div>{propertyItemStructure.assignedAgent.contact}</div>
							<Image
								alt="copy"
								src={copyIcon}
								className="mx-2 cursor-pointer"
								onClick={() => {
									handleCopy(propertyItemStructure.assignedAgent.contact);
								}}
							/>
						</div>
					</div>

					{/* property details */}
					<div className="bg-holmes-background-light-grey p-2 w-full flex justify-between items-center text-sm  text-holmes-font-grey my-8">
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
								{propertyItemStructure.propertyDetails.bedrooms}
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
								{propertyItemStructure.propertyDetails.bathrooms}
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
								{propertyItemStructure.propertyDetails.bathrooms}
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
								{propertyItemStructure.propertyDetails.bathrooms}
							</div>
							<div>Square Ft.</div>
						</div>
					</div>

					<div className="my-3">
						<span className="font-bold">
							{" "}
							{`${propertyItemStructure.type === "Rental" ? "Rental" : ""} Price:  ${propertyItemStructure.price}`}{" "}
						</span>
						<span className="text-holmes-font-grey">
							{" "}
							{propertyItemStructure.type === "Rental" ? "/month" : ""}
						</span>
					</div>
				</div>
			</section>
		);
	};

	/** Mobile View */
	const mobileView = () => {
		return (
			<section className="bg-white mt-4 mb-24 rounded-md w-full p-4 shadow-md DesktopScreen:hidden TabletScreen:hidden pb-8">
				<div className="flex justify-between items-center">
					<p className="font-bold text-lg">Property Details</p>
					<div className="flex gap-[1rem] items-center">
						<div className="p-2 rounded-md border">
							{propertyItemStructure.status}
						</div>
					</div>
				</div>

				{/* Images section */}
				<div className="my-2">
					<div className="h-[25rem] w-full rounded-md my-2">
						<Image
							alt="big-property-image"
							src={propertyItemStructure.images[0]}
							className="w-full h-full object-cover rounded-md"
						/>
					</div>

					<div className="flex justify-between my-4 overflow-x-scroll scroll-smooth">
						{propertyItemStructure.images.map((image, index) => {
							if (index < 4) {
								return (
									<div
										key={index}
										className="flex-shrink-0 h-28 w-48 rounded-md mr-4"
									>
										<Image
											alt="property-image"
											src={image}
											className="w-full h-full rounded-md object-cover"
											width={288}
											height={112}
										/>
									</div>
								);
							} else {
								return "";
							}
						})}
					</div>
				</div>

				<div className="my-6 font-[500] text-xl">
					{propertyItemStructure.nameOfProperty}
				</div>

				<div className="text-holmes-font-grey my-2 flex items-center cursor-pointer">
					<div
						className="mr-2"
						onClick={() => {
							("");
						}}
					>
						<Image alt="location" src={locationIcon} />
					</div>
					{propertyItemStructure.location}
				</div>

				<div>
					<p className="font-bold">Description: </p>
					<div>{propertyItemStructure.description}</div>
				</div>

				<div className="mx-3 rounded-md shadow-xl p-4 my-4">
					<div className="flex items-center my-3">
						<span className="mr-3 text-lg font-bold">
							{propertyItemStructure.rating}.0
						</span>
						<StarRating rating={propertyItemStructure.rating} />
					</div>

					{/* assigned agent */}
					<div className="p-2 py-4 border rounded-md flex flex-col  justify-between">
						<div className="flex gap-[0.5rem]">
							<div className=" flex justify-center items-center bg-white rounded-full min-h-10 min-w-10 mr-3">
								<Image
									alt="assigned-agent"
									src={propertyItemStructure.assignedAgent.picture}
									className="w-full h-full"
								/>
							</div>
							<div>
								<h2 className="max-w-[8rem]">
									{propertyItemStructure.assignedAgent.name}
								</h2>
								<p className="text-holmes-font-grey">
									{propertyItemStructure.assignedAgent.status}
								</p>
							</div>
						</div>

						<div className="text-[#435769] bg-holmes-background-light-grey shadow-lg p-2 text-sm rounded-lg flex items-center mt-2">
							<div>{propertyItemStructure.assignedAgent.contact}</div>
							<Image
								alt="copy"
								src={copyIcon}
								className="mx-2 cursor-pointer"
								onClick={() => {
									handleCopy(propertyItemStructure.assignedAgent.contact);
								}}
							/>
						</div>
					</div>

					{/* property details */}
					<div className="bg-holmes-background-light-grey p-2 w-full flex flex-col justify-between items-center text-sm  text-holmes-font-grey my-8">
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
								{propertyItemStructure.propertyDetails.bedrooms}
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
								{propertyItemStructure.propertyDetails.bathrooms}
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
								{propertyItemStructure.propertyDetails.bathrooms}
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
								{propertyItemStructure.propertyDetails.bathrooms}
							</div>
							<div>Square Ft.</div>
						</div>
					</div>

					<div className="my-3">
						<span className="font-bold">
							{" "}
							{`${propertyItemStructure.type === "Rental" ? "Rental" : ""} Price:  ${propertyItemStructure.price}`}{" "}
						</span>
						<span className="text-holmes-font-grey">
							{" "}
							{propertyItemStructure.type === "Rental" ? "/month" : ""}
						</span>
					</div>
				</div>
			</section>
		);
	};
	return (
		<section>
			{desktopTabletView()}
			{mobileView()}
		</section>
	);
};

export default DetailsComponent;

