import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
// import '' from "@/assets/images/general/holmes-logo.png-footer.svg";
import locationIcon from "@/assets/images/general/white-location-icon.svg";
import emailIcon from "@/assets/images/general/white-email-icon.svg";
import phoneIcon from "@/assets/images/general/white-phone-icon.svg";
import facebookIcon from "@/assets/images/general/white-facebook-icon.svg";
import twitterIcon from "@/assets/images/general/white-twitter-icon.svg";
import youtubeIcon from "@/assets/images/general/white-youtube-icon.svg";
import PaymentGateways from "@/assets/images/general/accepted-payment-routes.svg";
import sendEmail from "@/assets/images/general/orange-send-email.svg";
import Link from "next/link";
import Inputs from "@/library/inputs/inputs";

const Footer = () => {
	const router = useRouter();

	const desktopView = () => {
		return (
			<footer className="relative text-white mt-36 text-sm TabletScreen:hidden MobileScreen:hidden">
				<div className="absolute -top-10 left-1/2 transform -translate-x-1/2  z-20 bg-holmes-primary-dark-brown p-3 px-10 w-[60%] h-[10rem] flex justify-between items-center">
					<div>
						<h1 className="text-3xl font-bold ">Looking for a dream home?</h1>
						<p className="text-sm ">
							We can help realise your dream of a new home
						</p>
					</div>

					<motion.button
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						className={`px-2 py-3 rounded-md text-holmes-primary-blue bg-white `}
						onClick={(event) => {
							event.preventDefault();
							router.push("/sign-up");
						}}
					>
						Explore Properties
					</motion.button>
				</div>
				<main className="bg-holmes-primary-blue relative z-10 pt-[10rem] flex justify-between px-20">
					<div className="w-[30rem]">
						<div>
							<Image alt="logo" src= {''} />
						</div>
						<p className="my-2">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
							alias rerum accusantium porro eius quisquam laudantium enim error
							minima! Rerum exercitationem odio pariatur molestias commodi
							repellendus corrupti, magni iure cupiditate?
						</p>
						<div className=" my-4">
							<div className=" my-2 flex items-center cursor-pointer">
								<div
									className="mr-2"
									onClick={() => {
										("");
									}}
								>
									<Image alt="location" src={locationIcon} />
								</div>
								Akinpeju Street, Lagos, Nigeria
							</div>
							<div className=" my-2 flex items-center cursor-pointer">
								<div
									className="mr-2"
									onClick={() => {
										("");
									}}
								>
									<Image alt="phone" src={phoneIcon} />
								</div>
								+234-804-8983-903
							</div>
							<div className=" my-2 flex items-center cursor-pointer">
								<div
									className="mr-2"
									onClick={() => {
										("");
									}}
								>
									<Image alt="email" src={emailIcon} />
								</div>
								mail@example.com
							</div>
							<div className="flex justify-between w-[30%] my-4">
								<Link href="" target="_blank">
									<Image
										alt="facebook"
										src={facebookIcon}
										className="cursor-pointer "
									/>
								</Link>
								<Link href="" target="_blank">
									<Image
										alt="youtube"
										src={youtubeIcon}
										className="cursor-pointer"
									/>
								</Link>
								<Link href="" target="_blank">
									<Image
										alt="twitter"
										src={twitterIcon}
										className="cursor-pointer"
									/>
								</Link>
							</div>
						</div>
					</div>
					<div className="my-4">
						<h1 className="text-xl font-bold">Company</h1>

						<div className="my-4">
							<Link href="" target="_blank" className="block my-3">
								About
							</Link>
							<Link href="" target="_blank" className="block my-3">
								Blog
							</Link>
							<Link href="" target="_blank" className="block my-3">
								FAQ
							</Link>
							<Link href="" target="_blank" className="block my-3">
								Terms and Condiitons
							</Link>
							<Link href="" target="_blank" className="block my-3">
								Promotional Offers
							</Link>
						</div>
					</div>
					<div className="my-4">
						<h1 className="text-xl font-bold">Customer Care</h1>

						<div className="my-4">
							<Link href="" className="block my-3">
								Login
							</Link>
							<Link href="" target="_blank" className="block my-3">
								My Account
							</Link>
							<Link href="" target="_blank" className="block my-3">
								Wish List
							</Link>
							<Link href="" target="_blank" className="block my-3">
								Order Tracking
							</Link>
							<Link href="" target="_blank" className="block my-3">
								Contact Us
							</Link>
						</div>
					</div>

					<div className="my-4 w-[15rem]">
						<h1 className="text-xl font-bold">NewsLetter</h1>

						<p>
							Subscribe to our weekly Newsletter and receive update via email
						</p>
						<div className="my-4">
							<div className="flex">
								<Inputs
									inputType="email"
									placeholder="Email"
									Name="Email"
									className="text-holmes-primary-blue "
								/>
								<Image
									alt="send-email"
									src={sendEmail}
									className="cursor-pointer"
								/>
							</div>
						</div>

						<h1 className="text-xl font-bold">We accept</h1>
						<div className="my-3">
							<Image alt="payment-gateway" src={PaymentGateways} />
						</div>
					</div>
				</main>
				<div className="bg-[#959596] flex justify-center  py-4">
					All righs reserved @ holmes 2024
				</div>
			</footer>
		);
	};

	const tabletmobileView = () => {
		return (
			<footer className="relative text-white mt-36 text-sm  DesktopScreen:hidden">
				<div className="absolute -top-16 left-1/2 transform -translate-x-1/2  z-20 bg-holmes-primary-dark-brown py-2 px-10 w-[90%] flex flex-col justify-center TabletScreen:items-center TabletScreen:py-5">
					<div>
						<h1 className="text-xl font-bold ">Looking For a Dream Home?</h1>
						<p className="text-sm ">
							We can help realise your dream of a new home
						</p>
					</div>

					<motion.button
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						className={`px-2 py-3 my-2 rounded-md text-holmes-primary-blue bg-white text-start w-[70%]`}
						onClick={(event) => {
							event.preventDefault();
							router.push("/sign-up");
						}}
					>
						Explore Properties
					</motion.button>
				</div>
				<main className="bg-holmes-primary-blue relative z-10 pt-[10rem] flex flex-col justify-center px-5">
					<div className="">
						<div>
							<Image alt="logo" src={''} />
						</div>
						<p className="my-2">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
							alias rerum accusantium porro eius quisquam laudantium enim error
							minima! Rerum exercitationem odio pariatur molestias commodi
							repellendus corrupti, magni iure cupiditate?
						</p>
						<div className=" my-4">
							<div className=" my-2 flex items-center cursor-pointer">
								<div
									className="mr-2"
									onClick={() => {
										("");
									}}
								>
									<Image alt="location" src={locationIcon} />
								</div>
								Akinpeju Street, Lagos, Nigeria
							</div>
							<div className=" my-2 flex items-center cursor-pointer">
								<div
									className="mr-2"
									onClick={() => {
										("");
									}}
								>
									<Image alt="phone" src={phoneIcon} />
								</div>
								+234-804-8983-903
							</div>
							<div className=" my-2 flex items-center cursor-pointer">
								<div
									className="mr-2"
									onClick={() => {
										("");
									}}
								>
									<Image alt="email" src={emailIcon} />
								</div>
								mail@example.com
							</div>
							<div className="flex justify-between w-[30%] my-4">
								<Link href="" target="_blank">
									<Image
										alt="facebook"
										src={facebookIcon}
										className="cursor-pointer "
									/>
								</Link>
								<Link href="" target="_blank">
									<Image
										alt="youtube"
										src={youtubeIcon}
										className="cursor-pointer"
									/>
								</Link>
								<Link href="" target="_blank">
									<Image
										alt="twitter"
										src={twitterIcon}
										className="cursor-pointer"
									/>
								</Link>
							</div>
						</div>
					</div>
					<div className="my-4">
						<h1 className="text-xl font-bold">Company</h1>

						<div className="my-4">
							<Link href="" target="_blank" className="block my-3">
								About
							</Link>
							<Link href="" target="_blank" className="block my-3">
								Blog
							</Link>
							<Link href="" target="_blank" className="block my-3">
								FAQ
							</Link>
							<Link href="" target="_blank" className="block my-3">
								Terms and Condiitons
							</Link>
							<Link href="" target="_blank" className="block my-3">
								Promotional Offers
							</Link>
						</div>
					</div>
					<div className="my-4">
						<h1 className="text-xl font-bold">Customer Care</h1>

						<div className="my-4">
							<Link href="" className="block my-3">
								Login
							</Link>
							<Link href="" target="_blank" className="block my-3">
								My Account
							</Link>
							<Link href="" target="_blank" className="block my-3">
								Wish List
							</Link>
							<Link href="" target="_blank" className="block my-3">
								Order Tracking
							</Link>
							<Link href="" target="_blank" className="block my-3">
								Contact Us
							</Link>
						</div>
					</div>

					<div className="my-4 w-[15rem]">
						<h1 className="text-xl font-bold">NewsLetter</h1>

						<p>
							Subscribe to our weekly Newsletter and receive update via email
						</p>
						<div className="my-4">
							<div className="flex">
								<Inputs
									inputType="email"
									placeholder="Email"
									Name="Email"
									className="text-holmes-primary-blue "
								/>
								<Image
									alt="send-email"
									src={sendEmail}
									className="cursor-pointer"
								/>
							</div>
						</div>

						<h1 className="text-xl font-bold">We accept</h1>
						<div className="my-3">
							<Image alt="payment-gateway" src={PaymentGateways} />
						</div>
					</div>
				</main>
				<div className="bg-[#959596] flex justify-center  py-4">
					All righs reserved @ holmes 2024
				</div>
			</footer>
		);
	};

	return (
		<>
			{desktopView()}
			{tabletmobileView()}
		</>
	);
};

export default Footer;

