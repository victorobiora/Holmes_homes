import { demoActivityItemsList } from "../admin.dto";
import greenPdfIcon from "@/assets/images/general/green-pdf-icon.svg";
import redImgIcon from "@/assets/images/general/red-img-icon.svg";
import Image from "next/image";
import downloadIcon from "@/assets/images/general/grey-download-icon.svg";

const ViewNotificationsModal: React.FC<{
	removeNotifications: () => void;
}> = ({ removeNotifications }) => {
	return (
		<section
			className="fixed left-0 top-0 w-full h-screen z-[10000] bg-[#43576980] flex items-center DesktopScreen:justify-end justify-center"
			onClick={(event) => {
				event.stopPropagation();
				removeNotifications();
			}}
		>
			<main
				className="bg-white rounded-md py-3 DesktopScreen:h-[90%] h-[60%]  px-10  DesktopScreen:w-[40%] w-[90%] shadow-xl my-2 box-border relative DesktopScreen:right-20"
				onClick={(event) => {
					event.stopPropagation();
				}}
			>
				<div className="flex justify-between items-center border-b pb-5">
					<p className="text-xl"> Notifications</p>
				</div>
				<div className="flex flex-col justify-between h-[90%] overflow-y-scroll">
					{demoActivityItemsList.map((item, index) => {
						return (
							<div className="my-4 border-b py-3" key={index}>
								<div className="flex justify-between ">
									<div className="flex items-center">
										<div
											className={`w-2 h-2 rounded-full mx-1 ${item.online ? "bg-green-400" : "bg-red-400"}`}
										>
											{" "}
										</div>
										<div className="w-7 h-7 mx-1">
											<Image
												src={item.profilePictureOfActivityCreator}
												alt="propic"
												className="w-full h-full"
											/>
										</div>

										<div className="mx-1 text-holmes-font-grey">
											{item.nameOfActivityCreator}
										</div>
									</div>

									<div className="text-holmes-font-grey">{item.date}</div>
								</div>

								<div className="font-bold my-2">{item.activitySubHeading}</div>

								<div className="text-holmes-font-black">{item.activityText}</div>

								<div className="flex justify-between overflow-x-scroll my-2">
									{item.documents?.map((document, index) => {
										return (
											<div className="DesktopScreen:w-[45%] min-w-[12rem] p-2 flex justify-between items-center bg-white border rounded-md mx-2">
												<div className="flex">
													<Image
														alt="docType"
														src={
															document.docType === "pdf"
																? greenPdfIcon
																: redImgIcon
														}
													/>
													<div className="mx-2">
														<p>{document.name}</p>
														<p className="mt-1 text-holmes-font-grey">
															{document.size}
														</p>
													</div>
												</div>

												<div>
													<Image
														alt="download"
														src={downloadIcon}
														onClick={() => {}}
													/>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</main>
		</section>
	);
};

export default ViewNotificationsModal;
