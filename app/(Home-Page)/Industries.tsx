"use client";
import React, { useState } from "react";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
const Industries = () => {
  const industries = [
    {
      name: "Real Estate",
      image: "industries/realEstate.jpg",
      text: "We help the real estate industry connect with the right audience by enhancing online visibility, creating engaging content like virtual tours, and leveraging data-driven strategies to generate quality leads. ",
      arr: [
        "Build a strong online presence",
        "Generate qualified leads ",
        "Create high-impact content ",
        "Enhance brand visibility",
        "Boost sales with data-driven campaigns",
      ],
    },
    {
      name: "Technology",
      image: "industries/technology.jpg",
      text: "We empower technology companies to showcase innovation by enhancing online presence, creating impactful content, and driving targeted campaigns to connect with the right audience.",
      arr: [
        "Establish thought leadership ",
        "Generate B2B/B2C leads ",
        "Visuals for tech products/services ",
        "Boost online visibility",
        "Support product launches",
      ],
    },
    {
      name: "Business Consulting",
      image: "industries/consulting.jpg",
      text: "We help business consulting firms establish authority by amplifying their expertise, reaching potential clients, and delivering tailored strategies for lead generation and brand growth.",
      arr: [
        "Position as an industry expert ",
        "Attract decision-makers ",
        "Generate quality leads ",
        "Build trust with content ",
        "Increase visibility",
      ],
    },
    {
      name: "Corporate Services",
      image: "industries/corporateServices.jpg",
      text: "We support corporate service providers by refining their digital presence, building trust through targeted messaging, and driving meaningful engagement with their ideal clients.",
      arr: [
        "Lead generation through targeted ads ",
        "SEO & local optimization ",
        "Content marketing & thought leadership ",
        "Social media strategy ",
        "Reputation management",
      ],
    },
    {
      name: "F&B",
      image: "industries/F&B.jpg",
      text: "We help F&B businesses stand out by creating appetizing content, leveraging social media, and implementing data-driven campaigns to attract loyal customers",
      arr: [
        "Social media engagement  ",
        "Local SEO & listings optimization ",
        "Influencer partnerships ",
        "Promotions & online ordering ",
        "Customer loyalty programs",
      ],
    },
    {
      name: "Events & Shows",
      image: "industries/shows.jpg",
      text: "We elevate events and shows by crafting visually stunning campaigns, engaging audiences through creative content, and maximizing ticket sales with targeted marketing.",
      arr: [
        "Social media engagement  ",
        "Local SEO & listings optimization ",
        "Influencer partnerships ",
        "Promotions & online ordering ",
        "Customer loyalty programs",
      ],
    },
  ];
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-slate-50 py-20  mt-7">
      <div className="container space-y-16">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center">
          <div className="max-w-xl">
            <p className="text-[#bb9bfc] font-Plus-Jakarta-Sans font-[600]">
              Industries
            </p>
            <h1 className="text-3xl mt-2 mb-2 lg:text-6xl max-w-2xl font-Plus-Jakarta-Sans font-[600]">
              Awesome services from Industrial company
            </h1>
            <button className="px-6 mt-4 font-Plus-Jakarta-Sans cursor-pointer font-[700] rounded-full py-3 bg-black hover:bg-slate-800 text-slate-50">
              Contact us <ArrowRight className="inline-block size-6" />
            </button>
          </div>
        </div>

        {/* Interactive Industry Section */}
        <div className="relative ">
          {/* Left Buttons */}
          <div>
      {/* Mobile Dropdown */}
      <div className="lg:hidden px-4 py-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-black text-white font-semibold py-3 px-5 rounded-full flex justify-between items-center"
        >
          <span>{industries[active]?.name}</span>
          <ArrowRight
            className={`transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="dropdown"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden mt-3 space-y-2"
            >
              {industries.map((industry, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActive(idx);
                    setIsOpen(false);
                  }}
                  className={`text-start w-full py-2 px-4 rounded-lg text-white font-medium ${
                    active === idx ? "bg-[#3b5bdb]" : "bg-black"
                  }`}
                >
                  {industry.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop List */}
      <div className="hidden lg:block h-full w-full lg:w-[37%] p-10 bg-black rounded-4xl space-y-5 overflow-y-auto">
        {industries.map((industry, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`text-start cursor-pointer relative z-10 flex justify-between items-center pl-8 pr-3 py-2 w-full font-[600] text-white rounded-full text-2xl transition-all duration-300 ${
              active === idx ? "bg-[#3b5bdb]" : "bg-transparent"
            }`}
          >
            <span>{industry.name}</span>
            <div
              className={`p-4 rounded-full bg-black ${
                active === idx ? "visible" : "invisible"
              }`}
            >
              <ArrowRight />
            </div>
          </button>
        ))}
      </div>
    </div>

          {/* Right Content Panel */}
          <div className="lg:absolute top-0 right-0 h-full w-full py-10 px-3 lg:py-0 lg:w-[70%] bg-slate-200 rounded-4xl flex justify-center items-center">
            <div className="max-w-3xl flex  flex-col-reverse lg:flex-row items-center gap-12 px-6">
              <div className="flex-1 space-y-5">
                <p className="text-lg font-[600] font-Plus-Jakarta-Sans">
                  {industries[active].text}
                </p>
                <ul className="space-y-2">
                  {industries[active].arr.map((_, idx) => (
                    <li key={idx} className="font-semibold text-slate-700">
                      <CheckCircle
                        weight="fill"
                        className="text-indigo-600 size-5 inline-block mr-1"
                      />{" "}
                      {_}
                    </li>
                  ))}
                </ul>
                <button className="underline decoration-3 decoration-indigo-700 underline-offset-6 text-lg mt-4">
                  Learn more
                </button>
              </div>
              <div>
                <div className="rounded-4xl h-[250px] lg:h-[400px] overflow-hidden w-[300px] bg-slate-50">
                  <img
                    src={industries[active].image}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
