import { demoSmallNotificationsArray } from "../../agent.dto";
import { AgentNavBar} from "../../generalcomponents/agent-navbar";
import AdminStatsContainer from "./admin-stats";
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
				<AgentNavBar toggleSidebar={toggleSidebar} />
			</div>
			<div className="p-3 px-6">
				<AdminStatsContainer />
				{/* {demoSmallNotificationsArray.map((item, index) => {
					return <SmallNotificationComponent key={index} item={item} />;
				})} */}
				{/* charts and recent activities  */}
				<div className="flex flex-col w-full my-3 DesktopScreen:flex-row DesktopScreen:justify-between DesktopScreen:items-center items-stretch DesktopScreen:h-[30rem]">
				<SalesChart/>
				<RecentActivities/>
				</div>
				<RecentListingsTable/>
			</div>
		</section>
	);
};

export default DashboardMainSection;

