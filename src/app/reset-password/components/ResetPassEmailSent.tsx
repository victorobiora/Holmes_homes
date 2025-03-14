import Image from "next/image";
import holmesIcon from "@/assets/images/general/holmes-logo.png";
import EnvelopeAnimated from "@/library/modals/EnvelopeAnimated";
import { motion } from "framer-motion";

const ResetPassEmailSentComponent: React.FC<{
	emailName: string;
}> = ({ emailName }) => {
	return (
		<section className="flex flex-col items-center px-20 py-10 h-screen">
			<div className="my-4 mb-8 flex justify-center">
				<Image src={holmesIcon} alt="Home Icon" className="w-[8rem] h-20" />
			</div>

			<div className="bg-white p-5 border-md shadow-md flex flex-col justify-center items-center w-[40%]">
				<div className="m-3 flex justify-center">
					{/* <Image
						unoptimized={true}
						src={AnimatedEnvelope}
						alt="envelope"
						className="w-[10rem] h-20"
					/> */}
					<EnvelopeAnimated />
				</div>
				<div className="my-3">
					<h1 className="my-4 text-2xl text-center">Email Sent</h1>
					<div className="text-holmes-text-light-blue">
						We’ve sent a link to create a new password to {emailName}. If it’s
						not in your inbox, check your spam/junk folder.
					</div>
				</div>

				<motion.button
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.5 },
					}}
					whileTap={{ scale: 0.9 }}
					className={`px-4 py-2 w-full rounded-md text-white bg-holmes-primary-dark-brown my-3`}
					onClick={() => {
						("");
					}}
				>
					Resend Email
				</motion.button>

				<div
					className="my-4 text-holmes-primary-dark-brown cursor-pointer "
					onClick={() => {
						("");
					}}
				>
					I want to go back
				</div>
			</div>
		</section>
	);
};

export default ResetPassEmailSentComponent;

