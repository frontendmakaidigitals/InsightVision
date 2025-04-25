import React from "react";
import HeroSection from "../(Service Sectinons)/HeroSection";
import { AccordionDemo } from "@/app/App_Chunks/faq";
import TechStackIcon from "../(Service Sectinons)/TechStackIcon";
import CTO from "@/app/About-us/(sections)/CTO";
import Services from "../(Service Sectinons)/services";
const Page = () => {
  const icons = [
    "/Web-developement/js.svg",
    "/Web-developement/reactjs.svg",
    "/Web-developement/vitejs.svg",
    "/Web-developement/nextjs2.svg",
    "/Web-developement/wordpress.svg",
    "/Web-developement/python.svg",
  ];
  const desc =
    "We build modern, scalable websites that don’t just look great—they perform. Whether you need a stunning portfolio, a dynamic marketing site, or a full-featured web app, we deliver solutions that are responsive, fast, and user-friendly. \n Our approach combines sleek UI/UX design, robust backend development, and the latest web technologies to create seamless digital experiences. Every site is built with performance, accessibility, and SEO in mind—so your business can grow with confidence. \n \n From concept to deployment, we handle it all—clean code, smooth animations, CMS integration, and more. Your vision, made real on the web.";
  return (
    <>
      <HeroSection
        colorText={"Fast, Modern, and Scalable"}
        title={"Building Fast, Modern, and Scalable Websites"}
        description={desc}
        img={
          "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <TechStackIcon icons={icons} />
      <Services />
      <AccordionDemo />
      <CTO />
    </>
  );
};

export default Page;
