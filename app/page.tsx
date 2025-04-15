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
const Page = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Service2 />
      <Industries />
      <Techstack />
      <HomeForm />
      <Experience />
      <MarqueeLogo />
      <AccordionDemo />
    </>
  );
};

export default Page;
