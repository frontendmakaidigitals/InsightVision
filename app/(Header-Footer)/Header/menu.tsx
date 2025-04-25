"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, CaretDown } from "@phosphor-icons/react";
interface LinkProps {
  links: { name: string; link: string }[];
}

const containerVariants = {
  initial: {},
  hover: {},
};

const childVariants = {
  initial: { y: 0 },
  hover: { y: -4 }, // move all up a little
};
const Menu: React.FC<LinkProps> = ({ links }) => {
  const pathName = usePathname();
  const contentRef = useRef<HTMLDivElement>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [height, setHeight] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [serviceHoverActive, setServiceHoverActive] = useState(false);

  const showPanel = isHovered || serviceHoverActive;
  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [serviceHoverActive]);

  const menui = [
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
    <div className="lg:flex items-center gap-12 hidden">
      <AnimatePresence mode="wait">
        {links.map((link, idx) =>
          link.name.toLowerCase() === "services" ? (
            <div
              key={idx}
              className="relative font-Plus-Jakarta-Sans font-[500]"
            >
              <motion.div
                variants={containerVariants}
                initial="initial"
                whileHover="hover"
                key={idx}
                onMouseEnter={() => {
                  setServiceHoverActive(true);
                  setHoverIdx(idx);
                }}
                onMouseLeave={() => {
                  setServiceHoverActive(false);
                  setHoverIdx(null);
                }}
                onClick={() => setServiceHoverActive(!serviceHoverActive)}
                className={`pb-1 overflow-hidden group text-md relative `}
              >
                  {(hoverIdx === idx || pathName === link.link) && (
                    <motion.div
                      initial={{
                        width:
                          pathName?.toLowerCase() === link.link ? "100%" : "0%",
                      }}
                      animate={{ width: "100%" }}
                      exit={{ x: 100, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="z-50 absolute top-[90%] bg-black left-0 h-[1px]"
                    />
                  )}
                <div className="inline-flex items-center">
                  {link.name.split("").map((char, index) => (
                    <motion.p key={index} className="inline-block">
                      {char === "-" ? (
                        <span className="inline-block">&nbsp;</span>
                      ) : (
                        char
                      )}
                    </motion.p>
                  ))}

                  {/* Chevron comes once, after animation */}
                  <motion.div
                    variants={childVariants}
                    transition={{
                      delay: link.name.length * 0.05,
                      ease: [0.165, 0.84, 0.44, 1],
                      duration: 0.5,
                    }}
                    className="ml-1"
                  >
                    <CaretDown
                      className={`${
                        serviceHoverActive
                          ? "rotate-[180deg]"
                          : "!rotate-[0deg]"
                      } transition-transform group-hover:rotate-[180deg] duration-300`}
                    />
                  </motion.div>
                </div>
              </motion.div>
                {showPanel && (
                  <motion.div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="absolute max-w-5xl z-50 top-full left-1/2 -translate-x-1/2 w-screen"
                  >
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height, opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.165, 0.84, 0.44, 1],
                      }}
                      className="overflow-hidden bg-indigo-50 rounded-2xl mt-3 shadow-[0px_0px_5px_1.4px_rgba(0,_0,_0,_0.05)]"
                    >
                      {/* Inner content measured for height */}
                      <div
                        ref={contentRef}
                        className="p-4 grid grid-cols-[1.4fr_.6fr] gap-6"
                      >
                        <div className="grid h-full border-r pr-4 border-slate-300 grid-cols-2 gap-1">
                          {menui.map((menu, menuId) => (
                            <Link
                              key={menuId}
                              href={`/Service/${menu.link}`}
                              className={`${
                                menuId >= menui.length - 2 ? "" : ""
                              } hover:bg-indigo-100 group flex justify-between items-center font-DM-Sans px-5 py-2 rounded-2xl font-[600] text-md`}
                            >
                              <motion.p className="">
                                {menu.name}
                                <motion.span className="text-sm block font-[500] text-slate-600">
                                  {menu.desc}
                                </motion.span>
                              </motion.p>

                              <div>
                                <div className="hidden size-10 justify-center items-center group-hover:flex rounded-full bg-indigo-200">
                                  <ArrowUpRight className="" />
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div
                          className={`w-full relative overflow-hidden  bg-indigo-300 rounded-xl h-[400px]`}
                        >
                          <button className="absolute text-slate-50 bg-Palette-30 cursor-pointer px-4 py-2 rounded-xl bottom-2 left-1/2 -translate-x-1/2">
                            Contact us
                          </button>
                          <img
                            src={"/Navbar.png"}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="initial"
              whileHover="hover"
              key={idx}
              onMouseEnter={() => setHoverIdx(idx)}
              onMouseLeave={() => setHoverIdx(null)}
              className={`pb-1 font-Plus-Jakarta-Sans font-[500] overflow-hidden text-md relative `}
            >
              <Link href={link.link}>
                  {(hoverIdx === idx || pathName === link.link) && (
                    <motion.div
                      initial={{
                        width:
                          pathName?.toLowerCase() === link.link ? "100%" : "0%",
                      }}
                      animate={{ width: "100%" }}
                      exit={{ x: 100, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="z-50 absolute top-[90%] bg-black left-0 h-[1px]"
                    />
                  )}
                {link.name.split("").map((char, index) => (
                  <motion.p key={index} className="inline-block">
                    {char === "-" ? (
                      <span className="inline-block">&nbsp;</span>
                    ) : (
                      char
                    )}
                  </motion.p>
                ))}
              </Link>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
