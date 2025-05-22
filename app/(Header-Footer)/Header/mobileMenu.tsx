import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { usePathname } from "next/navigation";
const MobileMenu = ({}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
  const [height, setHeight] = useState<number | undefined>(undefined);

  const path = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const element = document.getElementsByClassName("HeadNavigation")[0]; // Use [0] to get the first element
      if (element) {
        setHeight(element.clientHeight); // Set height to state
      }
    }
  }, []);
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  const links = [
    { name: "Home", link: "/" },
    { name: "About-us", link: "/About-us" },
    { name: "Services", link: "", subMenu: true },
    { name: "Portfolio", link: "/Portfolio" },
    { name: "CRM", link: "/Miles" },
  ];
  return (
    <div className="block lg:hidden">
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "linear",
              duration: 0.4,
              delay: 0.1,
              ease: [0.79, 0.14, 0.15, 0.86],
            }}
            className="w-full h-screen fixed top-0 right-0 z-[999] bg-black"
          >
            <motion.div
              initial={{
                scale: 0.6,
                translateX: "50%",
                translateY: "-50%",
              }}
              animate={{
                scale: 1.3,
              }}
              transition={{ delay: 0.1, duration: 2 }}
              className="absolute top-0 right-0 pointer-events-none"
            >
              <svg
                width="806"
                height="798"
                viewBox="0 0 806 798"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="403"
                  cy="399"
                  r="403"
                  fill="url(#paint0_radial_1533_84)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_1533_84"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(403 399) rotate(90) scale(401.5)"
                  >
                    <stop stopColor="#4B0082" />{" "}
                    {/* Indigo (very dark purple) */}
                    <stop
                      offset="0.1"
                      stopColor="#6A0DAD"
                      stopOpacity="0.4"
                    />{" "}
                    {/* Dark Orchid */}
                    <stop
                      offset="0.35"
                      stopColor="#7B1FA2"
                      stopOpacity="0.3"
                    />{" "}
                    {/* Deep Purple 600 */}
                    <stop
                      offset="0.75"
                      stopColor="#8E24AA"
                      stopOpacity="0.1"
                    />{" "}
                    {/* Deep Purple */}
                    <stop offset="1" stopColor="#9C27B0" stopOpacity="0" />{" "}
                    {/* Purple */}
                  </radialGradient>
                </defs>
              </svg>
            </motion.div>
            {/* Parent container with staggerChildren */}
            <motion.div
              style={{
                height: `calc(100vh - ${height ? height + 55 : 0}px)`,
                marginTop: `${height ? height + 55 : 0}px`,
              }}
              className="flex flex-col text-slate-50 gap-5 justify-start items-start px-8 w-full overflow-y-scroll"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
            >
              {links.map((item, index) => (
                <div key={index} className="w-full">
                  {item.subMenu ? (
                    <Accordion
                      type="single"
                      collapsible
                      className="!bg-transparent"
                    >
                      <AccordionItem
                        value="services"
                        className="!bg-transparent !px-0 !mb-0"
                      >
                        <AccordionTrigger className="!px-0 !py-0 !bg-transparent items-center">
                          <motion.p
                            variants={{
                              hidden: { opacity: 0, y: 100 },
                              visible: { opacity: 1, y: 0 },
                            }}
                            transition={{
                              stiffness: 100,
                              damping: 25,
                              type: "spring",
                              delay: index * 0.1,
                            }}
                            className="font-medium font-Grostek text-4xl capitalize"
                          >
                            {item.name}
                          </motion.p>
                        </AccordionTrigger>

                        <AccordionContent>
                          <div className="pl-3">
                            {menui.map((subItem, subIndex) => (
                              <Link
                                href={`/Service/${subItem.link}`}
                                key={subIndex}
                                onClick={handleLinkClick}
                                className="block mt-4 text-2xl capitalize font-Grostek font-medium"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    // Regular Menu Item without Submenu
                    <Link
                      href={item.link}
                      className="h-12 overflow-hidden w-full"
                      onClick={handleLinkClick}
                    >
                      <motion.p
                        variants={{
                          hidden: { opacity: 0, y: 100 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        transition={{
                          stiffness: 100,
                          damping: 25,
                          type: "spring",
                          delay: index * 0.1,
                        }}
                        className="font-medium font-Grostek text-4xl capitalize"
                      >
                        {item.name}
                      </motion.p>
                    </Link>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Icon setIsOpen={setIsOpen} isOpen={isOpen} path={path} />
    </div>
  );
};

export default MobileMenu;

// Define the type for the `Icon` component props
interface IconProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; // Type for the state setter function
  isOpen: boolean; // Type for the boolean state
  path: string;
}

const Icon: React.FC<IconProps> = ({ setIsOpen, isOpen, path }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="size-10  z-[9999] relative rounded-full"
    >
      <div className="flex hover flex-col justify-center items-center transition-all gap-1">
        <motion.div
          animate={{
            y: isOpen ? [2, 2] : 0,
            rotate: isOpen ? [0, 45] : 0,
          }}
          transition={{ type: "linear", ease: "easeOut", duration: 0.2 }}
          className={`w-6 transition-all duration-300 h-[2px]  ${
            !isOpen ? "bg-black" : "bg-white"
          }`}
        />
        <motion.div
          animate={{
            y: isOpen ? [2, -4] : 0,
            rotate: isOpen ? [0, -45] : 0,
          }}
          transition={{ type: "linear", ease: "easeOut", duration: 0.2 }}
          className={`w-6 transition-all duration-300 h-[2px]  ${
            !isOpen ? "bg-black" : "bg-white"
          }`}
        />
      </div>
    </button>
  );
};
