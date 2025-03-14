import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { propertyItemStructure } from "@/app/home.dto";
import downIcon from "@/assets/images/general/down-icon-black.svg";
import { AnimatePresence, motion } from "framer-motion";
import PropertyItem from "../../property/property-item";

const SortContainer = () => {
	const [searchParameter, setSearchParameters] = useState("Newest");

	const [viewSearchParamterFields, setViewSearchParamterFields] =
		useState(false);

	const searchParamterRef = useRef<HTMLDivElement | null>(null);

	// Handle clicks outside searchParamter fields
	useEffect(() => {
		if(typeof window !== 'undefined'){
	const handleClickOutsideSearchParamter = (event: MouseEvent) =>  {
			if (
				viewSearchParamterFields &&
				searchParamterRef.current &&
				!searchParamterRef.current.contains(event.target as Node)
			) {
				setViewSearchParamterFields(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutsideSearchParamter);

		return () => {
			document.removeEventListener(
				"mousedown",
				handleClickOutsideSearchParamter,
			);
		};		
		}
	
	}, [viewSearchParamterFields]);

	return (
		<section className="mt-10">
			<div className="flex px-4">
				<h2>Sort by: </h2>

				<div className="relative" ref={searchParamterRef}>
					<div
						className=" mx-2 relative flex items-center cursor-pointer"
						onClick={() => {
							setViewSearchParamterFields((prevState) => !prevState);
						}}
					>
						{searchParameter}
						<div className="flex items-end mx-1">
							<Image src={downIcon} alt="down-icon" />
						</div>
					</div>
					<AnimatePresence>
						{viewSearchParamterFields && (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.2 }}
								className="bg-holmes-background-light-grey absolute top-[115%] flex flex-col text-md z-[900]"
							>
								{[
									"Highest rated",
									"Low to high Price",
									"High to low",
									"Newest",
								].map((item, index) => {
									return (
										<div
											key={index}
											className={`py-2 px-3 text-center  hover:bg-white hover:border-black hover:border-[0.2px] hover:rounded-sm cursor-pointer whitespace-nowrap ${searchParameter === item ? "bg-white border-black border rounded-sm" : ""}`}
											onClick={() => {
												setSearchParameters(item);
												setViewSearchParamterFields(false);
											}}
										>
											{item}
										</div>
									);
								})}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
			<div className=" relative  z-[20] flex gap-2 px-4 flex-nowrap w-full DesktopScreen:flex-wrap justify-between MobileScreen:w-screen DesktopScreen:overflow-x-hidden TabletScreen:w-[48rem] overflow-x-scroll">
				<PropertyItem item={propertyItemStructure} />
				<PropertyItem item={propertyItemStructure} />
				<PropertyItem item={propertyItemStructure} />
			</div>
		</section>
	);
};

export default SortContainer;