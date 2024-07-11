import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import CreatePostModal from "./CreatePostModal";

interface PostDataFetchType {
  refetch:()=>void
}

const CreatePostButton = ({refetch}:PostDataFetchType) => {
  const [postModal, setPostModal] = useState(false);

  if (postModal) {
    return (
      <>
        <CreatePostModal setPostModal={setPostModal} refetch={refetch} />
      </>
    );
  }
  return (
    <>
      <div
        className="flex bg-white ml-4 mt-5 mb-3 mr-4 rounded hover:bg-[#e9eef6] cursor-pointer shadow-lg border-solid border-2 hover:border-primary_bg"
        onClick={()=>setPostModal(true)}
      >
        <div className="w-10 p-1">
          <IoAdd className="text-[1.5rem] m-3 bg-[#c2c9f0] text-primary_text rounded-full" />
        </div>
        <div className="p-2 pl-3">
          <h1 className="text-[1rem]"> Create a Post.</h1>
          <p className="text-xs text-gray-600">
            {" "}
            Share your thoughts or write something.
          </p>
        </div>
      </div>
    </>
  );
};

export default CreatePostButton;
