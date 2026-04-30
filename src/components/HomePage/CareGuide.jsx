import React from "react";
import girlImage from "@/assets/image/woman.jpg";
import Image from "next/image";

const CareGuide = () => {
  return (
    <div className="bg-blue-200 p-4 lg:p-10 mt-10">
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
              <h2 className="card-title">Deep Hydration</h2>
              <p>
                Hydrate from within. Aim for 3 liters of <br /> mineral-infused
                water daily to maintain skin <br /> elasticity and energy
                levels.
              </p>
              <div className="justify-start card-actions">
                <button className="btn hover:bg-orange-500 hover:text-white btn-outline rounded-xl border-orange-500 text-orange-500">Read Guide</button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card flex-col lg:flex-row card-side bg-base-100 shadow-sm h-full">
              <figure>
                <Image src={girlImage} alt="Movie" width={360} height={360} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">SPF is Your Best Friend</h2>
                <p className="text-xl">
                  Broad-spectrum protection is non- <br />
                  negotiable. Reapply every two <br /> hours, especially after a
                  swim or sunbathing session.
                </p>
                <div className="card-actions justify-start">
                  <button className="btn bg-slate-800 text-white hover:bg-amber-500 rounded-md">
                    Explore SPF Collection
                  </button>
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
