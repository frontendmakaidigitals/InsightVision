"use client";
import React  from "react";
 
const HeroSection = () => {
  
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="relative container grid grid-cols-2 h-full">
        <div className="w-full flex flex-col items-start justify-center h-full">
          <h1 className="xl:text-6xl leading-[1.2] font-Plus-Jakarta-Sans font-[700] text-slate-800">
            Power Your{" "}
            <span className="text-indigo-700">Brand with Strategies</span> in
            Measurable Results.
          </h1>
          <p className="mt-4">
            We empower brands with smart, result-driven marketing strategies
            that elevate visibility, engagement, and growth.
          </p>
          <button className="px-6 mt-4 font-Plus-Jakarta-Sans cursor-pointer font-[700] rounded-full py-3 bg-indigo-800 hover:bg-indigo-950 text-slate-50">
            Get Started
          </button>
        </div>
        <div className="w-full  flex justify-end">
          <div className="  flex gap-4">
            <div className="h-full flex-col flex justify-center items-center">
              <img src={"Hero/traffic.svg"} className="w-[190px]" />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <img src={"Hero/budget.svg"} className=" w-[190px]" />
              <img
                src={"Hero/Generates traffic & leads.svg"}
                className=" w-[190px]"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <img src={"Hero/PAST_WEEK.svg"} className="w-[190px]" />
              <img
                src={"Hero/facebook marketing campaign.svg"}
                className="w-[190px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
