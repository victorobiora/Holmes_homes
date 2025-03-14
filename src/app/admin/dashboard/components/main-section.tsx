import { demoSmallNotificationsArray } from "../../admin.dto";
import { AdminNavBar } from "../../generalcomponents/admin-navbar";
import AdminStatsContainer from "./admin-stats";
import LatestTransactionsTable from "./latest-transactions";
import SmallNotificationComponent from "./notifications-small";
import RecentActivities from "./recent-activities";
import RecentListingsTable from "./recent-listings";
import SalesChart from "./sales-chart";

const DashboardMainSection: React.FC<{ toggleSidebar: () => void }> = ({
	toggleSidebar,
}) => {
	return (
		<section>
			<div className="sticky top-0 z-[1000]">
				<AdminNavBar toggleSidebar={toggleSidebar} />
			</div>
			<div className="p-3 px-6">
				<AdminStatsContainer />
				{demoSmallNotificationsArray.map((item, index) => {
					return <SmallNotificationComponent key={index} item={item} />;
				})}
				{/* charts and recent activities  */}
				<div className="flex flex-col w-full my-3 DesktopScreen:flex-row DesktopScreen:justify-between DesktopScreen:items-center items-stretch DesktopScreen:h-[30rem]">
				<SalesChart/>
				<RecentActivities/>
				</div>
				<LatestTransactionsTable/>
				<RecentListingsTable/>
			</div>
		</section>
	);
};

export default DashboardMainSection;

