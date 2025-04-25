import React from "react";

const Services = () => {
  const webServices = [
    { title: "", description: "", icon: "", class: "col-span-2" },
    { title: "", description: "", icon: "", class: "col-span-1" },
    { title: "", description: "", icon: "", class: "" },
    { title: "", description: "", icon: "", class: "" },
    { title: "", description: "", icon: "", class: "" },
    { title: "", description: "", icon: "", class: "" },
    { title: "", description: "", icon: "", class: "col-span-2" },
  ];
  return (
    <div className="bg-white mt-20 py-20">
      <div className="container">
        <h1 className="text-3xl font-[600] lg:text-5xl font-Plus-Jakarta-Sans">
          Our <span className="text-indigo-600">Services</span>
        </h1>

        <div className="w-full grid grid-cols-3 gap-5 mt-10">
          {webServices.map((service, idx) => (
            <div
              key={idx}
              className={`${service.class} relative flex items-end overflow-hidden h-[330px] bg-indigo-200 rounded-xl`}
            >
              <div className="w-full h-full bg-slate-900/20 z-10 absolute inset-0" />
              <div className=" absolute inset-0  w-full h-full">
                <img
                  src={
                    "https://images.unsplash.com/photo-1693486145118-d963c3a6ce6a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative text-slate-50 z-10 bg-gradient-to-t from-slate-950/60 p-4">
                <p className="text-xl lg:text-3xl font-Plus-Jakarta-Sans font-[500]">
                  Title
                </p>
                <p className="text-md mt-1 font-DM-Sans">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  qui animi facilis sit pariatur minus facere eligendi mollitia
                  alias!
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
