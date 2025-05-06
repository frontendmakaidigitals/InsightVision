"use client";
import React from "react";
import HeroSection from "./(Home-Page)/HeroSection";
import Service2 from "./(Home-Page)/Service2";
import Techstack from "./(Home-Page)/Techstack";
import HomeForm from "./(Home-Page)/HomeForm";
import Experience from "./(Home-Page)/Experience";
import { AccordionDemo } from "./App_Chunks/faq";
import { MarqueeLogo } from "./App_Chunks/MarqueeLogo";
import AboutUs from "./(Home-Page)/AboutUs";
import Industries from "./(Home-Page)/Industries";
import CTA from "./App_Chunks/CTA";

const Page = () => {
  const techTags = [
    "Website Developemnt",
    "Android Developement",
    "UX/Ui Design",
    "Graphics Design",
    "Photography",
    "Content Creation",
  ];
  const accordionData = [
    {
      title: "How long does it take to develop a website?",
      description:
        "The timeline for web development varies depending on the scope and complexity of your project. A simple website may take 2-6 weeks, while more complex sites with custom features can take more time. We’ll provide an estimated timeline during the planning phase.",
    },
    {
      title: "How much does it cost to build a website?",
      description:
        "The cost of web development depends on factors like the complexity of the site, the features you need, and the technologies used. Simple websites cost less, while complex sites with advanced features (e-commerce, custom integrations, etc.) may require a larger budget. Contact us for a personalized quote based on your project.",
    },
    {
      title: "Will my website be mobile-friendly?",
      description:
        "Yes, all websites we develop are responsive, meaning they will automatically adjust to look great on any device, from desktops to smartphones and tablets. We focus on delivering a good user experience on all screen sizes.",
    },
    {
      title: "Can you redesign my existing website?",
      description:
        "Yes, we can help revamp your current website with a fresh design, improved functionality, and better user experience. Whether you're looking for a complete different or small adjustments, we’ll work with you to bring your vision to life.",
    },
    {
      title: "Will I be able to update my website myself?",
      description:
        "Yes, if you choose a CMS-based website, you’ll be able to make content updates easily through a user-friendly admin panel. For custom websites, we provide a content management system or back-end interface to give you control over your website’s content.",
    },
  ];
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Service2 />
      <Industries />
      <Techstack />
      <Experience />
      <MarqueeLogo />
      <AccordionDemo accData={accordionData} />
      <HomeForm />
      <CTA />
      
    </>
  );
};

export default Page;
