"use client";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { Suspense, useState, useEffect } from "react";
import "@/app/style/DotsLoader.css";
const Loading = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Loader />
    </Suspense>
  );
};

export default Loading;

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
 
    if (document.readyState === "complete") {
      setIsLoading(false);
      return;
    }

    // Otherwise, wait for the window "load" event
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <div className="fixed flex justify-center items-center overflow-hidden top-0 left-0 bg-gradient-to-r from-purple-100 to-purple-300 z-[99999] w-screen h-screen">
          <div className="dot-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
