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
  const webServices = [
    {
      title: "E-commerce Solutions",
      description:
        " We build secure, scalable, and user-friendly online stores that make shopping easy and drive sales.",
      img: "https://images.unsplash.com/photo-1688561807440-8a57dfa77ee3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-2",
    },
    {
      title: "Website Maintenance & Support",
      description:
        " Keep your website running smoothly with regular updates, security checks, and ongoing technical support.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1",
    },
    {
      title: "SEO-Optimized Development",
      description:
        " Our code is built with SEO best practices to help your website rank higher and get discovered faster.",
      img: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "",
    },
    {
      title: "Performance & Speed Optimization",
      description:
        " We fine-tune your website to load faster and perform better, ensuring a seamless user experience.",
      img: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "",
    },
    {
      title: "UI/UX Design Integration",
      description:
        " We combine smart design with intuitive navigation to create user experiences that keep visitors engaged.",
      img: "https://images.unsplash.com/photo-1653647054667-c99dc7f914ef?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "",
    },
    {
      title: "Content Management Systems (CMS)",
      description:
        " Easily manage your website content with powerful, flexible CMS solutions like WordPress, Webflow, or Shopify.",
      img: "https://neilpatel.com/wp-content/uploads/2023/05/Best_content_management_system3.jpg",
      class: "",
    },
    {
      title: "API Integration & Third-Party Services",
      description:
        "We connect your website with the tools you use—payment gateways, CRMs, analytics, and more—for smooth automation and functionality.",
      img: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-2",
    },
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
      <HeroSection
        colorText={"Fast, Modern, and Scalable"}
        title={"Building Fast, Modern, and Scalable Websites"}
        description={desc}
        img={
          "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <TechStackIcon icons={icons} />
      <Services
        arr={webServices}
        highlightText={"Services"}
        heading={"Our Services"}
      />
      <AccordionDemo accData={accordionData} />
      <CTO
        heading="Let’s Build a Website That Works for You"
        description="Fast, modern, and built to grow—start your web journey with us today."
      />
    </>
  );
};

export default Page;
