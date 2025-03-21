"use client";
import React, { useRef } from "react";


export const CompantStats = () => {
  const stats = [
    { data: 14, title: "worldwide awards" },
    { data: 22, title: "Years in Business" },
    { data: 10, title: "Happy clients" },
    { data: 1, title: "projects completed" },
  ];
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="w-full py-16 relative overflow-hidden bg-purple-100"
    >
      <img
        src={"graphic.svg"}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="grid container ">
        <div className="grid lg:grid-cols-4 gap-5 p-6 bg-slate-50/50 border border-slate-400 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex justify-center items-center ${
                index === stats.length - 1
                  ? ""
                  : "border-b lg:border-b-0 lg:border-r py-5 lg:py-0 border-slate-400"
              }  flex-col`}
            >
              <div className="flex text-[#25193a] items-center gap-0">
               
                <h2 className="text-7xl font-SplineSans font-[700]">{stat.data}</h2>

                <p className="text-7xl font-SplineSans font-[700]">
                  {index === 3 && "K"}+
                </p>
              </div>
              <h1 className="text-lg font-bold text-gray-950 capitalize">
                {stat.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
