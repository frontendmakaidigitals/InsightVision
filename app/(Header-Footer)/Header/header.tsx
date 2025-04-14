"use client";
import Logo from "@/app/App_Chunks/Logo";
import React from "react";
import Menu from "./menu";
import { motion } from "motion/react";

const Header = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "About-us", link: "/About-us" },
    { name: "Services", link: "" },
    { name: "Contact", link: "/Contact" },
  ];
  return (
    <div className=" py-2">
      <div className="container justify-between flex items-center">
        <Logo src={"logo/logo.png"} />
        <Menu links={links} />
        <div className="relative inline-block group">
          {/* Glow Layer */}
          <motion.div
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "200% 50%" }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:200%_200%] opacity-75 blur-sm"
          />

          {/* Button Layer */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="relative z-10 rounded-lg bg-slate-100 px-6 py-2 text-black font-semibold shadow-md"
          >
            Lets talk
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Header;
