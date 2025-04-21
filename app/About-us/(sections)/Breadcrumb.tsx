"use client";
import React from "react";
import Link from "next/link";
const Breadcrumb = () => {
  return (
    <div className="py-12 flex flex-col  relative bg-Palette-10/70 justify-center items-center">
      <img
        src={
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt={"about us image"}
        className="absolute opacity-50 inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10">
        <p className="text-2xl text-center text-slate-50 lg:text-4xl font-Plus-Jakarta-Sans font-[600]">
          About Us
        </p>
        <p className="mt-2 text-center">
          <Link href={"/"} className="text-indigo-700 hover:underline">
            <span>Home</span>
          </Link>{" "}
          / <span className="text-slate-50">About-us</span>
        </p>
      </div>
    </div>
  );
};

export default Breadcrumb;
