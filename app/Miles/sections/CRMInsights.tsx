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
      {
        title: "Track & Reassign Inactive Leads",
        icon: Repeat2,
        description:
          "Monitor cold leads and reassign them to boost conversions.",
      },
      {
        title: "Centralized Lead Database",
        icon: LayoutDashboard,
        description:
          "All lead info, history, and interactions in one accessible dashboard.",
      },
      {
        title: "Follow-Up Reminders",
        icon: AlarmClock,
        description: "Timely alerts to follow up and never miss a meeting.",
      },
      {
        title: "Faster Response Time",
        icon: Zap,
        description: "Respond instantly and close deals quicker.",
      },
      {
        title: "Lead Source Tracking",
        icon: Link,
        description: "Track where your best leads are coming from.",
      },
      {
        title: "Instant Alerts",
        icon: BellRing,
        description:
          "Get notified for lead assignments, meetings, follow-ups, and churn activities.",
      },
    ],
    img: "Leads.png",
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
      {
        title: "Performance Tracking",
        icon: LineChart,
        description: "Compare team and individual performance in real time.",
      },
      {
        title: "Announcements",
        icon: Megaphone,
        description:
          "Broadcast news, updates, and goals directly within the CRM.",
      },
    ],
    img: "Team.png",
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
      {
        title: "Commission Workflow Automation",
        icon: Zap,
        description: "Auto-release commissions post-approval.",
      },
    ],
    img: "Dashboard.png",
  },
];

const CRMInsights = () => {
  return (
    <div className="my-32">
      <div className="container ">
        <h1 className="text-2xl lg:text-5xl font-[500] text-[#310115]">Heading</h1>

        <div className=" mt-2">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index !== sections.length - 1 ? " py-8 pb-4 border-b border-slate-900/10" : "py-8  "}`}
            >
              <div className={`${index % 2 === 1 ? "order-1" : "order-2"}`}>
                <h3 className="text-3xl max-w-sm text-pink-950 font-[500]">
                  {section.title}
                </h3>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  atque quaerat dignissimos nobis id ullam. Iusto accusantium
                  provident{" "}
                </p>

                <div className="grid grid-cols-2 mt-10 gap-2">
                  {section.features.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                      <h3
                        key={idx}
                        className="mb-5 text-indigo-950 bg-white p-3 rounded-lg flex gap-3 items-start"
                      >
                        <Icon className="" size={"24"} /> {feature.title}
                      </h3>
                    );
                  })}
                </div>
              </div>
              <div className={`${index % 2 === 1 ? "order-2" : "order-1"}`}>
                <div className="h-full overflow-hidden rounded-xl">
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
