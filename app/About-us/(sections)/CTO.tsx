import React from "react";

const CTO = () => {
  return (
    <div className="my-20">
      <div className=" container w-full ">
        <div
          className={"rounded-3xl px-10 py-12 text-white  mx-auto mt-10"}
          style={{
            background:
              "radial-gradient(ellipse at bottom left, #000000 0%, #3b0764 40%, #9333ea 70%, #ec4899 85%, #84cc16 100%);",
          }}
        >
          <div className="">
            <h3 className="text-slate-50 text-xl  xl:text-4xl font-Plus-Jakarta-Sans font-[600]">
              This is a heading
            </h3>
            <p className="text-slate-100 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto neque consequuntur unde, dolorem nostrum, optio error,
              temporibus voluptatibus quasi corporis magnam expedita eos.
              Voluptas at, totam facere quae ut inventore?
            </p>
          </div>
          <div className="flex justify-end mt-3">
            <button className="px-4 py-2 bg-slate-50 text-slate-500 font-[500] font-Plus-Jakarta-Sans rounded-xl">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTO;
