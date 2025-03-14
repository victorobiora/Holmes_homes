
import { AgentNavBar } from "@/app/agent/generalcomponents/agent-navbar";
import DetailsComponent from "./property-listing-item-details";




const PropertyListingsMainSection: React.FC<{ toggleSidebar: () => void }> = ({
	toggleSidebar,
}) => {
	return (
		<section>
			<div className="sticky top-0 z-[1000]">
				<AgentNavBar toggleSidebar={toggleSidebar} />
			</div>
			<div className="p-3 px-6">
				<DetailsComponent/>
			</div>
		</section>
	);
};

export default PropertyListingsMainSection;

