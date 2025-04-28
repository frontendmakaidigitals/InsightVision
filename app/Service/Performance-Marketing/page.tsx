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
    "Performance marketing is all about outcomes — not just clicks, but real business growth. We help you reach the right audience, generate high-quality leads, and maximize your return on investment through targeted, data-driven campaigns. Whether it's paid ads, social media campaigns, or conversion optimization, our focus is on strategies that deliver measurable, trackable results. We work closely with you to create campaigns that are cost-effective, scalable, and aligned with your business goals, so every dollar you spend moves you closer to success.";
  const Marketing = [
    {
      title: "Paid Social Advertising",
      description:
        " Highly targeted ad campaigns on platforms like Instagram, Facebook, LinkedIn, and TikTok to drive engagement and sales.",
      img: "https://www.fastcapital360.com/wp-content/uploads/2021/03/featured-15.jpg",
      class: "col-span-1 lg:col-span-2",
    },
    {
      title: "  Search Engine Marketing (SEM)",
      description:
        "   Google Ads and Bing Ads management to capture high-intent audiences actively searching for your products or services.",
      img: "https://images.unsplash.com/photo-1674027326254-88c960d8e561?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:col-span-1",
    },
    {
      title: " Conversion Rate Optimization (CRO)",
      description:
        "   We optimize your landing pages, websites, and funnels to turn more visitors into paying customers.",
      img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: "Retargeting Campaigns",
      description:
        " Stay top of mind and recover lost leads with smart retargeting strategies across multiple channels.",
      img: "https://images.unsplash.com/photo-1580085981757-2bb1e47d372b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: "  Analytics & Reporting",
      description:
        "  Short-form videos and creative reels are designed to boost your engagement on Instagram, TikTok, and more.",
      img: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: "A/B Testing & Optimization",
      description:
        "  We constantly test and refine your campaigns to improve performance, reduce costs, and scale success. ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44_K6gqjwbZg2AW3YcOARl1nEJFVRQW2OTg&s",
      class: "col-span-1 lg:",
    },
    {
      title: "Editing & Post-Production",
      description:
        " Full editing services to deliver polished, professional photos and videos ready for any platform. ",
      img: "https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:col-span-2",
    },
  ];
  const accordionData = [
    {
      title: "Do you provide video and photo editing services?",
      description:
        "Yes! All of our photography and videography services include professional editing. For photos, this may involve color correction, retouching, cropping, and background removal. For videos, it includes cutting, transitions, sound editing, color grading, and adding any necessary effects or graphics.",
    },
    {
      title: "Can I request specific styles or themes for my photos or videos?",
      description:
        "Absolutely! We work closely with you to understand your vision, brand, and desired aesthetic.",
    },
    {
      title: "Do you provide drone services for video or photography?",
      description:
        "Yes! We offer professional drone services for both photography and videography.",
    },
    {
      title: "Do you offer services for businesses with small budgets?",
      description:
        "Yes, we understand that every business has different needs and budgets. We offer flexible packages that can be tailored to suit various budgets without compromising on quality.",
    },
    {
      title: "Will you provide a consultation before the shoot?",
      description:
        "Yes! Before every shoot, we offer a consultation to discuss your objectives, the look and feel you want to achieve, and any specific details you want to include.",
    },
  ];
  return (
    <>
      <HeroSection
        colorText={"Performance Marketing"}
        title={"Drive Real Results with Performance Marketing"}
        description={desc}
        img={
          "https://www.appier.com/hubfs/Imported_Blog_Media/Why-Performance-Marketing-is-More-Relevant-Than-Ever.jpg"
        }
      />

      <Services
        arr={Marketing}
        highlightText={"Focused Marketing"}
        heading={"Results-Focused Marketing Services"}
      />
      <AccordionDemo accData={accordionData} />
      <CTO
        heading="Ready to See Real Growth?"
        description="Let’s build high-performing campaigns that drive traffic, leads, and real business results."
      />
    </>
  );
};

export default Page;
