import { useRef, useState, useEffect } from "react";
import { StaticImageData } from "next/image";
import { AnimatePresence } from "framer-motion";
import downIcon from "@/assets/images/general/down-icon-black.svg";
import Image from "next/image";
import SearchIcon from "@/assets/images/general/search-icon.svg";
import Inputs from "@/library/inputs/inputs";
import { motion } from "framer-motion";
import whiteDownloadIcon from "@/assets/images/general/white-download-icon.svg";
import filterIcon from "@/assets/images/general/black-filter-icon.svg";
import { useRouter } from "next/navigation";
import { BlueBackdrop } from "@/library/modals/blue-backdrop";
import AllNotificationsTable from "../cards-and-tables/push-notications/all-notifications";
import AddNotificationCard from "../cards-and-tables/push-notications/add-notification";
import ScheduledNotificationsTable from "../cards-and-tables/push-notications/scheduled-notifications";
import DraftNotificationsTable from "../cards-and-tables/push-notications/draft-notifications";
import AddFilterCard from "../cards-and-tables/push-notications/add-filter-card";

const PushNotificationsSettings = () => {
  const [showAddNotificationModal, setshowAddNotificationModal] =
    useState(false);
  const [showAddFiltersModal, setshowAddFiltersModal] = useState(false);

  const removeModal = () => {
    setshowAddNotificationModal(false);
    setshowAddFiltersModal(false);
  };

  const router = useRouter();

  const [periodChosen, setPeriodChosen] = useState<string | null>("This Month");
  const [viewPeriodChosenFields, setViewPeriodChosenFields] = useState(false);
  const periodChosenRef = useRef<HTMLDivElement | null>(null);

  // Handle clicks outside periodChosen fields
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleClickOutsidePeriodChosen = (event: MouseEvent) => {
        console.log(periodChosenRef.current?.contains(event.target as Node));
        if (
          viewPeriodChosenFields &&
          periodChosenRef.current &&
          !periodChosenRef.current.contains(event.target as Node)
        ) {
          setViewPeriodChosenFields(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutsidePeriodChosen);

      return () => {
        document.removeEventListener(
          "mousedown",
          handleClickOutsidePeriodChosen
        );
      };
    }
  }, [viewPeriodChosenFields]);
  const [selectedTable, setSelectedTable] = useState("all notifiations");

  return (
    <section>
      {showAddFiltersModal && (
        <BlueBackdrop onClick={removeModal}></BlueBackdrop>
      )}
      {showAddNotificationModal && (
        <BlueBackdrop onClick={removeModal}>
          <AddNotificationCard removeModal={removeModal} />
        </BlueBackdrop>
      )}
      <div className="p-4  rounded-md  MobileScreen:mt-4 MobileScreen:relative">
        <header className="py-2 bg-white">
          <div className="my-2 flex DesktopScreen:flex-row flex-col justify-between">
            <div className="py-2">
              <h2 className="text-xl font-semibold">
                Push Notifications & Announcements
              </h2>
              <div className="text-holmes-font-grey">
                Send alerts or announcements to all users or specific user
                groups.
              </div>
            </div>
            <div className="py-5 ">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9 }}
                className={
                  "p-2 rounded-md text-white text-sm bg-holmes-primary-dark-brown "
                }
                onClick={(event) => {
                  event.preventDefault();
                  setshowAddNotificationModal(true);
                }}
              >
                <span className="mx-1"> + </span> Create New Notifications
              </motion.button>
            </div>
          </div>
        </header>
        <div className="DesktopScreen:px-2 mb-2  bg-white flex justify-between items-center MobileScreen:items-start MobileScreen:flex-col">
          <h2 className="text-lg font-semibold ">Notifications</h2>
          <div className="flex gap-[2rem] MobileScreen:gap-2  items-center">
            {/* choose Period */}
            <div
              className=" my-3 relative DesktopScreen:block hidden"
              ref={periodChosenRef}
            >
              <div>
                <div
                  className={`px-2 cursor-pointer bg-white border border-black rounded-md w-full py-2 flex justify-between items-center`}
                  onClick={() => {
                    setViewPeriodChosenFields((prevState) => !prevState);
                  }}
                >
                  <div className="flex items-end mx-1">
                    <Image src={downIcon} alt="down-icon" />
                  </div>
                  {periodChosen}
                </div>
              </div>
              <AnimatePresence>
                {viewPeriodChosenFields && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="bg-holmes-background-light-grey w-full  absolute top-[120%] flex flex-col text-md z-[900]"
                  >
                    {["This week", "This month", `This Year`].map(
                      (item, index) => {
                        return (
                          <div
                            key={index}
                            className={`py-2 px-3 text-center  hover:bg-white hover:border-black hover:border-[0.2px] hover:rounded-sm cursor-pointer whitespace-nowrap ${periodChosen === item ? "bg-white border-black border rounded-sm" : ""}`}
                            onClick={() => {
                              setPeriodChosen(item);
                              setViewPeriodChosenFields(false);
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

            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              className={
                "p-2 h-auto rounded-md text-white bg-holmes-primary-dark-brown flex gap-[0.3rem] items-center MobileScreen:text-sm"
              }
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              <span className="mx-1">
                {" "}
                <Image alt="export" src={whiteDownloadIcon} />{" "}
              </span>{" "}
              Export
            </motion.button>

            <div className="w-[20rem] h-[44px]  flex-row rounded-[10px] border-[1px] hidden DesktopScreen:flex">
              <Inputs
                className="w-full p-2 text-sm border-none rounded-[100px] focus:outline-none focus:ring-0"
                Name={"search"}
                inputType={"text"}
                placeholder="Search Properties"
              ></Inputs>
              <Image
                className="my-[13px] mx-[24px] cursor-pointer"
                src={SearchIcon}
                alt={"Search Icon"}
              ></Image>
            </div>
            <div className="relative">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9 }}
                className={
                  "py-2 px-3 h-auto rounded-md border-black border flex gap-[0.3rem] items-center"
                }
                onClick={(event) => {
                  event.preventDefault();
                  setshowAddFiltersModal(true);
                }}
              >
                <span className="mx-1">
                  {" "}
                  <Image alt="filter" src={filterIcon} />{" "}
                </span>{" "}
                Filters
              </motion.button>
              {showAddFiltersModal && (
                <AddFilterCard removeModal={removeModal} />
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-scroll mb-3">
          {/* all notifiations */}
          <div
            className="min-w-[10rem] flex flex-col items-center cursor-pointer"
            onClick={() => setSelectedTable("all notifiations")}
          >
            <p
              className={`mb-2 font-bold 	${
                selectedTable === "all notifiations"
                  ? " text-holmes-primary-blue"
                  : "text-holmes-border-grey"
              }`}
            >
              All Notifications
            </p>
            <div
              className={`w-full h-1 rounded-md ${selectedTable === "all notifiations" ? " bg-holmes-primary-blue" : "bg-holmes-border-grey"}`}
            ></div>
          </div>

          {/* scheduled */}
          <div
            className="min-w-[5rem] flex flex-col items-center cursor-pointer"
            onClick={() => setSelectedTable("scheduled")}
          >
            <p
              className={`mb-2 font-bold 	${
                selectedTable === "scheduled"
                  ? " text-holmes-primary-blue"
                  : "text-holmes-border-grey"
              }`}
            >
              Scheduled
            </p>
            <div
              className={`w-full h-1 rounded-md ${selectedTable === "scheduled" ? " bg-holmes-primary-blue" : "bg-holmes-border-grey"}`}
            ></div>
          </div>

          {/* drafts */}
          <div
            className="min-w-[5rem] flex flex-col items-center cursor-pointer"
            onClick={() => setSelectedTable("drafts")}
          >
            <p
              className={`mb-2 font-bold 	${
                selectedTable === "drafts"
                  ? " text-holmes-primary-blue"
                  : "text-holmes-border-grey"
              }`}
            >
              Drafts
            </p>
            <div
              className={`w-full h-1 rounded-md ${selectedTable === "drafts" ? " bg-holmes-primary-blue" : "bg-holmes-border-grey"}`}
            ></div>
          </div>
        </div>

        <>
          {selectedTable === "all notifiations" ? (
            <AllNotificationsTable />
          ) : selectedTable === "scheduled" ? (
            <ScheduledNotificationsTable />
          ) : selectedTable === "drafts" ? (
            <DraftNotificationsTable />
          ) : (
            ""
          )}
        </>
      </div>
    </section>
  );
};

export default PushNotificationsSettings;
