"use client";
import { ArrowRight } from "@phosphor-icons/react";
import React from "react";
import Link from "next/link";
const Experience = () => {
  const stats = [
    { number: "14+", name: "Projects" },
    { number: "22+", name: "Clients" },
    { number: "1K+", name: "Followers" },
  ];

  return (
    <div className="w-full  relative mt-20 mb-8">
      <div className="container p-14 bg-[#FFFFFF] rounded-4xl">
        <h1 className="text-2xl lg:text-5xl font-Plus-Jakarta-Sans font-[700]">
          The proof is in the numbers
        </h1>
        <div className=" mt-14 w-full grid grid-cols-1 lg:grid-cols-[1.4fr_.6fr]">
          <div className=" w-full relative z-10 text-slate-950 grid place-items-start grid-cols-1 lg:grid-cols-3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex-col w-full lg:w-auto flex justify-center items-center"
              >
                {/* Outer Ring */}
                <div className="size-48 rounded-full border-[2px] border-indigo-200 flex justify-center items-center">
                  {/* Inner Ring */}
                  <div className="size-38 rounded-full aspect-square border border-indigo-700 flex justify-center items-center">
                    <p className="text-6xl font-[600] text-center tracking-tighter font-DM-Sans">
                      {stat.number}
                    </p>
                  </div>
                </div>
                <p className="mt-4 font-Plus-Jakarta-Sans font-[600]">
                  {stat.name}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full rounded-4xl flex justify-center items-center h-[200px] mt-12 lg:mt-0 lg:h-full bg-[#f9d5fb]">
            <div className="flex flex-col justify-center items-center">
              <p className="text-5xl font-DM-Sans font-[600]">1000+</p>
              <p className="mt-0 font-DM-Sans font-[600]">Followers</p>
              <Link href={'/Contact'}>
                <button className="bg-black mt-3 cursor-pointer text-indigo-50 px-5 py-2 rounded-2xl">
                  Contact us <ArrowRight className="inline-block" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
