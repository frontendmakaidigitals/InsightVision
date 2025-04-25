import React from "react";

const HeroSection = ({
  title,
  description,
  colorText,
  img,
}: {
  title: string;
  description: string;
  colorText?: string;
  img?: string;
}) => {
  const ColorText = (text: string) => {
    if (colorText) {
      const parts = text.split(new RegExp(`(${colorText})`, "gi"));
      return (
        <>
          {" "}
          {parts.map((part, i) =>
            part.toLowerCase() === colorText.toLowerCase() ? (
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
    <div className="py-12 relative">
      <div
        style={{ height: "calc(100% + 80px)" }}
        className="absolute -top-20 left-0 w-full  -z-10"
      >
        <img src={"/Web-developement/heroBlur.svg"} className="w-full opacity-[.4] h-full object-cover" />
      </div>
      <div className="container grid grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl lg:text-6xl font-DM-Sans font-[600]">
            {ColorText(title)}
          </h1>
          <p className="mt-4 whitespace-pre-line ">{description}</p>
          <button className="mt-5 px-6 py-[.8rem] cursor-pointer bg-indigo-500  text-slate-50 rounded-lg text-sm">
            Contact us
          </button>
        </div>
        <div className="w-full h-[550px] overflow-hidden  ">
          <img className="w-full h-full object-cover" src={img} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
