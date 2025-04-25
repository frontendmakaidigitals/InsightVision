import React from "react";

const TechStackIcon = ({ icons }: { icons: string[] }) => {
  return (
    <div className="mt-20 mb-10">
      <div className="bg-black max-w-6xl rounded-4xl px-16 py-8 container flex justify-between">
        {icons.map((icon, idx) => (
          <div key={idx} className="w-16 h-16">
            <img src={icon} className="w-full h-full  object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackIcon;
