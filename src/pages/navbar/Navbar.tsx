import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { RiLogoutCircleRLine } from "react-icons/ri";
import globalStore from "../../GlobalStore/GlobalStore";
import { Link } from "react-router-dom";
// import logo from "../../assets/img/Diverse.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import LogOutModal from "../../Components/Modal/LogOutModal";

const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const { userData } = globalStore();

  const [logModal, setLogModal] = useState(false);

  const logoutButton = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  if (logModal) {
    return (
      <>
        <LogOutModal setLogModal={setLogModal} logoutButton={logoutButton}/>
      </>
    );
  }

  return (
    <>
      <div className="flex border-b bg-white border-gray-300 justify-between shadow fixed w-full top-0 right-0 ">
        <div className=" flex space-x-10 justify-center items-center">
          {/* <img src={logo} className="w-[10rem] pl-10 " /> */}
          <h1 className="text-3xl pl-10 ">H<span className="text-primary_text font-bold"> i</span> v e</h1>
          <GiHamburgerMenu
            className="text-[1.5rem] cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <div className="p-4 flex space-x-4 justify-center items-center">
          <AiOutlineMessage className="text-4xl  p-2 text-gray-700 rounded-full bg-gray-200 hover:bg-primary_bg hover:text-[#ffffff]    cursor-pointer" />
          <IoNotificationsOutline className="text-4xl p-2 text-gray-700 rounded-full bg-gray-200 hover:bg-primary_bg  hover:text-[#ffffff]  cursor-pointer" />
          <RiLogoutCircleRLine
            onClick={()=>setLogModal(true)}
            className="text-4xl p-2 text-gray-700 rounded-full bg-[#ccdef4] hover:bg-primary_bg hover:text-[#ffffff]   cursor-pointer"
          />

          <div className="flex justify-center items-center space-x-2">
            <img
              src={userData?.profileImg}
              className="h-9 w-9 cursor-pointer border border-primary_bg bg-gray-200 rounded-full object-cover"
              alt="Logo"
            />

            <h1 className="hover:text-primary_bg cursor-pointer hover:underline">
              <Link to="/userProfile">
                {userData?.first_name} {userData?.last_name}
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
