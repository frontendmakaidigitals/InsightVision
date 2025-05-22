"use client";
import React from "react";
import {
  ShieldCheck,
  Users,
  LayoutDashboard,
  ClipboardList,
  LineChart,
  Megaphone,
  MessageSquareMore,
} from "lucide-react";

const teamCollaborationFeatures = [
  {
    title: "Structured Team Hierarchy",
    description: "Define roles, departments, and reporting structure clearly.",
    icon: Users,
  },
  {
    title: "Role-Based Access",
    description: "Give team members tailored access based on responsibilities.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Dashboards",
    description: "Custom dashboards for managers and agents.",
    icon: LayoutDashboard,
  },
  {
    title: "In-System Collaboration",
    description: "Share notes, assign tasks, and track updates within the CRM.",
    icon: MessageSquareMore,
  },
  {
    title: "User Activity Logs",
    description: "Transparent tracking of user actions for accountability.",
    icon: ClipboardList,
  },
  {
    title: "Performance Tracking",
    description: "Compare team and individual performance in real time.",
    icon: LineChart,
  },
  {
    title: "Announcements",
    description: "Broadcast news, updates, and goals directly within the CRM.",
    icon: Megaphone,
  },
];

const TeamCollaborationSection = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
          Team Collaboration & Hierarchy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamCollaborationFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-slate-200 rounded-xl p-5">
                <div className="bg-indigo-200 rounded-lg w-fit p-2">
                  <Icon size={"34"} />
                </div>
                <div className="mt-10">
                  <h3 className="text-xl font-[600]">{feature.title}</h3>
                  <p className="mt-2">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamCollaborationSection;
