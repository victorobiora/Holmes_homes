import { demoRecentListings } from "../../admin.dto";
import Image from "next/image";

const RecentListingsTable = () => {
	const getStatusStyles = (status) => {
		switch (status) {
			case "Active":
				return "bg-green-100 text-[#00D800]";
			case "Pending":
				return "bg-orange-100 text-orange-700";
			case "Processing":
				return "bg-gray-100 text-gray-700";
			default:
				return "";
		}
	};

	const desktopView = () => {
		return (
			<section className="TabletScreen:hidden MobileScreen:hidden">
				<div className="p-4 bg-white shadow-md rounded-md">
					<div className="px-2 py-4 bg-white flex justify-between items-center">
						<h2 className="text-xl font-semibold mb-4">Recent Listings</h2>
						<div className="hover:underline text-holmes-primary-dark-brown cursor-pointer">
							View all
						</div>
					</div>

					<table className="w-full border-collapse">
						<thead className="text-left bg-gray-100 ">
							<tr>
								<th className="p-4">
									<input type="checkbox" className="form-checkbox" />
								</th>
								<th className="p-4">Title</th>
								<th className="p-4">Date</th>
								<th className="p-4">View</th>
								<th className="p-4">Status</th>
								<th className="p-4">Actions</th>
							</tr>
						</thead>
						<tbody>
							{demoRecentListings.map((listing, index) => (
								<tr key={index} className="border-t">
									<td className="p-4">
										<input type="checkbox" className="form-checkbox" />
									</td>
									<td className="p-4 flex items-center gap-4">
										<Image
											src={listing.image}
											alt={listing.title}
											className="w-16 h-16 rounded object-cover"
										/>
										<div>
											<h3 className="font-semibold">{listing.title}</h3>
											<p className=" text-gray-500">{listing.address}</p>
											<p className="text-lg font-bold">{listing.price}</p>
										</div>
									</td>
									<td className="p-4">{listing.date}</td>
									<td className="p-4">{listing.views}</td>
									<td className="p-4">
										<span
											className={`px-3 py-1 rounded-full  font-medium ${getStatusStyles(
												listing.status,
											)}`}
										>
											{listing.status}
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
		return <section className="MobileScreen:hidden DesktopScreen:hidden">
							<div className="p-4 bg-white shadow-md rounded-md">
					<div className="px-2 py-4 bg-white flex justify-between items-center">
						<h2 className="text-xl font-semibold mb-4">Recent Listings</h2>
						<div className="hover:underline text-holmes-primary-dark-brown cursor-pointer">
							View all
						</div>
					</div>

					<table className="w-full border-collapse">
						<thead className="text-left bg-gray-100 ">
							<tr>
								<th className="p-4">
									<input type="checkbox" className="form-checkbox" />
								</th>
								<th className="p-4">Title</th>
								<th className="p-4">Date</th>
								<th className="p-4">View</th>
								<th className="p-4">Status</th>
								<th className="p-4">Actions</th>
							</tr>
						</thead>
						<tbody>
							{demoRecentListings.map((listing, index) => (
								<tr key={index} className="border-t">
									<td className="p-4">
										<input type="checkbox" className="form-checkbox" />
									</td>
									<td className="p-4 flex items-center gap-4">
										<Image
											src={listing.image}
											alt={listing.title}
											className="w-16 h-16 rounded object-cover"
										/>
										<div>
											<h3 className="font-semibold">{listing.title}</h3>
											<p className=" text-gray-500">{listing.address}</p>
											<p className="text-lg font-bold">{listing.price}</p>
										</div>
									</td>
									<td className="p-4">{listing.date}</td>
									<td className="p-4">{listing.views}</td>
									<td className="p-4">
										<span
											className={`px-3 py-1 rounded-full  font-medium ${getStatusStyles(
												listing.status,
											)}`}
										>
											{listing.status}
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
		</section>;
	};
	const mobileView = () => {
		return <section className="DesktopScreen:hidden TabletScreen:hidden">
			<div className="p-4 bg-white shadow-md rounded-md mt-4">
  <div className="px-2 py-4 bg-white flex justify-between items-center">
    <h2 className="text-lg font-semibold mb-4">Recent Listings</h2>
    <div className="hover:underline text-holmes-primary-dark-brown cursor-pointer">
      View all
    </div>
  </div>

  <div className="overflow-x-scroll">
    <table className="w-full border-collapse">
      <thead className="text-left bg-gray-100 ">
        <tr>
          <th className="p-2 ">
            <input type="checkbox" className="form-checkbox" />
          </th>
          <th className="p-2 w-[10rem]">Title</th>
          <th className="p-2 ">Date</th>
          <th className="p-2 ">Views</th>
          <th className="p-2 ">Status</th>
          <th className="p-2 ">Actions</th>
        </tr>
      </thead>
      <tbody>
        {demoRecentListings.map((listing, index) => (
          <tr key={index} className="border-t">
            <td className="p-2 ">
              <input type="checkbox" className="form-checkbox" />
            </td>
            <td className="p-2  flex items-center gap-2 w-[10rem]">
              <Image
                src={listing.image}
                alt={listing.title}
                className="w-12 h-12 rounded object-cover"
              />
              <div>
                <h3 className="font-semibold text-xs">{listing.title}</h3>
                <p className="text-xs text-gray-500">{listing.address}</p>
                <p className=" font-bold">{listing.price}</p>
              </div>
            </td>
            <td className="p-2 ">{listing.date}</td>
            <td className="p-2 ">{listing.views}</td>
            <td className="p-2 ">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(
                  listing.status
                )}`}
              >
                {listing.status}
              </span>
            </td>
            <td className="p-2 ">
              <div className="flex items-center gap-2">
                <button className="p-1 bg-gray-100 hover:bg-gray-200 rounded">
                  👁️
                </button>
                <button className="p-1 bg-green-100 hover:bg-green-200 rounded">
                  ✏️
                </button>
                <button className="p-1 bg-red-100 hover:bg-red-200 rounded">
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
		</section>;
	};

	return (
		<section>
			{desktopView()}
			{tabletView()}
			{mobileView()}
		</section>
	);
};

export default RecentListingsTable;

