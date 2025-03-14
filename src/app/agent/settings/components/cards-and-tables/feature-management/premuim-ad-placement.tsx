import { useState } from "react";

const PremuimAdPlacement = () => {
	const [formData, setFormData] = useState([
		{
			adPlacement: "Pro",
			checked: false,
		},
		{
			adPlacement: "Premuim",
			checked: false,
		},
		{
			adPlacement: "Basic",
			checked: false,
		},
	]);

	return (
		<section className="w-full">
			<div className="text-holmes-primary-blue font-bold DesktopScreen:block hidden  p-2 px-4 rounded-md bg-holmes-background-light-grey">
				Premium Ad Placement
			</div>
			<div className="overflow-x-auto">
				{formData.map((item, index) => {
					return (
						<div
							key={index}
							className="border-b border-holmes-background-light-grey px-4 py-4 flex justify-between items-center"
						>
							<p >{item.adPlacement}</p>
							<input
								type="checkbox"
								checked={item.checked}
								onChange={() => {
									setFormData((prevState) => {
										const newArray = Array.from(prevState);
										const indexToChange = newArray.findIndex(
											(el) => el.adPlacement === item.adPlacement,
										);
										newArray[indexToChange] = {
											adPlacement: newArray[indexToChange].adPlacement,
											checked: !newArray[indexToChange].checked,
										};

										return newArray;
									});
								}}
								className="h-4 w-4 text-black rounded cursor-pointer"
							/>
						</div>
					);
				})}

                
			</div>
		</section>
	);
};

export default PremuimAdPlacement;

