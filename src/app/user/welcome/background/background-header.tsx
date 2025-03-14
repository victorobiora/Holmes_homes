"use client";

import Carousel from "./background-carousel";
import holmesImage1 from "@/assets/images/general/holmes-image2.jpeg";
import holmesImage3 from "@/assets/images/general/holmes-image2.jpeg";
import BackgroundFilter from "./background-filter";

const BackgroundHeader:React.FC<{
	toggleFilter: () => void
}> = ({toggleFilter}) => {
	const carouselData = [
		{
			image: holmesImage1,
			heading: `Welcome to Holmes Luxury Homes`,
			text: 'Lorem ipsum dolor sit amet consectetur. Dui ac feugiat morbi elementum massa venenatis.'

		},
		{
			image: holmesImage3,
				heading: `Your Luxury Experience is Here`,
			text: 'Lorem ipsum dolor sit amet consectetur. Dui ac feugiat morbi elementum massa venenatis.'
		},
	];
	const desktopView = () => {
		return (
			<section
				className={`h-[40rem] w-full flex items-center justify-center relative MobileScreen:hidden TabletScreen:hidden mb-[8rem]`}
			>
				<Carousel carouselData={carouselData} />
				<div className="bg-white py-10  rounded-md shadow-lg flex justify-between px-16 absolute bottom-[-6rem]  z-[6] left-1/2 transform -translate-x-1/2 w-[90%] min-w-[750px] min-h-[10rem]">
			<BackgroundFilter toggleFilter={toggleFilter}/>
		
				</div>
			</section>
		);
	};

	const tabletmobileView = () => {
		return (
			<div className="h-[40rem] w-full DesktopScreen:hidden">
				<section
					className={`h-[70%] w-full flex  flex-col items-center justify-center relative `}
				>
					<Carousel carouselData={carouselData} />
					<div className="bg-white py-5 px-8  rounded-md shadow-lg flex justify-between absolute bottom-[-10.5rem] z-[6] w-[90%]">
			<BackgroundFilter toggleFilter={toggleFilter}/>
		
				</div>
				</section>
			</div>
		);
	};

	return (
		<section>
			
			{desktopView()}
			{tabletmobileView()}
		</section>
	);
};

export default BackgroundHeader;

