import { useState } from "react";
import { motion } from "framer-motion";

import Stepper from "@/library/progress-bar/stepper-progress-bar";
import PlanPreviewCard from "./plan-preview-card";

const BasicPreviewContainer: React.FC<{
	nextStep: (step) => void;
	prevStep: (step) => void;
}> = ({ nextStep, prevStep }) => {
	const [duration, setDuration] = useState("monthly");
	const currentPlan = "Basic plan";

	return (
		<>
			<header>
				<div className="py-4">
					<h2 className="text-xl font-semibold">Basic Plan</h2>
					<div className="text-holmes-font-grey">
						Manage your subscription tiers
					</div>
				</div>
			</header>
			<main className="">
				<div className="text-center text-xl font-bold">Preview</div>
				<div className="text-center text-sm text-holmes-font-light-grey">
					See how the tier details will appear to users on the holmes
				</div>

				<div className="flex justify-center w-full">
				<div className="DesktopScreen:p-8 p-3 my-6 DesktopScreen:my-0 DesktopScreen:w-[50%] w-full text-center">
						<Stepper steps={5} currentStep={4} />
					</div>
				</div>

				<section className="">
					<div className="flex DesktopScreen:flex-row flex-col justify-between items-center">
						<div>
							<p className="font-semibold text-lg">
								Upgrade to unlock everything
							</p>
							<p className="mt-2 text-holmes-font-grey">
								Your holmes account is currently on{" "}
								<span className="text-black">{currentPlan}</span>
							</p>
						</div>

						{/* yearly or monthly */}
						<div className="flex items-center justify-center my-3 DesktopScreen:my-0">
							<div
								className="relative py-3 flex items-center bg-gray-100 rounded-md w-40 p-1 cursor-pointer shadow-sm"
								onClick={() =>
									setDuration((prev) =>
										prev === "monthly" ? "yearly" : "monthly",
									)
								}
							>
								{/* Slider */}
								<div
									className={`absolute left-0 bg-white z-[3] w-1/2 h-full rounded-md shadow-md transform transition-all duration-300 ${
										duration === "monthly"
											? "translate-x-0"
											: "translate-x-full"
									}`}
								></div>

								{/* Monthly Text */}
								<div
									className={`flex-1 z-[4] text-center text-sm font-medium transition-colors ${
										duration === "monthly" ? "text-gray-900" : "text-gray-400"
									}`}
								>
									Monthly
								</div>

								{/* Yearly Text */}
								<div
									className={`flex-1 z-[4] text-center text-sm font-medium transition-colors ${
										duration === "yearly" ? "text-gray-900" : "text-gray-400"
									}`}
								>
									Yearly
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className="flex DesktopScreen:flex-row flex-col DesktopScreen:gap-2 gap-4 my-4 items-center">
					<PlanPreviewCard planType="Basic" />
					<PlanPreviewCard planType="Premuim" />
					<PlanPreviewCard planType="Pro" />
				</div>
				{/* submit or cancel */}
				<div className="flex text-sm justify-center gap-4 my-4 w-full">
					<motion.button
						className="border border-black p-2 rounded-md"
						onClick={() => {
							prevStep("trial-period-and-promotions");
						}}
					>
						Previous
					</motion.button>
					<motion.button
						className="bg-holmes-primary-dark-brown text-white p-2 rounded-md"
						onClick={() => {
							nextStep("basic-preview");
						}}
					>
						Confirm & Save
					</motion.button>
				</div>
			</main>
		</>
	);
};

export default BasicPreviewContainer;

