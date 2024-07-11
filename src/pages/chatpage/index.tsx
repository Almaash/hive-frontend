// import React from 'react'
import { IoIosAdd } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import YourChats from "./YourChats";
import user from "../../assets/img/user.png";
import Active from "../../assets/img/greendot.png";
import { FiSend } from "react-icons/fi";


// interface Props {

// }

const ChartPage = () => {
  return (
    <>
      <div className="flex h-dvh">
        <div className="w-[30%] p-5 pt-[5rem]">
          <div className="flex justify-between">
            <div className="">
              <h1 className="text-2xl font-bold">Chats</h1>
              <p className="text-sm text-gray-500">Recent Chats</p>
            </div>
            <div className="flex items-center">
              <button className="bg-primary_bg hover:bg-primary_bg_hover text-white rounded p-1 flex">
                <IoIosAdd className="text-xl mt-1" />
                new chat
              </button>
            </div>
          </div>

          <div className="bg-white mt-2 p-2 rounded-xl">
            <form className="max-w-md mx-auto">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-2 ps-5 text-sm text-gray-900  rounded-lg bg-white outline-none focus:ring-0"
                  placeholder="Search Mockups, Logos..."
                  required
                />

                <button
                  type="submit"
                  className="text-gray-500 absolute end-1 bottom-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-3"
                >
                  <IoIosSearch />
                </button>
              </div>
            </form>
          </div>

          <h1 className="font-bold pt-1">Messages</h1>

          <YourChats />
        </div>

        <div className="w-[70%] pt-[5rem] p-4 ">
          <div className="bg-white p-3 mt-2 rounded-md border-b-2">
            <div className="flex justify-between">
              <div className="flex justify-start items-center space-x-3">
                <img
                  src={user}
                  className="h-9 p-1 cursor-pointer border border-gray-200 bg-gray-200 rounded-full"
                  alt="Logo"
                />
                <div className="text-xs">
                  <h1 className="font-bold">Almaash Alam. </h1>
                  <div className="flex item-center space-x-1">
                    <img src={Active} className="h-3 mt-[3px] rounded-full" alt="Logo" />
                    <p>Active</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-white p-3 mt-2 rounded-md border-b-2 h-[75%] overflow-y-scroll">
            <div className=" px-10 py-14">
                <div className="p-3 max-w-[50%] mb-6 text-sm bg-gray-200 rounded-b-xl rounded-tr-xl">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="p-3 max-w-[40%] text-sm text-white  bg-primary_bg ml-auto rounded-b-xl rounded-tl-xl">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta commodi hic
                </div>
            </div>

          </div>
          {/*  */}
          <div className="bg-white mt-2 p-2 rounded-xl">
            <form className="">
              
              <div className="flex space-x-4 ">
                <input
                  type="text"
                
                  className="block w-[85%] p-2 text-sm text-gray-900  rounded-lg bg-white  outline-none focus:ring-0"
                  placeholder="Type your message here...."
                
                />

                <button
                  type="submit"
                  className="text-white bg-primary_bg_hover font-medium rounded-lg text-2xl px-8"
                >
                  <FiSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartPage;
