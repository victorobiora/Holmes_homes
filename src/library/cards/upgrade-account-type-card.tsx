import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { OTPSixDigitDataType } from "@/app/types";
import { OTPSixDigitDataList } from "@/app/home.dto";
import UpdateEmailOTP from "../modals/update-email-otp";
import SuccessfulModal from "../modals/successful";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import downIcon from "@/assets/images/general/down-icon-black.svg";

const UpgradeAccountTypeCard: React.FC<{
  removeModal: () => void;
}> = ({ removeModal }) => {
  const [OTPFormData, setOTPFormData] =
    useState<OTPSixDigitDataType>(OTPSixDigitDataList);
  const [isOTPSent, setIsOTPSent] = useState(false);

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [updateProfileRequestSuccessful, setUpdateProfileSuccessful] = useState<
    null | boolean
  >(null);

  const [accountType, setAccountType] = useState<string | null>("User");
  const [viewAccountTypeFields, setViewAccountTypeFields] = useState(false);
  const accountTypeRef = useRef<HTMLDivElement | null>(null);

  // Handle clicks outside AccountType fields
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleClickOutsideAccountType = (event: MouseEvent) => {
        if (
          viewAccountTypeFields &&
          accountTypeRef.current &&
          !accountTypeRef.current.contains(event.target as Node)
        ) {
          setViewAccountTypeFields(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutsideAccountType);

      return () => {
        document.removeEventListener(
          "mousedown",
          handleClickOutsideAccountType
        );
      };
    }
  }, [viewAccountTypeFields]);

  return (
    <>
      {!isOTPSent && updateProfileRequestSuccessful === null ? (
        <section
          className="flex flex-col bg-white h-auto min-w-[30%] MobileScreen:w-[95%] rounded-md  p-6"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="py-4 px-6">
            <h2 className="text-xl font-semibold">Change Account Type</h2>
            <div className="text-holmes-font-grey">
              Change your holmes Account type.
            </div>
          </div>

          <div className="w-full ">
            <div className="my-2">Label</div>
            <div className=" DesktopScreen:my-3 relative" ref={accountTypeRef}>
              <div>
                <div
                  className={`DesktopScreen:pl-3 DesktopScreen:pr-10 whitescape-nowrap DesktopScreen:py-3 py-2 px-3 cursor-pointer bg-[#F4F6F9] border border-gray-200 rounded-md w-full flex items-center`}
                  onClick={() => {
                    setViewAccountTypeFields((prevState) => !prevState);
                  }}
                >
                  <div className="flex items-end mx-3">
                    <Image src={downIcon} alt="down-icon" />
                  </div>
                  {accountType}
                </div>
              </div>
              <AnimatePresence>
                {viewAccountTypeFields && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="bg-holmes-background-light-grey w-full  absolute top-[120%] flex flex-col text-md z-[2500]"
                  >
                    {["User", "Admin", `Affliate`].map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`py-2 px-3 text-center  hover:bg-white hover:border-black hover:border-[0.2px] hover:rounded-sm cursor-pointer whitespace-nowrap ${accountType === item ? "bg-white border-black border rounded-sm" : ""}`}
                          onClick={() => {
                            setAccountType(item);
                            setViewAccountTypeFields(false);
                          }}
                        >
                          {item}
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* submit or cancel */}
          <div className="flex text-sm justify-end gap-4 my-4">
            <motion.button
              className="border border-black p-2 rounded-md"
              onClick={removeModal}
            >
              Cancel
            </motion.button>
            <motion.button
              className="bg-holmes-primary-dark-brown text-white p-2 rounded-md"
              onClick={() => [setIsOTPSent(true)]}
            >
              Verify
            </motion.button>
          </div>
        </section>
      ) : isOTPSent && updateProfileRequestSuccessful ? (
        <SuccessfulModal
          mainText="Changes saved successfully"
          subtext="your changes have been made "
          removeModal={removeModal}
        />
      ) : (
        <UpdateEmailOTP
          updateSuccessfulModal={setUpdateProfileSuccessful}
          removeModal={removeModal}
          setOTPFormData={setOTPFormData}
          OTPFormData={OTPFormData}
        />
      )}
    </>
  );
};

export default UpgradeAccountTypeCard;
