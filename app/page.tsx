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
import { Marquee } from "@/components/magicui/marquee";
import { StarFour } from "@phosphor-icons/react";
const Page = () => {
  const techTags = [
    "Website Developemnt",
    "Android Developement",
    "UX/Ui Design",
    "Graphics Design",
    "Photography",
    "Content Creation",
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
      <AccordionDemo />
      <HomeForm />
      <CTA />
      <Marquee reverse className="[--duration:30s] bg-indigo-500 py-5">
        {techTags.map((tech, idx) => (
          <p
            key={idx}
            className="text-indigo-50 font-DM-Sans font-[600] text-3xl"
          >
            &nbsp;
            <StarFour
              weight={"fill"}
              className="inline-block size-6 align-middle mb-2"
            />
            &nbsp; &nbsp;
            {tech}
            &nbsp;
          </p>
        ))}
      </Marquee>
    </>
  );
};

export default Page;
