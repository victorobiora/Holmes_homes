import NavBar from "@/app/user/navbar";
import HelpAndSupportComponent from "./help-support-component";

const HelpAndSupportMainSection: React.FC<{ toggleSidebar: () => void }> = ({
	toggleSidebar,
}) => {
	return (
		<section>
			<div className="sticky top-0 z-[1000]">
				<NavBar toggleSidebar={toggleSidebar} />
			</div>
			<div className="p-3 px-6">
				<HelpAndSupportComponent />
			</div>
		</section>
	);
};

export default HelpAndSupportMainSection;

