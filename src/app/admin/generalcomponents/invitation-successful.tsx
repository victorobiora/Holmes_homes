import Image from "next/image";
import greyCheck from "@/assets/images/general/grey-check-icon.svg";
import { motion } from "framer-motion";


const InvitationSuccessfulModal: React.FC<{
	removeModal: () => void;
	refresh: () => void;
}> = ({ removeModal, refresh }) => {
	return (
		<section
			className="flex flex-col bg-white p-8 items-center justify-center w-[40%]  MobileScreen:w-[95%] rounded-md"
			onClick={(e) => {
				e.stopPropagation();
			}}
		>
			<div className="m-3 flex justify-center">
				
			</div>
			<div className="text-2xl font-bold  mt-3 mb-2 text-center">
				Invitation Email Sent
			</div>
			<p className="mt-1 mb-4 text-center text-holmes-primary-blue">
				We’ve sent an invitation email to your new member. They will be added to
				when they sign up.
			</p>

			<motion.button
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.5 },
				}}
				whileTap={{ scale: 0.9 }}
				className={"p-2 rounded-md text-white bg-holmes-primary-dark-brown my-2"}
				onClick={(event) => {
					event.preventDefault();
					refresh();
				}}
			>
				Add another member
			</motion.button>
			<div
				className="flex justify-center cursor-pointer text-holmes-primary-dark-brown font-bold text-lg"
				onClick={removeModal}
			>
				Okay
			</div>
		</section>
	);
};

export default InvitationSuccessfulModal;

