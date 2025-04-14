"use client";
import React, { useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";
const Service = () => {
  const [active, setActive] = useState(0);
  const services = [
    { name: "Search engine optmization", desc: "" },
    { name: "Paid search marketing", desc: "" },
    { name: "Website Development", desc: "" },
    { name: "App Development", desc: "" },
  ];
  return (
    <div className=" ">
      <div className=" relative h-[500px] container ">
        <div className="w-[40%] h-full p-10 absolute top-0 left-0 bg-black rounded-xl">
          {services.map((service, idx) => (
            <button
              onClick={() => setActive(idx)}
              className={`text-3xl  ${
                active === idx ? "bg-[#3b5bdb]" : ""
              } text-start flex justify-between items-center pl-8 pr-4 py-2 mb-5 font-bold text-slate-50 w-full rounded-full relative z-10`}
              key={idx}
            >
              <span className="w-[16rem]">{service.name}</span>
              {idx === active && (
                <div className="p-4 rounded-full bg-black ">
                  <ArrowRight className=" " />
                </div>
              )}
            </button>
          ))}
        </div>
        <div className="w-[65%] h-full absolute top-0 right-0 rounded-xl bg-slate-200"></div>
      </div>
    </div>
  );
};

export default Service;
