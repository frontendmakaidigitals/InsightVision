import { ArrowUpRight } from "@phosphor-icons/react";
import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
const Service2 = () => {
  const services = [
    {
      name: "Web Development",
      img: "service-logo/web-development.png",
      gradient: "bg-gradient-to-r from-[#fde68a] to-[#f59e0b] ",
      link: "Web-development",
      desc: "From concept to code, we build your digital presence.",
    },
    {
      name: "App Development",
      img: "service-logo/app-development.png",
      gradient: "bg-gradient-to-r from-[#fef08a] via-[#84cc16] to-[#16a34a]",
      link: "App-development",
      desc: "Creating intuitive, high-performance mobile apps.",
    },
    {
      name: "Social Media Marketing",
      img: "service-logo/social-media.png",
      gradient:
        "bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#f72464] via-[#ff858a] to-[#fff3a7]",
      link: "Social-media-marketing",
      desc: "Smart social strategies that boost visibility and impact.",
    },
    {
      name: "SEO Marketing",
      img: "service-logo/seo.png",
      gradient: "bg-gradient-to-bl from-[#edd2f3] via-[#fffcdc] to-[#84dfff]",
      link: "SEO-Marketing",
      desc: "Drive organic traffic that turns into real leads.",
    },
    {
      name: "Photography & Videography",
      img: "service-logo/photography.png",
      gradient:
        "bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[#6366f1] via-[#a5b4fc] to-[#e0e7ff] ",
      link: "Photography",
      desc: "Capturing visuals that tell your brand's story.",
    },
    {
      name: "Performance Marketing",
      img: "service-logo/performance.png",
      gradient: "bg-gradient-to-tl from-[#f6fbf4] via-[#f5df99] to-[#5fd068] ",
      link: "Performance-Marketing",
      desc: "Driving growth through high-performance campaigns.",
    },
    {
      name: "Content Marketing",
      img: "service-logo/content-writing.png",
      gradient: "bg-gradient-to-b from-[#06b6d4] via-[#2563eb] to-[#6366f1]",
      link: "Content-Marketing",
      desc: "Creating content that connects, converts, and builds trust.",
    },
    {
      name: "Branding & Advertising",
      img: "service-logo/branding.png",
      gradient: "bg-gradient-to-bl from-[#84cc16] via-[#22c55e] to-[#16a34a]",
      link: "Branding",
      desc: "Building bold brands and campaigns that stand out.",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-Palette-20/8 from-[10%] to-transparent">
      <div className="container">
        <div className=" ">
          <p className="text-violet-400 font-Plus-Jakarta-Sans font-[600]">
            Our Capabilities
          </p>
          <h1 className="text-3xl mt-2 mb-2 lg:text-6xl max-w-2xl font-Plus-Jakarta-Sans font-[600]">
            Data-Driven, Expert Digital Marketing Solutions
          </h1>
          <Link href={"/Contact"}>
            <button className="px-6 mt-4 font-Plus-Jakarta-Sans cursor-pointer font-[700] rounded-full py-3 bg-black hover:bg-slate-800 text-slate-50">
              Contact us <ArrowRight className="inline-block size-6" />
            </button>
          </Link>
        </div>
        <div className="grid mt-14 xl:grid-cols-4 gap-7">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-9 flex hover:shadow-lg transition-all duration-200 flex-col items-start justify-between group bg-white rounded-3xl"
            >
              <div>
                <div className="size-16 p-3 rounded-full bg-[#f8f4fb]">
                  <img
                    className="w-full h-full object-contain"
                    src={service.img}
                  />
                </div>
                <h3 className="text-xl font-Plus-Jakarta-Sans font-[500] lg:text-2xl mt-6 text-black ">
                  {service.name}
                </h3>
                <p className="mt-4 text-slate-800">{service.desc}</p>
              </div>
              <Link href={`/Service/${service.link}`}>
                <button className="mt-8 cursor-pointer underline underline-offset-4 decoration-2 decoration-purple-800 font-bold rounded-full text-[#11002e]">
                  Learn more{" "}
                  <ArrowUpRight className="ml-1 text-lg inline-block" />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service2;
