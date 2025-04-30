import React from "react";
import Link from "next/link";
const CTA = () => {
  return (
    <div className="mb-16 mt-16">
      <div className="container py-14 relative  rounded-2xl ">
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-indigo-950/20" />
        <img
          className="w-full object-cover object-center  absolute top-0 left-0 h-full"
          src={
            "https://images.unsplash.com/photo-1579885487896-abc1a9ebb77b?q=80&w=2954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <div className="relative z-20">
          <h2 className="text-center text-slate-50 text-3xl lg:text-5xl font-Plus-Jakarta-Sans font-[300]">
            Let&apos;s Explore with us
          </h2>
          <p className="text-center text-slate-100 mt-3 text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            animi, illum, voluptatem magni reprehenderit{" "}
          </p>
          <div className="flex justify-center items-center">
            <Link href="/Contact">
              <button className="mt-5 cursor-pointer px-6 py-2 font-[600] hover:scale-[1.1] transition-all duration-200 cursor-pointerF font-Plus-Jakarta-Sans rounded-full bg-slate-100/40  backdrop-filter backdrop-blur-md text-indigo-50">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
