import React from "react";
import girlImage from "@/assets/image/woman.jpg";
import Image from "next/image";
import AloVra from "@/assets/image/aloVra.jpg";
import { MdOpacity, MdOutlineWbSunny } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import { TbTemperatureSun } from "react-icons/tb";
import { FaLongArrowAltRight } from "react-icons/fa";

const CareGuide = () => {
  return (
    <div className="bg-blue-200">
      <div className="p-4 lg:p-10 mt-10 container mx-auto">
        <div className="text-center">
          <h1 className="text-2xl">Summer Care Guide</h1>
          <p className="text-xl">
            Stay vibrant and protected throughout the sunniest season with our
            expert-curated wellness tips.
          </p>
        </div>

        <div className="lg:mx-10">
          <div className="flex gap-5 mt-5 flex-col lg:flex-row">
            <div className="card bg-base-100 card-xl shadow-sm">
              <div className="card-body">
                <h1 className="bg-blue-100 w-10 flex justify-center text-blue-400 rounded-full px-1 py-2">
                  <MdOpacity size={"1rem"} />
                </h1>
                <h2 className="card-title">Deep Hydration</h2>
                <p>
                  Hydrate from within. Aim for 3 liters of <br />{" "}
                  mineral-infused water daily to maintain skin <br /> elasticity
                  and energy levels.
                </p>
                <div className="justify-start card-actions">
                  <button className="btn hover:bg-orange-500 hover:text-white btn-outline rounded-xl border-orange-500 text-orange-500">
                    Read Guide <FaLongArrowAltRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card flex-col-reverse lg:flex-row card-side bg-base-100 shadow-sm h-full">
                <div className="card-body">
                  <h1 className="bg-orange-200 text-orange-500 rounded-full flex justify-center w-10 px-1 py-2">
                    <MdOutlineWbSunny size={"1rem"} />
                  </h1>
                  <h2 className="card-title">SPF is Your Best Friend</h2>
                  <p className="text-xl">
                    Broad-spectrum protection is non- <br />
                    negotiable. Reapply every two <br /> hours, especially after
                    a swim or sunbathing session.
                  </p>
                  <div className="card-actions justify-start">
                    <button className="btn bg-slate-800 text-white hover:bg-amber-500 rounded-md">
                      Explore SPF Collection
                    </button>
                  </div>
                </div>
                <figure>
                  <Image src={girlImage} alt="Movie" width={360} height={360} />
                </figure>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 mt-10">
            <div className="">
              <div className="card flex-col-reverse lg:flex-row card-side bg-base-100 shadow-sm h-full">
                <div className="card-body">
                  <h1 className="bg-blue-100 w-10 flex justify-center text-blue-400 rounded-full px-1 py-2">
                    <TbTemperatureSun size={"1rem"} />
                  </h1>
                  <h2 className="card-title">After-Sun Recovery</h2>
                  <p className="text-xl">
                    Cool down with aloe-infused mists <br /> and lightweight
                    serums to soothe skin after a long day in the heat.
                  </p>
                </div>
                <figure>
                  <Image src={AloVra} alt="Movie" width={360} height={360} />
                </figure>
              </div>
            </div>
            <div className="">
              <div className="card bg-base-100 card-xl shadow-sm">
                <div className="card-body">
                  <h1 className="bg-orange-200 text-orange-500 rounded-full flex justify-center w-10 px-1 py-2">
                    <FaEye size={"1rem"} />
                  </h1>
                  <h2 className="card-title">Eye Health</h2>
                  <p>
                    Protect your vision from intense UV rays with polarized
                    lenses and UV-coated optics.
                  </p>
                  <div className="justify-start card-actions">
                    <button className="btn hover:bg-orange-500 hover:text-white btn-outline rounded-xl border-orange-500 text-orange-500">
                      Shop Eyewear
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareGuide;
