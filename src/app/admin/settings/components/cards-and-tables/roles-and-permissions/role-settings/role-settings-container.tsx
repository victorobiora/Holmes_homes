import { useRouter } from "next/navigation";
import { useState } from "react";
import UserDataManagementSettings from "./user-data-management";
import { initialUserDataManagementRolePermissions } from "@/app/admin/settings/settings.dto";

const RoleSettingsContainer = () => {
	const [selectedRoleSettingsSection, setSelectedRoleSettingsSection] =
		useState("User & Permission Management");
	const [userDataRolePermissions, setUserDataRolePermissions] = useState(
		initialUserDataManagementRolePermissions,
	);
	const router = useRouter();

	const roleSettingsSections = [
		"User & Permission Management",
		"Listings Management",
		"User Data Management",
		"Transactions Management",
		"Property Managment",
	];

	const handleUserDataManagementCheckboxChange = (role, permission) => {
		setUserDataRolePermissions((prevPermissions) => ({
			...prevPermissions,
			[role]: {
				...prevPermissions[role],
				[permission]: !prevPermissions[role][permission],
			},
		}));
	};

	// const getComponentToDisplay = (setting) => {
	// 	switch (setting) {
	// 		case "User & Permission Management":
	// 			return (
	// 				<UserDataManagementSettings
	// 					selected={
	// 						"User & Permission Management" === selectedRoleSettingsSection
	// 					}
	// 					rolePermissions={userDataRolePermissions}
	// 					handleCheckboxChange={handleUserDataManagementCheckboxChange}
	// 				/>
	// 			);
	// 		case "Listings Management":
	// 			return (
	// 				<UserDataManagementSettings
	// 					selected={
	// 						"User & Permission Management" === selectedRoleSettingsSection
	// 					}
	// 					rolePermissions={userDataRolePermissions}
	// 					handleCheckboxChange={handleUserDataManagementCheckboxChange}
	// 				/>
	// 			);
	// 		case "User Data Management":
	// 			return (
	// 				<UserDataManagementSettings
	// 					selected={
	// 						"User & Permission Management" === selectedRoleSettingsSection
	// 					}
	// 					rolePermissions={userDataRolePermissions}
	// 					handleCheckboxChange={handleUserDataManagementCheckboxChange}
	// 				/>
	// 			);
	// 		case "Transactions Management":
	// 			return "";
	// 		case "Property Management":
	// 			return "";
	// 		default:
	// 			return "";
	// 	}
	// };

	const desktopView = () => {
		return (
			<section className="TabletScreen:hidden MobileScreen:hidden">
				<div className="p-4 mt-4  MobileScreen:mt-4 MobileScreen:relative MobileScreen:overflow-x-scroll">
					<div className="flex items-start">
						{/* settings */}
						<div className="flex flex-col gap-2 w-[35%]">
							{roleSettingsSections.map((item, index) => {
								return (
									<div
										key={index}
										className={`min-w-[5rem] w-full MobileScreen:min-w-[10rem] flex items-center gap-2 cursor-pointer hover:bg-holmes-background-grey  rounded-tr-md rounded-br-md  ${selectedRoleSettingsSection === item ? " bg-holmes-background-grey " : ""}`}
										onClick={() => setSelectedRoleSettingsSection(item)}
									>
										<div
											className={`h-10 w-[0.2rem] rounded-md ${selectedRoleSettingsSection === item ? " bg-holmes-primary-blue" : "bg-holmes-border-grey"}`}
										></div>
										<p
											className={` p-2 font-[500] flex items-center 	${
												selectedRoleSettingsSection === item
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
							{roleSettingsSections.map((item, index) => {
								return (
									<UserDataManagementSettings
										key={index}
										selected={item === selectedRoleSettingsSection}
										rolePermissions={userDataRolePermissions}
										handleCheckboxChange={
											handleUserDataManagementCheckboxChange
										}
									/>
								);
							})}
						</>
					</div>
				</div>
			</section>
		);
	};

	const tabletmobileView = () => {
		return (
			<section className="DesktopScreen:hidden">
				<div className="p-4 mt-4  MobileScreen:mt-4 MobileScreen:relative MobileScreen:overflow-x-scroll">
					<div className="flex items-start">
						{/* settings */}
						<div className="flex flex-col gap-2 w-full">
							{roleSettingsSections.map((item, index) => {
								return (
									<div>
										<div
											key={index}
											className={`min-w-[5rem] w-full MobileScreen:min-w-[10rem] flex items-center gap-2 cursor-pointer hover:bg-holmes-background-grey  rounded-tr-md rounded-br-md  ${selectedRoleSettingsSection === item ? " bg-holmes-background-grey " : ""}`}
											onClick={() => setSelectedRoleSettingsSection(item)}
										>
											<div
												className={`h-10 w-[0.2rem] rounded-md ${selectedRoleSettingsSection === item ? " bg-holmes-primary-blue" : "bg-holmes-border-grey"}`}
											></div>
											<p
												className={` p-2 font-semibold flex items-center 	${
													selectedRoleSettingsSection === item
														? " text-holmes-primary-blue font-bold"
														: ""
												}`}
											>
												{item}
											</p>
										</div>
										<UserDataManagementSettings
											selected={item === selectedRoleSettingsSection}
											rolePermissions={userDataRolePermissions}
											handleCheckboxChange={
												handleUserDataManagementCheckboxChange
											}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
		);
	};

	return (
		<>
			{desktopView()}
			{tabletmobileView()}
		</>
	);
};

export default RoleSettingsContainer;

