import { useState } from "react";
import { motion } from "framer-motion";

import Stepper from "@/library/progress-bar/stepper-progress-bar";
import PremuimAdPlacement from "../../feature-management/premuim-ad-placement";

const FeatureManagement: React.FC<{
	nextStep: (step) => void;
	prevStep: (step) => void;
}> = ({ nextStep, prevStep }) => {
	const [
		selectedFeatureManagementSection,
		setSelectedFeatureManagementsSection,
	] = useState("Advanced Search Filters");

	const featureManagementSections = [
		"Advanced Search Filters",
		"Priority Support",
		"Premuim Ad Placement",
	];

	const desktopView = () => {
		return (
			<section className="MobileScreen:hidden TabletScreen:hidden">
				<div className="p-4 mt-4  MobileScreen:mt-4 MobileScreen:relative MobileScreen:overflow-x-scroll">
					<div className="flex items-start">
						{/* settings */}
						<div className="flex flex-col gap-2 w-[35%]">
							{featureManagementSections.map((item, index) => {
								return (
									<div
										key={index}
										className={`min-w-[5rem] w-full MobileScreen:min-w-[10rem] flex items-center gap-2 cursor-pointer hover:bg-holmes-background-grey  rounded-tr-md rounded-br-md  ${selectedFeatureManagementSection === item ? " bg-holmes-background-grey " : ""}`}
										onClick={() => setSelectedFeatureManagementsSection(item)}
									>
										<div
											className={`h-10 w-[0.2rem] rounded-md ${selectedFeatureManagementSection === item ? " bg-holmes-primary-blue" : "bg-holmes-border-grey"}`}
										></div>
										<p
											className={` p-2 font-[500] flex items-center 	${
												selectedFeatureManagementSection === item
													? " text-holmes-primary-blue font-bold"
													: ""
											}`}
										>
											{item}
										</p>
									</div>
								);
							})}
						</div>
						{/* components */}
						<>
							{selectedFeatureManagementSection ===
							"Advanced Search Filters" ? (
								<PremuimAdPlacement />
							) : selectedFeatureManagementSection === "Priority Support" ? (
								""
							) : selectedFeatureManagementSection ===
							  "Premuim Ad Placement" ? (
								<PremuimAdPlacement />
							) : (
								""
							)}
						</>
					</div>
					{/* submit or cancel */}
					<div className="flex text-sm justify-end gap-4 my-4 w-full">
						<motion.button
							className="border border-black p-2 rounded-md"
							onClick={() => {
								prevStep("basic-information");
							}}
						>
							Previous
						</motion.button>
						<motion.button
							className="bg-holmes-primary-dark-brown text-white p-2 rounded-md"
							onClick={() => {
								nextStep("trial-period-and-promotions");
							}}
						>
							Continue
						</motion.button>
					</div>
				</div>
			</section>
		);
	};

	const tabletMobileView = () => {
		return (
			<section className="DesktopScreen:hidden">
				<div className="p-4 mt-4  MobileScreen:mt-4 MobileScreen:relative MobileScreen:overflow-x-scroll">
					<div className="flex items-start">
						{/* settings */}
						<div className="flex flex-col gap-2 w-full">
							{featureManagementSections.map((item, index) => {
								return (
									<div>
										<div
											key={index}
											className={`min-w-[5rem] w-full MobileScreen:min-w-[10rem] flex items-center gap-2 cursor-pointer hover:bg-holmes-background-grey  rounded-tr-md rounded-br-md  ${selectedFeatureManagementSection === item ? " bg-holmes-background-grey " : ""}`}
											onClick={() => setSelectedFeatureManagementsSection(item)}
										>
											<div
												className={`h-10 w-[0.2rem] rounded-md ${selectedFeatureManagementSection === item ? " bg-holmes-primary-blue" : "bg-holmes-border-grey"}`}
											></div>
											<p
												className={` p-2 font-[500] flex items-center 	${
													selectedFeatureManagementSection === item
														? " text-holmes-primary-blue font-bold"
														: ""
												}`}
											>
												{item}
											</p>
										</div>
										{selectedFeatureManagementSection === item && (
											<PremuimAdPlacement />
										)}
									</div>
								);
							})}
						</div>
						{/* components */}
					</div>
					{/* submit or cancel */}
					<div className="flex text-sm justify-end gap-4 my-4 w-full">
						<motion.button
							className="border border-black p-2 rounded-md"
							onClick={() => {
								prevStep("basic-information");
							}}
						>
							Previous
						</motion.button>
						<motion.button
							className="bg-holmes-primary-dark-brown text-white p-2 rounded-md"
							onClick={() => {
								nextStep("trial-period-and-promotions");
							}}
						>
							Continue
						</motion.button>
					</div>
				</div>
			</section>
		);
	};

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
				<div className="text-center text-xl font-bold">Feature Management</div>
				<div className="text-center text-sm text-holmes-font-light-grey">
					We only need a few info to review before unlocking your full access
				</div>

				<div className="flex justify-center w-full">
					<div className="p-8 MobileScreen:p-2 DesktopScreen:w-[50%] w-full text-center">
						<Stepper steps={5} currentStep={2} />
					</div>
				</div>
			</main>
			{desktopView()}
			{tabletMobileView()}
		</>
	);
};

export default FeatureManagement;

