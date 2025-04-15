"use client";
import React, { useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
const Service2 = () => {
  const services = [
    {
      name: "Web Development",
      img: "service-logo/web-development.png",
      gradient: "bg-gradient-to-r from-[#fde68a] to-[#f59e0b] ",
      link: "Web-Development",
    },
    {
      name: "App Development",
      img: "service-logo/app-development.png",
      gradient: "bg-gradient-to-r from-[#fef08a] via-[#84cc16] to-[#16a34a]",
      link: "App-Development",
    },
    {
      name: "Social Media Marketing",
      img: "service-logo/social-media.png",
      gradient:
        "bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#f72464] via-[#ff858a] to-[#fff3a7]",
      link: "Social-Media-Marketing",
    },
    {
      name: "SEO Marketing",
      img: "service-logo/seo.png",
      gradient: "bg-gradient-to-bl from-[#edd2f3] via-[#fffcdc] to-[#84dfff]",
      link: "SEO-Marketing",
    },
    {
      name: "Photography & Videography",
      img: "service-logo/photography.png",
      gradient:
        "bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[#6366f1] via-[#a5b4fc] to-[#e0e7ff] ",
      link: "Photography",
    },
    {
      name: "Media Buying",
      img: "service-logo/media.png",
      gradient: "bg-gradient-to-bl from-[#84cc16] via-[#16a34a] to-[#0f766e] ",
      link: "Media-Buying",
    },
    {
      name: "Performance Marketing",
      img: "service-logo/performance.png",
      gradient: "bg-gradient-to-tl from-[#f6fbf4] via-[#f5df99] to-[#5fd068] ",
      link: "Performance-Marketing",
    },
    {
      name: "Content Marketing",
      img: "service-logo/content-writing.png",
      gradient: "bg-gradient-to-b from-[#06b6d4] via-[#2563eb] to-[#6366f1]",
      link: "Content-Marketing",
    },
    {
      name: "Public Relations",
      img: "service-logo/public-relation.png",
      gradient: "bg-gradient-to-br from-[#f59e0b] via-[#ea580c] to-[#b91c1c] ",
      link: "Public-Relations",
    },
    {
      name: "Branding & Advertising",
      img: "service-logo/branding.png",
      gradient: "bg-gradient-to-bl from-[#84cc16] via-[#22c55e] to-[#16a34a]",
      link: "Branding",
    },
    {
      name: "IT Consulting & Advisory",
      img: "service-logo/it-consulting.png",
      gradient: "bg-gradient-to-b from-[#8d8daa] via-[#dfdfde] to-[#f7f5f2] ",
      link: "IT-Consulting",
    },
    {
      name: "Cyber Security",
      img: "service-logo/cyber-security.png",
      gradient:
        "bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#ff4d4d] via-[#ff8364] to-[#fdb87d]",
      link: "Cyber-Security",
    },
  ];
  const [showall, setShowAll] = useState(false);
  const visibleServices = showall ? services : services.slice(0, 8);
  return (
    <div className="py-14 bg-gradient-to-b from-purple-100/80 from-[10%] to-transparent">
      <div className="container">
        <div className=" ">
          <h1 className="text-3xl mb-2 lg:text-6xl font-Plus-Jakarta-Sans font-[600]">
            Our Services
          </h1>
          <button className="mt-6 bg-[#5c4d7d]  px-7 py-2  rounded-full text-[#e0d7ee]">
            Contact us
          </button>
        </div>
        <div className="grid mt-14 xl:grid-cols-4 gap-7">
          {visibleServices.map((service, idx) => (
            <div
              key={idx}
              className="p-9 flex flex-col items-start justify-between group bg-white transition-all duration-300 rounded-3xl"
            >
              <div>
                <div className="size-16 p-3 rounded-full bg-[#f8f4fb]">
                  <img
                    className="w-full h-full object-contain"
                    src={service.img}
                  />
                </div>
                <h3 className="text-xl font-Plus-Jakarta-Sans font-[500] lg:text-2xl mt-6 text-black ">
                  {service.name}
                </h3>
                <p className="mt-4 text-slate-800">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Animi hic ducimus deleniti. Quas incidunt ducimus laboriosam,
                </p>
              </div>
              <button className="mt-8 underline underline-offset-4 decoration-2 decoration-purple-800 font-bold rounded-full text-[#11002e]">
                Learn more{" "}
                <ArrowUpRight className="ml-1 text-lg inline-block" />
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-14 ">
          <button
            className="bg-[#D0C4DF] rounded-full px-6 py-2"
            onClick={() => setShowAll(!showall)}
          >
            {showall ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service2;
