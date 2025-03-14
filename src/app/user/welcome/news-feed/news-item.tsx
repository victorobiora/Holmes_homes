/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NewsItemType, PropertyItemType } from "@/app/types";
import Image, { StaticImageData } from "next/image";
import shareIcon from "@/assets/images/general/grey-share-icon.svg";
import locationIcon from "@/assets/images/general/grey-location-icon.svg";
import greyLoveIcon from "@/assets/images/general/grey-love-icon.svg";
import view3DIcon from "@/assets/images/general/view-3d.svg";
import editIcon from "@/assets/images/general/edit-icon.svg";
import bedroomIcon from "@/assets/images/general/bedroom-icon.svg";
import bathroomIcon from "@/assets/images/general/bathroom-icon.svg";
import parkingIcon from "@/assets/images/general/parking-icon.svg";
import squareFeetIcon from "@/assets/images/general/square-feet-icon.svg";
import genericAvatar from "@/assets/images/general/generic-avatar.svg";
import { useState, useRef } from "react";
// import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NewsItem: React.FC<{
	item: NewsItemType;
}> = ({ item }) => {
	return (
		<section className="bg-white rounded-lg mx-2 DesktopScreen:w-[21rem] flex-shrink-0 MobileScreen:w-[80%] my-3 shadow-md ">
			<div className="h-[15rem] w-full">
				<Image
					src={item.image}
					alt="image"
					className="h-full w-full rounded-t-lg"
				/>
			</div>

			<div className=" p-3 flex flex-col justify-between">
				<div className="flex justify-between my-3 items-center">
					<div className={`p-2 bg-[#FBF6F3] text-holmes-primary-dark-brown `}>
						Featured
					</div>

					<div className="text-holmes-font-grey flex items-center cursor-pointer">
						<div
							className="mx-3"
							onClick={() => {
								("");
							}}
						>
							<Image alt="share" src={shareIcon} />
						</div>
						Share
					</div>
				</div>

				<div className="text-lg my-1">{item.nameOfNews}</div>

				{/* date */}
				<div className="text-holmes-font-grey my-1 flex items-center cursor-pointer">
					<div
						className="mr-2"
						onClick={() => {
							("");
						}}
					>
						<Image alt="location" src={locationIcon} />
					</div>
					{item.date}
				</div>

				{/* category */}
				<div className="text-holmes-font-grey my-2 flex items-center cursor-pointer">
					<div
						className="mr-2"
						onClick={() => {
							("");
						}}
					>
						<Image alt="location" src={locationIcon} />
					</div>
					{item.category}
				</div>

				<motion.button
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.5 },
					}}
					whileTap={{ scale: 0.9 }}
					className={"w-full py-2 rounded-md text-white bg-holmes-primary-blue "}
					onClick={(event) => {
						event.preventDefault();
					}}
				>
					Buy Now
				</motion.button>
			</div>
		</section>
	);
};

export default NewsItem;

