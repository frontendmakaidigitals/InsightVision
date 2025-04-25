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
      <CTO
        heading="Ready to Bring Your Brand to Life?"
        description="Whether you have a project in mind, need expert marketing support, or just want to explore how we can work together, we’d love to hear from you. Reach out anytime!"
      />
    </div>
  );
};

export default page;
