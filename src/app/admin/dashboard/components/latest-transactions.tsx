import { demoLatestTransactions, demoRecentListings } from "../../admin.dto";
import Image from "next/image";

const LatestTransactionsTable = () => {
	const statusStyles = {
		Completed: "bg-green-100 text-[#00D800]",
		Canceled: "bg-red-100 text-red-700",
		Pending: "bg-yellow-100 text-yellow-700",
	};

	const desktopView = () => {
		return (
			<section className="TabletScreen:hidden MobileScreen:hidden">
				<div className="p-4 bg-white shadow-md rounded-md">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-xl font-semibold">Latest Transactions</h2>
						<button className="text-holmes-primary-dark-brown cursor-pointer hover:underline">
							View All
						</button>
					</div>
					<table className="w-full border-collapse">
						<thead className="bg-gray-100 text-gray-700 text-left">
							<tr>
								<th className="p-3">
									<input type="checkbox" />
								</th>
								<th className="p-3">Purchase ID</th>
								<th className="p-3">Buyer Name</th>
								<th className="p-3">Invoice</th>
								<th className="p-3">Purchase Date</th>
								<th className="p-3">Total Amount</th>
								<th className="p-3">Payment Method</th>
								<th className="p-3">Payment Status</th>
								<th className="p-3">Actions</th>
							</tr>
						</thead>
						<tbody>
							{demoLatestTransactions.map((transaction, index) => (
								<tr key={index} className={`border-b`}>
									<td className="p-3">
										<input type="checkbox" />
									</td>
									<td className="p-3">{transaction.id}</td>
									<td className="p-3 flex items-center space-x-2">
										<Image
											src={transaction.buyerImage}
											alt={transaction.buyerName}
											className="w-8 h-8 rounded-full"
										/>
										<span>{transaction.buyerName}</span>
									</td>
									<td className="p-3">{transaction.invoice}</td>
									<td className="p-3">{transaction.date}</td>
									<td className="p-3">{transaction.amount}</td>
									<td className="p-3">{transaction.paymentMethod}</td>
									<td className="p-3">
										<span
											className={`px-2 py-1 rounded-md text-sm ${statusStyles[transaction.status]}`}
										>
											{transaction.status}
										</span>
									</td>
									<td className="p-4">
										<div className="flex items-center gap-2">
											<button className="p-2 bg-gray-100 hover:bg-gray-200 rounded">
												👁️
											</button>
											<button className="p-2 bg-green-100 hover:bg-green-200 rounded">
												✏️
											</button>
											<button className="p-2 bg-red-100 hover:bg-red-200 rounded">
												🗑️
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
		);
	};
	const tabletView = () => {
		return (
			<section className="DesktopScreen:hidden MobileScreen:hidden">
				<div className="p-4 bg-white shadow-md rounded-md">
					{/* Header */}
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-xl font-semibold">Latest Transactions</h2>
						<button className="text-holmes-primary-dark-brown cursor-pointer hover:underline">
							View All
						</button>
					</div>

					{/* Table with Horizontal Scroll for Tablet Screens */}
					<div className="w-full overflow-x-scroll">
						<table className="min-w-full border-collapse mx-4">
							<thead className="bg-gray-100 text-gray-700 text-left">
								<tr>
									<th className="p-3 px-4">
										<input type="checkbox" />
									</th>
									<th className="p-3 px-4">Purchase ID</th>
									<th className="p-3 px-4 w-[8rem]">Buyer Name</th>
									<th className="p-3 px-4">Invoice</th>
									<th className="p-3 px-4">Purchase Date</th>
									<th className="p-3 px-4">Total Amount</th>
									<th className="p-3 px-4">Payment Method</th>
									<th className="p-3 px-4">Payment Status</th>
									<th className="p-3 px-4">Actions</th>
								</tr>
							</thead>
							<tbody>
								{demoLatestTransactions.map((transaction, index) => (
									<tr
										key={index}
										className={`border-b ${index % 2 ? "bg-gray-50" : "bg-white"}`}
									>
										<td className="p-3 px-4">
											<input type="checkbox" />
										</td>
										<td className="p-3 px-4">{transaction.id}</td>
										<td className="p-3 px-4 flex items-center space-x-2 w-[8rem]">
											<Image
												src={transaction.buyerImage}
												alt={transaction.buyerName}
												width={40}
												height={40}
												className="rounded-full"
											/>
											<span>{transaction.buyerName}</span>
										</td>
										<td className="p-3 px-4">{transaction.invoice}</td>
										<td className="p-3 px-4">{transaction.date}</td>
										<td className="p-3 px-4">{transaction.amount}</td>
										<td className="p-3 px-4">{transaction.paymentMethod}</td>
										<td className="p-3 px-4">
											<span
												className={`px-2 py-1 rounded-md text-sm ${statusStyles[transaction.status]}`}
											>
												{transaction.status}
											</span>
										</td>
										<td className="p-4 px-4">
											<div className="flex items-center gap-2">
												<button className="p-2 bg-gray-100 hover:bg-gray-200 rounded">
													👁️
												</button>
												<button className="p-2 bg-green-100 hover:bg-green-200 rounded">
													✏️
												</button>
												<button className="p-2 bg-red-100 hover:bg-red-200 rounded">
													🗑️
												</button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</section>
		);
	};
	const mobileView = () => {
		return (
			<section className="DesktopScreen:hidden TabletScreen:hidden">
				<div className="p-4 bg-white shadow-md rounded-md">
					{/* Header */}
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-xl font-semibold">Latest Transactions</h2>
						<button className="text-holmes-primary-dark-brown cursor-pointer hover:underline">
							View All
						</button>
					</div>

					<div className="w-full overflow-x-scroll">
						<table className="min-w-full border-collapse mx-4">
							<thead className="bg-gray-100 text-gray-700 text-left">
								<tr>
									<th className="p-3 px-4">
										<input type="checkbox" />
									</th>
									<th className="p-3 px-4">Purchase ID</th>
									<th className="p-3 px-4 w-[8rem]">Buyer Name</th>
									<th className="p-3 px-4">Invoice</th>
									<th className="p-3 px-4">Purchase Date</th>
									<th className="p-3 px-4">Total Amount</th>
									<th className="p-3 px-4">Payment Method</th>
									<th className="p-3 px-4">Payment Status</th>
									<th className="p-3 px-4">Actions</th>
								</tr>
							</thead>
							<tbody>
								{demoLatestTransactions.map((transaction, index) => (
									<tr
										key={index}
										className={`border-b ${index % 2 ? "bg-gray-50" : "bg-white"}`}
									>
										<td className="p-3 px-4">
											<input type="checkbox" />
										</td>
										<td className="p-3 px-4">{transaction.id}</td>
										<td className="p-3 px-4 flex items-center space-x-2 w-[8rem]">
											<Image
												src={transaction.buyerImage}
												alt={transaction.buyerName}
												width={40}
												height={40}
												className="rounded-full"
											/>
											<span>{transaction.buyerName}</span>
										</td>
										<td className="p-3 px-4">{transaction.invoice}</td>
										<td className="p-3 px-4">{transaction.date}</td>
										<td className="p-3 px-4">{transaction.amount}</td>
										<td className="p-3 px-4">{transaction.paymentMethod}</td>
										<td className="p-3 px-4">
											<span
												className={`px-2 py-1 rounded-md text-sm ${statusStyles[transaction.status]}`}
											>
												{transaction.status}
											</span>
										</td>
										<td className="p-4 px-4">
											<div className="flex items-center gap-2">
												<button className="p-2 bg-gray-100 hover:bg-gray-200 rounded">
													👁️
												</button>
												<button className="p-2 bg-green-100 hover:bg-green-200 rounded">
													✏️
												</button>
												<button className="p-2 bg-red-100 hover:bg-red-200 rounded">
													🗑️
												</button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</section>
		);
	};

	return (
		<section className="my-10">
			{desktopView()}
			{tabletView()}
			{mobileView()}
		</section>
	);
};

export default LatestTransactionsTable;

