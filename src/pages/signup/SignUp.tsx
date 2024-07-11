// import React from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useMutation } from "react-query";
import ProjectApiList from "../../api/apis";
import logo from "../../assets/img/H i v e.png";
import { usePostMutation } from "../../hooks/useCustomQuery";
import Lottie from "react-lottie";
import {LoginPageAani2 } from "../../Components/AnimationFiles/temp";
import { useState } from "react";
import SignupSuccessModal from "../../Components/Modal/SignupSuccessModal";

interface FormInput {
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  phone: string;
  password: string;
}

const SignUp = () => {

  const [confModal,setConfModal] = useState(false)

  const { register, handleSubmit } = useForm<FormInput>();
  const mutate = usePostMutation({});

  const navigate = useNavigate();

  let inputStyle =
    "border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2";

  // React Querry Post Data ///////////

  const { api_signUpApi } = ProjectApiList();

  const createUser = async (data: {
    first_name: string;
    last_name: string;
    country: string;
    email: string;
    phone: string;
    password: string;
  }) => {
    try {
      const result = await mutate.mutateAsync({
        api: `${api_signUpApi}`,
        data: data,
      });
      if (result.status == 200) {
        // navigate(`/`, { replace: true });
      } else {
        alert("Something went Wrong");
      }
    } catch (error) {
      throw new Error("Failed To Create Account !");
    }
  };


  const onSubmit: SubmitHandler<FormInput> = (data) => {
    createUser(data);
    setConfModal(true)
  };

  ////////////////

  const loginAnimation = {
    loop: true,
    autoplay: true,
    animationData: LoginPageAani2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (confModal) {
    return (
      <>
        <SignupSuccessModal setConfModal={setConfModal}/>
      </>
    );
  }

  return (
    <>
      <section className="bg-[#e0e0e0]">
        <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 relative">
        <div className="">
            <div className="mr-[8rem]">
              <Lottie options={loginAnimation} height={250} width={350} />
              <h1 className="text-center text-xl text-black">
              <span className="text-3xl">Sign up</span> and Explore Your Social World
              </h1>
              <p className="text-center text-gray-500 pt-3">
                We aim to bring the world closer together,recognizing that every
                connection <br /> counts in fostering global unity.
              </p>
            </div>
          </div>
          <div className="w-full backdrop-blur-sm bg-white  rounded-lg shadow-2xl border  max-w-md ">
            <div className="p-6  sm:p-8">
              <div className="flex flex-col justify-center items-center mb-5 space-y-2">
                <img src={logo} className="w-[10rem] items-center" />
                <h1 className="text-center leading-tight tracking-tight ">
                  {/* <span className="text-Black ">SIgnup</span> in to your account */}
                </h1>
              </div>
              <form className="space-y-3 " onSubmit={handleSubmit(onSubmit)}>
                <div className="flex w-full space-x-4">
                  <div className="w-full">
                    <label className="block text-sm font-medium ">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("first_name")}
                      className={inputStyle}
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-sm font-medium">
                      Last Name
                    </label>
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
                <div>
                  <label className="block text-sm font-medium">password</label>
                  <input
                    type="password"
                    id="password"
                    {...register("password")}
                    className={inputStyle}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full border-white border hover:bg-primary_bg_hover text-white bg-primary_bg font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                  Create an account
                </button>
                <p className="text-sm text-center font-light">
                  Already have an account?{" "}
                  <Link
                    to="/"
                    className="font-medium text-black hover:underline "
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default SignUp;
