import { demoSmallNotificationsArray } from "../../admin.dto";
import { AdminNavBar } from "../../generalcomponents/admin-navbar";
import UserManagementTableContainer from "./user-mgt-table-container";


const DashboardMainSection: React.FC<{ toggleSidebar: () => void }> = ({
	toggleSidebar,
}) => {
	return (
		<section>
			<div className="sticky top-0 z-[1000]">
				<AdminNavBar toggleSidebar={toggleSidebar} />
			</div>
			<div className="p-3 px-6">
				<UserManagementTableContainer/>
			</div>
		</section>
	);
};

export default DashboardMainSection;

