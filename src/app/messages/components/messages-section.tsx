import React, { useState } from "react";
import { ChatSection } from "./chat-section";
import { Chatbackground } from "./chat-background";
import { messagesBody } from "./messages.dto";

export function MessagesSection() {
	const [chatToBeDisplayed, setChatToBeDisplayed] = useState(messagesBody)
	/** DeskTop View */
	const desktopView = () => {
		return (
			<div className="TabletScreen:hidden MobileScreen:hidden bg-white flex flex-col my-[44px] lg:ml-[4.81%]">
				<h1 className="font-sefarvestCabinetGrotesk font-[700] text-[#1D1D1D] lg:text-[28px] text-[18px] leading-[34.72px] mb-[32px]">
					Messages
				</h1>
				<div className="flex flex-row gap-[12px]">
					<ChatSection />
					<Chatbackground />
				</div>
			</div>
		);
	};

	/** DeskTop View */
	const tabletMobileView = () => {

		return (
			<div className="DesktopScreen:hidden bg-white flex flex-col my-[44px]">
				<h1 className="font-sefarvestCabinetGrotesk font-[700] text-[#1D1D1D] text-[28px] leading-[34.72px] ml-[24px] mb-[32px]">
					Messages
				</h1>
				<div className="flex flex-col gap-[0px]">
					<ChatSection />
					<Chatbackground />
				</div>
			</div>
		);
	};
	return (
		<section>
			{desktopView()}
			{tabletMobileView()}
		</section>
	);
}
