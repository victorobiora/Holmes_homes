import { StaticImageData } from "next/image";
import Image from "next/image";
import holmesImage3 from "@/assets/images/general/holmes-image2.jpeg";
import view3DIcon from "@/assets/images/general/view-3d.svg";

const SelectedPropertyImageSection: React.FC<{
	images: {
		name: string;
		link: string | StaticImageData;
	}[];
}> = ({ images }) => {
	const livingRoomImage = images.find((el) => el.name === "Living Room")!;

	return (
		<main className="w-full h-full relative rounded-3xl">
			<div className="background-backdrop rounded-tl-3xl rounded-bl-3xl"></div>
			<div className="bg-white w-[10rem] py-3 rounded-xl absolute z-20 top-[5%] left-[5%] flex justify-center items-center cursor-pointer">
				<Image alt="view-3d" src={view3DIcon} />
				<p className="ml-4">Take a Tour</p>
			</div>
			<div className="w-full h-full relative ">
				<Image
					alt="main_image"
					className="w-full h-full rounded-3xl object-cover"
					src={livingRoomImage?.link}
				/>
			</div>

			<div className="font-bold text-white text-xl absolute z-20 bottom-[10%] left-[5%]">
				{livingRoomImage.name}
			</div>

			<div className=" text-lg absolute z-20 bottom-[10%] right-[5%] h-[10rem] w-[15rem] cursor-pointer">
				<div className="background-black-backdrop rounded-tr-3xl rounded-br-3xl"></div>
				<Image
					alt="other_images"
					className="w-full h-full rounded-3xl object-cover"
					src={images[1].link}
				/>
				<div className="absolute inset-0 flex items-center justify-center text-white z-[3]">
					View all Images
				</div>
			</div>
		</main>
	);
};

export default SelectedPropertyImageSection;
