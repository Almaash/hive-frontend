// import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";
import ProjectApiList from "../../api/apis";
import { jwtDecode } from "jwt-decode";
import { usePUtMutation } from "../../hooks/useCustomQuery";

interface CompleteProfileModalTypes {
  setProfileModal: (status: boolean) => void;
  refetch:()=>void
}

interface FormInput {
  userName: string;
  summary: string;
  profile_img: FileList;
}

function CompleteProfileModal({ setProfileModal,refetch }: CompleteProfileModalTypes) {
  const mutate = usePUtMutation({});
  let inputStyle =
    "border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5";

  let token: any = localStorage.getItem("token");
  const decoded: any = jwtDecode(token);

  const { register, handleSubmit } = useForm<FormInput>();

  const { api_updateProfile } = ProjectApiList();

  //////////
  const createProfile = async (data: FormInput) => {
    try {
      const formData = new FormData();
      formData.append("userName", data.userName);
      formData.append("summary", data.summary);
      formData.append("profile_img", data.profile_img[0]);
     
      const result = await mutate.mutateAsync({
        api:`${api_updateProfile}/${decoded?.userId}`,
        data:formData,
      })
      if(result.status==200){
        setProfileModal(false)
        refetch!()
      }else{
        console.log('Somthing Wrong !')
      }
     
    } catch (error) {
      throw new Error("failed to create user profile");
    }
  };

  const onSubmit: SubmitHandler<FormInput> =async (data) => {
   await createProfile(data)
    
  };
  //////////

  return (
    <>
      <div></div>
      <div className="fixed inset-0 flex items-center justify-center z-[1000]">
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div className="bg-white w-1/3 mx-auto flex flex-col max-sm:w-full z-10  rounded p-2">
          <div className=" flex justify-between bg-primary_bg text-white p-3 rounded">
            <div className="w-[30rem]">
              <h1 className="text-3xl text-center"> Complete Your Profile</h1>
            </div>
            <button
              className="text-2xl pr-4 text-white hover:text-[#9f3541]"
              onClick={() => setProfileModal(false)}
            >
              <RxCross1 />
            </button>
          </div>
          <form
            className="space-y-4 md:space-y-6 p-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label className="block mb-2 text-sm font-medium ">
                Enter User Name
              </label>
              <input
                type="name"
                id="userName"
                {...register("userName")}
                className={inputStyle}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Enter Your Profile Summary
              </label>
              <textarea
                id="summary"
                {...register("summary")}
                className={`${inputStyle} hide-scrollbar h-[8rem]`}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Upload You Profile
              </label>
              <input
                type="file"
                id="file"
                {...register("profile_img")}
                className={inputStyle}
              />
            </div>

            <button
            disabled={mutate?.isPending}
              type="submit"
              className="w-full border-white border hover:bg-primary_bg_hover text-white bg-primary_bg font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              {mutate.isPending?'Loading...':'UPDATE'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CompleteProfileModal;
