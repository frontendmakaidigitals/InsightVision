"use client";
import React from "react";
import {
  SealCheck,
  ShoppingCartSimple,
  Headset,
  SealPercent,
} from "@phosphor-icons/react";
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
  },
];

const Tools = () => {
  return (
    <div className="bg-slate-950 py-14">
      <div className="container">
        <h1 className="text-2xl lg:text-5xl font-[500] text-slate-50 text-center">
          Features of MILES CRM
        </h1>
      </div>
      <div className="grid grid-cols-1 mt-14 lg:grid-cols-3 gap-5 container">
        {groupedFeatures.map((group, index) => (
          <div key={index} className="bg-purple-100 rounded-xl p-7">
            <h2 className="text-2xl flex items-center gap-3 font-[600]">
              {group.icon} {group.category}
            </h2>
            <div className="mt-8 ml-2">
              {group.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex text-lg items-center gap-2 mb-4"
                >
                  <SealCheck size={20} color="green" weight="fill" />
                  <p>{feature.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
