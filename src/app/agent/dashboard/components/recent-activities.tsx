import { demoActivityItemsList } from "../../agent.dto";
import greenPdfIcon from "@/assets/images/general/green-pdf-icon.svg";
import redImgIcon from "@/assets/images/general/red-img-icon.svg";
import Image from "next/image";
import downloadIcon from '@/assets/images/general/grey-download-icon.svg'

const RecentActivities = () => {
	return (
		<section className="bg-white rounded-md py-3 h-full px-10  DesktopScreen:w-[48%] w-full shadow-xl my-2 box-border ">
			<div className="flex justify-between items-center border-b pb-5">
				<p className="text-xl"> Recent Activities</p>
				<div className="text-holmes-primary-dark-brown cursor-pointer text-sm">
					View All
				</div>
			</div>
			<div className="flex flex-col justify-between h-[24rem] overflow-y-scroll">
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
											<div className="DesktopScreen:w-[45%] min-w-[12rem] p-2 flex justify-between items-center bg-white border rounded-md mx-2" key={index}>
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
													<p className="mt-1 text-holmes-font-grey">{document.size}</p>
												</div>
												</div>


												<div>
													<Image alt="download" src={downloadIcon} onClick={() => {

													}}/>
												</div>
										
											</div>
										);
									})}
								</div>
							</div>
						)
				})}
			</div>
		</section>
	);
};

export default RecentActivities;

