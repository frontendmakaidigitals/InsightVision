import React from "react";
import HeroSection from "../(Service Sectinons)/HeroSection";
import { AccordionDemo } from "@/app/App_Chunks/faq";
import TechStackIcon from "../(Service Sectinons)/TechStackIcon";
import CTO from "@/app/About-us/(sections)/CTO";
import Services from "../(Service Sectinons)/services";
const Page = () => {
  const icons = [
    "/social-media/facebook.svg",
    "/social-media/instagram.svg",
    "/social-media/twitter.png",
    "/social-media/messenger.svg",
    "/social-media/telegram.svg",
    "/social-media/Linkedin.svg",
  ];
  const desc =
    "We help businesses build a strong online presence, connect with the right audience, and turn followers into loyal customers. From content creation to paid ads, our team handles everything you need to grow on platforms like Instagram, Facebook, TikTok, LinkedIn, and more. Whether you're starting out or looking to boost your reach, we craft strategies that get real results. \n Our team combines creativity, data-driven insights, and industry best practices to craft campaigns that not only look great but also deliver measurable outcomes. From Instagram and Facebook to TikTok and LinkedIn, we ensure that your brand stands out, connects with the right people, and ultimately, grows.";
  const socialMediaServices = [
    {
      title: "Social Media Strategy",
      description:
        "  Custom strategies tailored to your business goals, audience, and brand voice.",
      img: "https://images.unsplash.com/photo-1702467852657-26c7a1d9fceb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:col-span-2",
    },
    {
      title: "Content Creation & Design",
      description:
        "  High-quality visuals, videos, and copy that capture attention and build engagement.",
      img: "https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:col-span-1",
    },
    {
      title: "Social Media Management",
      description:
        "  We handle daily posting, scheduling, and community management so you stay consistent.",
      img: "https://images.unsplash.com/photo-1724754608914-50503c85e111?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: " Paid Social Advertising",
      description:
        "  Targeted ad campaigns to grow your reach, drive traffic, and boost conversions. ",
      img: "https://images.unsplash.com/photo-1649933538653-5a37db85538c?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: "Influencer Marketing",
      description:
        "  We connect your brand with the right influencers for authentic promotion and exposure.",
      img: "https://images.unsplash.com/photo-1598583110306-4d8962f5cc8e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: "Analytics & Performance Reporting",
      description:
        "  Track your growth and results with easy-to-understand reports and insights. ",
      img: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: " Platform Optimization",
      description:
        " We optimize your profiles and content for better visibility, reach, and interaction.",
      img: "https://images.unsplash.com/photo-1686061592689-312bbfb5c055?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:col-span-2",
    },
  ];
  const accordionData = [
    {
      title: "Which social media platforms should my business be on?",
      description:
        "The best platforms depend on your business goals and target audience. We analyze your business and decide on which platforms you must target.",
    },
    {
      title: "How often should I post on social media?",
      description:
        "Consistency is key. The optimal posting frequency depends on the platform and your audience’s preferences.",
    },
    {
      title: "Do I need a big budget for social media marketing?",
      description:
        "Not necessarily! Organic strategies can be highly effective with creativity and time. You can start small and scale for paid campaigns as you see results.",
    },
    {
      title: "Can I handle my social media marketing, or do I need a professional?",
      description:
        "You can manage it yourself, but hiring professionals ensures expert strategy development and high-quality content creation.",
    },
    {
      title: "How long does it take to see results from social media marketing?",
      description:
        "Results vary based on your goals. Organic growth may take a few months, while paid ads can show results within days. Consistent effort and strategy deliver long-term success.",
    },
  ];
  return (
    <>
      <HeroSection
        colorText={"Smart Social Media"}
        title={"Grow Your Brand with Smart Social Media Marketing"}
        description={desc}
        img={
          "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <TechStackIcon icons={icons} />
      <Services
        arr={socialMediaServices}
        highlightText={"Succeed on Social Media"}
        heading={"Everything You Need to Succeed on Social Media"}
      />
      <AccordionDemo accData={accordionData} />
      <CTO
        heading="Ready to Take Your Social Media to the Next Level?"
        description="Let us help you grow your brand, reach your audience, and drive real results through powerful, strategic social media marketing. Whether you're just starting out or looking to scale, we’re here to make your brand stand out."
      />
    </>
  );
};

export default Page;
