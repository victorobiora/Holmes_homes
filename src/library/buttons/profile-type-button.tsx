
import React, { useState } from "react";

const ProfileToggleComponent:React.FC<{
    name: string;
    selectedType: string;
    setChecked: (check) => void
}> = ({name, selectedType, setChecked}) => {

  return (
    <div
      className={` w-[9rem] flex items-center gap-2 px-2 py-4 rounded-lg border-2 cursor-pointer ${
        selectedType === name
          ? "border-green-400 shadow-md"
          : "border-gray-400 bg-white"
      }`}
      onClick={() => setChecked(name)}
    >
      <input
        type="checkbox"
        checked={selectedType === name}
        onChange={() => setChecked(name)}
        className="hidden"
      />
      <div
        className={`w-5 h-5 flex items-center justify-center rounded-full border ${
            selectedType === name ? "bg-green-400 border-green-400" : "border-gray-400"
        }`}
      >
        {selectedType === name && (
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
            selectedType === name? "text-green-600" : "text-gray-800"
        }`}
      >
  As {name === 'user' ? 'a' : 'an'} {name}
      </span>
    </div>
  );
};

export default ProfileToggleComponent;
