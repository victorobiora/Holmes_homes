
import { AdminNavBar } from "@/app/admin/generalcomponents/admin-navbar";
import DetailsComponent from "./property-listing-item-details";




const PropertyListingsMainSection: React.FC<{ toggleSidebar: () => void }> = ({
	toggleSidebar,
}) => {
	return (
		<section>
			<div className="sticky top-0 z-[1000]">
				<AdminNavBar toggleSidebar={toggleSidebar} />
			</div>
			<div className="p-3 px-6">
				<DetailsComponent/>
			</div>
		</section>
	);
};

export default PropertyListingsMainSection;

