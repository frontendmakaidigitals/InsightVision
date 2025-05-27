import React from "react";
import {
  Users,
  ShieldCheck,
  LayoutDashboard,
  ClipboardList,
  LineChart,
  Megaphone,
  MessageSquareMore,
  FileText,
  FileCheck2,
  Zap,
  AlarmClock,
  UserCheck,
  Link,
  BellRing,
  Repeat2,
  GaugeCircle,
  CircleCheckBig,
} from "lucide-react";

const sections = [
  {
    title: "Smart Lead Management",
    cta: "Optimize Lead Management with MILES CRM",
    features: [
      {
        title: "Auto-Fetch Leads",
        icon: Zap,
        description:
          "Instantly pull in leads from platforms, campaigns, or portals without manual entry.",
      },
      {
        title: "Auto Assigning",
        icon: UserCheck,
        description:
          "Automatically distribute leads to the right team members based on custom rules.",
      },
      {
        title: "Lead Prioritization",
        icon: GaugeCircle,
        description:
          "Identify and focus on high-potential leads with smart scoring and ranking.",
      },
    ],
    img: "Leads.png",
    desc: "MILES CRM’s Smart Lead Management helps you turn more leads into customers faster and easier. It automatically collects leads from platforms, so you don`t have to do it manually. Leads are quickly assigned to the right team members, and the system highlights the most promising ones using smart scoring. If any lead goes cold, MILES tracks it and helps you follow up or reassign it to keep things moving. All your lead info is stored in one easy-to-use dashboard. \n You`ll get instant alerts for new leads, follow-ups, and meetings—so you never miss a chance to close a deal. With built-in lead source tracking and faster response times, MILES CRM helps you grow your sales and make better decisions.",
  },
  {
    title: "Team Collaboration & Hierarchy",
    cta: "Boost Team Productivity with MILES CRM",
    features: [
      {
        title: "Structured Team Hierarchy",
        icon: Users,
        description:
          "Define roles, departments, and reporting structure clearly.",
      },
      {
        title: "Role-Based Access",
        icon: ShieldCheck,
        description:
          "Give team members tailored access based on responsibilities.",
      },
      {
        title: "Dedicated Dashboards",
        icon: LayoutDashboard,
        description: "Custom dashboards for managers and agents.",
      },
      {
        title: "In-System Collaboration",
        icon: MessageSquareMore,
        description:
          "Share notes, assign tasks, and track updates within the CRM.",
      },
      {
        title: "User Activity Logs",
        icon: ClipboardList,
        description: "Transparent tracking of user actions for accountability.",
      },
    ],
    img: "Team.png",
    desc: "MILES CRM’s Team Collaboration & Hierarchy helps your team work better together. You can easily set up who reports to whom, organize departments, and give each person the right level of access based on their role. Managers and agents get their own dashboards to see what matters most to them. Team members can share notes, assign tasks, and update each other directly in the CRM, so everything stays in one place. \n You can track what each user is doing, see how the team is performing, and send out announcements or updates to everyone. With MILES CRM, your team stays organized, connected, and focused on results.",
  },
  {
    title: "MIS – Deal Closure & Commission Management",
    cta: "Deal Closure with MILES CRM",
    features: [
      {
        title: "End-to-End Deal Monitoring",
        icon: FileText,
        description: "Track deal progress from agent to commission release.",
      },
      {
        title: "Approval Hierarchy",
        icon: CircleCheckBig,
        description:
          "Multi-step approvals for both primary and secondary deals.",
      },
      {
        title: "KYC Document Management",
        icon: FileCheck2,
        description: "Collect and verify customer documents in-system.",
      },
      {
        title: "Role-Based Control",
        icon: ShieldCheck,
        description: "Access is limited based on user roles.",
      },
    ],
    img: "Dashboard.png",
    desc: "MILES CRM’s Deal Closure & Commission Management makes it easy to track every step of the sales process—from deal creation to final commission payout. You can monitor deal progress, manage approvals for primary and secondary deals, and keep everything secure with role-based access. The system also lets you collect and verify all customer KYC documents in one place. \n With automated commission workflows, commissions are released quickly after approvals, saving time and reducing errors. MILES CRM helps you close deals faster, stay compliant, and manage commissions smoothly—all in one easy-to-use platform.",
  },
];

const CRMInsights = () => {
  return (
    <div className={`pb-32 pt-20 relative`}>
      <img
        src={"CRM/Background.jpg"}
        className="w-full h-full object-cover absolute inset-0"
      />
      <div
        className="absolute inset-0 w-full h-full bg-gradient-to-b 
          from-[#f1f0fb] from-[5%] 
          via-transparent via-[95%] 
          to-[#f1f0fb] to-[100%]"
      />

      <div className="container relative z-10">
        <h1 className="text-4xl lg:text-5xl text-[#310115]">CRM Insights</h1>

        <div className=" mt-2">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-4 ${index !== sections.length - 1 ? " py-10 pb-10 border-b border-slate-900/30" : "py-10  "}`}
            >
              <div
                className={`${index % 2 === 1 ? "order-2 lg:order-1" : "order-1 lg:order-2"}`}
              >
                <h3 className="text-2xl lg:text-4xl max-w-lg text-pink-950 font-[600] font-Plus-Jakarta-Sans">
                  <span className="mr-3 text-5xl text-[#40012e] font-DM-Sans">
                    0{index + 1}
                  </span>
                  {section.title}
                </h3>
                <p className="mt-5">{section.desc}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-x-3">
                  {section.features.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                      <h3
                        key={idx}
                        className="mb-3 text-indigo-950 bg-white  hover:bg-slate-500 hover:text-slate-50 transition-all duration-200 p-3 rounded-lg flex gap-3 items-start"
                      >
                        <Icon className="" size={"24"} /> {feature.title}
                      </h3>
                    );
                  })}
                </div>
              </div>
              <div
                className={`${index % 2 === 1 ? "order-2 lg:order-2" : "order-2 lg:order-1"}`}
              >
                <div className=" h-full rounded-xl overflow-hidden">
                  <img
                    src={`CRM/${section.img}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CRMInsights;
