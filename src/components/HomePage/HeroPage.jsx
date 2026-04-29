import React from "react";
import bgImage from "@/assets/image/beautiful.jpg";
import { FaFire } from "react-icons/fa6";
import {BiRightArrowAlt } from "react-icons/bi";

const HeroPage = () => {
  return (
    <div
      className="hero min-h-[70vh] mt-10"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className="hero-overlay w-full"></div>
      <div className="hero-content w-full justify-start text-neutral-content text-center lg:text-left">
        <div className="max-w-md text-left">
          <h1 className="flex items-center bg-orange-300 w-30 px-2 py-1 text-center text-orange-700 rounded-full">
            <FaFire /> Hot Deals <FaFire />
          </h1>
          <h1 className="text-5xl font-bold">Summer Sale</h1>
          <h3 className="text-3xl text-orange-400 mb-5">50% off</h3>
          <p className="mb-5 text-xl">
            Embrace the luminous clarity of high summer with our curated
            collection of seasonal essentials. Soft textures, vibrant colors,
            and effortless luxury.
          </p>
          <div className="flex gap-5 flex-col lg:flex-row">
            <button className="btn btn-xl text-white bg-orange-400 rounded-lg flex items-center">Shop Now <BiRightArrowAlt/></button>
            <button className="btn btn-xl bg-slate-200 rounded-lg flex items-center">View LookBook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
