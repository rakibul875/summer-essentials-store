import React from "react";
import { BsFlower2 } from "react-icons/bs";
import { FaCloud, FaGem } from "react-icons/fa6";
import { TbZodiacAquarius } from "react-icons/tb";
import subImage from '@/assets/image/sub-bg.jpg'

const BrandSection = () => {
  return (
    <div className="space-y-10">
      <div className="flex justify-center">
        <h1 className="text-center text-gray-400 text-2xl my-5 border-b-4 w-fit border-orange-500">
          Our Premium Partners
        </h1>
      </div>
      <div className="mb-5 flex justify-center flex-wrap gap-10 mb-5">
        <h1 className="text-gray-500 text-3xl flex items-center gap-3">
          <FaGem /> LUMINA
        </h1>
        <h1 className="text-gray-500 text-3xl flex items-center gap-3">
          <TbZodiacAquarius />
          QUA
        </h1>
        <h1 className="text-gray-500 text-3xl flex items-center gap-3">
          <BsFlower2 />
          LORA
        </h1>
        <h1 className="text-gray-500 text-3xl flex items-center gap-3">
          <FaCloud />
          STRATUS
        </h1>
      </div>
      {/* subscribe Section */}
      <div className="rounded-3xl mt-5">
        <div
          className="hero min-h-[45vh] my-5"
          style={{
            backgroundImage: `url(${subImage.src})`,
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-xl">Join the Solstice Circle</h1>
              <p className="mb-5">
                Get 15% off your first order and exclusive access to summer
                drops and limited editions.
              </p>
              <div className="flex gap-2 flex-col lg:flex-row">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="input w-full lg:w-64 h-15 bg-transparent border border-gray-400 text-white px-3 rounded-lg"
                />
                <button className="btn btn-xl rounded-2xl btn-soft bg-orange-500">Subscribe Now</button>
              </div>
              <p className="mt-2">By subscribing you agree to our Terms of Service and Privacy Policy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
