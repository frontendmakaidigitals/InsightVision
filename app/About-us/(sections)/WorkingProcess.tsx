export default function WorkingProcess() {
  const steps = [
    {
      title: "Discover",
      description:
        " We dive deep to understand your brand, audience and goals.",
      icon: "/about/customer-support.png",
    },
    {
      title: "Strategize",
      description: "We build a custom roadmap aligned with your objectives.",
      icon: "/about/checklist.png",
    },
    {
      title: "Execute",
      description:
        "We bring your strategy to life with creative precision.",
      icon: "/about/calendar.png",
    },
    {
      title: "Optimize & Scale",
      description:
        "We analyze, refine, and scale what works.",
      icon: "/about/checked.png",
    },
  ];

  return (
    <section className="py-20 px-6 relative text-center">
      <img
        src={"about/work-bg.png"}
        className="w-full opacity-[.4] h-full absolute top-0 left-0 z-10 pointer-events-none"
      />
      <h3 className="text-indigo-400 uppercase text-sm mb-2">Flow Process</h3>
      <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-10">
        Our Working Process
      </h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center relative group">
            <div className="size-20 md:size-24 bg-[#f7f5ff] shadow-xl rounded-full flex items-center justify-center text-2xl md:text-3xl text-indigo-500 z-10 mb-4">
              <img src={step.icon} className="md:size-14 size-12" />
            </div>
            <h4 className="font-semibold text-lg text-slate-700">
              {step.title}
            </h4>
            <p className="text-sm text-slate-500 mt-2">{step.description}</p>

            {/* Connector Line (except last item) */}
            {idx < steps.length - 1 && (
              <div className="absolute top-1/3 left-full h-[2px] w-12 md:w-20 bg-indigo-200 z-0 transform -translate-y-1/2 hidden md:block"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
