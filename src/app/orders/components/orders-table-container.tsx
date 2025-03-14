import { useRef, useState, useEffect } from "react";

import OngoingOrdersTable from "./ongoing-orders";
import CompletedOrdersTable from "./completed-orders";
import CanceledOrdersTable from "./canceled-orders";

const OrdersTableContainer = () => {
	const [selectedTable, setSelectedTable] = useState("ongoing");

	return (
		<section>
			<div className="p-4 bg-white shadow-md rounded-md  MobileScreen:mt-4 MobileScreen:relative">
				<div className="flex gap-4">
					{/* ongoing */}
					<div
						className="min-w-[5rem] flex flex-col items-center cursor-pointer"
						onClick={() => setSelectedTable("ongoing")}
					>
						<p
							className={`mb-2 font-bold 	${
								selectedTable === "ongoing"
									? " text-holmes-primary-blue"
									: "text-holmes-border-grey"
							}`}
						>
							Ongoing
						</p>
						<div
							className={`w-full h-1 rounded-md ${selectedTable === "ongoing" ? " bg-holmes-primary-blue" : "bg-holmes-border-grey"}`}
						></div>
					</div>

					{/* completed */}
					<div
						className="min-w-[5rem] flex flex-col items-center cursor-pointer"
						onClick={() => setSelectedTable("completed")}
					>
						<p
							className={`mb-2 font-bold 	${
								selectedTable === "completed"
									? " text-holmes-primary-blue"
									: "text-holmes-border-grey"
							}`}
						>
							Completed
						</p>
						<div
							className={`w-full h-1 rounded-md ${selectedTable === "completed" ? " bg-holmes-primary-blue" : "bg-holmes-border-grey"}`}
						></div>
					</div>

					{/* canceled */}
					<div
						className="min-w-[5rem] flex flex-col items-center cursor-pointer"
						onClick={() => setSelectedTable("canceled")}
					>
						<p
							className={`mb-2 font-bold 	${
								selectedTable === "canceled"
									? " text-holmes-primary-blue"
									: "text-holmes-border-grey"
							}`}
						>
							Canceled
						</p>
						<div
							className={`w-full h-1 rounded-md ${selectedTable === "canceled" ? " bg-holmes-primary-blue" : "bg-holmes-border-grey"}`}
						></div>
					</div>
				</div>

				<>
					{selectedTable === "ongoing" ? (
						<OngoingOrdersTable />
					) : selectedTable === "completed" ? (
						<CompletedOrdersTable />
					) : selectedTable === "canceled" ? (
						<CanceledOrdersTable />
					) : (
						""
					)}
				</>
			</div>
		</section>
	);
};

export default OrdersTableContainer;

