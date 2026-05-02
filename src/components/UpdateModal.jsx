"use client";
import React from "react";
import { BiEdit } from "react-icons/bi";

const UpdateModal = () => {


  const onSubmit = async (data) => {
    console.log(data);

    
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
              <legend className="fieldset-legend text-xl">Enter Your Name</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Your Name"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl">Enter Your New Photo URL</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Your Photo URL"
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
