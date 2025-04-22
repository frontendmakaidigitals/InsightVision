import React from "react";

const CTO = () => {
  return (
    <div className="my-20 overflow-hidden">
      <div className=" container max-w-6xl ">
        <div className="w-full overflow-hidden relative bg-black rounded-3xl">
          <div className="absolute top-0 right-0  w-full h-full z-10 ">
            <img
              src={"about/vector.svg"}
              className="w-[400px] absolute h-auto top-0 right-1/8 object-contain scale-[2.8] "
            />
          </div>
          <div
            className={
              "rounded-3xl px-10 py-8 text-white  mx-auto relative z-10 mt-10"
            }
          >
            <div className="">
              <h3 className="text-slate-50 text-xl  xl:text-4xl font-Plus-Jakarta-Sans font-[600]">
                This is a heading
              </h3>
              <p className="text-slate-100 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto neque consequuntur unde, dolorem nostrum, optio
                error, temporibus voluptatibus quasi corporis magnam expedita
                eos. Voluptas at, totam facere quae ut inventore?
              </p>
            </div>
            <div className="flex justify-end mt-3">
              <button className="px-4 py-2 bg-white text-slate-600 font-[600] font-Plus-Jakarta-Sans rounded-lg">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTO;
