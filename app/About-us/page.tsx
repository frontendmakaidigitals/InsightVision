import React from "react";
import Breadcrumb from "./(sections)/Breadcrumb";
import About from "./(sections)/About";
import WorkingProcess from "./(sections)/WorkingProcess";
import WhyChoose from "./(sections)/WhyChoose";
import CTO from "./(sections)/CTO";
const page = () => {
  return (
    <div>
      <Breadcrumb />
      <About />
      <WorkingProcess />
      <WhyChoose />
      <CTO />
    </div>
  );
};

export default page;
