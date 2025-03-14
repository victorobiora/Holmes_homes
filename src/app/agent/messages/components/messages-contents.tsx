import React from "react";
import NavBar from "@/app/user/navbar";
import { MessagesSection } from "./messages-section";

/** Messages Contents */
function MessagesContents({ toggleSidebar }: { toggleSidebar: () => void }) {
	return (
		<section>
			<div className="sticky top-0 z-[1000]">
			<NavBar toggleSidebar={toggleSidebar} />
			</div>
			<div>
				<MessagesSection />
			</div>
		</section>
	);
}

export default MessagesContents;
