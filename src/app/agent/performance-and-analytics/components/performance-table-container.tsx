import { useRef, useState, useEffect } from "react";
import PerformanceAndAnalyticsManageLeadsTable from "./tables/manage-leads-table";
import PerformanceAndAnalyticsStatsTable from "./tables/stats-table";
import PerformanceAndAnalyticsAffliateTable from "./tables/affliate-table";

const PerformanceAndAnalyticsTableContainer = () => {
	const [selectedTable, setSelectedTable] = useState("manage-leads");

	return (
		<section>
			<div className="p-4 bg-white shadow-md rounded-md  MobileScreen:mt-4 MobileScreen:relative">
				<div className="flex gap-4">
					{/* manage-leads */}
					<div
						className="min-w-[8rem] flex flex-col items-center cursor-pointer"
						onClick={() => setSelectedTable("manage-leads")}
					>
						<p
							className={`mb-2 font-bold 	${
								selectedTable === "manage-leads"
									? " text-holmes-primary-blue"
									: "text-holmes-border-grey"
							}`}
						>
							Manage Leads
						</p>
						<div
							className={`w-full h-1 rounded-md ${selectedTable === "manage-leads" ? " bg-holmes-primary-blue" : "bg-holmes-border-grey"}`}
						></div>
					</div>

					{/* stats */}
					<div
						className="min-w-[5rem] flex flex-col items-center cursor-pointer"
						onClick={() => setSelectedTable("stats")}
					>
						<p
							className={`mb-2 font-bold 	${
								selectedTable === "stats"
									? " text-holmes-primary-blue"
									: "text-holmes-border-grey"
							}`}
						>
							Stats
						</p>
						<div
							className={`w-full h-1 rounded-md ${selectedTable === "stats" ? " bg-holmes-primary-blue" : "bg-holmes-border-grey"}`}
						></div>
					</div>

					{/* affliate */}
					<div
						className="min-w-[5rem] flex flex-col items-center cursor-pointer"
						onClick={() => setSelectedTable("affliate")}
					>
						<p
							className={`mb-2 font-bold 	${
								selectedTable === "affliate"
									? " text-holmes-primary-blue"
									: "text-holmes-border-grey"
							}`}
						>
							Affliate
						</p>
						<div
							className={`w-full h-1 rounded-md ${selectedTable === "affliate" ? " bg-holmes-primary-blue" : "bg-holmes-border-grey"}`}
						></div>
					</div>
				</div>

				<>
					{selectedTable === "manage-leads" ? (
						<PerformanceAndAnalyticsManageLeadsTable />
					) : selectedTable === "stats" ? (
						<PerformanceAndAnalyticsStatsTable/>
					) : selectedTable === "affliate" ? (
					<PerformanceAndAnalyticsAffliateTable/>
					) : (
						""
					)}
				</>
			</div>
		</section>
	);
};

export default PerformanceAndAnalyticsTableContainer;

