import Image from "next/image";
import AreaSquareIcon from "@/assets/images/general/orange-area-square-icon.svg";
import ApartmentIcon from "@/assets/images/general/orange-apartment-icon.svg";
import ConstructionWorkerIcon from "@/assets/images/general/orange-construction-worker.svg";
import RoomIcon from "@/assets/images/general/orange-room-icon.svg";

const HolmesStatistics: React.FC<{
	stats: {
		areaSquareFeet: string;
		apartmentsSold: string;
		constructions: string;
		apartmentRooms: string;
	};
}> = ({ stats }) => {
	return (
		<section className="bg-holmes-background-light-grey flex justify-around items-center MobileScreen:flex-col MobileScreen:gap-5  my-20 p-20">
			<div className=" flex flex-col justify-center items-center">
				<div>
					<Image alt="area-sq-ft" src={AreaSquareIcon} />
				</div>
				<div className="text-2xl font-bold"> {stats.areaSquareFeet}</div>
				<div className="text-sm text-holmes-font-grey">Total Area Sq</div>
			</div>


			<div className=" flex flex-col justify-center items-center">
				<div>
					<Image alt="apartment" src={ApartmentIcon} />
				</div>
				<div className="text-2xl font-bold"> {stats.apartmentsSold}</div>
				<div className="text-sm text-holmes-font-grey">Apartments Sold</div>
			</div>


			<div className=" flex flex-col justify-center items-center">
				<div>
					<Image alt="constructions" src={ConstructionWorkerIcon} />
				</div>
				<div className="text-2xl font-bold"> {stats.constructions}</div>
				<div className="text-sm text-holmes-font-grey">Total Constructions</div>
			</div>


			<div className=" flex flex-col justify-center items-center">
				<div>
					<Image alt="apartio-rooms" src={RoomIcon} />
				</div>
				<div className="text-2xl font-bold"> {stats.apartmentRooms}</div>
				<div className="text-sm text-holmes-font-grey">Apartio Rooms</div>
			</div>
		</section>
	);
};

export default HolmesStatistics;

