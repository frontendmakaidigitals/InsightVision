"use client";
import React, { useState } from "react";
import SliderForm from "@/app/App_Chunks/SliderForm";
import { PlugsConnected } from "@phosphor-icons/react";
const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div>
      <SliderForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <div className="container my-14 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 ">
        <div className="">
          <div className="border px-4 py-1 rounded-full border-Palette-30 w-fit flex gap-3 items-center ">
            <div className="bg-indigo-200 rounded-full p-2">
              <PlugsConnected weight="fill" size={"15"} />
            </div>
            <p>Seamless Integration</p>
          </div>

          <h1 className="text-4xl lg:text-7xl mt-10 text-indigo-950 ">
            Boost Efficiency, Automate Workflows, and Drive Growth
          </h1>

          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem culpa
            similique doloribus, soluta suscipit quae quo tempora aperiam
            adipisci at repudiandae sit odio velit dolores cupiditate corporis
            deleniti, tempore sapiente.
          </p>
          <button
            onClick={() => setIsFormOpen(true)}
            className="mt-10 bg-slate-300 hover:bg-slate-200 cursor-pointer px-6 rounded-md py-2"
          >
            Get Started
          </button>
        </div>

        {/* Hero Image */}

        <div>
          <div className="h-[350px] lg:h-[600px] overflow-hidden w-full  rounded-xl">
            <img
              className="h-full w-full object-cover rounded-xl"
              src={
                "https://images.unsplash.com/photo-1686749115547-897913fe1b61?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
