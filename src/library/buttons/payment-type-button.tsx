
import React, { useState } from "react";

const PaymentTypeToggleComponent:React.FC<{
    item: {
        name: string,
        type: string
    };
    selectedType: string;
    setChecked: (check) => void
}> = ({item, selectedType, setChecked}) => {

  return (
    <div
      className={` flex items-center gap-2 p-3 rounded-lg border-2 cursor-pointer ${
        selectedType === item.type
          ? "border-green-400 shadow-md"
          : "border-gray-400 bg-white"
      }`}
      onClick={() => setChecked(item.type)}
    >
      <input
        type="checkbox"
        checked={selectedType === item.type}
        onChange={() => setChecked(item.type)}
        className="hidden"
      />
      <div
        className={`w-5 h-5 flex items-center justify-center rounded-full border ${
            selectedType === item.type ? "bg-green-400 border-green-400" : "border-gray-400"
        }`}
      >
        {selectedType === item.type && (
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
          </svg>
        )}
      </div>
      <span
        className={`text-sm text-center  font-medium ${
            selectedType === item.type? "text-green-600" : "text-gray-800"
        }`}
      >
 {item.name}
      </span>
    </div>
  );
};

export default PaymentTypeToggleComponent;
