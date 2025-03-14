import { useState } from "react";
import Image from "next/image";
import editIcon from "@/assets/images/general/orange-pencil-icon.svg";
import { personalDetailsArray } from "../../settings.dto";
import { BlueBackdrop } from "@/library/modals/blue-backdrop";
import UpgradeProfileCard from "../../../../../library/cards/update-profile-card";
import UpgradeAccountTypeCard from "../../../../../library/cards/upgrade-account-type-card";
import RoleSettingsContainer from "../cards-and-tables/roles-and-permissions/role-settings/role-settings-container";
import RoleMembersTable from "../cards-and-tables/roles-and-permissions/role members/role-members";

const RolesAndPermissionsTable = () => {
	const [
		selectedRolesAndPermissionsSection,
		setSelectedRolesAndPermissionsSection,
	] = useState("Role Settings");
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
				return <UpgradeAccountTypeCard removeModal={removeModal} />;
			default:
				return "";
		}
	};

	const desktopView = () => {
		return (
			<section className="TabletScreen:hidden MobileScreen:hidden">
				<div className="py-2 bg-white w-full">
					<div className="py-4">
						<h2 className="text-xl font-semibold">Roles And Permissions</h2>
						<div className="text-holmes-font-grey">
							Manage your team members as they collaborate with you on holmes
						</div>
					</div>
					<div className="flex gap-4">
						{/* Role Settings*/}
						<div
							className="min-w-[5rem] MobileScreen:min-w-[10rem] flex flex-col items-center cursor-pointer"
							onClick={() =>
								setSelectedRolesAndPermissionsSection("Role Settings")
							}
						>
							<p
								className={`mb-2 font-bold 	${
									selectedRolesAndPermissionsSection === "Role Settings"
										? " text-holmes-primary-blue"
										: "text-holmes-border-grey"
								}`}
							>
								Role Settings
							</p>
							<div
								className={`w-full h-1 rounded-md ${selectedRolesAndPermissionsSection === "Role Settings" ? " bg-holmes-primary-blue" : "bg-holmes-border-grey"}`}
							></div>
						</div>

						{/* Role Members */}

						<div
							className="min-w-[5rem] MobileScreen:min-w-[12rem] flex flex-col items-center cursor-pointer"
							onClick={() =>
								setSelectedRolesAndPermissionsSection("Role Members")
							}
						>
							<p
								className={`mb-2 font-bold 	${
									selectedRolesAndPermissionsSection === "Role Members"
										? " text-holmes-primary-blue"
										: "text-holmes-border-grey"
								}`}
							>
								Role Members
							</p>
							<div
								className={`w-full h-1 rounded-md ${selectedRolesAndPermissionsSection === "Role Members" ? " bg-holmes-primary-blue" : "bg-holmes-border-grey"}`}
							></div>
						</div>
					</div>
					<>
						{selectedRolesAndPermissionsSection === "Role Settings" ? (
							<RoleSettingsContainer />
						) : selectedRolesAndPermissionsSection === "Role Members" ? (
							<RoleMembersTable />
						) : (
							""
						)}
					</>
				</div>
			</section>
		);
	};

	const tabletView = () => {
		return (
			<section className="MobileScreen:hidden DesktopScreen:hidden">
				<div className="py-2 bg-white w-full">
					<div className="py-4">
						<h2 className="text-xl font-semibold">Roles And Permissions</h2>
						<div className="text-holmes-font-grey">
							Manage your team members as they collaborate with you on holmes
						</div>
					</div>
					<div className="flex gap-4">
						{/* Role Settings*/}
						<div
							className="min-w-[5rem] MobileScreen:min-w-[10rem] flex flex-col items-center cursor-pointer"
							onClick={() =>
								setSelectedRolesAndPermissionsSection("Role Settings")
							}
						>
							<p
								className={`mb-2 font-bold 	${
									selectedRolesAndPermissionsSection === "Role Settings"
										? " text-holmes-primary-blue"
										: "text-holmes-border-grey"
								}`}
							>
								Role Settings
							</p>
							<div
								className={`w-full h-1 rounded-md ${selectedRolesAndPermissionsSection === "Role Settings" ? " bg-holmes-primary-blue" : "bg-holmes-border-grey"}`}
							></div>
						</div>

						{/* Role Members */}

						<div
							className="min-w-[5rem] MobileScreen:min-w-[12rem] flex flex-col items-center cursor-pointer"
							onClick={() =>
								setSelectedRolesAndPermissionsSection("Role Members")
							}
						>
							<p
								className={`mb-2 font-bold 	${
									selectedRolesAndPermissionsSection === "Role Members"
										? " text-holmes-primary-blue"
										: "text-holmes-border-grey"
								}`}
							>
								Role Members
							</p>
							<div
								className={`w-full h-1 rounded-md ${selectedRolesAndPermissionsSection === "Role Members" ? " bg-holmes-primary-blue" : "bg-holmes-border-grey"}`}
							></div>
						</div>
					</div>
					<>
						{selectedRolesAndPermissionsSection === "Role Settings" ? (
							<RoleSettingsContainer />
						) : selectedRolesAndPermissionsSection === "Role Members" ? (
							<RoleMembersTable />
						) : (
							""
						)}
					</>
				</div>
			</section>
		);
	};

	const mobileView = () => {
		return (
			<section className="TabletScreen:hidden DesktopScreen:hidden">
				<div className="py-2 bg-white w-full">
					<div className="py-4">
						<h2 className="text-xl font-semibold">Roles And Permissions</h2>
						<div className="text-holmes-font-grey">
							Manage your team members as they collaborate with you on holmes
						</div>
					</div>
					<div className="flex gap-4">
						{/* Role Settings*/}
						<div
							className="min-w-[5rem]  flex flex-col items-center cursor-pointer"
							onClick={() =>
								setSelectedRolesAndPermissionsSection("Role Settings")
							}
						>
							<p
								className={`mb-2 font-bold 	${
									selectedRolesAndPermissionsSection === "Role Settings"
										? " text-holmes-primary-blue"
										: "text-holmes-border-grey"
								}`}
							>
								Role Settings
							</p>
							<div
								className={`w-full h-1 rounded-md ${selectedRolesAndPermissionsSection === "Role Settings" ? " bg-holmes-primary-blue" : "bg-holmes-border-grey"}`}
							></div>
						</div>

						{/* Role Members */}

						<div
							className="min-w-[5rem]  flex flex-col items-center cursor-pointer"
							onClick={() =>
								setSelectedRolesAndPermissionsSection("Role Members")
							}
						>
							<p
								className={`mb-2 font-bold 	${
									selectedRolesAndPermissionsSection === "Role Members"
										? " text-holmes-primary-blue"
										: "text-holmes-border-grey"
								}`}
							>
								Role Members
							</p>
							<div
								className={`w-full h-1 rounded-md ${selectedRolesAndPermissionsSection === "Role Members" ? " bg-holmes-primary-blue" : "bg-holmes-border-grey"}`}
							></div>
						</div>
					</div>
					<>
						{selectedRolesAndPermissionsSection === "Role Settings" ? (
							<RoleSettingsContainer />
						) : selectedRolesAndPermissionsSection === "Role Members" ? (
							<RoleMembersTable />
						) : (
							""
						)}
					</>
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

export default RolesAndPermissionsTable;

