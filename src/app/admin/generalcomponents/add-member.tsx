import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import downIcon from "@/assets/images/general/down-icon-black.svg";
import blueCircleAvatar from "@/assets/images/general/blue-circle-avatar.svg";
import SearchIcon from "@/assets/images/general/search-icon.svg";
import SuccessfulModal from "@/library/modals/successful";
import Inputs from "@/library/inputs/inputs";
import UpdateEmailOTP from "@/library/modals/update-email-otp";
import { OTPSixDigitDataType } from "@/app/types";
import { OTPSixDigitDataList } from "@/app/home.dto";
import InvitationSuccessfulModal from "./invitation-successful";

const AddMemberCard: React.FC<{
	removeModal: () => void;
}> = ({ removeModal }) => {
	const [FormData, setFormData] = useState<{
		email: string;
		role: string;
	}>({
		email: "",
		role: "",
	});

	const [OTPFormData, setOTPFormData] =
		useState<OTPSixDigitDataType>(OTPSixDigitDataList);

	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [isOTPSent, setIsOTPSent] = useState(false);
	const [addMemberRequestSuccessful, setAddMemberRequestSuccessful] = useState<
		null | boolean
	>(null);

	const [roleType, setroleType] = useState<string | null>("User");
	const [viewRoleTypeFields, setviewRoleTypeFields] = useState(false);
	const roleTypeRef = useRef<HTMLDivElement | null>(null);

	// Handle clicks outside roleType fields
	useEffect(() => {
		if (typeof window !== "undefined") {
		const handleClickOutsideroleType = (event: MouseEvent) => {
			if (
				viewRoleTypeFields &&
				roleTypeRef.current &&
				!roleTypeRef.current.contains(event.target as Node)
			) {
				setviewRoleTypeFields(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutsideroleType);

		return () => {
			document.removeEventListener("mousedown", handleClickOutsideroleType);
		};	
		}
	
	}, [viewRoleTypeFields]);


    const addAnotherMemeberHandler = () => {
        setIsOTPSent(false)
        setAddMemberRequestSuccessful(null)
    }

	return (
		<>
		huy
		</>
	);
};

export default AddMemberCard;

