// import axios from "axios";
import ProjectApiList from "../../api/apis";
import { FaPlus } from "react-icons/fa6";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import CompleteProfileModal from "../../Components/Modal/CompleteProfileModal";
import DemoProfile from "../../assets/img/demppp.png";
import globalStore from "../../GlobalStore/GlobalStore";
import { userDataType } from "../../GlobalStore/GlobalStore";
import { useApi } from "../../hooks/useCustomQuery";
import EditProfileModal from "../../Components/Modal/EditProfileModal";

const UserProfile: React.FC = () => {
  const { setProfileData } = globalStore();

  const [profileModal, setProfileModal] = useState(false);
  const [editProfileModal, setEditProfileModal] = useState(false);

  const { api_userbyId } = ProjectApiList();

  let token: string | null = localStorage.getItem("token");
  const decoded: { userId: string } = jwtDecode(token || "");

  // fetch data ////////////////////

  const data = useApi<userDataType>({
    api: `${api_userbyId}/${decoded?.userId}`,
    options: {
      enabled: !!decoded?.userId,
    },
  });

  // Sotre data in Global store ////////////////////
  useEffect(() => {
    if (data) {
      setProfileData(data?.data!);
    }
  }, [data?.data]);

  if (profileModal) {
    return (
      <>
        <CompleteProfileModal
          setProfileModal={setProfileModal}
          refetch={data.refetch}
        />
      </>
    );
  }
  if (editProfileModal) {
    return (
      <>
        <EditProfileModal
          setEditProfileModal={setEditProfileModal}
          refetch={data.refetch}
        />
      </>
    );
  }

  return (
    <>
      {/* <!-- component --> */}
      <div className="w-full bg-gradient-to-r  from-[#cccbcb] to-slate-100 mt-[4rem]">
        <div className="bg-white shadow-lg  ">
          <div className="bg-gradient-to-r  h-20">
            {/* <img className="w-full h-[5rem]" src={divverse} alt="" /> */}
          </div>
          <div className="flex justify-start px-5 ml-5 -mt-12 ">
            <img
              className="bg-white  aspect-[1/1] rounded-full w-40 h-40 object-cover p-2"
              src={
                data?.data?.profileImg === null || ""
                  ? DemoProfile
                  : data?.data?.profileImg
              }
            />
          </div>
          <div className=" ">
            <div className=" px-14">
              <div className="flex justify-between">
                <div className="">
                  <h2 className="text-gray-800 text-3xl font-bold">
                    {data?.data?.first_name} {data?.data?.last_name}
                  </h2>
                  <p className="text-gray-400 mt-2 cursor-pointer hover:text-primary_text">
                    @
                    {data?.data?.userName === null || ""
                      ? "username"
                      : data?.data?.userName}
                  </p>
                </div>
                <div className="">
                  <button
                    type="button"
                    onClick={() => setProfileModal(true)}
                    className="flex text-white bg-primary_bg hover:bg-primary_bg_hover focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    {(data?.data?.summary &&
                      data?.data?.userName &&
                      data?.data?.profileImg) === null || ""
                      ? "Complete Your Profile "
                      : "Update Your Profile "}
                    <FaPlus className="ml-1 mt-1" />
                  </button>

                  {/* <button type="button" className="bg-[#F0394F] "></button> */}
                </div>
              </div>
              <p className="mt-2 text-gray-500 text-sm">
                {/* {data?.data?.summary} */}
                {data?.data?.summary === null || ""
                  ? "Your Summary"
                  : data?.data?.summary}
              </p>
            </div>
            {/* <hr className="mt-6" /> */}

            <div className="flex items-center justify-center p-2 bg-white ">
              <div className="bg-white rounded-lg p-6 pl-10  w-full">
                <div className="mb-6">
                  <div className="flex justify-between">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">
                      Profile Information
                    </h2>

                    <button className="flex text-white bg-primary_bg hover:bg-primary_bg_hover focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={()=>setEditProfileModal(true)}>
                    Edit Profile
                    <FaPlus className="ml-1 mt-1" />
                    </button>
                  </div>
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm text-gray-700"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                          value={data?.data?.first_name}
                          readOnly
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm text-gray-700"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                          value={data?.data?.last_name}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label
                          htmlFor="state"
                          className="block text-sm text-gray-700"
                        >
                          Your Country
                        </label>
                        <input
                          type="text"
                          id="state"
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                          value={data?.data?.country}
                          readOnly
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm text-gray-700"
                        >
                          Your Email
                        </label>
                        <input
                          type="text"
                          id="email"
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                          value={data?.data?.email}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm text-gray-700"
                        >
                          Your Phone
                        </label>
                        <input
                          // type="text"
                          id="phone"
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                          value={data?.data?.phone}
                          readOnly
                        />
                      </div>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
