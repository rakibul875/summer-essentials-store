"use client";
import { authClient } from "@/lib/auth-client";
import { router } from "better-auth/api";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const rout = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegister = async (data) => {
    const { name, image, email, password } = data;

    const { data: res, error } = await authClient.signUp.email(
      {
        name: name,
        email: email,
        password: password,
        image: image,
        callbackURL: "/login",
      },
      {
        onSuccess: (ctx) => {
          rout.push('/login');
          toast.success(`SingUp Successfully`);
        },
        onError: (ctx) => {
          toast.error(`${ctx.error.message}`);
        },
      },
    );
  };

  const handelGoogleRegister = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="flex justify-center items-center bg-slate-100 container mx-auto my-10 rounded-2xl">
      <div className="bg-white p-10 rounded-2xl my-5">
        <h1 className="text-3xl font-semibold">Register Your Account</h1>
        <p className="border border-t-2 border-gray-300 my-5"></p>
        <form onSubmit={handleSubmit(handelRegister)} className="space-y-5">
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-xl">Your Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter Your Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-xl">Photo URL</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter Your Photo URL"
              {...register("image", { required: "Photo URL is required" })}
            />
            {errors.image && (
              <p className="text-red-600">{errors.image.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-xl">Email Address</legend>
            <input
              type="email"
              className="input"
              placeholder="Enter Your Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-xl">Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Enter Your Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white">
            Register
          </button>
        </form>
        <p className="text-center text-2xl text-gray-500">Or</p>
        <button
          onClick={handelGoogleRegister}
          className="btn btn-outline w-full rounded-full text-orange-500 mt-2"
        >
          <FaGoogle /> Continue With Google
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
