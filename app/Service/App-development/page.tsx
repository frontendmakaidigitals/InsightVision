import React from "react";
import HeroSection from "../(Service Sectinons)/HeroSection";
import { AccordionDemo } from "@/app/App_Chunks/faq";
import TechStackIcon from "../(Service Sectinons)/TechStackIcon";
import CTO from "@/app/About-us/(sections)/CTO";
import Services from "../(Service Sectinons)/services";
const Page = () => {
  const icons = [
    "/App-development/kotlin.svg",
    "/App-development/flutter.svg",
    "/App-development/appwrite.svg",
    "/App-development/supabase.svg",
    "/App-development/swift.svg",
    "/App-development/gatsby.svg",
  ];
  const desc =
    "We build easy-to-use, reliable apps that help your business grow and connect better with your customers. Whether you're starting from scratch or improving an existing app, our team is here to guide you through every step. We focus on creating apps that not only look great but also work fast, are bug-free, and are simple for users to navigate. \n Our goal is to make sure your app supports your business goals—whether that means increasing sales, improving communication, or offering a better user experience. From small startups launching their first product to large companies looking to expand their digital presence, we build mobile and web apps that are made to perform, scale, and succeed.";
  const appDevelopmentServices = [
    {
      title: "iOS & Android App Development",
      description:
        "  We build high-performance native and cross-platform apps tailored to your users and business needs. ",
      img: "https://images.unsplash.com/photo-1650636353551-1275516077b6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:col-span-2",
    },
    {
      title: "UI/UX Design Integration",
      description:
        "  Intuitive, engaging interfaces that deliver a seamless experience from the first tap to the last.",
      img: "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:col-span-1",
    },
    {
      title: "Backend & API Development",
      description:
        "  Powerful backend systems and custom APIs that keep your app running smoothly and securely.",
      img: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: "App Deployment & Support",
      description:
        "  We handle the full deployment process and provide ongoing support to keep your app updated and bug-free. ",
      img: "https://images.unsplash.com/photo-1657868203197-627e5ab86e19?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: "Performance & Speed Optimization",
      description:
        "  We ensure your app loads fast, responds instantly, and delivers a smooth experience at all times. ",
      img: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: "Third-Party Integrations",
      description:
        "  Connect your app with payment gateways, maps, analytics, CRMs, and more for a complete solution.",
      img: "https://images.unsplash.com/photo-1642261366979-704a073bef4b?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: " App Maintenance & Updates",
      description:
        " We offer regular updates, performance checks, and new feature rollouts to keep your app fresh and functional.",
      img: "https://images.unsplash.com/photo-1691073112675-9685bc6779bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:col-span-2",
    },
  ];
  const accordionData = [
    {
      title: "How long does it take to develop an app?",
      description:
        "The timeline for app development depends on the complexity and features of the app. We provide a detailed timeline after understanding your requirements.",
    },
    {
      title: "Do you provide ongoing maintenance and support?",
      description:
        "Yes, we offer post-launch maintenance, bug fixes, updates, and performance optimization to ensure your app runs smoothly.",
    },
    {
      title: "Do you help with app store submissions?",
      description:
        "Yes, we assist with the submission process to both the Apple App Store and Google Play Store to ensure a smooth launch.",
    },
    {
      title: "How do you ensure app security?",
      description:
        "We follow best practices for security, including data encryption, secure code practices, and regular security testing, to protect your app and user data.",
    },
    {
      title: "Can you integrate third-party tools or APIs into my app?",
      description:
        "Yes, we can integrate third-party tools, APIs, and services like payment gateways, CRMs, analytics tools, and more.",
    },
  ];
  return (
    <>
      <HeroSection
        colorText={"Concept to Code"}
        title={"From Concept to Code – We Build It All"}
        description={desc}
        img={
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <TechStackIcon icons={icons} />
      <Services
        arr={appDevelopmentServices}
        highlightText={"App Development & Maintenance"}
        heading={"Full-Cycle App Development & Maintenance"}
      />
      <AccordionDemo accData={accordionData} />
      <CTO
        heading="Ready to Launch Your App?"
        description="Whether you’re building from scratch or upgrading an existing app, we’re here to help you create something powerful, user-friendly, and built for growth. Let’s bring your idea to life."
      />
    </>
  );
};

export default Page;
