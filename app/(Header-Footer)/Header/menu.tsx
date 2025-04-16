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
      title: "App Development",
      image:
        "https://cdn.dribbble.com/userupload/12017862/file/original-44519a7c4bcabd10527f4811e2ae8086.png?format=webp&resize=400x300&vertical=center", // Example image path
      color: "bg-blue-500",
      rotate: -8,
      rounded: 60,
      top: 30,
      left: 12,
      route: "App-Development",
    },
    {
      title: "Web Development",
      image: "https://mobirise.com/assets24/images/templates.webp",
      color: "bg-green-500",
      rotate: -4,
      rounded: 70,
      top: 30,
      left: 8,
      route: "Web-Development",
    },
    {
      title: "Social Media Marketing",
      image:
        "https://img.freepik.com/premium-photo/3d-rendered-photos-social-media-marketing-concept-marketing-8k-result_1139417-30443.jpg",
      color: "bg-red-500",
      rotate: 3,
      rounded: 80,
      top: 20,
      left: 18,
      route: "Social-Media-Marketing",
    },
    {
      title: "Content Marketing",
      image:
        "https://cdn.pixabay.com/photo/2019/04/07/23/11/content-marketing-4111003_1280.jpg",
      color: "bg-yellow-500",
      rotate: 8,
      rounded: 60,
      top: 40,
      left: 40,
      route: "Content-Marketing",
    },
    {
      title: "SEO Marketing",
      image:
        "https://images.inc.com/uploaded_files/image/1920x1080/getty_493335634_2000133320009280405_338428.jpg",
      color: "bg-indigo-500",
      rotate: -3,
      rounded: 60,
      top: 30,
      left: 18,
      route: "SEO-Marketing",
    },
    {
      title: "Media Buying",
      image:
        "https://static.vecteezy.com/system/resources/previews/046/909/381/non_2x/media-buying-process-concept-flat-illustration-vector.jpg",
      color: "bg-purple-500",
      rotate: -10,
      rounded: 66,
      top: 35,
      left: 15,
      route: "Media-Buying",
    },
    {
      title: "Performance Marketing",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQHGRvxtLtUufg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1709730782036?e=2147483647&v=beta&t=YJmFuKAwpVhA-KxHNeHXy7YuNt5VHAGY8Kz4cBsD180",
      color: "bg-orange-500",
      rotate: -8,
      rounded: 60,
      top: 30,
      left: 12,
      route: "Performance-Marketing",
    },
    {
      title: "IT Consulting & Advisory",
      image:
        "https://www.enterpriseitworld.com/wp-content/uploads/2023/08/IT-Consulting-Company.jpg",
      color: "bg-teal-500",
      rotate: -10,
      rounded: 60,
      top: 50,
      left: 17,
      route: "IT-Consulting-&-Advisory",
    },
    {
      title: "Cyber Security",
      image:
        "https://t4.ftcdn.net/jpg/07/53/50/51/360_F_753505163_oGvv1D8KlniGSwUx7ywO9sDIWbzpbSfM.jpg",
      color: "bg-gray-500",
      rotate: 3,
      rounded: 66,
      top: 30,
      left: 16,
      route: "Cyber-Security",
    },
    {
      title: "Public Relations",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybmhhbx17asCgjoj5vjhBIpJoiV_R_OBX6A&s",
      color: "bg-pink-500",
      rotate: -8,
      rounded: 60,
      top: 30,
      left: 12,
      route: "Public-Relations",
    },
    {
      title: "Branding & Designing",
      image:
        "https://bitwisebranding.com/uploads/blog-images/1603114000main.png",
      color: "bg-lime-500",
      rotate: -8,
      rounded: 60,
      top: 30,
      left: 12,
      route: "Branding-&-Designing",
    },
    {
      title: "Photography & Videography",
      image:
        "https://bitwisebranding.com/uploads/blog-images/1603114000main.png",
      rotate: -8,
      rounded: 60,
      top: 30,
      left: 12,
      route: "Photography-&-Videography",
    },
  ];
  return (
    <div className="flex items-center gap-12">
      <AnimatePresence mode="wait">
        {links.map((link, idx) =>
          link.name.toLowerCase() === "services" ? (
            <div className="relative">
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
                className={`pb-1 overflow-hidden group text-lg relative `}
              >
                <AnimatePresence>
                  {(hoverIdx === idx || pathName === link.link) && (
                    <motion.div
                      initial={{
                        width:
                          pathName?.toLowerCase() === link.link ? "100%" : "0%",
                      }}
                      animate={{ width: "100%" }}
                      exit={{ x: 100, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="z-10 absolute top-[90%] bg-black left-0 h-[1px]"
                    />
                  )}
                </AnimatePresence>
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
              <AnimatePresence mode="wait">
                {showPanel && (
                  <motion.div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="absolute max-w-5xl z-20 top-full left-1/2 -translate-x-1/2 w-screen"
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
                        className="p-4 grid grid-cols-[1.4fr_.6fr] gap-4"
                      >
                        <div className="grid h-full border-r pr-4 border-slate-300 grid-cols-2 gap-1">
                          {menui.map((menu, menuId) => (
                            <Link
                              key={menuId}
                              href={""}
                              className={`${
                                menuId >= menui.length - 2 ? "" : ""
                              } hover:bg-indigo-100 group flex justify-between items-center font-DM-Sans px-5 py-2 rounded-2xl font-[600] text-lg`}
                            >
                              <motion.p className="">
                                {menu.title}
                                <motion.span className="text-sm block font-[500] text-slate-600">
                                  {"Lorem ipsum dolor"}
                                </motion.span>
                              </motion.p>

                              <div className="hidden size-10 justify-center items-center group-hover:flex rounded-full bg-indigo-200">
                                <ArrowUpRight className="" />
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div
                          className={`w-full overflow-hidden  bg-indigo-300 rounded-xl h-[400px]`}
                        >
                          <img
                            src={
                              "https://images.unsplash.com/photo-1579546928937-641f7ac9bced?q=80&w=3039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            }
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="initial"
              whileHover="hover"
              key={idx}
              onMouseEnter={() => setHoverIdx(idx)}
              onMouseLeave={() => setHoverIdx(null)}
              className={`pb-1 overflow-hidden text-lg relative `}
            >
              <Link href={link.link}>
                <AnimatePresence>
                  {(hoverIdx === idx || pathName === link.link) && (
                    <motion.div
                      initial={{
                        width:
                          pathName?.toLowerCase() === link.link ? "100%" : "0%",
                      }}
                      animate={{ width: "100%" }}
                      exit={{ x: 100, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="z-10 absolute top-[90%] bg-black left-0 h-[1px]"
                    />
                  )}
                </AnimatePresence>
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
