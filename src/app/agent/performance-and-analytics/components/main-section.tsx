import { AgentNavBar} from "../../generalcomponents/agent-navbar";
import PerformanceAndAnalyticsTableContainer from "./performance-table-container";


const MainSection: React.FC<{ toggleSidebar: () => void }> = ({
	toggleSidebar,
}) => {
	return (
		<section>
			<div className="sticky top-0 z-[1000]">
				<AgentNavBar toggleSidebar={toggleSidebar} />
			</div>
			<div className="p-3 px-6">
			<PerformanceAndAnalyticsTableContainer/>
			</div>
		</section>
	);
};

export default MainSection;

