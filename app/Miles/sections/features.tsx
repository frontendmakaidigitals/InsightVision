import React from "react";

const Features = () => {
  return (
    <div className="my-24">
      <div className="container ">
        <div>
          <h1 className="text-5xl font-[500] text-center">
            Smart Automation, <br /> Limitless Possibilies
          </h1>
          <p className="text-center mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            deleniti labore eveniet expedita tempora! Obcaecati.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-14">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="bg-slate-200 rounded-xl p-5">
              <div className="">
                <div className="w-14 h-14 bg-indigo-200 rounded-lg" />
              </div>
              <div className="mt-10">
                <h3 className="text-xl font-[600]">Ai-Powered Insights</h3>
                <p className="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
