"use client";
import React, { useState } from "react";
import SliderForm from "../App_Chunks/SliderForm";
const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="flex mt-12 lg:mt-0 flex-col justify-start items-center">
      <SliderForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <div className="relative container grid  grid-cols-1 lg:grid-cols-2 h-full">
        <div className="w-full flex flex-col items-start justify-center h-full">
          <h1 className="text-3xl xl:text-6xl text-center lg:text-start leading-[1.2] font-Plus-Jakarta-Sans font-[700] text-slate-800">
            Power Your{" "}
            <span className="text-indigo-700">Brand with Strategies</span> in
            Measurable Results.
          </h1>
          <p className="mt-4  text-center lg:text-start">
            We empower brands with smart, result-driven marketing strategies
            that elevate visibility, engagement, and growth.
          </p>
          <div className="w-full flex justify-center lg:justify-start">
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-6 mt-4 font-Plus-Jakarta-Sans cursor-pointer font-[700] rounded-full py-3 bg-indigo-800 hover:bg-indigo-950 text-slate-50"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="w-full flex justify-end mt-14 lg:mt-0">
          <div className=" flex gap-4">
            <div className="h-full hidden lg:flex flex-col justify-center items-center">
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
