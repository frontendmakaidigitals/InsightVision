"use client";
import React, { useState, useRef } from "react";
import { Play, Pause } from "@phosphor-icons/react";
import { motion } from "motion/react";
const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <div className="h-[85vh] flex flex-col justify-start items-center">
      <div className="relative container grid grid-cols-2 h-full">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.25, ease: [0, 0, 0.5, 1] }}
          className="absolute group overflow-hidden rounded-xl bottom-10 right-0 aspect-video max-w-sm origin-bottom-right"
        >
          {" "}
          <video
            ref={videoRef}
            src="https://github.com/frontendmakaidigitals/InsightVision/raw/refs/heads/master/public/media/ISVWebsite.mp4"
            autoPlay
            muted
            loop
            onClick={togglePlay}
            playsInline
            className="origin-bottom-right ml-auto" // <-- ADD ml-auto here
          />
          <button
            onClick={togglePlay}
            className="absolute cursor-pointer group-hover:block hidden bottom-4 left-1/2 -translate-x-1/2 bg-gray-200/30 backdrop-filter backdrop-blur-xl text-white px-4 py-2 rounded-full shadow-md  transition"
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
        </motion.div>
        <div className="w-full flex flex-col items-start justify-center h-full">
          <h1 className="xl:text-7xl leading-[1.2] font-Plus-Jakarta-Sans font-[600] text-black">
            Simple and Powerful Social Media Analytics
          </h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            numquam maiores molestias expedita quaerat soluta. Nulla doloremque
            iusto assumenda
          </p>
          <button className="px-6 mt-4 rounded-full py-3 bg-blue-500 text-slate-50 rounded-ful">
            Get Started
          </button>
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default HeroSection;
