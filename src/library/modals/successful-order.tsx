import Image from "next/image";
import greyCheck from "@/assets/images/general/grey-check-icon.svg";
import SuccessfulIcon from '@/assets/images/general/successful-order-icon.svg'
import { motion } from "framer-motion";

const SuccessfulOrderModal: React.FC<{
	removeModal: () => void;
	mainText: string;
	subtext: string;
}> = ({ removeModal, mainText, subtext }) => {
	return (
		<section
			className="flex flex-col bg-white p-8 items-center justify-center w-[40%]  MobileScreen:w-[95%] rounded-md"
			onClick={(e) => {
				e.stopPropagation();
			}}
		>
            <div className="text-2xl font-bold  mt-3 mb-2 text-center">
				{mainText}
			</div>
			<Image src={SuccessfulIcon} alt="order-successful" />
			
			<p className="mt-1 mb-4 text-holmes-primary-blue w-full text-center">{subtext}</p>
			<motion.button
				whileHover={{
					scale: 1.02,
					transition: { duration: 0.5 },
				}}
				whileTap={{ scale: 0.9 }}
				className={
					"p-2 h-auto rounded-md text-white bg-holmes-primary-dark-brown flex justify-center gap-[0.3rem] items-center w-full"
				}
				onClick={(event) => {
					event.preventDefault();
				}}
			>
                View Your Orders
			</motion.button>
		</section>
	);
};

export default SuccessfulOrderModal;

