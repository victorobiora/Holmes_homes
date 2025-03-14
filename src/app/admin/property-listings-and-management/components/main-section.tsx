
import { AdminNavBar } from "../../generalcomponents/admin-navbar";
import AdminStatsContainer from "./property-stats";
import PropertyListingsTable from "./properties-table";


const PropertyListingsMainSection: React.FC<{ toggleSidebar: () => void }> = ({
	toggleSidebar,
}) => {
	return (
		<section>
			<div className="sticky top-0 z-[1000]">
				<AdminNavBar toggleSidebar={toggleSidebar} />
			</div>
			<div className="p-3 px-6">
				<AdminStatsContainer />

				<PropertyListingsTable/>
			</div>
		</section>
	);
};

export default PropertyListingsMainSection;

