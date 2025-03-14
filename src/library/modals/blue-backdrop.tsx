import React from "react";
import { motion } from "framer-motion";

export const BlueBackdrop = ({
	children,
	onClick,
}: {
	children?: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}) => {
	return (
		<motion.div
			className="blue_backdrop"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={onClick}
		>
			{children && children}
		</motion.div>
	);
};
