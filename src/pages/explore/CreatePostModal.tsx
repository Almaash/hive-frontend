// import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";
import ProjectApiList from "../../api/apis";
import { jwtDecode } from "jwt-decode";
import { usePostMutation } from "../../hooks/useCustomQuery";
// import profile from "../../assets/img/userpng.png";
import globalStore from "../../GlobalStore/GlobalStore";

interface CreatePostModalTypes {
  setPostModal: (status: boolean) => void;
  refetch:()=>void
}

interface FormInput {
  post_details: string;
  post_img: FileList;
}

function CreatePostModal({ setPostModal,refetch }: CreatePostModalTypes) {
  const mutate = usePostMutation({});
  const { userData } = globalStore();

  let inputStyle =
    " text-gray-900 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5";
  let inputStyle2 =
    " relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 cursor-pointer group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200";
    
    

  let token: any = localStorage.getItem("token");
  const decoded: any = jwtDecode(token);

  const { register, handleSubmit } = useForm<FormInput>();

  const { api_createPost } = ProjectApiList();

  //////////
  const createPost = async (data: FormInput) => {
    try {
      const formData = new FormData();
      formData.append("post_details", data.post_details);
      formData.append("post_img", data.post_img[0]);

      const result = await mutate.mutateAsync({
        api:`${api_createPost}/${decoded?.userId}`,
        data:formData,
      })
      if(result.status==200){
        setPostModal(false)
        refetch!()
      }else{
        console.log('Somthing')
      }

    } catch (error) {
      throw new Error("failed to create user profile");
    }
  };

  const onSubmit: SubmitHandler<FormInput> =async (data) => {
   await createPost(data)

  };
  ////////

  return (
    <>
      <div></div>
      <div className="fixed inset-0 flex items-center justify-center z-[1000]">
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div className="bg-white w-1/3 mx-auto flex flex-col max-sm:w-full z-10  rounded p-2">
          <div className=" flex justify-center items-center text-center p-3 rounded">
            <div className="w-[95%]">
              <h1 className="text-xl font-semibold"> Create post</h1>
            </div>
            <button
              className="text-2xl pr-4 hover:text-primary_bg_hover"
              onClick={() => setPostModal(false)}
            >
              <RxCross1 />
            </button>
          </div>
          <hr />
          <div className="flex pl-2 pt-2">
              <div className="">
                <img
                  src={userData?.profileImg}
                  className="bg-white m-2 aspect-[1/1] rounded-full w-11 h-11 border border-primary_bg_hover object-cover"
                />
              </div>
              <div className="pt-1">
                <h1 className="font-bold">{userData?.first_name} {userData?.last_name}.</h1>
                <div className={inputStyle2}>
                  <span className="relative text-xs px-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                    Public
                  </span>
                </div>
              </div>
            </div>
          <form
            className="space-y-4 md:space-y-6 p-2"
            onSubmit={handleSubmit(onSubmit)}
          >
           
            <div>
              
              <textarea
                id="post_details"
                {...register("post_details")}
                className={`${inputStyle} h-40 placeholder-gray-400  text-xl hide-scrollbar `}
                placeholder="Whats on your mind...?"
              />
            </div>
            <div className="flex justify-between items-center border border-gray-300 rounded-md">
              <div className="pl-3 text-xs">
                {" "}
                Add Image <br /> to your post....
              </div>
              <div className="">
                <input
                  type="file"
                  id="file"
                  {...register("post_img")}
                  className={inputStyle}
                />
              </div>
            </div>

            <button
              disabled={mutate?.isPending}
              type="submit"
              className="w-full border-primary_bg border hover:bg-primary_bg_hover hover:text-[#ffffff] text-primary_text bg-[#ffffff] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              {mutate.isPending ? "Posting..." : "POST"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreatePostModal;
