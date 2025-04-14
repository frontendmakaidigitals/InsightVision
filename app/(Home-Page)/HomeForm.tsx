"use client";
import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
const HomeForm = () => {
  const icons = [
    { id: "facebook", Icon: FacebookLogo },
    { id: "instagram", Icon: InstagramLogo },
    { id: "linkedin", Icon: LinkedinLogo },
  ];

  return (
    <div className="bg-white py-20">
      <div className="container h-full gap-5 grid grid-cols-[.8fr_1.2fr]">
        <div className="bg-indigo-950 text-indigo-200 py-5 px-5 flex flex-col justify-between items-start rounded-2xl w-full h-full">
          <div>
            <h3 className="text-purple-100 font-Plus-Jakarta-Sans font-[600] text-xl">
              Address
            </h3>
            <p className="mt-2 max-w-xs text-lg">
              3307, Churchill Towers, Business Bay, Dubai, UAE
            </p>
          </div>
          <div>
            <h3 className="text-purple-100 font-Plus-Jakarta-Sans font-[600] text-xl">
              Contact
            </h3>
            <p className="mt-2 text-lg">Phone - +971 50 865 4179</p>
            <p className="text-lg">Email - info@insightvision.marketing</p>
          </div>
          <div>
            <h3 className="text-purple-100  font-Plus-Jakarta-Sans font-[600] text-xl">
              Open Time
            </h3>
            <p className="mt-2 text-lg">
              Monday - Friday &nbsp; &nbsp; 10:00 - 19:00
            </p>
          </div>
          <div>
            <h3 className="text-purple-100 font-Plus-Jakarta-Sans font-[600] text-xl">
              Stay Connnected
            </h3>
            <div className="flex gap-8 mt-2 justify-between w-full">
              {icons.map(({ id, Icon }) => (
                <div
                  key={id}
                  className="text-4xl size-12 bg-indigo-500 flex justify-center items-center rounded-full"
                >
                  <Icon weight="fill" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-4">
          <p className="text-sky-800 font-[600]">Contact us</p>
          <h2 className="text-2xl font-DM-Sans font-[600] mt-1 lg:text-4xl">
            Get Your <span className="text-indigo-700">Free Quote</span> Today!
          </h2>

          <div className="grid grid-cols-2 gap-4 mt-7">
            <div>
              <label className="font-DM-Sans text-lg font-[600]">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                placeholder="Enter your full Name"
                className="w-full px-4 py-[.7rem] mt-1  text-md bg-slate-100 rounded-lg"
              />
            </div>
            <div>
              <label className="font-DM-Sans text-lg font-[600]">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                placeholder="Enter your email"
                className="w-full px-4 py-[.7rem] mt-1  text-md bg-slate-100 rounded-lg"
              />
            </div>
            <div>
              <label className="font-DM-Sans text-lg font-[600]">
                Phone <span className="text-red-600">*</span>
              </label>
              <input
                placeholder="Enter your contact"
                type="number"
                className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0 w-full px-4 py-[.7rem] mt-1  text-md bg-slate-100 rounded-lg"
              />
            </div>
            <div>
              <label className="font-DM-Sans text-lg font-[600]">
                Service <span className="text-red-600">*</span>
              </label>
              <input
                placeholder="Enter your email"
                className="w-full px-4 py-[.7rem] mt-1  text-md bg-slate-100 rounded-lg"
              />
            </div>
            <div className="lg:col-span-2">
              <label className="font-DM-Sans text-lg font-[600]">Message</label>
              <textarea
                placeholder="Enter here"
                rows={8}
                className="w-full resize-none px-4 py-[.7rem] mt-1  text-md bg-slate-100 rounded-lg"
              />
            </div>
          </div>
          <button className="px-6 mt-5 rounded-full py-2 text-slate-50 hover:bg-indigo-400 bg-indigo-500">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
