import { useNavigate } from "react-router-dom";
import success from "../../assets/img/success.gif";

interface ModalType {
  setConfModal: (value: boolean) => void;
  // createUser: () => void;
}

const SignupSuccessModal = ({ setConfModal }: ModalType) => {

  const navigate = useNavigate()
  
  
  const handleClick = () => {
    setConfModal(false);
    navigate(`/`);
  };


  return (
    <>
      <div className='fixed inset-0 flex items-center justify-center z-[5000]'>
        <div className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm'></div>
        <div className='bg-white w-1/3 mx-auto flex flex-col max-sm:w-full z-10  rounded'>
          <div className='relative overflow-hidden mt-10'>
            <div className='absolute inset-0 hover:bg-white opacity-0 transition duration-700 hover:opacity-10'></div>
            <img
              className='max-w-full h-[15rem] mx-auto animate-wiggle mb-5 '
              src={success}
              alt='alt title'
            />
          </div>
          <div className=' flex-1'>
            <div className=''>
              <h3 className='text-xl  text-center  text-primary_text font-bold font-openSans'>
              Account created Successfully
              </h3>
              <h3 className='text-xl  text-center mb-3 text-gray-500 font-openSans font-semibold '>
                <span className='font-thin text-gray-400 '>
                  click to redirect to login page
                </span>{" "}
                
              </h3>
            </div>
          </div>
          <div className='flex flex-col mb-8'>
            <div className='flex justify-center space-x-5'>
              <div className=''>
                <button
                  className={`bg-[#4338CA] text-sm px-8 py-2 text-white  rounded leading-5 shadow-lg`}
                  onClick={handleClick}
                >
                  Continue
                </button>
              </div>
            </div>

            <div>
              {/* <h1 className='text-center pt-5'>
                <span className='text-red-600 text-xl'>*</span> Save Your Order
                number for Future Referance.
              </h1> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupSuccessModal;
