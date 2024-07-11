import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { FaArrowsDownToPeople, FaPeopleRoof } from "react-icons/fa6";

import Navbar from "../navbar/Navbar";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const [activeTab, setActiveTab] = useState(0);

  let buttons = [
    {
      icon: <FaArrowsDownToPeople className="mr-3" />,
      btnName: "Profile",
      link: "/userProfile",
    },
    {
      icon: <FaPeopleRoof className="mr-3" />,
      btnName: "Explore",
      link: "/exp",
    },
    {
      icon: <IoHomeOutline className="mr-3" />,
      btnName: "Chats",
      link: "/chats",
    },
    {
      icon: <IoSettingsOutline className="mr-3" />,
      btnName: "Setting",
      link: "/exp",
    },
  ];
  return (
    <>
      <div className="flex justify-between">
        <div
          className={`bg-white w-[25%] text-center h-dvh border-r-2 ${
            isOpen && `hidden`
          }`}
        >
          <div className="flex">
            <div>
              <div className="p-4 pt-10">
                <div className="pt-10 pl-12 w-[19rem]"></div>

                <ul className="mt-10 ml-6">
                  {buttons.map((btn, index) => (
                    <Link to={btn.link} className="">
                      <li
                        key={index}
                        className={`flex items-center text-left w-full px-4 py-4 rounded-lg ${
                          activeTab === index
                            ? "text-primary_text bg-[#F1F1F1] "
                            : "text-[#323232] border-transparent"
                        }`}
                        onClick={() => setActiveTab(index)}
                      >
                        {btn.icon}
                        {btn.btnName}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-dvh overflow-auto">
          <Navbar toggleSidebar={toggleSidebar} />
          {/* <div className="w-full mt-10"></div> */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
