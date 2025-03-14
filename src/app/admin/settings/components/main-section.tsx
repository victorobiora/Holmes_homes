
import { AdminNavBar } from "../../generalcomponents/admin-navbar";
import SettingsContainer from "./settings-table";


const SettingsMainSection: React.FC<{ toggleSidebar: () => void }> = ({
	toggleSidebar,
}) => {
	return (
		<section>
			<div className="sticky top-0 z-[1000]">
				<AdminNavBar toggleSidebar={toggleSidebar} />
			</div>
			<div className="p-3 px-6">
			<SettingsContainer/>
			</div>
		</section>
	);
};

export default SettingsMainSection;

