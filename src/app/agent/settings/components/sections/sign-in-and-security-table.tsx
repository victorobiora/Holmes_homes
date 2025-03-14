import { useState } from "react";
import Image from "next/image";
import laptopImage from "@/assets/images/general/laptop-image.png";
import editIcon from "@/assets/images/general/orange-pencil-icon.svg";
import logoutIcon from "@/assets/images/general/brown-log-out-icon.svg";
import { signInandSettingsDetailsArray } from "../../settings.dto";
import { BlueBackdrop } from "@/library/modals/blue-backdrop";
import UpgradeProfileCard from "../../../../../library/cards/update-profile-card";
import UpgradeAccountTypeCard from "../../../../../library/cards/upgrade-account-type-card";
import ChangeAdminPasswordCard from "../cards-and-tables/sign-in-and-security/change-admin-password";

const SignInandSecurityTable = () => {
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

	/** This function chooses what task modal renders */
	const renderModal = (cardtitle: string) => {
		switch (cardtitle) {
			case "change-password":
				return <ChangeAdminPasswordCard removeModal={removeModal} />;
			case "log-out":
				return "";
			default:
				return "";
		}
	};

	const desktopView = () => {
		return (
			<section className="TabletScreen:hidden MobileScreen:hidden">
				<div className="py-2 bg-white w-[80%]">
					<div className="py-4">
						<h2 className="text-xl font-semibold">Sign In and Security</h2>
						<div className="text-holmes-font-grey">
							These details are used to sign in and access your account.
						</div>
					</div>
					{/* sign in settings */}
					<div className="p-6 border my-3 rounded-lg ">
						<div className="py-4">
							<h2 className="text-lg font-semibold">Sign In</h2>
							<div className="text-holmes-font-grey">
								We use this to verify access and sign-in account. We'll contact
								you here if we notice any suspicious activity.
							</div>
						</div>
						{/* email name */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey items-center">
							<div className="text-holmes-primary-blue  w-[40%]">Email</div>
							<div className="flex gap-2 items-center">
								<div className="text-holmes-font-grey">
									{signInandSettingsDetailsArray.email}
								</div>
							</div>
						</div>
						{/* phone number */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey items-center">
							<div className="text-holmes-primary-blue  w-[40%]">
								Phone Number
							</div>
							<div className="flex gap-2 items-center">
								<div className="text-holmes-font-grey">
									{signInandSettingsDetailsArray.phone_number}
								</div>
							</div>
						</div>
						{/* password edit */}
						<div className="p-6 border my-3 rounded-lg ">
							<div className="py-4">
								<h2 className="text-lg font-semibold">Password</h2>
								<div className="text-holmes-font-grey">
									A secure password that helps protect your holmes account.
								</div>{" "}
							</div>
							<div className="my-4 flex py-2 border-t-2 border-holmes-background-light-grey justify-between items-center">
								<div>
									<h2 className="font-semibold">**********</h2>
									<div className="text-holmes-font-grey mt-4">
										Last Changed 01, Jan,, 2024
									</div>{" "}
								</div>
								<div
									className="flex items-center gap-2 cursor-pointer"
									onClick={() => {
										setModalOnDisplay({
											showCard: true,
											title: "change-password",
										});
									}}
								>
									<Image alt="edit" src={editIcon} />
									<div className="text-holmes-primary-dark-brown">
										Change Password
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* devices edit */}
					<div className="p-6 border my-3 rounded-lg ">
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey justify-between items-center">
							<div>
								<h2 className="font-semibold">Your Devices</h2>
								<div className="text-holmes-font-grey mt-4">
									You are signed into 2 devices
								</div>{" "}
							</div>
							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => {
									setModalOnDisplay({
										showCard: true,
										title: "log-out",
									});
								}}
							>
								<Image alt="log-out" src={logoutIcon} />
								<div className="text-holmes-primary-dark-brown">
									Log out of all devices
								</div>
							</div>
						</div>

						<div className="flex gap-3 px-2 py-1 bg-holmes-background-grey items-center my-2">
							<div className="w-16 h-16">
								<Image
									src={laptopImage}
									alt="device"
									className="w-full h-full"
								/>
							</div>
							<div className="font-bold text-sm">Samsung Galaxy S4</div>
						</div>

						<div className="flex gap-3 px-2 py-1 bg-holmes-background-grey items-center my-2">
							<div className="w-16 h-16">
								<Image
									src={laptopImage}
									alt="device"
									className="w-full h-full"
								/>
							</div>
							<div className="font-bold text-sm">Samsung Galaxy S4</div>
						</div>
					</div>
				</div>
			</section>
		);
	};

	const tabletView = () => {
		return (
			<section className="MobileScreen:hidden DesktopScreen:hidden">
				<div className="py-2 bg-white w-full">
					<div className="py-4">
						<h2 className="text-xl font-semibold">Sign In and Security</h2>
						<div className="text-holmes-font-grey">
							These details are used to sign in and access your account.
						</div>
					</div>
					{/* sign in settings */}
					<div className="p-6 border my-3 rounded-lg ">
						<div className="py-4">
							<h2 className="text-lg font-semibold">Sign In</h2>
							<div className="text-holmes-font-grey">
								We use this to verify access and sign-in account. We'll contact
								you here if we notice any suspicious activity.
							</div>
						</div>
						{/* email name */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey items-center">
							<div className="text-holmes-primary-blue  w-[40%]">Email</div>
							<div className="flex gap-2 items-center">
								<div className="text-holmes-font-grey">
									{signInandSettingsDetailsArray.email}
								</div>
							</div>
						</div>
						{/* phone number */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey items-center">
							<div className="text-holmes-primary-blue  w-[40%]">
								Phone Number
							</div>
							<div className="flex gap-2 items-center">
								<div className="text-holmes-font-grey">
									{signInandSettingsDetailsArray.phone_number}
								</div>
							</div>
						</div>
						{/* password edit */}
						<div className="p-6 border my-3 rounded-lg ">
							<div className="py-4">
								<h2 className="text-lg font-semibold">Password</h2>
								<div className="text-holmes-font-grey">
									A secure password that helps protect your holmes account.
								</div>{" "}
							</div>
							<div className="my-4 flex py-2 border-t-2 border-holmes-background-light-grey justify-between items-center">
								<div>
									<h2 className="font-semibold">**********</h2>
									<div className="text-holmes-font-grey mt-4">
										Last Changed 01, Jan,, 2024
									</div>{" "}
								</div>
								<div
									className="flex items-center gap-2 cursor-pointer"
									onClick={() => {
										setModalOnDisplay({
											showCard: true,
											title: "change-password",
										});
									}}
								>
									<Image alt="edit" src={editIcon} />
									<div className="text-holmes-primary-dark-brown">
										Change Password
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* devices edit */}
					<div className="p-6 border my-3 rounded-lg ">
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey justify-between items-center">
							<div>
								<h2 className="font-semibold">Your Devices</h2>
								<div className="text-holmes-font-grey mt-4">
									You are signed into 2 devices
								</div>{" "}
							</div>
							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => {
									setModalOnDisplay({
										showCard: true,
										title: "log-out",
									});
								}}
							>
								<Image alt="log-out" src={logoutIcon} />
								<div className="text-holmes-primary-dark-brown">
									Log out of all devices
								</div>
							</div>
						</div>

						<div className="flex gap-3 px-2 py-1 bg-holmes-background-grey items-center my-2">
							<div className="w-16 h-16">
								<Image
									src={laptopImage}
									alt="device"
									className="w-full h-full"
								/>
							</div>
							<div className="font-bold text-sm">Samsung Galaxy S4</div>
						</div>

						<div className="flex gap-3 px-2 py-1 bg-holmes-background-grey items-center my-2">
							<div className="w-16 h-16">
								<Image
									src={laptopImage}
									alt="device"
									className="w-full h-full"
								/>
							</div>
							<div className="font-bold text-sm">Samsung Galaxy S4</div>
						</div>
					</div>
				</div>
			</section>
		);
	};

	const mobileView = () => {
		return (
			<section className="TabletScreen:hidden DesktopScreen:hidden">
				<div className="py-2 bg-white w-full">
					<div className="py-4">
						<h2 className="text-xl font-semibold">Sign In and Security</h2>
						<div className="text-holmes-font-grey">
							These details are used to sign in and access your account.
						</div>
					</div>
					{/* sign in settings */}
					<div className="p-3 border my-3 rounded-lg ">
						<div className="py-4">
							<h2 className="text-lg font-semibold">Sign In</h2>
							<div className="text-holmes-font-grey">
								We use this to verify access and sign-in account. We'll contact
								you here if we notice any suspicious activity.
							</div>
						</div>
						{/* email name */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey items-center">
							<div className="text-holmes-primary-blue  w-[40%]">Email</div>
							<div className="flex gap-2 items-center">
								<div className="text-holmes-font-grey">
									{signInandSettingsDetailsArray.email}
								</div>
							</div>
						</div>
						{/* phone number */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey items-center">
							<div className="text-holmes-primary-blue  w-[40%]">
								Phone Number
							</div>
							<div className="flex gap-2 items-center">
								<div className="text-holmes-font-grey">
									{signInandSettingsDetailsArray.phone_number}
								</div>
							</div>
						</div>
						{/* password edit */}
						<div className="p-3 border my-3 rounded-lg ">
							<div className="py-4">
								<h2 className="text-lg font-semibold">Password</h2>
								<div className="text-holmes-font-grey">
									A secure password that helps protect your holmes account.
								</div>{" "}
							</div>
							<div className="my-4 flex py-2 border-t-2 border-holmes-background-light-grey justify-between items-center">
								<div>
									<h2 className="font-semibold">**********</h2>
									<div className="text-holmes-font-grey mt-4">
										Last Changed 01, Jan,, 2024
									</div>{" "}
								</div>
							</div>
							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => {
									setModalOnDisplay({
										showCard: true,
										title: "change-password",
									});
								}}
							>
								<Image alt="edit" src={editIcon} />
								<div className="text-holmes-primary-dark-brown">
									Change Password
								</div>
							</div>
						</div>
					</div>

					{/* devices edit */}
					<div className="p-3 border my-3 rounded-lg ">
						<div className="my-4 flex py-2  justify-between items-center">
							<div>
								<h2 className="font-semibold">Your Devices</h2>
								<div className="text-holmes-font-grey mt-4">
									You are signed into 2 devices
								</div>{" "}
							</div>
						</div>
					
						<div className="flex gap-3 px-2 py-1 bg-holmes-background-grey items-center my-2">
							<div className="w-16 h-16">
								<Image
									src={laptopImage}
									alt="device"
									className="w-full h-full"
								/>
							</div>
							<div className="font-bold text-sm">Samsung Galaxy S4</div>
						</div>

						<div className="flex gap-3 px-2 py-1 bg-holmes-background-grey items-center my-2">
							<div className="w-16 h-16">
								<Image
									src={laptopImage}
									alt="device"
									className="w-full h-full"
								/>
							</div>
							<div className="font-bold text-sm">Samsung Galaxy S4</div>
						</div>

						<div
							className="flex items-center gap-2 cursor-pointer  py-2 w-full border-b-2 border-holmes-background-light-grey"
							onClick={() => {
								setModalOnDisplay({
									showCard: true,
									title: "log-out",
								});
							}}
						>
							<Image alt="log-out" src={logoutIcon} />
							<div className="text-holmes-primary-dark-brown">
								Log out of all devices
							</div>
						</div>

					</div>
				</div>
			</section>
		);
	};

	return (
		<section>
			{/** a section for the task in particular in which the card has been selected */}
			{modalOnDisplay.showCard && (
				<BlueBackdrop>
					{renderModal(modalOnDisplay.title)}
				</BlueBackdrop>
			)}

			{desktopView()}
			{tabletView()}
			{mobileView()}
		</section>
	);
};

export default SignInandSecurityTable;

