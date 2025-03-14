import { AgentNavBar} from "../../generalcomponents/agent-navbar";
import NewListingForm from "./new-listing-form";



const NewListingMainSection: React.FC<{ toggleSidebar: () => void }> = ({
	toggleSidebar,
}) => {
	return (
		<section>
			<div className="sticky top-0 z-[1000]">
				<AgentNavBar toggleSidebar={toggleSidebar} />
			</div>
			<div className="p-3 px-6">
				<NewListingForm/>
			</div>
		</section>
	);
};

export default NewListingMainSection;

