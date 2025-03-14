import { useState } from "react";
import Inputs from "@/library/inputs/inputs";

const GuestSideBarFilter: React.FC<{
	remove: () => void;
}> = ({ remove }) => {
	const [filterParameters, setFilterParamters] = useState({
		serviceType: "buy",
		realEstateStructure: [
			{
				name: "Houses",
				checked: false,
			},
			{
				name: "Townhomes",
				checked: false,
			},
			{
				name: "Multi-family",
				checked: false,
			},
			{
				name: "Apartments",
				checked: false,
			},
			{
				name: "Commercials",
				checked: false,
			},
			{
				name: "Lots/Lands",
				checked: false,
			},
		],
	});

	const desktopView = () => {
		return (
			<form className=" px-3 TabletScreen:hidden MobileScreen:hidden">
				{/*  type of service */}

				<div className="flex justify-between">
					{/* buy */}
					<div
						className={`border py-2 px-4 cursor-pointer rounded-md ${filterParameters.serviceType === "buy" ? "bg-black text-white" : "bg-white text-black"}`}
						onClick={() => {
							setFilterParamters((prevState) => {
								return {
									...prevState,
									serviceType: "buy",
								};
							});
						}}
					>
						Buy
					</div>
					{/* rent */}
					<div
						className={`border py-2 px-4 cursor-pointer rounded-md ${filterParameters.serviceType === "rent" ? "bg-black text-white" : "bg-white text-black"}`}
						onClick={() => {
							setFilterParamters((prevState) => {
								return {
									...prevState,
									serviceType: "rent",
								};
							});
						}}
					>
						Rent
					</div>
					{/* shortlet */}
					<div
						className={`border py-2 px-4 cursor-pointer rounded-md ${filterParameters.serviceType === "shortlet" ? "bg-black text-white" : "bg-white text-black"}`}
						onClick={() => {
							setFilterParamters((prevState) => {
								return {
									...prevState,
									serviceType: "shortlet",
								};
							});
						}}
					>
						Shortlet
					</div>
				</div>

				{/* Real Estate type */}

				<div className="mt-6">
					<p className="font-bold">Real Estate type</p>

					{filterParameters.realEstateStructure.map((item, position) => {
						return (
							<div className="flex items-center my-2" key={position}>
								<input
									type="checkbox"
									name={item.name}
									checked={item.checked}
									className="mr-2  checked:bg-holmes-primary-light-brown focus:ring-0 focus:checked:bg-holmes-primary-light-brown"
									onChange={() => {
										setFilterParamters((prevState) => {
											const copyArray = [...prevState.realEstateStructure];
											const index = copyArray.findIndex(
												(el) => el.name === item.name,
											);
											copyArray[index] = {
												name: copyArray[index].name,
												checked: !copyArray[index].checked,
											};

											return {
												...prevState,
												realEstateStructure: copyArray,
											};
										});
									}}
								/>
								<p>{item.name}</p>
							</div>
						);
					})}
				</div>

				{/* Pricing */}
				<div className="mt-6">
					<p className="font-bold">Pricing</p>

					{/* <div>..........................</div> */}

					<div className="flex justify-between my-3">
						<div className="mr-4">
							<p className="text-sm my-1">Minimum</p>
							<Inputs
								Name="minimumPrice"
								placeholder="0"
								inputType="number"
								className="w-full rounded-md border"
							/>
						</div>
						<div>
							<p className="text-sm my-1">Maximum</p>
							<Inputs
								Name="minimumPrice"
								placeholder="8,000,000,000"
								inputType="number"
								className="w-full rounded-md border"
							/>
						</div>
					</div>
				</div>

				{/* Floor area */}
				<div className="mt-6">
					<p className="font-bold">Floor Area</p>

					<div className="flex justify-between my-3">
						<div className="mr-4">
							<p className="text-sm my-1">Minimum</p>
							<Inputs
								Name="minimumFloorArea"
								placeholder="50m²"
								inputType="number"
								className="w-full rounded-md border"
							/>
						</div>
						<div>
							<p className="text-sm my-1">Maximum</p>
							<Inputs
								Name="minimumFloorArea"
								placeholder="250m²"
								inputType="number"
								className="w-full rounded-md border"
							/>
						</div>
					</div>
				</div>

				{/* Lot size */}
				<div className="mt-6">
					<p className="font-bold">Lot Size</p>

					<div className="flex justify-between my-3">
						<div className="mr-4">
							<p className="text-sm my-1">Minimum</p>
							<Inputs
								Name="minimumLotSize"
								placeholder="50m²"
								inputType="number"
								className="w-full rounded-md border"
							/>
						</div>
						<div>
							<p className="text-sm my-1">Maximum</p>
							<Inputs
								Name="minimumLotSize"
								placeholder="250m²"
								inputType="number"
								className="w-full rounded-md border"
							/>
						</div>
					</div>
				</div>

				{/* Year Built */}
				<div className="mt-6">
					<p className="font-bold">Year Built</p>

					{/* <div>..........................</div> */}

					<div className="flex justify-between my-3">
						<div className="mr-4">
							<p className="text-sm my-1">Minimum</p>
							<Inputs
								Name="minimumYear"
								placeholder="2011"
								inputType="number"
								className="w-full rounded-md border"
							/>
						</div>
						<div>
							<p className="text-sm my-1">Maximum</p>
							<Inputs
								Name="maximumYear"
								placeholder="2024"
								inputType="number"
								className="w-full rounded-md border"
							/>
						</div>
					</div>
				</div>
			</form>
		);
	};


	return (
		<>
			{desktopView()}
	
		</>
	);
};

export default GuestSideBarFilter;
