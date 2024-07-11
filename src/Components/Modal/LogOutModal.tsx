
import user from "../../assets/img/Cancel.svg";

interface ModalType {
  setLogModal: (value: boolean) => void;
  logoutButton: () => void;
}

const LogOutModal = ({ setLogModal, logoutButton }: ModalType) => {
  const handleCancel = () => {
    setLogModal(false);
  };

  const confirmationHandler = () => {
    logoutButton();
  };

  return (
    <>
      <div></div>
      <div className="fixed inset-0 flex items-center justify-center z-[5000]">
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div className="bg-white w-1/3 mx-auto flex flex-col max-sm:w-full z-10  rounded">
          <div className="relative overflow-hidden mt-10">
            <div className="absolute inset-0 hover:bg-white opacity-0 transition duration-700 hover:opacity-10"></div>
            <img
              className="max-w-full h-[11rem] mx-auto animate-wiggle mb-5 "
              src={user}
              alt="alt title"
            />
          </div>
          <div className="flex-1">
            <div className="">
              <h3 className="text-xl  text-center  text-black font-openSans">
                Are You sure Want to Logout ?
              </h3>
            </div>
            {/* <h3 className='text-center text-gray-500'>
              {sideMessage ? sideMessage : ""}
            </h3> */}
          </div>
          <div className="flex flex-col m-8">
            <div className="flex justify-center space-x-5">
              <div>
                <button
                  className={`bg-white border-primary_bg_hover border text-blue-950 text-sm px-8 py-2 hover:bg-primary_bg_hover hover:text-white  rounded leading-5 shadow-lg`}
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>

              <div className="">
                <button
                  className={`bg-primary_bg_hover text-sm px-8 py-2 text-white  rounded leading-5 shadow-lg`}
                  onClick={confirmationHandler}
                >
                  Logout
                </button>
              </div>
            </div>

            {/* <div>
              <h1 className='text-center pt-5'>
                <span className='text-red-600 text-xl'>*</span> By Clicking
                Continue your data will be Processed
              </h1>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogOutModal;
