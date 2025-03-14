import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import downIcon from "@/assets/images/general/down-icon-black.svg";
import Image from "next/image";
import BlackWallet from "@/assets/images/agent/black-wallet-icon.svg";
import { AreaChart } from "@tremor/react";
import { SalesChartData } from "../../admin.dto";

const SalesChart = () => {
	const [yearSelected, setYearSelected] = useState<string | null>("This Year");
	const [viewSelectYearFields, setViewSelectYearFields] = useState(false);
	const yearSelectRef = useRef<HTMLDivElement | null>(null);

	// Handle clicks outside year select fields
	useEffect(() => {
		if (typeof window !== "undefined") {
			const handleClickOutsideYearChosen = (event: MouseEvent) => {
				console.log(yearSelectRef.current?.contains(event.target as Node));
				if (
					viewSelectYearFields &&
					yearSelectRef.current &&
					!yearSelectRef.current.contains(event.target as Node)
				) {
					setViewSelectYearFields(false);
				}
			};
	
			document.addEventListener("mousedown", handleClickOutsideYearChosen);
	
			return () => {
				document.removeEventListener("mousedown", handleClickOutsideYearChosen);
			};
		}
	}, [viewSelectYearFields]);
	return (
		<section className="bg-white rounded-md h-full p-3 pt-5 DesktopScreen:w-[48%] w-full shadow-xl box-border ">
			<div className="flex justify-between items-center">
				<p className="text-xl font-[500]">Sales</p>
				<div className=" my-3 relative" ref={yearSelectRef}>
					<div>
						<div
							className={`px-4 cursor-pointer bg-white border border-black w-full py-2 flex justify-between items-center rounded-xl`}
							onClick={() => {
								setViewSelectYearFields((prevState) => !prevState);
							}}
						>
							{yearSelected}
							<div className="flex items-end ml-1">
								<Image src={downIcon} alt="down-icon" />
							</div>
						</div>
					</div>
					<AnimatePresence>
						{viewSelectYearFields && (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.2 }}
								className="bg-holmes-background-light-grey w-full  absolute top-[120%] flex flex-col text-md z-[900]"
							>
								{["2021", "2022", `2023`].map((item, index) => {
									return (
										<div
											key={index}
											className={`py-2 px-3 text-center  hover:bg-white hover:border-black hover:border-[0.2px] hover:rounded-sm cursor-pointer whitespace-nowrap ${yearSelected === item ? "bg-white border-black border rounded-sm" : ""}`}
											onClick={() => {
												setYearSelected(item);
												setViewSelectYearFields(false);
											}}
										>
											{item}
										</div>
									);
								})}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
			<div className="flex justify-end mt-1">
				<div>
					<Image alt="wallet" src={BlackWallet} />
				</div>
				<p className="text-lg font-bold">Earnings:</p>
				<p className="text-lg text-holmes-primary-blue">N{`900,000`}</p>
			</div>

			<div className="h-full w-full">
				<AreaChart
					data={SalesChartData}
					index="date"
					categories={["amount"]}
					curveType="monotone"
					colors={["black"]}
					valueFormatter={(number) => `$${number}`}
					onValueChange={() => {
						// console.log(v)
					}}
					showLegend={false}
				/>
			</div>
		</section>
	);
};

export default SalesChart;

