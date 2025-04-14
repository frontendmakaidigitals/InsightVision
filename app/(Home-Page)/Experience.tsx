import React from "react";

const Experience = () => {
  const stats = [
    { number: "14+", name: "Projects" },
    { number: "22+", name: "Clients" },
    { number: "10+", name: "Awards" },
    { number: "1K+", name: "Followers" },
  ];

  return (
    <div className="w-full py-16 bg-indigo-900 relative">
      <img
        className="absolute opacity-[.35] top-0 left-0 w-full h-full object-cover"
        src={
          "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <div className="container relative z-10 text-slate-50 grid place-items-center grid-cols-1 lg:grid-cols-4 gap-5">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <p className="text-6xl font-[600] text-center tracking-tighter font-DM-Sans">
              {stat.number}
            </p>
            <p className="text-center text-lg">{stat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
