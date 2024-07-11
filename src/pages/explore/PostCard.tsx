
import LikeButton from "../../assets/LikeButton";
import { HiDotsVertical } from "react-icons/hi";

interface cardData {
  id: number;
  post_details: string;
  post_image: string;
  userId: number;
}

interface CardDataFetchedType {
  allcardData: cardData[];
}

const PostCard = ({ allcardData }: CardDataFetchedType) => {
  // const { userData } = globalStore();

  const dateFunction = (dateString: Date) => {
    const date: any = new Date(dateString);
    const today: any = new Date();

    // Calculate the difference in days
    const differenceInTime = today - date;
    const differenceInDays = Math.floor(
      differenceInTime / (1000 * 60 * 60 * 24)
    );

    if (differenceInDays === 0) {
      return "Today";
    } else if (differenceInDays === 1) {
      return "Yesterday";
    } else {
      return `${differenceInDays} days ago`;
    }
  };

  return (
    <>
      <div className="h-[39rem] overflow-y-auto hide-scrollbar">
        {allcardData?.length != null || "" ? (
          <>
            {allcardData?.map((data: any) => {
              return (
                <div className="bg-white m-5 rounded-xl">
                  <div className="flex pl-10 pr-10 pt-7 pb-5 justify-between items-center">
                    <div className="flex justify-start items-center space-x-3">
                      <img
                        src={data?.user?.profileImg}
                        className="h-11 w-11 p-1 cursor-pointer border border-gray-200 bg-gray-200 rounded-full  object-cover"
                        alt="Logo"
                      />
                      <div className="">
                        <h1>
                          {data?.user?.first_name} {data?.user?.last_name}
                        </h1>
                        <p className="text-xs">
                          {dateFunction(data?.updatedAt)}
                        </p>
                      </div>
                    </div>
                    <div>
                      <HiDotsVertical className="text-xl cursor-pointer" />
                    </div>
                  </div>
                  <div className="pl-10 pr-10 text">
                    <p>{data?.post_details}</p>
                  </div>
                  <div className="pl-10 pr-10 pt-5">
                    <img src={data?.post_image} className="rounded-xl" />
                  </div>
                  <div className="pl-10 pt-5 pb-5 flex space-x-2 ">
                    <LikeButton />
                    <h1>Joe, Shaan & 3 others like this</h1>
                  </div>
                </div>
              );
            })}
          </>
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
    </>
  );
};

export default PostCard;
