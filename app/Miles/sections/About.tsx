"use client";
import { SealCheck } from "@phosphor-icons/react";
import React from "react";

const About = () => {
  const benefits = [
    "Simplify daily operations",
    "Boost productivity across teams",
    "Accelerate conversions",
    "Centralize customer data for actionable insights",
  ];

  const impactStats = [
    {
      stat: "86%",
      description: "Boost in ROI",
    },
    {
      stat: "4x",
      description: "Faster Conversions",
    },
    {
      stat: "78%",
      description: "Increase in Lead Engagement",
    },
    {
      stat: "73%",
      description: "Improvement in Sales Productivity",
    },
  ];

  return (
    <div>
      <div className="container my-14 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-20 ">
        <div>
          <div className="h-[300px] lg:h-[600px] w-full">
            <img
              src={
                "https://images.unsplash.com/photo-1454923634634-bd1614719a7b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="">
          <h2 className="text-4xl lg:text-5xl text-[#310115]">
            What is MILES CRM?
          </h2>
          <p className="mt-7">
            MILES CRM is a powerful, user-friendly Customer Relationship
            Management platform designed specifically for businesses that demand
            speed, efficiency, and growth. Whether you&apos;re a startup or an
            established enterprise, MILES CRM helps streamline your sales,
            marketing, and service operations, making it the perfect CRM for
            businesses.
          </p>
          <div className="grid grid-cols-1  lg:grid-cols-2 mt-12 gap-x-5">
            {benefits.map((benefit, idx) => (
              <p
                key={idx}
                className=" rounded-lg p-3 font-[500] flex items-start gap-3"
              >
                <span className="mt-[2px]">
                  <SealCheck color={"teal"} weight="fill" size={"22"} />
                </span>
                {benefit}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-7 gap-5">
            {impactStats.map((stat, idx) => (
              <h3 key={idx} className="p-4 text-start bg-slate-200">
                <span className="text-3xl block text-start font-[500]">
                  {stat.stat}
                </span>
                <span className="">{stat.description}</span>
              </h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
