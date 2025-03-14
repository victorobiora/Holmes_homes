
import { AgentNavBar } from "../../generalcomponents/agent-navbar";
import SettingsContainer from "./settings-table";


const SettingsMainSection: React.FC<{ toggleSidebar: () => void }> = ({
	toggleSidebar,
}) => {
	return (
		<section>
			<div className="sticky top-0 z-[1000]">
				<AgentNavBar toggleSidebar={toggleSidebar} />
			</div>
			<div className="p-3 px-6">
			<SettingsContainer/>
			</div>
		</section>
	);
};

export default SettingsMainSection;

