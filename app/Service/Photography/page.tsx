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
    "In today’s visual world, powerful photography and videography are essential for building trust, capturing attention, and telling your brand’s story. We offer professional photography and videography services that bring your ideas to life with creativity, precision, and style. Whether you need stunning product photos, eye-catching social media content, corporate videos, or full event coverage, we focus on creating visuals that not only look beautiful but also deliver a message.  \n  Our team handles everything—from concept development and shooting to editing and post-production—ensuring every project is polished, professional, and aligned with your brand’s identity. Whether you're a startup looking to build your visual presence or an established brand aiming to refresh your content, we create photos and videos that help you connect with your audience, grow your brand, and leave a lasting impression.";
  const seoServices = [
    {
      title: "Brand Photography",
      description:
        " Professional photos that showcase your brand’s story, products, people, and values. ",
      img: "https://images.unsplash.com/photo-1647907474660-a2ea7a000744?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:col-span-2",
    },
    {
      title: "  Product Photography",
      description:
        "   High-quality product shots that highlight every detail and drive more sales.",
      img: "https://images.unsplash.com/photo-1695073621086-aa692bc32a3d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:col-span-1",
    },
    {
      title: "Event Photography",
      description:
        "  Capture key moments at launches, conferences, and corporate events with natural, powerful imagery.",
      img: "https://images.unsplash.com/photo-1614607653708-0777e6d003b8?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: "Corporate Videos",
      description:
        "Professional brand videos that tell your company’s story and build credibility. ",
      img: "https://images.unsplash.com/photo-1654723011673-86b0eae447a8?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: " Social Media Content",
      description:
        "  Short-form videos and creative reels are designed to boost your engagement on Instagram, TikTok, and more.",
      img: "https://images.unsplash.com/photo-1472393365320-db77a5abbecc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: "Promotional Videos ",
      description:
        " High-impact videos to promote products, services, or special campaigns. ",
      img: "https://images.unsplash.com/photo-1664277497086-e21115efbbf4?q=80&w=2963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: "Editing & Post-Production",
      description:
        " Full editing services to deliver polished, professional photos and videos ready for any platform. ",
      img: "https://images.unsplash.com/photo-1627244714766-94dab62ed964?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        colorText={"Capture"}
        title={"Capture Your Brand’s Stories"}
        description={desc}
        img={
          "https://images.unsplash.com/photo-1704655318412-91c859b25632?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />

      <Services
        arr={seoServices}
        highlightText={"Visual Services"}
        heading={"Creative Visual Services for Every Need"}
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
