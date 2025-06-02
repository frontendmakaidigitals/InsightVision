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
      <div className="flex items-center gap-5 bg-indigo-100 p-7">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-5 flex-1">
          {images.map((image, index) => (
            <div key={index} className=" rounded-xl p-3">
              <div className="w-full h-10 flex justify-center items-center">
                <img
                  className="opacity-[1] w-full h-full object-contain"
                  src={`Partner-Logo/${image}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
