"use client";

import { authClient } from "@/lib/auth-client";
import React from "react";
import { useForm } from "react-hook-form";
import { BiEdit } from "react-icons/bi";

const UpdateModal = () => {


  const onSubmit = async (data) => {
    console.log(data);

    // example login
    // const { data: res, error } = await authClient.signIn.email({
    //   email: data.email,
    //   password: data.password,
    //   rememberMe: true,
    //   callbackURL: "/",
    // });
  };

  return (
    <div>
      <button
        className="btn rounded-2xl btn-soft btn-info"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        <BiEdit /> Update Profile
      </button>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form method="dialog" className="space-y-5">
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl">Email Address</legend>
              <input
                type="email"
                className="input w-full"
                placeholder="Enter Your Email"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl">Password</legend>
              <input
                type="password"
                className="input w-full"
                placeholder="Enter Your Password"
              />
            </fieldset>
            <div className="flex justify-end gap-2">
              <button className="btn">Cancel</button>
              <button className="btn bg-slate-800 text-white">Update</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateModal;
