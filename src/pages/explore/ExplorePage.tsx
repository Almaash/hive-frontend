import YourChats from "../chatpage/YourChats";
import PostCard from "./PostCard";
import CreatePostButton from "./CreatePostButton";
import ProjectApiList from "../../api/apis";
import { useApi } from "../../hooks/useCustomQuery";
import { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";

const ExplorePage = () => {
  const [allcardData, setCardData] = useState([]);

  const { api_getAllPost } = ProjectApiList();

  // fetch data ////////////////////

  const cardData = useApi<any>({
    api: `${api_getAllPost}`,
    options: {
      enabled: true,
    },
  });

  useEffect(() => {
    if (cardData) {
      setCardData(cardData?.data!);
    }
  }, [cardData?.data]);

  // console.log(allcardData)

  return (
    <>
      <div className="flex mt-[4rem]">
        <div className="w-[70%]">
          <CreatePostButton refetch={cardData.refetch} />
          {allcardData?.length > 0 ? (
            <PostCard allcardData={allcardData} />
          ) : (
            <div className="w-[50rem] m-5 rounded-xl inset-0  bg-white bg-[radial-gradient(#d85bcc_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
              <div className="text-center p-10 ">
                <h1 className="font-bold">
                  No post available, please post something........
                </h1>
              </div>
            </div>
          )}
        </div>
        <div className="w-[25%]">
          <div className="bg-white p-3 mt-5 rounded-md">
          <h1 className="text-2xl font-bold text-primary_bg_hover">Chats</h1>
            <hr className="mt-3"/>
            <YourChats />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplorePage;
