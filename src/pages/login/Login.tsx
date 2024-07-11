// import React from "react";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ProjectApiList from "../../api/apis";
// import { useMutation } from "react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import logo from "../../assets/img/H i v e.png";
import { usePostMutation } from "../../hooks/useCustomQuery";
import Lottie from "react-lottie";
import { LoginPageAani } from "../../Components/AnimationFiles/temp";

interface FormInput {
  email: string;
  password: string;
}

const login = () => {
  const { register, handleSubmit } = useForm<FormInput>();

  const navigate = useNavigate();

  const mutate = usePostMutation({});

  let inputField =
    "border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5";

  // Login User

  const { api_loginApi } = ProjectApiList();

  const loginUser = async (data: { email: string; password: string }) => {
    try {
      const result = await mutate.mutateAsync({
        api: `${api_loginApi}`,
        data: data,
      });
      localStorage.setItem("token", result?.data?.token);
      if (result.status == 200) {
        navigate(`/userProfile`, { replace: true });
      } else {
        alert("Something went Wrong");
      }
    } catch (error) {
      throw new Error("Failed To Login !");
    }
  };

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    loginUser(data);
  };

  const loginAnimation = {
    loop: true,
    autoplay: true,
    animationData: LoginPageAani,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <section className="bg-[#e0e0e0]">
        <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 relative">
          <div className="w-full backdrop-blur-sm bg-white  rounded-lg shadow-2xl border  max-w-sm ">
            <div className="p-6 space-y-4">
              <div className="flex justify-center items-center">
                <img src={logo} className="w-[10rem] items-center" />
              </div>
              <h1 className="text-center leading-tight tracking-tight ">
                <span className="text-Black ">Login</span> in to your account
              </h1>
              <form
                className="space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Your email
                  </label>
                  <input
                    type="email"
                    // name="email"
                    id="email"
                    {...register("email")}
                    className={inputField}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Password
                  </label>
                  <input
                    type="password"
                    // name="password"
                    id="password"
                    {...register("password")}
                    className={inputField}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full border-white border hover:bg-primary_bg_hover text-white bg-primary_bg font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                  Login
                </button>

                <p className="text-sm text-center font-light text-black">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-black hover:underline "
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div className="">
            <div className="ml-[10rem]">
            <Lottie options={loginAnimation} height={350} width={350} />
            <h1 className="text-center text-xl text-black">Bringing the World Closer, Where Every Connection Counts</h1>
            <p className="text-center text-gray-500">We aim to bring the world closer together,recognizing that every connection <br /> counts in fostering global unity.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  ); 
};

export default login;
