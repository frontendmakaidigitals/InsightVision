"use client";
import Logo from "@/app/App_Chunks/Logo";
import React from "react";
import Menu from "./menu";
import { motion } from "motion/react";
import MobileMenu from "./mobileMenu";
import { useRouter } from "next/navigation";
const Header = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "About-us", link: "/About-us" },
    { name: "Services", link: "" },
    { name: "Contact", link: "/Contact" },
    { name: "Portfolio", link: "/Portfolio" },
  ];
  const router = useRouter()
  return (
    <div className=" py-2 HeadNavigation">
      <div className="container justify-between flex items-center">
        <div className="w-32 ">
          <Logo src={"/Logo/Logo.png"} />
        </div>
        <Menu links={links} />
        <MobileMenu />
        <div className="relative hidden lg:inline-block">
          {/* Glow and Button Container (same size) */}
          <div className="relative w-28">
            {/* Glow Layer */}
            <motion.div
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "200% 10%" }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:200%_200%] opacity-75 blur-sm"
            />

            {/* Button Layer */}
            <motion.button
              onClick={() => router.push('/Contact') }
              whileHover={{ scale: 1.05 }}
              className="relative z-10 w-full rounded-lg bg-black text-sm px-5 py-2 cursor-pointer text-slate-300 font-Plus-Jakarta-Sans font-semibold shadow-md"
            >
              Let&apos;s talk
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
