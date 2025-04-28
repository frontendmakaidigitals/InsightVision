import React from "react";
import HeroSection from "../(Service Sectinons)/HeroSection";
import { AccordionDemo } from "@/app/App_Chunks/faq";

import CTO from "@/app/About-us/(sections)/CTO";
import Services from "../(Service Sectinons)/services";
const Page = () => {
  
  const desc =
    "Your brand is more than just a logo or a catchy slogan — it’s the complete experience people have when they interact with your business. It’s how they feel, what they remember, and why they choose you over others. Through powerful branding and strategic advertising, we help businesses create strong, meaningful connections with their audiences. We start by understanding your story, values, and goals, then craft a brand identity that’s authentic, memorable, and positioned for growth. \n But it doesn’t stop there. With smart, targeted advertising campaigns — both online and offline — we make sure your brand message reaches the right people at the right time, driving awareness, engagement, and sales. ";
  const Marketing = [
    {
      title: "Brand Strategy Development",
      description:
        " We craft a clear, powerful brand strategy that defines your voice, vision, and market positioning.",
      img: "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:col-span-2",
    },
    {
      title: "Logo & Visual Identity Design",
      description:
        " Memorable logos, color palettes, and brand elements that reflect who you are and resonate with your audience.",
      img: "https://images.unsplash.com/photo-1620912189865-1e8a33da4c5e?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:col-span-1",
    },
    {
      title: "Brand Messaging & Copywriting",
      description:
        " We create strong brand stories, taglines, and messaging frameworks that speak directly to your customers.",
      img: "https://images.unsplash.com/photo-1504691342899-4d92b50853e1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: "Digital Advertising (Google & Social Ads)",
      description:
        "  Targeted ad campaigns that drive visibility, leads, and sales with clear ROI tracking.",
      img: "https://images.unsplash.com/photo-1654277041042-8927699fcfd2?q=80&w=2962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: " Creative Ad Design",
      description:
        "  Bold, scroll-stopping ad creatives that capture attention and inspire action.",
      img: "https://images.unsplash.com/photo-1603460133212-150a8b1ef61d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: "Print & Outdoor Advertising",
      description:
        "   Billboards, brochures, event banners, and more — traditional media solutions to amplify your brand presence. ",
      img: "https://images.unsplash.com/photo-1672353850816-b73a62cc0a5c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: "Advertising Campaign Strategy",
      description:
        " Strategic planning for high-impact advertising campaigns across digital, print, and social platforms.",
      img: "https://images.unsplash.com/photo-1666350383997-a779fe1cff4a?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:col-span-2",
    },
  ];
  const accordionData = [
    {
      title: "What is branding, and why is it important",
      description:
        "Branding is the process of creating a unique identity for your business that reflects your values, mission, and vision. It includes elements like your logo, color palette, typography, and messaging. Strong branding helps differentiate your business in the market, builds trust with your audience, and drives customer loyalty.",
    },
    {
      title: "What is the difference between branding and logo design?",
      description:
        "Logo design is a component of branding, but branding is much more comprehensive. A logo is the visual representation of your brand, but branding encompasses your entire business identity, including your brand's voice, values, messaging, and customer experience. Branding ensures consistency across all touchpoints, from your website to your marketing materials and customer interactions.",
    },
    {
      title: "How long does the branding process take?",
      description:
        "The timeline for branding varies depending on the scope and complexity of the project. On average, a complete brand identity project (including logo design, brand guidelines, and collateral) can take anywhere from 4 to 8 weeks. We’ll work closely with you to set expectations and ensure a timeline that suits your needs.",
    },
    {
      title: "Can you help with a brand refresh or rebranding?",
      description:
        "Yes, we specialize in both brand refreshes and complete rebranding projects. Whether you need a small update to your existing brand or a full rebranding to reposition your business in the market, we can help you navigate the process and create a fresh identity that better aligns with your goals.",
    },
    {
      title:
        "What’s the difference between brand identity and brand guidelines?",
      description:
        "Brand identity refers to the visual elements and messaging that represent your brand, such as your logo, color scheme, typography, and overall aesthetic. Brand guidelines, on the other hand, are a set of rules and standards for how to use these elements consistently across all marketing materials, websites, and social media to ensure your brand is represented accurately.",
    },
  ];
  return (
    <>
      <HeroSection
        colorText={"Build a Brand"}
        title={"Build a Brand People Remember. Create Campaigns That Deliver."}
        description={desc}
        img={
          "https://images.unsplash.com/photo-1636247499734-893da2bcfc1c?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />

      <Services
        arr={Marketing}
        highlightText={"Craft Your Identity"}
        heading={"Craft Your Identity, Amplify Your Voice"}
      />
      <AccordionDemo accData={accordionData} />
      <CTO
        heading="Ready to Power Your Brand with Content?"
        description="Let’s create stories and strategies that bring your brand to life and drive real business growth."
      />
    </>
  );
};

export default Page;
