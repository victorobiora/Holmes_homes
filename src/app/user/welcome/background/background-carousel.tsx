import { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import Image from "next/image";
import nextIcon from "@/assets/images/general/carousel-next-icon.svg";
import previousIcon from "@/assets/images/general/carousel-previous-icon.svg";
import sideIcon from "@/assets/images/general/white-side-icon.svg";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { table } from "console";

const Carousel: React.FC<{
	carouselData: {
		image: StaticImageData;
		heading: string;
		text: string;
	}[];
}> = ({ carouselData }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const router = useRouter();

	const nextSlide = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1,
		);
	};
	const prevSlide = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1,
		);
	};

	const desktopView = () => {
		return (
			<div className="carousel TabletScreen:hidden MobileScreen:hidden">
				<div className="background-backdrop"></div>
				<div className="absolute top-0 left-0 z-[10] w-[60%] h-full flex flex-col justify-center pl-[10%]">
					<div className="text-5xl font-bold text-white">
						{carouselData[activeIndex].heading}
					</div>
					<div className="flex items-center min-h-[5rem] my-3">
						<div className="">
							<Image alt="side" src={sideIcon} className="h-[3rem] w-[2rem]" />
						</div>
						<div className="text-white mx-1">
							{carouselData[activeIndex].text}
						</div>
					</div>
					<div className="flex">
						<motion.button
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.5 },
							}}
							whileTap={{ scale: 0.9 }}
							className={`px-5 py-4 mx-4 ml-2 rounded-md text-white bg-holmes-primary-dark-brown shadow-md font-bold`}
							onClick={(event) => {
								event.preventDefault();
							}}
						>
							Add Listing
						</motion.button>
						<motion.button
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.5 },
							}}
							whileTap={{ scale: 0.9 }}
							className={`px-5 py-4 rounded-md text-white bg-transparent border border-white font-bold`}
							onClick={(event) => {
								event.preventDefault();
							}}
						>
							Become an Affliate
						</motion.button>
					</div>
				</div>
	
				<button onClick={prevSlide} className="carousel__btn carousel__btn--prev p-4">
					<Image alt="previous" src={previousIcon} />
				</button>
				<Image
					src={carouselData[activeIndex].image}
					alt={`Slide ${activeIndex}`}
					className="carousel__img object-cover"
					quality={50}
					placeholder="blur"
				/>
				<button onClick={nextSlide} className="carousel__btn carousel__btn--next p-4">
					<Image alt="next" src={nextIcon} />
				</button>
			</div>
		);
	};

	const tabletmobileView = () => {
		return (
			<div className="carousel  DesktopScreen:hidden">
				<div className="background-backdrop"></div>
				<div className="absolute top-0 left-0 z-[10] w-[95%] h-full flex flex-col justify-center pl-[10%]">
					<div className="text-2xl font-bold text-white">
						{carouselData[activeIndex].heading}
					</div>
					<div className="flex items-center min-h-[5rem] my-3">
						<div className="">
							<Image alt="side" src={sideIcon} className="h-[3rem] w-[2rem]" />
						</div>
						<div className="text-white mx-1">
							{carouselData[activeIndex].text}
						</div>
					</div>
					<div className="flex">
						<motion.button
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.5 },
							}}
							whileTap={{ scale: 0.9 }}
							className={`px-2 py-2 mx-1 ml-1 rounded-md text-white text-sm bg-holmes-primary-dark-brown shadow-md font-bold`}
							onClick={(event) => {
								event.preventDefault();
							}}
						>
							Add Listing
						</motion.button>
						<motion.button
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.5 },
							}}
							whileTap={{ scale: 0.9 }}
							className={`px-2 py-2 mx-1 rounded-md text-white text-sm bg-transparent border border-white font-bold`}
							onClick={(event) => {
								event.preventDefault();
							}}
						>
							Become an Affliate
						</motion.button>
					</div>
				</div>
	
				<button onClick={prevSlide} className="carousel__btn carousel__btn--prev p-4 MobileScreen:p-[0.3rem]">
					<Image alt="previous" src={previousIcon} />
				</button>
				<Image
					src={carouselData[activeIndex].image}
					alt={`Slide ${activeIndex}`}
					className="carousel__img object-cover"
					quality={50}
					placeholder="blur"
				/>
				<button onClick={nextSlide} className="carousel__btn carousel__btn--next">
					<Image alt="next" src={nextIcon} />
				</button>
			</div>
		);
	};

	return <>
	{desktopView()}
	{tabletmobileView()}
	</>

	
};
export default Carousel;

