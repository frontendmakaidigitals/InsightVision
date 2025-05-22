"use client";
import React, { useState } from "react";
const industries = [
  {
    title: "Real Estate & Property Management",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Financial Services",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Healthcare & Wellness",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Education & EdTech",
    image:
      "https://images.unsplash.com/photo-1628563418673-2bd58243feaa?q=80&w=2967&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Travel & Tourism",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=3221&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Retail & E-commerce",
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Technology & SaaS",
    image:
      "https://images.unsplash.com/photo-1642132652860-603f4e3c19b7?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Automotive Sales & Services",
    image:
      "https://images.unsplash.com/photo-1595787142842-7404bc60470d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hospitality & Events",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Recruitment & Staffing",
    image:
      "https://images.unsplash.com/photo-1698047682091-782b1e5c6536?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Industries = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? industries : industries.slice(0, 5);

  return (
    <div className="my-24">
      <div className="container">
        <h1 className="text-2xl lg:text-5xl text-[#310115] font-semibold mb-8">
          Industries that use MILES CRM
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12">
          {displayedItems.map((_, idx) => (
            <div
              key={idx}
              className={`h-[280px] relative overflow-hidden flex justify-start items-end p-5 rounded-xl ${
                idx === 4 || idx === 5 ? "col-span-2" : ""
              } bg-slate-300`}
            >
              <img
                src={_.image}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40  z-0" />
              <h3 className="relative z-10 text-xl text-white font-[600]">
                {_.title}
              </h3>
            </div>
          ))}
        </div>

        {industries.length > 4 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 text-white bg-black rounded-full hover:bg-gray-800 transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Industries;
