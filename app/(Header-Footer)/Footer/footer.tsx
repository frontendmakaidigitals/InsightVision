"use client";
import React, { useRef } from "react";
import Logo from "@/app/App_Chunks/Logo";
import { motion } from "framer-motion";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

import Link from "next/link";
import { usePathname } from "next/navigation";
const Footer = () => {
  const menu = [
    { title: "home", link: "/" },
    { title: "about", link: "/About" },
    { title: "Social Media Marketing", link: "/Social-Media-Marketing" },
    { title: "Performance Marketing", link: "/Performace-Marketing" },
    { title: "Branding & Designing", link: "/Branding-&-Designing" },
    { title: "blogs", link: "/Blogs" },
    { title: "contact", link: "/contact" },
  ];
  const legal = [
    { title: "Privacy policy", link: "/" },
    { title: "Terms & Conditions", link: "/" },
    { title: "Cookie policy", link: "/" },
  ];
  const socialIcons = [
    {
      icon: <FacebookLogo weight="fill" />,
      link: "https://www.facebook.com/share/1B8MhGwsoX/?mibextid=wwXIfr",
    },
    {
      icon: <InstagramLogo weight="fill" />,
      link: "https://www.instagram.com/insightvision.marketing?igsh=enp5bGcxc255MmJr",
    },
    {
      icon: <LinkedinLogo weight="fill" />,
      link: "https://www.linkedin.com/company/insight-vision-marketing/",
    },
  ];
  const ref = useRef(null);
  const path = usePathname();
  const renderPath = "/admin";

  return !path.includes(renderPath) ? (
    <>
      <div
        ref={ref}
        className="h-full overflow-hidden py-16 flex  flex-col justify-around  w-full bg-[#01062e]"
      >
        <div className="container  grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-10">
          <div className="">
            <motion.div>
              <Logo src={"Logo/Logo-white.png"} />
            </motion.div>
            <motion.p
              className={`text-indigo-200 w-full lg:max-w-[300px] text-md lg:text-md  font-Satoshi mt-2 lg:mt-4`}
            >
              We create possibilities for the connected world.
            </motion.p>

            <motion.div className="w-full grid grid-cols-4 gap-3 mt-8 lg:mt-12">
              {socialIcons.map((elem, index) => (
                <motion.div
                  key={index}
                  className="group overflow-hidden grid grid-cols-1 place-items-center text-4xl text-slate-400 size-12 lg:size-14 rounded-full bg-slate-100/5 border border-gray-800"
                >
                  <Link
                    className="group-hover:scale-[1.2] transition-all duration-300"
                    href={elem.link}
                  >
                    {elem.icon}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-5 lg:flex lg:items-start lg:mt-6 lg:justify-end lg:gap-5 ">
            <motion.ul whileInView={"animate"} className="">
              <motion.p className="text-indigo-200 mb-2 font-Synonym font-[500] text-xl lg:text-2xl">
                Menu
              </motion.p>
              {menu.map((item, index) => (
                <motion.li
                  className="font-Satoshi mb-1 text-sm capitalize lg:text-md text-indigo-200 flex items-center gap-1 "
                  key={index}
                >
                  <Link href={item.link}>{item.title} </Link>
                </motion.li>
              ))}
            </motion.ul>
            <motion.ul className="">
              <motion.p className="text-indigo-200 mb-2 font-Synonym font-[500] text-xl lg:text-2xl">
                Legal
              </motion.p>
              {legal.map((item, index) => (
                <motion.li
                  className="font-Satoshi mb-1 text-sm lg:text-md text-indigo-200 flex items-start gap-1 "
                  key={index}
                >
                  {item.title}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div className="col-span-2">
              <motion.p className="text-indigo-200 mb-2 font-Synonym font-[500] text-xl lg:text-2xl">
                Address
              </motion.p>
              <p className="text-sm text-indigo-200 lg:text-md">
                <span>Office</span> - 3307, Churchill Towers, Business Bay,
                Dubai, UAE
              </p>
              <p className="mt-2 text-sm text-indigo-200 lg:text-md">
                <span>Phone</span>- +971 50 865 4179
              </p>
              <p className="mt-2 text-sm text-indigo-200 lg:text-md">
                <span>Email</span> - info@insightvision.marketing
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="  bg-blue-500 text-sm lg:text-md py-5 items-center">
        <div className="container flex justify-between ">
          <motion.p className="text-purple-50 hidden lg:block">
            Copyright © 2025 Insight Vision
          </motion.p>
          <motion.p className="text-purple-50 w-full text-center lg:w-auto">
            Designed and Developed by{" "}
            <span className="underline  font-Synonym text-slate-200 font-[600] underline-offset-4">
              Insight Vision
            </span>
          </motion.p>
        </div>
      </div>
    </>
  ) : null;
};

export default Footer;
