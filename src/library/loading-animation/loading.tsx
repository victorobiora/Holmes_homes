import Image from "next/image";
import holmesImage from "@/assets/images/general/holmes-logo.png.png";

const LoadingComponent = () => (
	<div className="bg-white h-screen w-screen flex flex-col justify-center items-center">
		<div className="scale-animation w-20 h-20">
			<Image
				alt=""
				src={holmesImage}
				className="rounded-full w-full h-full"
			/>
		</div>
	</div>
);

export default LoadingComponent;

