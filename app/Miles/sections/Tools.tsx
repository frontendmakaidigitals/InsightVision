"use client";
import React from "react";
import Link from "next/link";
import {
  SealCheck,
  ShoppingCartSimple,
  Headset,
  SealPercent,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
const groupedFeatures = [
  {
    category: "Marketing Tools",
    features: [
      { title: "360° Lead Profiles" },
      { title: "Lead Segmentation" },
      { title: "WhatsApp Templates" },
      { title: "Marketing & Community Lead Management" },
      { title: "Custom Reports" },
    ],
    icon: <ShoppingCartSimple size={32} color="#3b5bdb" />,
    borderColor: "#9ED7FF",
  },
  {
    category: "Sales Tools",
    features: [
      { title: "Lead Management" },
      { title: "Lead Follow-Up Tracking" },
      { title: "Deal Submission & Tracking" },
      { title: "Performance Dashboards" },
      { title: "One-Click Follow-Ups" },
    ],
    icon: <SealPercent size={32} color="#3b5bdb" />,
    borderColor: "#00E7DB",
  },
  {
    category: "Support",
    features: [
      {
        title: "24x7 Dedicated Support",
        description: "Round-the-clock assistance from our expert support team",
      },
      {
        title: "Fast Issue Resolution",
        description: "Ensuring system uptime and prompt troubleshooting",
      },
      {
        title: "Onboarding & Technical Help",
        description: "Guidance and support whenever you need it",
      },
    ],
    icon: <Headset size={32} color="#3b5bdb" />,
    borderColor: "#FF5D93",
  },
];

const Tools = () => {
  return (
    <div className="bg-[#655e67] overflow-hidden py-24">
      <div className="container ">
        <h1 className="text-4xl lg:text-5xl text-slate-50 text-center">
          Features of MILES CRM
        </h1>
      </div>
      <div className="grid grid-cols-1 mt-20 lg:grid-cols-3 gap-5 container">
        {groupedFeatures.map((group, index) => (
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: "0%" }}
            transition={{
              duration: 1,
              delay: 0.03 * index,
              ease: [0.19, 1, 0.22, 1],
            }}
            viewport={{ once: true }}
            key={index}
            className={`bg-purple-50 border-t-8 rounded-xl p-7 flex flex-col justify-between items-start `}
            style={{ borderTopColor: group.borderColor }}
          >
            <div>
              <div className="bg-indigo-100 w-fit p-2 rounded-xl">
                {group.icon}
              </div>
              <div>
                <h2 className="text-2xl flex items-center gap-3 font-[600] mt-6">
                  {group.category}
                </h2>
                <div className="mt-5 ">
                  {group.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex text-lg items-start gap-2 mb-4"
                    >
                      <div className="mt-[4px]">
                        <SealCheck size={20} color="green" weight="fill" />
                      </div>
                      <p>{feature.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/Contact" className="mt-5">
              <button className=" bg-Palette-10 text-white px-4 py-[.65rem]  rounded-xl">
                Get a free trial
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
