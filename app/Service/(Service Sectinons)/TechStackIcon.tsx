import React from "react";

const TechStackIcon = ({ icons }: { icons: string[] }) => {
  return (
    <div className="mt-8 mb-10">
      <div className="container max-w-6xl">
        <div className="bg-black  rounded-4xl px-12 lg:px-16 py-8  grid grid-cols-3 gap-10 lg:gap-0 lg:flex justify-between">
          {icons.map((icon, idx) => (
            <div key={idx} className="w-16  h-16">
              <img src={icon} className="w-full h-full  object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackIcon;
