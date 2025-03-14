import { demoSmallNotificationsArray } from "../../agent.dto";
import { AgentNavBar } from "../../generalcomponents/agent-navbar";
import ReviewsTable from "./reviews-table";


const ReviewsMainSection: React.FC<{ toggleSidebar: () => void }> = ({
	toggleSidebar,
}) => {
	return (
		<section>
			<div className="sticky top-0 z-[1000]">
				<AgentNavBar toggleSidebar={toggleSidebar} />
			</div>
			<div className="p-3 px-6">
				<ReviewsTable/>
			</div>
		</section>
	);
};

export default ReviewsMainSection;

