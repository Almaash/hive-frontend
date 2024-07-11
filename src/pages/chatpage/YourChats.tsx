import user from "../../assets/img/user.png";
import Active from "../../assets/img/greendot.png";

// interface Props {

// }

const YourChats = () => {
  let chats = [
    { img: user, name: "Almaash Alam", content: "lorem ispum..." },
    { img: user, name: "Almaash Alam", content: "lorem ispum..." },
    { img: user, name: "Almaash Alam", content: "lorem ispum..." },
    { img: user, name: "Almaash Alam", content: "lorem ispum..." },
    { img: user, name: "Almaash Alam", content: "lorem ispum..." },
    { img: user, name: "Almaash Alam", content: "lorem ispum..." },
    { img: user, name: "Almaash Alam", content: "lorem ispum..." },
    { img: user, name: "Almaash Alam", content: "lorem ispum..." },
    { img: user, name: "Almaash Alam", content: "lorem ispum..." },
    { img: user, name: "Almaash Alam", content: "lorem ispum..." },
  ];

  return (
    <>
      <div className="mt-2 rounded-xl ">
        <div className="h-[29rem] overflow-y-auto hide-scrollbar">
          {chats.map((data) => {
            return (
              <div className="bg-white p-3 mt-2 rounded-md border-b-2">
                <div className="flex justify-between">
                  <div className="flex justify-start items-center space-x-3">
                    <img
                      src={data?.img}
                      className="h-9 p-1 cursor-pointer border border-gray-200 bg-gray-200 rounded-full"
                      alt="Logo"
                    />
                    <div className="text-xs">
                      <h1 className="font-bold">{data?.name}. </h1>
                      <p>{data?.content}</p>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src={Active}
                      className="h-8 p-2 rounded-full"
                      alt="Logo"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default YourChats;
