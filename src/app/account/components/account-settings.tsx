import { useState } from "react";
import Image from "next/image";
import editIcon from "@/assets/images/general/orange-pencil-icon.svg";
import { accountSettingsArray } from "../account-dto";
import { BlueBackdrop } from "@/library/modals/blue-backdrop";
import UpgradeProfileCard from "@/library/cards/update-profile-card";
import UpgradeAccountTypeCard from "@/library/cards/upgrade-account-type-card";

const AccountSettingsComponent = () => {
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
			case "update-profile":
				return <UpgradeProfileCard removeModal={removeModal} />;
			case "change-account-type":
				return <UpgradeAccountTypeCard removeModal={removeModal}/>;
			default:
				return "";
		}
	};

	const desktopView = () => {
		return (
			<section className="TabletScreen:hidden MobileScreen:hidden">
				<div className="py-2 bg-white w-[80%]">
					<div className="py-4">
						<h2 className="text-xl font-semibold">Personal Details</h2>
						<div className="text-holmes-font-grey">
                        Update and manage your holmes profile.
						</div>
					</div>
					{/* personal details */}
					<div className="p-6 border my-3 rounded-lg ">
						<div className="py-4">
							<h2 className="text-lg font-semibold">Profile</h2>
							<div className="text-holmes-font-grey">
								Update and manage your holmes profile
							</div>{" "}
						</div>
						{/* profile picture */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey gap-[20%] items-center">
							<div className="text-holmes-primary-blue min-w-[20%]">
								Profile Picture
							</div>
							<div className="flex gap-2 items-center max-w-[40%]">
								<div className=" flex justify-center items-center bg-white rounded-full min-h-10 min-w-10 mr-3 ">
									<Image
										alt="profile-pic"
										src={accountSettingsArray.profilePhoto.link}
										className="w-full h-full"
									/>
								</div>
								<div className="text-holmes-font-grey">
									{accountSettingsArray.profilePhoto.name}
								</div>
							</div>
							<div className="flex items-center gap-2 cursor-pointer">
								<Image alt="edit" src={editIcon} />
								<div
									className="text-holmes-primary-dark-brown"
									onClick={() => {
										setModalOnDisplay({
											showCard: true,
											title: "update-profile",
										});
									}}
								>
									Change Picture
								</div>
							</div>
						</div>
						{/* first name */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey items-center">
							<div className="text-holmes-primary-blue w-[40%]">First Name</div>
							<div className="flex gap-2 items-center">
								<div className="text-holmes-font-grey">
									{accountSettingsArray.first_name}
								</div>
							</div>
						</div>
						{/* last name */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey items-center">
							<div className="text-holmes-primary-blue  w-[40%]">Last Name</div>
							<div className="flex gap-2 items-center">
								<div className="text-holmes-font-grey">
									{accountSettingsArray.last_name}
								</div>
							</div>
						</div>
						{/* email name */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey items-center">
							<div className="text-holmes-primary-blue  w-[40%]">Email</div>
							<div className="flex gap-2 items-center">
								<div className="text-holmes-font-grey">
									{accountSettingsArray.email}
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
									{accountSettingsArray.phone_number}
								</div>
							</div>
						</div>
						{/* Date of Birth */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey items-center">
							<div className="text-holmes-primary-blue  w-[40%]">
								Date of Birth
							</div>
							<div className="flex gap-2 items-center">
								<div className="text-holmes-font-grey">
									{accountSettingsArray.date_of_birth}
								</div>
							</div>
						</div>
						{/* Gender */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey items-center">
							<div className="text-holmes-primary-blue  w-[40%]">Gender</div>
							<div className="flex gap-2 items-center">
								<div className="text-holmes-font-grey">
									{accountSettingsArray.gender}
								</div>
							</div>
						</div>
					</div>

					{/* account type edit */}
					<div className="p-6 border my-3 rounded-lg ">
						<div className="py-4">
							<h2 className="text-lg font-semibold">Account</h2>
							<div className="text-holmes-font-grey">
								Modify your holmes account
							</div>{" "}
						</div>
						<div className="my-4 flex py-2 border-t-2 border-holmes-background-light-grey justify-between items-center">
							<div>
								<h2 className="font-semibold">Admin</h2>
								<div className="text-holmes-font-grey">Account Type</div>{" "}
							</div>
							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => {
									setModalOnDisplay({
										showCard: true,
										title: "change-account-type",
									});
								}}
							>
								<Image alt="edit" src={editIcon} />
								<div className="text-holmes-primary-dark-brown">
									Change Account Type
								</div>
							</div>
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
						<h2 className="text-xl font-semibold">Personal Details</h2>
						<div className="text-holmes-font-grey">
							Manage your personal details on holmes.
						</div>
					</div>
					{/* personal details */}
					<div className="p-6 border my-3 rounded-lg ">
						<div className="py-4">
							<h2 className="text-lg font-semibold">Profile</h2>
							<div className="text-holmes-font-grey">
								Update and manage your holmes profile
							</div>{" "}
						</div>
						{/* profile picture */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey justify-between items-center">
							<div className="text-holmes-primary-blue min-w-[20%]">
								Profile Picture
							</div>
							<div className="flex gap-2 items-center max-w-[40%]">
								<div className=" flex justify-center items-center bg-white rounded-full min-h-10 min-w-10 mr-3 ">
									<Image
										alt="profile-pic"
										src={accountSettingsArray.profilePhoto.link}
										className="w-full h-full"
									/>
								</div>
								<div className="text-holmes-font-grey">
									{accountSettingsArray.profilePhoto.name}
								</div>
							</div>
							<div className="flex items-center gap-2 cursor-pointer min-w-[20%]">
								<Image alt="edit" src={editIcon} />
								<div
									className="text-holmes-primary-dark-brown"
									onClick={() => {
										setModalOnDisplay({
											showCard: true,
											title: "update-profile",
										});
									}}
								>
									Change Picture
								</div>
							</div>
						</div>
						{/* first name */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey items-center">
							<div className="text-holmes-primary-blue w-[40%]">First Name</div>
							<div className="flex gap-2 items-center">
								<div className="text-holmes-font-grey">
									{accountSettingsArray.first_name}
								</div>
							</div>
						</div>
						{/* last name */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey items-center">
							<div className="text-holmes-primary-blue  w-[40%]">Last Name</div>
							<div className="flex gap-2 items-center">
								<div className="text-holmes-font-grey">
									{accountSettingsArray.last_name}
								</div>
							</div>
						</div>
						{/* email name */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey items-center">
							<div className="text-holmes-primary-blue  w-[40%]">Email</div>
							<div className="flex gap-2 items-center">
								<div className="text-holmes-font-grey">
									{accountSettingsArray.email}
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
									{accountSettingsArray.phone_number}
								</div>
							</div>
						</div>
						{/* Date of Birth */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey items-center">
							<div className="text-holmes-primary-blue  w-[40%]">
								Date of Birth
							</div>
							<div className="flex gap-2 items-center">
								<div className="text-holmes-font-grey">
									{accountSettingsArray.date_of_birth}
								</div>
							</div>
						</div>
						{/* Gender */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey items-center">
							<div className="text-holmes-primary-blue  w-[40%]">Gender</div>
							<div className="flex gap-2 items-center">
								<div className="text-holmes-font-grey">
									{accountSettingsArray.gender}
								</div>
							</div>
						</div>
					</div>

					{/* account type edit */}
					<div className="p-6 border my-3 rounded-lg ">
						<div className="py-4">
							<h2 className="text-lg font-semibold">Account</h2>
							<div className="text-holmes-font-grey">
								Modify your holmes account
							</div>{" "}
						</div>
						<div className="my-4 flex py-2 border-t-2 border-holmes-background-light-grey justify-between items-center">
							<div>
								<h2 className="font-semibold">Admin</h2>
								<div className="text-holmes-font-grey">Account Type</div>{" "}
							</div>
							<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => {
									setModalOnDisplay({
										showCard: true,
										title: "change-account-type",
									});
								}}
							>
								<Image alt="edit" src={editIcon} />
								<div className="text-holmes-primary-dark-brown">
									Change Account Type
								</div>
							</div>
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
						<h2 className="text-xl font-semibold">Personal Details</h2>
						<div className="text-holmes-font-grey">
							Manage your personal details on holmes.
						</div>
					</div>
					{/* personal details */}
					<div className="p-3 border my-3 rounded-lg ">
						<div className="py-4">
							<h2 className="text-lg font-semibold">Profile</h2>
							<div className="text-holmes-font-grey">
								Update and manage your holmes profile
							</div>{" "}
						</div>
						{/* profile picture */}
						<div className="text-holmes-primary-blue min-w-[20%]">
							Profile Picture
						</div>
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey gap-2 items-center">
							<div className="flex gap-2 items-center">
								<div className=" flex justify-center items-center bg-white rounded-full min-h-10 min-w-10 mr-3 ">
									<Image
										alt="profile-pic"
										src={accountSettingsArray.profilePhoto.link}
										className="w-full h-full"
									/>
								</div>
							</div>
							<div className="flex items-center gap-2 cursor-pointer">
								<Image alt="edit" src={editIcon} />
								<div
									className="text-holmes-primary-dark-brown"
									onClick={() => {
										setModalOnDisplay({
											showCard: true,
											title: "update-profile",
										});
									}}
								>
									Change Picture
								</div>
							</div>
						</div>
						{/* first name */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey items-center">
							<div className="text-holmes-primary-blue w-[40%]">First Name</div>
							<div className="flex gap-2 items-center">
								<div className="text-holmes-font-grey">
									{accountSettingsArray.first_name}
								</div>
							</div>
						</div>
						{/* last name */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey items-center">
							<div className="text-holmes-primary-blue  w-[40%]">Last Name</div>
							<div className="flex gap-2 items-center">
								<div className="text-holmes-font-grey">
									{accountSettingsArray.last_name}
								</div>
							</div>
						</div>
						{/* email name */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey items-center">
							<div className="text-holmes-primary-blue  w-[40%]">Email</div>
							<div className="flex gap-2 items-center">
								<div className="text-holmes-font-grey">
									{accountSettingsArray.email}
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
									{accountSettingsArray.phone_number}
								</div>
							</div>
						</div>
						{/* Date of Birth */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey items-center">
							<div className="text-holmes-primary-blue  w-[40%]">
								Date of Birth
							</div>
							<div className="flex gap-2 items-center">
								<div className="text-holmes-font-grey">
									{accountSettingsArray.date_of_birth}
								</div>
							</div>
						</div>
						{/* Gender */}
						<div className="my-4 flex py-2 border-b-2 border-holmes-background-light-grey items-center">
							<div className="text-holmes-primary-blue  w-[40%]">Gender</div>
							<div className="flex gap-2 items-center">
								<div className="text-holmes-font-grey">
									{accountSettingsArray.gender}
								</div>
							</div>
						</div>
					</div>

					{/* account type edit */}
					<div className="p-3 border my-3 rounded-lg ">
						<div className="py-4">
							<h2 className="text-lg font-semibold">Account</h2>
							<div className="text-holmes-font-grey">
								Modify your holmes account
							</div>{" "}
						</div>
						<div className="my-4 flex py-2 border-t-2 border-holmes-background-light-grey justify-between items-center">
							<div>
								<h2 className="font-semibold">Admin</h2>
								<div className="text-holmes-font-grey">Account Type</div>{" "}
							</div>
						</div>
						<div
							className="flex items-center gap-2 cursor-pointer"
							onClick={() => {
								setModalOnDisplay({
									showCard: true,
									title: "change-account-type",
								});
							}}
						>
							<Image alt="edit" src={editIcon} />
							<div className="text-holmes-primary-dark-brown">
								Change Account Type
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
				<BlueBackdrop onClick={removeModal}>
					{renderModal(modalOnDisplay.title)}
				</BlueBackdrop>
			)}

			{desktopView()}
			{tabletView()}
			{mobileView()}
		</section>
	);
};

export default AccountSettingsComponent;

