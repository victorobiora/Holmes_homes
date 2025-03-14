import { useRouter } from "next/navigation";
import { useState } from "react";
import PersonalDetailsTable from "./sections/personal-details-table";
import SignInandSecurityTable from "./sections/sign-in-and-security-table";
import RolesAndPermissionsTable from "./sections/roles-and-permissions";
import SubscriptionTiersTable from "./sections/subscription-tiers";
import PushNotificationsSettings from "./sections/push-notifications-and-announcement";

const SettingsTable = () => {
	const [selectedSettingsPage, setSelectedSettingsPage] =
		useState("Personal Details");
	const router = useRouter();

	const settingsOptions = [
		{ label: "Personal Details", minWidth: "DesktopScreen:min-w-[5rem] min-w-[10rem]" },
		{ label: "Sign In and Security", minWidth: "DesktopScreen:min-w-[5rem] min-w-[12rem]" },
		{ label: "Roles & Permissions", minWidth: "DesktopScreen:min-w-[5rem] min-w-[12rem]" },
		{ label: "Subscription Tiers", minWidth: "DesktopScreen:min-w-[5rem] min-w-[10rem]" },
		{ label: "Push Notifications & Announcements", minWidth: "DesktopScreen:min-w-[5rem] min-w-[25rem] pr-4" },
	  ];

	return (
		<section>
			<div className="p-4 bg-white shadow-md rounded-md  MobileScreen:mt-4 MobileScreen:relative MobileScreen:overflow-x-scroll">
			<div className="flex gap-4 overflow-x-scroll">
      {settingsOptions.map(({ label, minWidth }) => (
        <div
          key={label}
          className={`${minWidth} flex flex-col items-center cursor-pointer`}
          onClick={() => setSelectedSettingsPage(label)}
        >
          <p
            className={`mb-2 font-bold ${
              selectedSettingsPage === label
                ? "text-holmes-primary-blue"
                : "text-holmes-border-grey"
            }

			
			
			`}
          >
            {label}
          </p>
          <div
            className={`w-full h-1 rounded-md ${
              selectedSettingsPage === label
                ? "bg-holmes-primary-blue"
                : "bg-holmes-border-grey"
            }`}
          ></div>
        </div>
      ))}
    </div>
				<>
					{selectedSettingsPage === "Personal Details" ? (
						<PersonalDetailsTable />
					) : selectedSettingsPage === "Sign In and Security" ? (
						<SignInandSecurityTable />
					) : selectedSettingsPage === "Subscription Tiers" ? (
						<SubscriptionTiersTable />
					) : selectedSettingsPage === "Roles & Permissions" ? (
						<RolesAndPermissionsTable />
					) : selectedSettingsPage === "Push Notifications & Announcements" ? (
						<PushNotificationsSettings/>
					) : (
						""
					)}
				</>
			</div>
		</section>
	);
};

export default SettingsTable;

