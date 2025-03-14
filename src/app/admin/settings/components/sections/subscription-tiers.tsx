import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import editIcon from "@/assets/images/general/orange-pencil-icon.svg";
import { personalDetailsArray } from "../../settings.dto";
import { BlueBackdrop } from "@/library/modals/blue-backdrop";
import UpgradeProfileCard from "../../../../../library/cards/update-profile-card";
import UpgradeAccountTypeCard from "../../../../../library/cards/upgrade-account-type-card";
import { subscriptionTiersData } from "../../settings.dto";
import SubscriptionItem from "../cards-and-tables/subscription-tiers/subscription-item";
import EditBasicPlan from "../cards-and-tables/subscription-tiers/basic-plan/basic-information";
import FeatureManagement from "../cards-and-tables/subscription-tiers/basic-plan/feature-management";
import TrialPeriodAndPromotions from "../cards-and-tables/subscription-tiers/basic-plan/trial-period-and-promotions";
import BasicPreviewContainer from "../cards-and-tables/subscription-tiers/basic-plan/preview/basic-preview-container";

const SubscriptionTiersTable = () => {
	const [modalOnDisplay, setModalOnDisplay] = useState({
		showCard: false,
		title: "",
	});

	const removeModal = () => {
		setModalOnDisplay({
			showCard: false,
			title: "",
		});
	};

	const updateNextStep = (step) => {
		setModalOnDisplay((prevState) => ({
			...prevState,
			title: step,
		}));
	};

	const rollbackPrevStep = (step) => {
		setModalOnDisplay((prevState) => ({
			...prevState,
			title: step,
		}));
	};

	/** This function chooses what task modal renders */
    
	const renderModal = (cardtitle: string) => {
		switch (cardtitle) {
			case "basic-information":
				return <EditBasicPlan nextStep={updateNextStep} prevStep={rollbackPrevStep} removeModal={removeModal}/>;
			case "feature-management":
				return <FeatureManagement nextStep={updateNextStep} prevStep={rollbackPrevStep}/>;
			case "trial-period-and-promotions":
				return <TrialPeriodAndPromotions nextStep={updateNextStep} prevStep={rollbackPrevStep}/>;
			case "basic-preview":
				return <BasicPreviewContainer nextStep={updateNextStep} prevStep={rollbackPrevStep} />;
			default:
				return "";
		}
	};

	const desktopView = () => {
		return (
			<section className="TabletScreen:hidden MobileScreen:hidden">
				{modalOnDisplay.showCard && renderModal(modalOnDisplay.title)}

				{modalOnDisplay.showCard === false && (
					<>
						<header className="py-2 bg-white">
							<div className="my-2 flex justify-between">
								<div className="py-4">
									<h2 className="text-xl font-semibold">Tier Overview</h2>
									<div className="text-holmes-font-grey">
										Manage your subscription tiers
									</div>
								</div>
								<div className="py-5 flex gap-3">
									<motion.button
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.5 },
										}}
										whileTap={{ scale: 0.9 }}
										className={
											"p-2 rounded-md text-white text-sm bg-[#D9DDE1] font-bold"
										}
										onClick={(event) => {
											event.preventDefault();
										}}
									>
										Save Changes
									</motion.button>

									<motion.button
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.5 },
										}}
										whileTap={{ scale: 0.9 }}
										className={
											"p-2 rounded-md text-white text-sm bg-holmes-primary-dark-brown "
										}
										onClick={(event) => {
											event.preventDefault();
										}}
									>
										<span className="mx-1"> + </span> Add New Tier
									</motion.button>
								</div>
							</div>
						</header>
						<main className="flex justify-center gap-3">
							{subscriptionTiersData.map((item, index) => {
								return (
									<SubscriptionItem
										setModal={setModalOnDisplay}
										item={item}
										key={index}
									/>
								);
							})}
						</main>
					</>
				)}
			</section>
		);
	};

	const tabletView = () => {
		return (
			<section className="MobileScreen:hidden DesktopScreen:hidden">
				{modalOnDisplay.showCard && renderModal(modalOnDisplay.title)}

{modalOnDisplay.showCard === false && (
	<>
		<header className="py-2 bg-white">
			<div className="my-2 flex justify-between">
				<div className="py-4">
					<h2 className="text-xl font-semibold">Tier Overview</h2>
					<div className="text-holmes-font-grey">
						Manage your subscription tiers
					</div>
				</div>
				<div className="py-5 flex gap-3">
					<motion.button
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						className={
							"p-2 rounded-md text-white text-sm bg-[#D9DDE1] font-bold"
						}
						onClick={(event) => {
							event.preventDefault();
						}}
					>
						Save Changes
					</motion.button>

					<motion.button
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						className={
							"p-2 rounded-md text-white text-sm bg-holmes-primary-dark-brown "
						}
						onClick={(event) => {
							event.preventDefault();
						}}
					>
						<span className="mx-1"> + </span> Add New Tier
					</motion.button>
				</div>
			</div>
		</header>
		<main className="flex flex-col justify-center gap-3">
			{subscriptionTiersData.map((item, index) => {
				return (
					<SubscriptionItem
						setModal={setModalOnDisplay}
						item={item}
						key={index}
					/>
				);
			})}
		</main>
	</>
)}
			</section>
		);
	};

	const mobileView = () => {
		return (
			<section className="TabletScreen:hidden DesktopScreen:hidden">
							{modalOnDisplay.showCard && renderModal(modalOnDisplay.title)}

{modalOnDisplay.showCard === false && (
	<>
		<header className="py-2 bg-white">
			<div className="my-2 flex justify-between">
				<div className="py-4">
					<h2 className="text-xl font-semibold">Tier Overview</h2>
					<div className="text-holmes-font-grey">
						Manage your subscription tiers
					</div>
				</div>
				<div className="py-5 flex gap-3">
					<motion.button
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						className={
							"p-2 rounded-md text-white text-sm bg-[#D9DDE1] font-bold"
						}
						onClick={(event) => {
							event.preventDefault();
						}}
					>
						Save Changes
					</motion.button>

					<motion.button
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						className={
							"p-2 rounded-md text-white text-sm bg-holmes-primary-dark-brown "
						}
						onClick={(event) => {
							event.preventDefault();
						}}
					>
						<span className="mx-1"> + </span> Add New Tier
					</motion.button>
				</div>
			</div>
		</header>
		<main className="flex flex-col justify-center gap-3">
			{subscriptionTiersData.map((item, index) => {
				return (
					<SubscriptionItem
						setModal={setModalOnDisplay}
						item={item}
						key={index}
					/>
				);
			})}
		</main>
	</>
)}
			</section>
		);
	};

	return (
		<section>
			{/** a section for the task in particular in which the card has been selected */}

			{desktopView()}
			{tabletView()}
			{mobileView()}
		</section>
	);
};

export default SubscriptionTiersTable;

