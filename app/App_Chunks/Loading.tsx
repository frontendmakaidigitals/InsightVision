"use client";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";
import '@/app/style/DotsLoader.css'
const Loading = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Loader />
    </Suspense>
  );
};

export default Loading;

const Loader = () => {
  const [isLoading, setIsLoading] = React.useState(true);
    const pathname = usePathname();
    
  React.useEffect(() => {
    setIsLoading(true);
  
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timeoutId);
  }, [pathname]);
 
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <div className="fixed flex justify-center items-center overflow-hidden top-0 left-0 bg-gradient-to-r from-purple-100 to-purple-300 z-[999] w-screen h-screen">
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
