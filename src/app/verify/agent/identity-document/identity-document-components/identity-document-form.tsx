"use client";

import Image from "next/image";
import proPic from "@/assets/images/general/user-profile-icon.svg";
import { DateRangePicker } from "@tremor/react";
import downIcon from "@/assets/images/general/down-icon-black.svg";
import Inputs from "@/library/inputs/inputs";
import { useState, useRef, useEffect } from "react";
import cloudIcon from "@/assets/images/general/cloud-icon.svg";
import { AnimatePresence, motion } from "framer-motion";
import { nonAuthRoutes } from "@/utils/urls";
import { useRouter } from "next/navigation";

const IdentityDocumentForm = () => {
  const router = useRouter();
  const [documentType, setDocumentType] = useState<string | null>(
    "Document Type"
  );
  const [viewDocumentTypeFields, setViewDocumentTypeFields] = useState(false);
  const documentTypeRef = useRef<HTMLDivElement | null>(null);

  const [expiryDate, setExpiryDate] = useState<string | null>(
    "Set Expiry Date"
  );
  const [viewExpiryDateFields, setViewExpiryDateFields] = useState(false);
  const expiryDateRef = useRef<HTMLDivElement | null>(null);

  // Handle clicks outside gender fields
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleClickOutside = (event: MouseEvent) => {
        console.log(documentTypeRef.current?.contains(event.target as Node));
        if (
          viewDocumentTypeFields &&
          documentTypeRef.current &&
          !documentTypeRef.current.contains(event.target as Node)
        ) {
          setViewDocumentTypeFields(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [viewDocumentTypeFields]);

  // Handle clicks outside expiry Date fields
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleClickOutside = (event: MouseEvent) => {
        console.log(expiryDateRef.current?.contains(event.target as Node));
        if (
          viewExpiryDateFields &&
          expiryDateRef.current &&
          !expiryDateRef.current.contains(event.target as Node)
        ) {
          setViewExpiryDateFields(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [viewExpiryDateFields]);

  return (
    <main className="py-2 px-8 bg-white shadow-lg my-3 flex flex-col justify-center items-center rounded-lg w-[50%] overflow-y-scroll">
      <div className="rounded-full w-14 h-14 my-4">
        <Image alt="profile_pic" src={proPic} className="rounded-full" />
      </div>
      <div className="text-[#435769] mb-6">
        <h1 className="block text-center text-xl">Hey {"Williams"}!</h1>
        <p className="block text-center">Let’s setup your holmes profile</p>
      </div>

      <div className="flex flex-col items-start w-full mb-4">
        <h1 className="my-1 font-bold">Identity Document</h1>
        <p>Please upload a valid government issued ID</p>
      </div>

      <form className="w-full">
        {/* Document Type */}
        <div className=" my-3 relative" ref={documentTypeRef}>
          <div>
            <label htmlFor="firstName" className="block text-sm my-1">
              Document Type
            </label>
            <div
              className={`px-3 cursor-pointer bg-holmes-background-light-grey border-none w-full py-3 flex justify-between ${documentType === "Document Type" ? "text-[#959596] " : "text-black"}`}
              onClick={() => {
                setViewDocumentTypeFields((prevState) => !prevState);
              }}
            >
              {documentType}
              <div className="flex items-end">
                <Image src={downIcon} alt="down-icon" />
              </div>
            </div>
          </div>
          <AnimatePresence>
            {viewDocumentTypeFields && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="bg-holmes-background-light-grey w-full  absolute top-[120%] flex flex-col text-md z-[900]"
              >
                {["Passport", "Driver's License", `Others`].map(
                  (item, index) => {
                    return (
                      <div
                        key={index}
                        className={`py-2 px-3 text-center  hover:bg-white hover:border-black hover:border-[0.2px] hover:rounded-sm cursor-pointer whitespace-nowrap ${documentType === item ? "bg-white border-black border rounded-sm" : ""}`}
                        onClick={() => {
                          setDocumentType(item);
                          setViewDocumentTypeFields(false);
                        }}
                      >
                        {item}
                      </div>
                    );
                  }
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Rc Name */}
        <div className="my-3">
          <label htmlFor="idNumber" className="block text-sm my-1">
            ID Number
          </label>
          <Inputs
            inputType="text"
            placeholder="ID Number"
            Name="idNumber"
            className="bg-holmes-background-light-grey border-none w-full py-3"
          />
        </div>

        {/* Expiry Date Type */}
        <div className=" my-3 relative" ref={expiryDateRef}>
          <div>
            <label htmlFor="firstName" className="block text-sm my-1">
              Expiry Date
            </label>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-holmes-background-light-grey w-full flex flex-col text-md"
          >
            <DateRangePicker
              className="custom-daterange-picker shadow-md"
              enableSelect={false}
              placeholder="Set Expiry Date"
            />
          </motion.div>
        </div>

        {/* Upload File Input */}
        <div className="relative h-[13rem]">
          <Inputs
            className={`border-[1px] w-full h-full relative z-20 px-4 opacity-0 cursor-pointer  py-2  my-2 rounded-md `}
            inputType="file"
            Name="identityDocument"
            onChange={(event) => {
              ("");
            }}
          />
          <div className=" absolute w-full top-0 left-0  z-10 flex flex-col justify-center items-center p-6 py-8 border border-[#435769] rounded-lg border-dashed my-10 text-[#435769]">
            <Image src={cloudIcon} alt="cloud-icon" />
            <p>Click here to upload file or drag and drop file</p>
            <p>File type: .pdf, .png, .jpeg | Max size: 1mb</p>
          </div>
        </div>

        {/* Cancel/continue */}
        <div className="flex justify-center my-10">
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            className={`px-4 py-2 mx-4 ml-4 rounded-md text-[#435769] bg-holmes-background-light-grey shadow-md`}
            onClick={(event) => {
              event.preventDefault();
              router.push(nonAuthRoutes.verifyAgent);
            }}
          >
            Cancel
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            className={`px-4 py-2 rounded-md text-white bg-holmes-primary-dark-brown `}
            onClick={(event) => {
              event.preventDefault();
              router.push(nonAuthRoutes.verifyAgent);
            }}
          >
            Continue
          </motion.button>
        </div>
      </form>
    </main>
  );
};

export default IdentityDocumentForm;
