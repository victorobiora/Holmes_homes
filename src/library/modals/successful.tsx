import Image from "next/image";
import greyCheck from "@/assets/images/general/grey-check-icon.svg";

const SuccessfulModal: React.FC<{
	removeModal: () => void;
	mainText: string;
	subtext: string
}> = ({ removeModal, mainText, subtext }) => {
	return (
		<section
			className="flex flex-col bg-white p-8 items-center justify-center MobileScreen:w-[95%] rounded-md"
			onClick={(e) => {
				e.stopPropagation();
			}}
		>
			<Image src={greyCheck} alt="check" />
			<div className="text-2xl font-bold  mt-3 mb-2 text-center">
		 {mainText}
			</div>
			<p className="mt-1 mb-4 text-holmes-primary-blue">
			{subtext}
			</p>
			<div
				className="flex justify-center cursor-pointer text-holmes-primary-dark-brown font-bold text-lg"
				onClick={removeModal}
			>
				Okay
			</div>
		</section>
	);
};

export default SuccessfulModal;
