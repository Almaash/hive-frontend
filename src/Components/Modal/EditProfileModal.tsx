// import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";
import ProjectApiList from "../../api/apis";
import { jwtDecode } from "jwt-decode";
import { usePUtMutation } from "../../hooks/useCustomQuery";

interface EditProfileModalTypes {
  setEditProfileModal: (status: boolean) => void;
  refetch: () => void;
}

interface FormInput {
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  phone: string;
}

function EditProfileModal({
  setEditProfileModal,
  refetch,
}: EditProfileModalTypes) {
  const mutate = usePUtMutation({});
  let inputStyle =
    "border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5";

  let token: any = localStorage.getItem("token");
  const decoded: any = jwtDecode(token);

  const { register, handleSubmit } = useForm<FormInput>();

  const { api_updateUser } = ProjectApiList();

  //////////
  const updateUser = async (data: {
    first_name: string;
    last_name: string;
    country: string;
    email: string;
    phone: string;
  }) => {
    try {
      const result = await mutate.mutateAsync({
        api: `${api_updateUser}/${decoded?.userId}`,
        data: data,
      });
      if (result.status == 200) {
        setEditProfileModal(false);
        refetch();
      } else {
        alert("Something went Wrong");
      }
    } catch (error) {
      throw new Error("Failed To Update Account !");
    }
  };

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    await updateUser(data);
  };
  //////////

  return (
    <>
      <div></div>
      <div className="fixed inset-0 flex items-center justify-center z-[1000]">
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div className="bg-white w-1/3 mx-auto flex flex-col max-sm:w-full z-10  rounded p-2">
          <div className=" flex justify-between bg-primary_bg text-white p-3 mb-3 rounded">
            <div>
              <h1 className="text-3xl"> Edit Your Profile</h1>
            </div>
            <button
              className="text-2xl pr-4 text-white hover:text-black"
              onClick={() => setEditProfileModal(false)}
            >
              <RxCross1 />
            </button>
          </div>
          <form
            className="space-y-4 p-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex w-full space-x-4">
              <div className="w-full">
                <label className="block text-sm font-medium ">First Name</label>
                <input
                  type="text"
                  id="name"
                  {...register("first_name")}
                  className={inputStyle}
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  id="last_name"
                  {...register("last_name")}
                  className={inputStyle}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="text"
                id="email"
                {...register("email")}
                className={inputStyle}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Country</label>
              <input
                type="text"
                id="country"
                {...register("country")}
                className={inputStyle}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="text"
                id="phone"
                {...register("phone")}
                className={inputStyle}
              />
            </div>
            {/* <div>
              <label className="block text-sm font-medium">password</label>
              <input
                type="password"
                id="password"
                {...register("password")}
                className={inputStyle}
              />
            </div> */}

            <button
              disabled={mutate?.isPending}
              type="submit"
              className="w-full border-white border hover:bg-primary_bg_hover text-white bg-primary_bg font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              {mutate.isPending ? "Loading..." : "UPDATE"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditProfileModal;
