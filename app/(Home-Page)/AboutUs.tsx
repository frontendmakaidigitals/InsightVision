import React from "react";
import { TrendingUp, Sparkles, ClipboardList, Headset } from "lucide-react";
const AboutUs = () => {
  const benefits = [
    {
      title: "Proven Expertise",
      icon: <TrendingUp className="size-5 text-indigo-600" />,
    },
    {
      title: "Custom Strategies",
      icon: <Sparkles className="size-5 text-indigo-600" />,
    },
    {
      title: "Clear Reporting",
      icon: <ClipboardList className="size-5 text-indigo-600" />,
    },
    {
      title: "24/7 Support",
      icon: <Headset className="size-5 text-indigo-600" />,
    },
  ];
  return (
    <div className="pt-14 mt-32 bg-gray-200">
      <div className="grid grid-cols-2 gap-6 container ">
        <div className="h-[300px] relative lg:h-[500px] ">
          <div className="absolute overflow-hidden w-full h-[300px] lg:h-[600px] bg-slate-50 -top-32 left-0">
            <img
              className="w-full h-full object-cover"
              src={
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={""}
            />
          </div>
        </div>
        <div>
          <p className="text-indigo-400 font-bold">Who We Are</p>
          <h2 className="text-2xl mt-2 leading-[1.2] font-[700] lg:text-5xl font-Plus-Jakarta-Sans">
            Transforming{" "}
            <span className="text-indigo-800">Idea into Digital Reality</span>
          </h2>

          <p className="mt-5">
            We’re more than just a marketing agency. At Insight Vision, we’re
            your growth partners. With a deep understanding of digital
            landscapes, creative strategies, and technology, we specialize in
            turning ideas into results.
          </p>
          <ul className="grid grid-cols-2 gap-3 mt-6">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="text-sm">
                <div className="flex gap-2">
                  <div className="">{benefit.icon}</div>
                  <p>{benefit.title}</p>
                </div>
              </li>
            ))}
          </ul>

          <button className="mt-7 px-6 py-3 bg-indigo-500 text-indigo-50 rounded-full">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
