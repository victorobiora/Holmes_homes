import React from "react";
import Image from "next/image";
import Inputs from "@/library/inputs/inputs";
import SortIcon from "@/assets/images/general/search-icon.svg";
import SearchIcon from "@/assets/images/general/search-icon.svg";
import { MessagesData } from "./messages.dto";

export function ChatSection() {
	return (
		<div
			style={{ scrollbarColor: "green", scrollbarWidth: "thin" }}
			className="bg-white lg:w-[361px] w-full h-screen flex flex-col gap-[12px] border-[1px]
		    border-[#E4E7EC] rounded-[8px] py-[24px] overflow-x-hidden overflow-y-auto"
		>
			<div className="flex flex-row gap-[12px] items-center justify-center px-[16px]">
				<div className="w-full rounded-[8px] py-[8px] px-[24px] flex flex-row gap-[8px] border-[1px] border-[#E4E7EC]">
					<Image
						className="cursor-pointer"
						src={SearchIcon}
						alt={"Search Icon"}
					/>
					<Inputs
						Name={""}
						inputType={"text"}
						className={"text-[#98A2B3] border-none outline-none focus:ring-0"}
						placeholder={"Search..."}
					/>
				</div>
				<Image className="cursor-pointer" src={SortIcon} alt={"Sort Icon"} />
			</div>

			<div>
				<div className="flex gap-2 px-[1rem]">
					<p className="text-lg font-bold">Messages</p>
					<div
						className="w-[32px] h-[32px] bg-holmes-primary-dark-brown rounded-[100px]  text-white font-sefarvestSFProDisplay
						    font-[600] text-[12px] leading-[16.8px] flex flex-col items-center justify-center"
					>
						12
					</div>
				</div>
				{MessagesData.map((item, index) => (
					<div
						key={index}
						className={`w-full flex flex-row justify-between py-[19px] px-[16px] border-b-[#CCCCCC] border-b-[1px] cursor-pointer ${item.active}`}
					>
						<div className="flex flex-row gap-[7px]">
							<Image
								className="w-[61px] h-[61px] object-cover"
								src={item.profilePic}
								alt={"Profile Pic"}
							/>
							<div className="flex flex-col gap-[4px] ml-2 mr-[32px]">
								<h3 className="font-sefarvestSFProDisplay font-[500] text-[#1D1D1D] text-[16px] leading-[19.09px]">
									{item.name}
								</h3>
								<small className="font-sefarvestSFProDisplay font-[400] text-[#52525B] text-[14px] leading-[19.6px]">
									{item.message}
								</small>
							</div>
						</div>
						<div>
							<small className="font-sefarvestSFProDisplay font-[400] text-[#52525B] text-[12px] leading-[16.8px]">
								{item.time}
							</small>
							{item.count ? (
								<div
									className="w-[24px] h-[24px] bg-holmes-primary-blue rounded-[100px]  text-white font-sefarvestSFProDisplay
						    font-[600] text-[12px] leading-[16.8px] flex flex-col items-center justify-center"
								>
									{item.count}
								</div>
							) : (
								""
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

