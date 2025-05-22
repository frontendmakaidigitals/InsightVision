import React from "react";
import Hero from "./sections/hero";
import CTO from "../About-us/(sections)/CTO";
import Partners from "./sections/partners";
import Industries from "./sections/Industries";
import Tools from "./sections/Tools";
import CRMInsights from "./sections/CRMInsights";
import { Productivity } from "./sections/Productivity";
import About from "./sections/About";
const Page = () => {
  return (
    <>
      <Hero />
      <Partners />
      <About />

      <CRMInsights />
      <Productivity />
      <Tools />
      <Industries />
      <CTO
        heading="Book Your Free Demo Today"
        description="Get a free trial session of MILES CRM today and transform the way you manage customers and close deals."
        button="Book a Free Demo"
      />
    </>
  );
};

export default Page;
