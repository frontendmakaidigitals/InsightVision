"use client";
import React, { useState } from "react";
import SliderForm from "@/app/App_Chunks/SliderForm";

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div>
      <SliderForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <div className="container my-14 grid grid-cols-1  gap-10 ">
        <div className="flex flex-col items-center justify-center">
          <img src={"Logo/miles-logo.svg"} alt="miles" className="w-36" />
          <p className="mt-3 text-sm text-center  ">
            #1 CRM Software Built for Growth-Driven Teams
          </p>
          <h1 className="text-4xl mt-1 text-center max-w-2xl font-[500]  lg:text-7xl  text-indigo-950 ">
            Where Every{" "}
            <span className=" bg-gradient-to-t from-indigo-600 to-indigo-50  text-purple-50  rounded-xl px-4">
              Lead
            </span>{" "}
            Turns Into Success..
          </h1>

          <button
            onClick={() => setIsFormOpen(true)}
            className="mt-7 bg-indigo-500 text-slate-50 hover:bg-indigo-500/90 cursor-pointer px-6 rounded-md py-2"
          >
            Book a free call
          </button>
        </div>

        {/* Hero Image */}

        <div className="relative w-full">
          <div className="h-[350px] lg:h-[600px] overflow-hidden w-full rounded-xl relative z-0">
            <img src={`CRM/heroBg.png`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
