import React, { ReactNode } from "react";
import { EmblaOptionsType } from "embla-carousel";
import Carousel, { Slider, SliderContainer, SliderProgress } from "./Carousal";
import Image from "next/image";

const Industries = () => {
  const OPTIONS: EmblaOptionsType = { loop: false };
  const carousalData = [
    {
      name: "Real Estate",
      image: "industries/realEstate.jpg",
      text: "We help the real estate industry connect with the right audience by enhancing online visibility, creating engaging content like virtual tours, and leveraging data-driven strategies to generate quality leads. ",
    },
    {
      name: "Technology",
      image: "industries/technology.jpg",
      text: "We empower technology companies to showcase innovation by enhancing online presence, creating impactful content, and driving targeted campaigns to connect with the right audience.",
    },
    {
      name: "Business Consulting",
      image: "industries/consulting.jpg",
      text: "We help business consulting firms establish authority by amplifying their expertise, reaching potential clients, and delivering tailored strategies for lead generation and brand growth.",
    },
    {
      name: "Corporate Services",
      image: "industries/corporateServices.jpg",
      text: "We support corporate service providers by refining their digital presence, building trust through targeted messaging, and driving meaningful engagement with their ideal clients.",
    },
    {
      name: "F&B",
      image: "industries/F&B.jpg",
      text: "We help F&B businesses stand out by creating appetizing content, leveraging social media, and implementing data-driven campaigns to attract loyal customers",
    },
    {
      name: "Events & Shows",
      image: "industries/shows.jpg",
      text: "We elevate events and shows by crafting visually stunning campaigns, engaging audiences through creative content, and maximizing ticket sales with targeted marketing.",
    },
    {
      name: "Hospitality",
      image: "industries/hospitality.jpg",
      text: "We help hospitality brands attract guests by showcasing their unique experiences, building trust online, and driving bookings through data-driven strategies.",
    },
    {
      name: "Retail",
      image: "industries/retail.jpg",
      text: "We boost retail businesses by enhancing e-commerce platforms, driving foot traffic, and creating compelling campaigns to reach shoppers both online and offline.",
    },
    {
      name: "Entertainment & Media",
      image: "industries/media.jpg",
      text: "We amplify entertainment and media brands by creating captivating content, engaging audiences across platforms, and driving awareness for shows, films, and more.",
    },
    {
      name: "Automotive",
      image: "industries/automative.jpg",
      text: "We drive success for automotive brands by creating compelling campaigns, showcasing vehicles through stunning visuals, and connecting with the right buyers through precision targeting.",
    },
  ];

  return (
    <div className="mb-32 mt-7 bg-slate-300">
      <div className="container py-20">
        <div className="flex gap-5 items-center">
          <div className="">
            <p className="text-indigo-400">Industries</p>
            <h1 className="text-3xl mt-4 lg:text-4xl font-Plus-Jakarta-Sans font-[600]">
              Awesome services from Industrial company
            </h1>

            <button className="px-5 mt-5 py-2 rounded-full text-slate-50 bg-indigo-500">
              Contact us
            </button>
          </div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            tenetur numquam corrupti vel possimus fugiat.
          </p>
        </div>

        <div className="w-full mt-16">
          <Carousel className="bg-transparent sm:px-10 px-2" options={OPTIONS}>
            <SliderContainer className="gap-2">
              {carousalData.map((card, idx) => (
                <Slider key={idx} className="w-1/3  ">
                  <div className="relative flex justify-center items-center active:cursor-grab overflow-hidden 2xl:h-[400px] xl:h-[400px] h-full w-full rounded-xl">
                    <img
                      src={card.image}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />

                    <p className="relative z-20 px-5 py-2 text-slate-950 rounded-xl bg-white/40 backdrop-filter backdrop-blur-lg text-xl font-Plus-Jakarta-Sans font-[600]">
                      {card.name}
                    </p>
                  </div>{" "}
                </Slider>
              ))}
            </SliderContainer>
            <div className="flex justify-center py-2">
              <SliderProgress />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Industries;
