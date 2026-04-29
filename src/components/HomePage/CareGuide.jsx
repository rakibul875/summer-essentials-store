import React from "react";
import girlImage from '@/assets/image/woman.jpg'
import Image from "next/image";

const CareGuide = () => {
  return (
    <div className="bg-blue-200 p-10 mt-10">
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
                <h2 className="card-title">Xlarge Card</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="justify-end card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          <div className="">
            <div className="card flex-col lg:flex-row card-side bg-base-100 shadow-sm">
              <figure>
                <Image
                  src={girlImage}
                  alt="Movie"
                  width={360}
                  height={360}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
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
