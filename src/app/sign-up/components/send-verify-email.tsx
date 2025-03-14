import Image from "next/image";
import holmesIcon from "@/assets/images/general/holmes-logo.png";
import EnvelopeAnimated from "../../../library/modals/EnvelopeAnimated";
import { useRouter } from "next/navigation";

const SendVerifyEmail: React.FC<{
	emailName: string;
}> = ({ emailName }) => {
	const router = useRouter()
	return (
		<section className="flex flex-col items-center px-20 py-10 h-screen">
			<div className="my-4 mb-8 flex justify-center">
				<Image src={holmesIcon} alt="Home Icon" className="w-[8rem] h-20" />
			</div>

			<div className="bg-white p-5 border-md shadow-md flex flex-col justify-center items-center w-[40%]">
				<div className="m-3 flex justify-center">
					{/* <Image
						unoptimized={true}
						src={AnimatedEnvelope}
						alt="envelope"
						className="w-[10rem] h-20"
					/> */}
					<EnvelopeAnimated/>
				</div>
				<div className="my-3">
					<h1 className="my-4 text-2xl text-center">Verification Email Sent</h1>
					<div className="text-holmes-text-light-blue">
						We've sent an email to {emailName} Click on the button in the mail
						to verify your email address. If it's not in your inbox, it might be
						in your spam or junk folder.
					</div>
				</div>

				<div
					className="text-holmes-primary-dark-brown text-xl cursor-pointer my-2"
					onClick={() => {
						("");
					}}
				>
					Resend Email
				</div>
				<div
					className="text-holmes-primary-dark-brown text-xl cursor-pointer my-2"
					onClick={() => {
					router.push('/verify/agent')
					}}
				>
				Click here to view verify pages(UI)
				</div>
			</div>
		</section>
	);
};

export default SendVerifyEmail;

