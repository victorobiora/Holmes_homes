import { motion } from "framer-motion";
import { useState } from "react";

const ToggleButton = ({ isToggled, onToggle })  => {
    return (
      <div
        className={`flex items-center w-12 h-8 rounded-full cursor-pointer  duration-500 ${
          isToggled ? "bg-green-500" : "bg-gray-300"
        }`}
        onClick={onToggle}
      >
        <motion.div
          className="w-6 h-6 bg-white rounded-full shadow-md"
          style={{ x: isToggled ? 22 : 0 }} 
        />
      </div>
    );
  }

export default ToggleButton