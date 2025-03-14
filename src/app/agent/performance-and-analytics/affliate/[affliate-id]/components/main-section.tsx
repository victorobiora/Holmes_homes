
import { AdminNavBar } from "@/app/admin/generalcomponents/admin-navbar";
import AffliateDetailsComponent from "./affliate-details-component";



const DashboardMainSection: React.FC<{ toggleSidebar: () => void }> = ({
	toggleSidebar,
}) => {
	return (
		<section>
			<div className="sticky top-0 z-[1000]">
				<AdminNavBar toggleSidebar={toggleSidebar} />
			</div>
			<div className="p-3 px-6">
	<AffliateDetailsComponent/>
			</div>
		</section>
	);
};

export default DashboardMainSection;

