import { motion } from "framer-motion";
import Image from "next/image";
import blueCheck from "@/assets/images/general/blue-check.svg";
import whiteHeart from "@/assets/images/general/white-favorite-2.svg";

const PlanPreviewCard: React.FC<{ planType: string }> = ({ planType }) => {
	return (
		<section className="TabletScreen:w-full border rounded-md bg-white relative ">
			{planType === "Premuim" && (
				<div className=" w-full p-2 flex items-center bg-gradient-to-r from-[#435769] to-[#0565BB] justify-center gap-2 rounded-tl-md rounded-tr-md">
                    <span>
							<Image alt="heart"  src={whiteHeart} />
						</span>
					<p className="text-white font-bold ">Recommended</p>
				</div>
			)}

			<div className="p-5 flex flex-col gap-2">
				<div
					className={`${planType === "Premuim" ? "text-[#435769]" : ""}  text-lg font-semibold`}
				>
					{planType}
				</div>
				<div className="text-holmes-font-grey text-sm">
					This tier is the least in terms of features.
				</div>
				<div className="flex justify-between items-center">
					<div className="font-bold text-lg">N90,000</div>
					<div className="text-sm text-holmes-font-grey">/month</div>
				</div>

				<div className="text-sm text-holmes-font-grey pb-2 border-b">
					Trial expires in{" "}
					<span className="text-holmes-primary-blue">7 days</span>
				</div>

				<div>
					<span className="font-bold">Oga Patapata</span> plan includes:
				</div>

				<div className="flex flex-col gap-2">
					<div className="flex gap-2 items-center">
						<span>
							<Image alt="check" className="min-h-6 min-w-6" src={blueCheck} />
						</span>
						All {planType} plans
					</div>

					<div className="flex gap-2 items-center">
						<span>
							<Image alt="check" className="min-h-6 min-w-6" src={blueCheck} />
						</span>{" "}
						A premium feature that can be easily understood
					</div>
					<div className="flex gap-2 items-center">
						<span>
							<Image alt="check" className="min-h-6 min-w-6" src={blueCheck} />
						</span>
						Another premium feature
					</div>
					<div className="flex gap-2 items-center">
						<span>
							<Image alt="check" className="min-h-6 min-w-6" src={blueCheck} />
						</span>
						Another premium feature
					</div>

					<motion.button
						whileHover={{
							scale: 1.02,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						className={` ${planType === "Premuim" ? " bg-gradient-to-r from-[#435769] to-[#0565BB]" : "bg-holmes-primary-blue"} py-2 px-3 h-auto my-2  text-white text-lg rounded-md border flex gap-[0.3rem] justify-center`}
						onClick={(event) => {
							event.preventDefault();
						}}
					>
						Upgrade
					</motion.button>
				</div>
			</div>
		</section>
	);
};

export default PlanPreviewCard;

