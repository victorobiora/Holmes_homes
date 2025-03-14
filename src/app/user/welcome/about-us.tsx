import Image from "next/image";
import aboutUsImage from "@/assets/images/general/holmes-about-us-image.jpeg";
import view3DIcon from "@/assets/images/general/view-3d.svg";
import { motion } from "framer-motion";

const AboutUs = () => {
	return (
		<section className="pr-10 TabletScreen:px-2 pl-28 MobileScreen:px-2 flex MobileScreen:flex-col MobileScreen:items-center justify-between my-20">
			<div className="p-3 bg-white rounded-md shadow-md relative w-1/2 MobileScreen:w-full MobileScreen:h-[30rem]">
				<Image alt="about-us" src={aboutUsImage} className="w-full h-full object-cover" />
			</div>
			<div className="MobileScreen:w-full w-1/2 px-3 py-7">
				<div className={`p-2 w-[7rem] bg-[#FBF6F3] text-holmes-primary-dark-brown text-center`}>
					About Us
				</div>

				<h1 className="my-3 text-3xl w-[70%] font-[500]">
					The Leading Real Estate Marketplace
				</h1>
				<p className="text-holmes-font-light-grey my-5">
					Lorem ipsum dolor sit amet consectetur. Sed urna faucibus. Lorem ipsum
					dolor sit amet consectetur. Sed urna faucibus.
				</p>

				<div className="flex flex-wrap MobileScreen:flex-col MobileScreen:flex-nowrap">
					<div className="w-1/2 flex items-center my-2 MobileScreen:my-4">
						<div className=" flex justify-center items-center bg-[#F7EEE8] rounded-full h-8 w-8 ">
							<Image alt="notif" src={view3DIcon} className="w-1/2 h-1/2" />
						</div>
						<p className="text-holmes-primary-dark-brown mx-3  text-sm font-bold">
							Smart Home Design
						</p>
					</div>
					<div className="w-1/2 flex items-center my-2 MobileScreen:my-4">
						<div className=" flex justify-center items-center bg-[#F7EEE8] rounded-full  h-8 w-8 ">
							<Image alt="notif" src={view3DIcon} className="w-1/2 h-1/2" />
						</div>
						<p className="text-holmes-primary-dark-brown mx-3 text-sm font-bold">
							Beautiful Scene around
						</p>
					</div>
					<div className="w-1/2 flex items-center my-2 MobileScreen:my-4">
						<div className=" flex justify-center items-center bg-[#F7EEE8] rounded-full  h-8 w-8 ">
							<Image alt="notif" src={view3DIcon} className="w-1/2 h-1/2" />
						</div>
						<p className="text-holmes-primary-dark-brown mx-3 text-sm font-bold">
							Beautiful Scene around
						</p>
					</div>
					<div className="w-1/2 flex items-center my-2 MobileScreen:my-4">
						<div className=" flex justify-center items-center bg-[#F7EEE8] rounded-full  h-8 w-8">
							<Image alt="notif" src={view3DIcon} className="w-1/2 h-1/2" />
						</div>
						<p className="text-holmes-primary-dark-brown mx-3 text-sm font-bold">
							Beautiful Scene around
						</p>
					</div>
				</div>

				<div className="p-2 bg-[#F7EEE8] text-holmes-font-light-grey my-4">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
					exercitationem non id, sit iusto saepe officiis sed inventore eveniet
					quis pariatur esse ducimus impedit ad voluptates qui fugit?
					Voluptatem, pariatur.
				</div>

				<motion.button
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.5 },
					}}
					whileTap={{ scale: 0.9 }}
					className={`px-5 py-4 mx-4 ml-2 rounded-md text-white bg-holmes-primary-dark-brown shadow-md`}
					onClick={(event) => {
						event.preventDefault();
					}}
				>
					Know More About Us
				</motion.button>
			</div>
		</section>
	);
};

export default AboutUs;

