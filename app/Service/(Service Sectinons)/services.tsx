import React from "react";

type ServiceProps = {
  title: string;
  description: string;
  img: string;
  class: string;
}[];

const Services = ({
  arr,
  heading,
  highlightText,
}: {
  arr: ServiceProps;
  heading: string;
  highlightText: string;
}) => {
  const ColorText = (text: string) => {
    if (highlightText) {
      const parts = text.split(new RegExp(`(${highlightText})`, "gi"));
      return (
        <>
          {" "}
          {parts.map((part, i) =>
            part.toLowerCase() === highlightText.toLowerCase() ? (
              <span key={i} className={"text-indigo-500"}>
                {part}
              </span>
            ) : (
              part
            )
          )}
        </>
      );
    } else {
      return <span>{text}</span>;
    }
  };
  return (
    <div className="bg-white mt-20 py-20">
      <div className="container">
        
        <h1 className="text-3xl font-[600] lg:text-5xl font-Plus-Jakarta-Sans">
          {ColorText(heading)}
        </h1>

        <div className="w-full grid grid-cols-3 gap-5 mt-10">
          {arr.map((service, idx) => (
            <div
              key={idx}
              className={`${service.class} relative flex items-end overflow-hidden h-[330px] bg-indigo-200 rounded-xl`}
            >
              <div className="w-full h-full bg-slate-900/20 z-10 absolute inset-0" />
              <div className=" absolute inset-0  w-full h-full">
                <img
                  src={service.img}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative text-slate-50 w-full z-10 bg-gradient-to-t from-slate-950/60 p-4">
                <p className="text-xl lg:text-2xl font-Plus-Jakarta-Sans font-[500]">
                  {service.title}
                </p>
                <p className="text-md mt-1 font-DM-Sans">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
