import { TestimonialItemType } from "@/app/types";
import { StaticImageData } from "next/image";
import Image from "next/image";

const TestimonialItem: React.FC<{
	item: TestimonialItemType
}> = ({ item }) => {
	return (
		<div className="bg-white shadow-md p-4 max-w-[400px] rounded-md">
			<p className="text-holmes-font-light-grey">{item.text}</p>

			<div className="p-2 rounded-md flex items-center">
				<div className="flex justify-center items-center  rounded-full min-h-16 min-w-16 mr-3">
					<Image
						alt="pic_testimonial"
						src={item.image}
						className="w-full h-full mr-3"
					/>
				</div>
				<div>
					<h2 className="max-w-[8rem]">{item.name}</h2>
					<p className="text-holmes-font-grey">{item.position}</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialItem;
