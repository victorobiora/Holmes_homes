import { adminStatsDataStructure } from "../../agent.dto";
import Image from "next/image";

const AdminStatsContainer = () => {
	return (
		<section className="flex justify-between flex-col DesktopScreen:flex-row">
			{adminStatsDataStructure.map((item, index) => {
				return (
					<div key={index} className="bg-white rounded-md shadow-md py-3 px-5 flex items-center justify-between min-w-[16rem] min-h-[7rem] my-2">
						<div>
							<p className="text-holmes-font-grey">{item.name}</p>
							<p className="font-bold my-2">{item.value}</p>
						</div>

						<div className="bg-holmes-primary-blue h-10 w-10 rounded-full flex items-center justify-center">
							<Image alt="icon" src={item.icon} />
						</div>
					</div>
				);
			})}
		</section>
	);
};

export default AdminStatsContainer;
