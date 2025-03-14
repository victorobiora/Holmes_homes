import NavBar from "@/app/user/navbar";
import AccountSettingsComponent from "./account-settings";

const AccountMainSection: React.FC<{ toggleSidebar: () => void }> = ({
	toggleSidebar,
}) => {
	return (
		<section>
			<div className="sticky top-0 z-[1000]">
				<NavBar toggleSidebar={toggleSidebar} />
			</div>
			<div className="p-3 px-6">
				<AccountSettingsComponent />
			</div>
		</section>
	);
};

export default AccountMainSection;

