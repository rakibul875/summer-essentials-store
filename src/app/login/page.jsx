"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelLogin = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error);
  };

  const handelGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="flex justify-center items-center bg-slate-100 container mx-auto my-10 rounded-2xl">
      <div className="bg-white p-10 rounded-2xl my-5">
        <h1 className="text-3xl font-semibold">Login Your Account</h1>
        <p className="border border-t-2 border-gray-300 my-5"></p>
        <form onSubmit={handleSubmit(handelLogin)} className="space-y-5">
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
          <button className="btn w-full bg-slate-800 text-white">Login</button>
        </form>

        <button
          onClick={handelGoogleLogin}
          className="btn btn-outline w-full rounded-full text-orange-500 mt-2"
        >
          <FaGoogle /> Continue With Google
        </button>

        <p className="mt-2">
          Dont Have An Account
          <Link href={"/sineUp"} className="text-lg text-red-400">
            Register?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
