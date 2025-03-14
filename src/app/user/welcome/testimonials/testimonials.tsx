import { dummyTestimonials } from "@/app/home.dto";
import TestimonialItem from "./testimonial-item";

const Testimonials = () => {
	
	return (
		<section className="bg-holmes-background-light-grey flex flex-col justify-center items-center my-16 p-20 MobileScreen:p-10">
			<div className={`p-2 bg-[#FBF6F3] text-holmes-primary-dark-brown mb-3`}>
				Testimonials
			</div>
			<h1 className="text-2xl font-bold my-4">Clients Feedback</h1>

			<main className="flex DesktopScreen:flex-row flex-col w-full items-center DesktopScreen:justify-around justify-between gap-5">
				<TestimonialItem item={dummyTestimonials} />
				<TestimonialItem item={dummyTestimonials} />
				<TestimonialItem item={dummyTestimonials} />
			</main>
		</section>
	);
};

export default Testimonials;

