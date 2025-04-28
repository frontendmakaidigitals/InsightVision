import React from "react";
import HeroSection from "../(Service Sectinons)/HeroSection";
import { AccordionDemo } from "@/app/App_Chunks/faq";

import CTO from "@/app/About-us/(sections)/CTO";
import Services from "../(Service Sectinons)/services";
const Page = () => {
  
  const desc =
    "Content marketing is the heart of building trust, attracting the right audience, and growing your business. We help you create valuable, engaging, and strategic content that speaks directly to your customers and drives real results. From blogs and articles to videos, social media content, and email newsletters, we craft every piece with a purpose — to educate, inspire, and convert. Whether you're looking to build brand authority, drive organic traffic, or nurture customer relationships, our content strategies are built to grow with you.";
  const Marketing = [
    {
      title: "Content Strategy Development",
      description:
        " We build a custom content roadmap tailored to your audience, goals, and brand voice. ",
      img: "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:col-span-2",
    },
    {
      title: "  Blog Writing & Articles",
      description:
        "   SEO-friendly blogs and articles that position your brand as an industry leader and drive organic traffic.",
      img: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:col-span-1",
    },
    {
      title: "  Website Copywriting",
      description:
        " Clear, compelling website copy that tells your story and converts visitors into customers. ",
      img: "https://images.unsplash.com/photo-1504691342899-4d92b50853e1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: "Email Marketing Content",
      description:
        "  Persuasive email campaigns that nurture leads, build loyalty, and drive conversions.",
      img: "https://images.unsplash.com/photo-1603539240352-8f2cce3257c4?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: " Video Scripts & Storytelling ",
      description:
        " We create powerful video scripts and brand storytelling content that connect emotionally with your audience.",
      img: "https://images.unsplash.com/photo-1560785219-cc81ab373cd3?q=80&w=2792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: "Content Repurposing",
      description:
        "  Turn one piece of content into multiple formats — blogs, social posts, newsletters — to maximize your reach. ",
      img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:",
    },
    {
      title: "Social Media Content Creation",
      description:
        "  Engaging posts, captions, and visuals that build your community and boost brand engagement. ",
      img: "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:col-span-2",
    },
  ];
  const accordionData = [
    {
      title: "Can content marketing work for small businesses?",
      description:
        "Yes, content marketing is highly effective for small businesses. In fact, it offers small businesses an affordable way.",
    },
    {
      title: "How often should I publish new content?",
      description:
        "The frequency of content publishing depends on your resources and business goals. However, consistency is key.",
    },
    {
      title: "What is the difference between content marketing and traditional marketing?",
      description:
        "The main difference between content marketing and traditional marketing is that content marketing focuses on providing valuable, informative content to build trust with the audience, while traditional marketing often focuses on direct promotion and sales.",
    },
    {
      title: "How long does it take to see results from content marketing?",
      description:
        "Content marketing is a long-term strategy, and it can take 3–6 months to start seeing significant results.",
    },
    {
      title:
        "What types of content can be used in content marketing?",
      description:
        "There are many types of content used in content marketing, including Blogs & Articles, Videos, Podcasts, E-books & Whitepapers.",
    },
  ];
  return (
    <>
      <HeroSection
        colorText={"Your Story"}
        title={"Tell Your Story, Grow Your Brand"}
        description={desc}
        img={
          "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />

      <Services
        arr={Marketing}
        highlightText={"Content"}
        heading={"Content That Educates, Engages, and Converts"}
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
