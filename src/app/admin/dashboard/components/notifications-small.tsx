import { smallNotificationType } from "../../types.dto";
import { motion } from "framer-motion";

const SmallNotificationComponent: React.FC<{
	item: smallNotificationType;
}> = ({ item }) => {
	return (
		<motion.div
			whileHover={{
				scale: 1.01,
				transition: { duration: 0.3 },
			}}
			className="flex justify-between bg-white p-2 w-full my-2 shadow-md rounded-md"
		>
			<div className="flex">
				<div className="flex justify-center items-center h-8 w-8 rounded-full bg-[#FBF6F3] mr-3 ">
					{/* <div className="text-holmes-primary-dark-brown flex items-start justify-center text-lg">...</div> */}
				</div>
				<div>{item.notification}</div>
			</div>

			<div className="flex items-center">
				<p className="text-holmes-primary-dark-brown mx-2 text-sm font-bold text-end">Take Action</p>

			</div>
		</motion.div>
	);
};

export default SmallNotificationComponent;

