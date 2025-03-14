import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ProfilePic from "@/assets/images/general/generic-avatar.svg";

import ArrowLeft from "@/assets/images/general/black-edit-icon.svg";
import DotsIcon from "@/assets/images/general/black-edit-icon.svg";
import microphoneIcon from "@/assets/images/general/black-edit-icon.svg";
import AddCircle from "@/assets/images/general/black-edit-icon.svg";
import { formatDate } from "./helper";
import { messagesBody } from "./messages.dto";

export function Chatbackground() {
	const [messages, setMessages] = useState(messagesBody);
	const [newMessage, setNewMessage] = useState("");
	const dateNow = new Date();
	const [currentTimestamp, setCurrentTimestamp] = useState("");
	const chatBodyRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if ("Notification" in window) {
			window.Notification.requestPermission().then((permission) => {
				if (permission === "granted") {
					console.log("Notification permission granted.");
				} else {
					console.log("Notification permission denied.");
				}
			});
		}
	}, []);

	const handleSendMessage = () => {
		if (newMessage.trim() !== "") {
			const senderName = "Nnajiofor Uchenna";
			const newMsg = {
				id: messages.length + 1,
				sender: senderName,
				message: newMessage,
				time: dateNow.toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				}),
				date: dateNow.toISOString(),
				type: "sent",
			};
			setMessages([...messages, newMsg]);
			setNewMessage("");

			// Trigger's notification if permission is granted
			if (Notification.permission === "granted") {
				new Notification(`${senderName} sent a message`, {
					body: newMessage,
					icon: ProfilePic.src,
				});
			}
		}
	};

	const scrollToBottom = () => {
		if (chatBodyRef.current) {
			chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			handleSendMessage();
		}
	};

	const handleScroll = () => {
		if (chatBodyRef.current) {
			const messagesElements = chatBodyRef.current.children;
			for (let i = 0; i < messagesElements.length; i++) {
				const message = messagesElements[i];
				const rect = message.getBoundingClientRect();
				if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
					const messageData = messages[i];
					setCurrentTimestamp(formatDate(messageData.date));
					break;
				}
			}
		}
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	return (
		<div className="DesktopScreen:w-[687px] h-screen flex flex-col ">
			{/* Header */}
			<div className="py-[8px] px-[16px] bg-white shadow-md sticky top-0 rounded-t-lg flex flex-row justify-between">
				<div className="flex items-center">
					<Image
						src={ArrowLeft}
						alt="Arrow Left"
						className="cursor-pointer mr-[13px]"
					/>
					<Image
						src={ProfilePic}
						alt="Adeolu Olaitan"
						className="w-[50px] h-[50px] rounded-full object-cover"
					/>
					<div className="ml-3">
						<p className="font-sefarvestSFProDisplay font-[500] text-[16px] text-[#1D1D1D] leading-[19.09px]">
							Adeolu Olaitan
						</p>
						<p className="font-sefarvestSFProDisplay font-[400] text-[14px] text-[#888888] leading-[16.71px]">
							Online
						</p>
					</div>
					
				</div>
				<Image className="cursor-pointer" src={DotsIcon} alt="Dots Icon" />
			</div>

			{/* Timestamp */}
			<div className="mx-auto my-2">
				<div className="w-auto h-[22px] py-[4px] px-[12px] rounded-[100px] font-sefarvestSFProDisplay font-[600] text-[12px] text-[#888888] leading-[14.32px] border-[0.5px] border-[#076834] mx-auto">
					{currentTimestamp || "Send a message"}
				</div>
			</div>

			{/* Chat Body */}
			<div
				ref={chatBodyRef}
				onScroll={handleScroll}
				className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar"
			>
				{messages.map((msg) => (
					<div key={msg.id}>
						{/* Message body */}
						<div
							className={`flex ${msg.type === "sent" ? "justify-end" : "justify-start"}`}
						>
							<div
								className={`inline-block p-[12px] rounded-lg shadow-sm lg:max-w-[338px] max-w-[300px] rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[8px] rounded-br-[0px] ${
									msg.type === "sent"
										? "bg-holmes-primary-blue text-white"
										: "bg-[#F3F3F3] text-[#181211]"
								}`}
							>
								<p className="font-sefarvestSFProDisplay font-[400] text-[14px] leading-[19.6px]">
									{msg.message}
								</p>
								<span className="block text-[11px] text-gray-400 mt-2">
									{msg.time}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Message Input */}
			<div className="p-4 bg-white border-t border-gray-200 flex items-center">
				<div className="flex flex-row justify-between w-full py-1 px-2 bg-[#F9F9F9] border-[0.5px] border-[#888888] rounded-[100px]">
					<input
						type="text"
						className="w-full flex-1 p-2 rounded-md border-none focus:outline-none focus:ring-0 overflow-y-auto"
						value={newMessage}
						onChange={(e) => setNewMessage(e.target.value)}
						onKeyDown={handleKeyPress}
						placeholder="Type a message"
					/>
					<Image
						title="Record Voice Message"
						src={microphoneIcon}
						alt="Microphone Icon"
						className="cursor-pointer hover:scale-110 transition-all"
					/>
				</div>
				<Image
					title="Attach"
					src={AddCircle}
					alt="Add Circle Icon"
					className="ml-2 cursor-pointer hover:scale-110 transition-all"
				/>
			</div>
		</div>
	);
}
