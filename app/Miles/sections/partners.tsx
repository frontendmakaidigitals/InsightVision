import React from "react";

const Partners = () => {
  const images = [
    "zaaviyan.png",
    "interzen.png",
    "milestone.png",
    "Zaavi-Dark.png",
    "bizgrowth.png",
  ];
  return (
    <div className="my-20">
      <div className="container flex items-center gap-5 bg-gray-200 rounded-xl p-7">
        <h2 className="text-2xl text-slate-500">Our Supported Partners</h2>

        <div className="grid grid-cols-5 gap-5 flex-1">
          {images.map((image, index) => (
            <div key={index} className=" rounded-xl p-5">
              <div className="w-full h-14 flex justify-center items-center">
                <img className="opacity-[.7]" src={`Partner-Logo/${image}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
