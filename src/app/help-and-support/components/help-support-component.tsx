import HelpWorkerImage from "@/assets/images/general/help-support-worker.svg";
import WhatsappIcon from "@/assets/images/general/whatsapp-icon.svg";
import CallIcon from '@/assets/images/general/black-call-icon.svg';
import MessageIcon from '@/assets/images/general/black-message-icon.svg';
import Image from "next/image";
import { motion } from "framer-motion";

const HelpAndSupportComponent = () => {
	return (
		<section className="bg-white DesktopScreen:min-h-[40rem]">
			<h1 className="text-xl font-bold">Help and Support</h1>
			<div className="flex flex-col items-center">
				<div className="my-3 mt-4">
					<Image alt="help&support" src={HelpWorkerImage} />
				</div>
				<p className="font-bold text-2xl my-3 text-center">Contact our customer support</p>

				<motion.button
					whileHover={{
						scale: 1.05,
						transition: { duration: 0.5 },
					}}
					whileTap={{ scale: 0.9 }}
					className="border-holmes-primary-dark-brown border my-3 p-2 rounded-md w-[40rem] MobileScreen:w-[90%] font-[500] flex gap-2 justify-center"
					onClick={() => {}}
				>
				<div>
                    <Image alt="message" src={MessageIcon}/>
                </div>
                	hello@holmes.com
				</motion.button>
				<motion.button
					whileHover={{
						scale: 1.05,
						transition: { duration: 0.5 },
					}}
					whileTap={{ scale: 0.9 }}
					className="border border-black my-3 p-2 rounded-md w-[40rem] MobileScreen:w-[90%] font-[500] flex gap-2 justify-center"
					onClick={() => {}}
				>
					<div>
                    <Image alt="call" src={CallIcon}/>
                </div>	+234813228300
				</motion.button>

				<motion.button
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.5 }
					}}
					whileTap={{ scale: 0.9 }}
					className="shadow-xl my-3 p-4 px-8 text-holmes-font-grey rounded-md flex flex-col items-center"
					onClick={() => {}}
				>
					<div>
						<Image alt="whatsapp" src={WhatsappIcon} />
					</div>
                    <p>
send us a message
                    </p>
				</motion.button>
			</div>
		</section>
	);
};

export default HelpAndSupportComponent;

