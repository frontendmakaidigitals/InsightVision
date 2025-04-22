"use client";
import React from "react";
import { ArrowUpRight, Sparkle } from "@phosphor-icons/react";
const WhyChoose = () => {
  const benefits = [
    {
      title: "Website Optimization",
      icon: "/about/cards/icon-3.png", // Add icon component or path here
      desc: "Improve site speed, SEO, and user experience to convert more visitors into customers.",
      class: "",
    },
    {
      title: "Targeted Ad Campaigns",
      icon: "/about/cards/icon-1.png", // Add icon component or path here
      desc: "Reach your ideal audience through data-driven campaigns across Google, Meta, and more.",
      class: "mt-7",
    },
    {
      title: "Social Media",
      icon: "/about/cards/icon-2.png", // Add icon component or path here
      desc: "Engage your audience and grow your brand with consistent, high-quality content.",
      class: "mt-14",
    },
  ];
  return (
    <div className="relative  w-full py-20">
      <div className=" container grid grid-cols-2 gap-10 relative z-20">
        <div>
          <p className="text-sm font-Plus-Jakarta-Sans font-[600] text-blue-600">
            Why choose us
          </p>
          <h1 className="text-2xl mt-6 lg:text-3xl xl:text-5xl font-[600] font-Plus-Jakarta-Sans text-indigo-950">
            Why Choose Us
          </h1>
          <p className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            tenetur ut eius error accusantium iure at rem adipisci quae ipsum
            fugit aperiam unde laboriosam amet animi, maiores voluptatem nulla
            placeat?
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            tenetur ut eius error accusantium iure at rem adipisci quae ipsum
            fugit aperiam unde laboriosam amet animi, maiores voluptatem nulla
            placeat?
          </p>

          <div className="flex border-b pb-6 justify-start gap-12 mt-10">
            <div className="flex items-start gap-3 ">
              <div>
                <div className="aspect-square h-[50px] overflow-hidden flex justify-center items-center bg-[#eae5ff] rounded-full">
                  <img src={"about/bar-chart.png"} className="size-7" />
                </div>
              </div>
              <div>
                {" "}
                <p className="text-lg font-[600] font-Plus-Jakarta-Sans">
                  Business <br /> Growth
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div>
                <div className="aspect-square h-[50px] overflow-hidden flex justify-center items-center bg-[#eae5ff] rounded-full">
                  <img src={"about/24-7.png"} className="size-8" />
                </div>
              </div>
              <div>
                {" "}
                <p className="text-lg font-[600] font-Plus-Jakarta-Sans">
                  24x7 <br /> Team Support
                </p>
              </div>
            </div>
          </div>
          <button className="mt-7 group cursor-pointer ">
            <span className="bg-indigo-300/20 group-hover:bg-indigo-300/50 text-indigo-800 px-5 py-2 rounded-full inline-block align-middle">
              Contact us
            </span>
            <ArrowUpRight className="inline-block text-indigo-50 bg-indigo-600 group-hover:bg-indigo-500 p-2 ml-2  align-middle size-[38px] rounded-full" />
          </button>
        </div>
        <div className="h-[500px] relative">
          <img
            src={
              "https://jthemes.net/themes/html/growim/assets/images/shapes/why-choose-3-bg.png"
            }
            className="absolute top-0 right-0 object-contain w-full h-full"
          />
          <img
            src={
              "https://jthemes.net/themes/html/growim/assets/images/resources/why-choose-3-1.png"
            }
            className="w-full relative z-10 h-full object-contain"
          />
        </div>
      </div>
      <div className="relative mt-28">
        <div
          className={`absolute -top-10 left-0 -z-10 size-[350px] bg-Palette-40 blur-[150px] rounded-full`}
        />
        <div className="relative z-20 grid grid-cols-2 items-center container max-w-6xl mb-20 gap-4">
          <Sparkle
            weight="fill"
            className="text-3xl absolute top-[150%] left-1/2 -transltate-x-1/2 "
          />
          <h2 className="text-2xl xl:text-4xl font-Plus-Jakarta-Sans font-[600]">
            Our services solve any business problem
          </h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            similique excepturi commodi blanditiis maiores veritatis non.
          </p>
        </div>
        <div className="container max-w-6xl flex justify-center items-start gap-5">
          {benefits.map((item, idx) => (
            <div
              className={`w-full p-7 bg-white rounded-3xl shadow-md ${item.class}`}
              key={idx}
            >
              <div className="size-14 bg-slate-100 rounded-full flex justify-center items-center">
                <img src={item.icon} className="p-2" />
              </div>
              <div className="mt-4">
                <h2 className="text-2xl font-Plus-Jakarta-Sans font-[600]">
                  {item.title}
                </h2>
                <p className="text-md mt-3">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
