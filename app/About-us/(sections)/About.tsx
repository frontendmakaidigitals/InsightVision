"use client";
import React from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

const About = () => {
  return (
    <div className="relative w-full my-20">
      <div className="absolute  left-1/2 -translate-x-1/2 size-[400px] opacity-[.5] top-0 bg-gradient-to-r from-pink-300 to-blue-100 rounded-full blur-[80px] z-10" />

      <div className=" container grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center  relative z-20">
        <div>
          <p className="text-sm font-Plus-Jakarta-Sans font-[600] text-blue-600">
            About us
          </p>
          <h1 className="text-3xl mt-4 lg:text-4xl xl:text-6xl font-Plus-Jakarta-Sans text-indigo-950">
            We&apos;re a Strategic Digital Marketing Agency
          </h1>
          <p className="mt-10">
            We’re not just another digital agency—we’re your growth partner. By
            blending data, creativity, and strategy, we build tailored marketing
            solutions that drive real business results. Whether it’s scaling
            your brand or boosting conversions, we make every click count.
          </p>

          <div className="grid border-b border-t border-slate-300 py-6 grid-cols-2 gap-3 mt-8">
            <div className="flex items-start gap-3">
              <div>
                <div className="aspect-square h-[60px] overflow-hidden flex justify-center items-center bg-[#eae5ff] rounded-full">
                  <img src={"about/growth.png"} className="size-10" />
                </div>
              </div>
              <div>
                {" "}
                <p className="text-xl font-DM-Sans font-[600]">85%</p>
                <p>Boost in ROI</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div>
                <div className="aspect-square h-[60px] overflow-hidden flex justify-center items-center bg-[#eae5ff] rounded-full">
                  <img src={"about/investment.png"} className="size-10" />
                </div>
              </div>
              <div>
                {" "}
                <p className="text-xl font-DM-Sans font-[600]">3x</p>
                <p>Faster Conversions</p>
              </div>
            </div>
          </div>
          <Link href="/Contact">
            {" "}
            <button className="mt-8 group cursor-pointer ">
              <span className="bg-indigo-300/20 group-hover:bg-indigo-300/50 text-indigo-800 px-5 py-2 rounded-full inline-block align-middle">
                Contact us
              </span>
              <ArrowUpRight className="inline-block text-indigo-50 bg-indigo-600 group-hover:bg-indigo-500 p-2 ml-2  align-middle size-[38px] rounded-full" />
            </button>
          </Link>
        </div>
        <div className="h-[300px] lg:h-[550px]">
          <img
            src={"about/dora.png"}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
