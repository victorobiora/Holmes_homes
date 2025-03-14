import NavBar from "@/app/user/navbar";

import OrdersTableContainer from "./orders-table-container";

const SavedListingsMainSection: React.FC<{ toggleSidebar: () => void }> = ({
	toggleSidebar,
}) => {
	return (
		<section>
			<div className="sticky top-0 z-[1000]">
				<NavBar toggleSidebar={toggleSidebar} />
			</div>
			<div className="p-3 px-6">
				<OrdersTableContainer/>
			</div>
		</section>
	);
};

export default SavedListingsMainSection;

