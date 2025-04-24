"use client";
import React from "react";
import { Checkbox } from "@/components/ui/Checkbox";
import { PhoneInput } from "../App_Chunks/CountryInput";

const Page = () => {
  const social = [
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="white" // fill inside the shapes with white
        stroke="rgba(0, 0, 0, 1)" // semi-transparent black lines
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-instagram-icon lucide-instagram"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    </>,
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="white" // fill inside the shapes with white
        stroke="rgba(0, 0, 0, 1)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-facebook-icon lucide-facebook"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    </>,
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="white" // fill inside the shapes with white
        stroke="rgba(0, 0, 0, 1)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-linkedin-icon lucide-linkedin"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    </>,
  ];
  return (
    <div className="mb-28 relative pt-12 ">
      <div
        className="absolute inset-0 
    bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] 
    [background-size:80px_80px] 
    pointer-events-none 
    z-0 
    [mask-image:linear-gradient(to_bottom,transparent,black_40%,black_10%,transparent)] 
    [mask-repeat:no-repeat] 
    [mask-size:100%_100%]"
        aria-hidden="true"
      />

      <div className="container mb-20 relative z-10 max-w-5xl">
        <h2 className="text-center text-3xl lg:text-5xl font-Plus-Jakarta-Sans font-[600]">
          Contact our team
        </h2>
        <p className="text-sm text-center mt-4 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, facilis
          tenetur debitis natus perspiciatis architecto earum cumque fugit
          dolorem nihil commodi praesentium? Quo quasi repellat deserunt,
          perspiciatis aut neque laudantium!
        </p>
      </div>
      <div className="container relative z-10 max-w-5xl grid grid-cols-[.8fr_1.2fr] gap-12 ">
        <div className="w-full bg-gradient-to-b from-Palette-10 from-[5%] to-[#dfd6ff]  rounded-2xl px-9 py-12">
          <h2 className="text-xl font-DM-Sans tracking-tight text-white font-[600]">
            Get in touch
          </h2>
          <div className="mt-7">
            <h3 className="text-md text-white font-Plus-Jakarta-Sans font-[600]">
              Visit us
            </h3>
            <p className="text-sm text-slate-50">
              Come say hello at our Office HQ.
            </p>
            <p className="text-sm text-slate-50 mt-1">
              Office - 3307, Churchill Towers, Business Bay, Dubai, UAE
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-lg text-white font-Plus-Jakarta-Sans font-[600]">
              Call to us
            </h3>
            <p className="text-sm text-slate-50">Mon-Fri from 9am-7pm</p>
            <p className="text-sm text-slate-50 mt-1">+971 50 865 4179</p>
          </div>

          <div className="mt-8">
            {" "}
            <h3 className="text-md text-white font-Plus-Jakarta-Sans font-[600]">
              Chat to us
            </h3>
            <p className="text-sm text-slate-50">
              Our friendly team is here to help
            </p>
            <p className="text-sm text-slate-50">
              info@insightvision.marketing
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-md text-white font-Plus-Jakarta-Sans font-[600]">
              Social media
            </h3>
            <div className="flex justify-start gap-4 mt-3">
              {social.map((icon, idx) => (
                <div key={idx}>{icon}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-x-7 gap-y-8 ">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Page;

const Form = () => {
  return (
    <>
      <div className="w-full">
        <label>First Name</label>
        <input
          className="text-sm mt-1 w-full border bg-[#f1f0fb] border-slate-400/40 rounded-md px-3 block py-[.7rem]"
          placeholder="First name"
        />
      </div>
      <div className="w-full">
        <label>Last Name</label>
        <input
          className="text-sm mt-1 w-full border bg-[#f1f0fb] border-slate-400/40 rounded-md px-3 block py-[.7rem]"
          placeholder="Last name"
        />
      </div>
      <div className="w-full col-span-2">
        <label>Phone</label>
        <PhoneInput
          id="phone"
          className="mt-1"
          onChange={(val) => console.log(val)}
        />
      </div>
      <div className="w-full col-span-2">
        <label>Email</label>
        <input
          type={"email"}
          className="text-sm mt-1 w-full border bg-[#f1f0fb] border-slate-400/40 rounded-md px-3 block py-[.7rem]"
          placeholder="you@email.com"
        />
      </div>
      <div className="w-full col-span-2">
        <label>Message</label>
        <textarea
          rows={6}
          className="text-sm mt-1 w-full resize-none bg-[#f1f0fb] border border-slate-400/40 rounded-md px-3 block py-[.7rem]"
          placeholder="Leave us a message"
        />
      </div>
      <div className="col-span-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
        <button className="w-full cursor-pointer mt-8 py-3 rounded-lg bg-Palette-20 text-slate-50">
          Send message
        </button>
      </div>
    </>
  );
};
