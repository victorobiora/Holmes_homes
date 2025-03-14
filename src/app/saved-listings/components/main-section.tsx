import NavBar from "@/app/user/navbar";
import SavedListingsTable from "./saved-listings-component";

const SavedListingsMainSection: React.FC<{ toggleSidebar: () => void }> = ({
	toggleSidebar,
}) => {
	return (
		<section>
			<div className="sticky top-0 z-[1000]">
				<NavBar toggleSidebar={toggleSidebar} />
			</div>
			<div className="p-3 px-6">
				<SavedListingsTable />
			</div>
		</section>
	);
};

export default SavedListingsMainSection;

