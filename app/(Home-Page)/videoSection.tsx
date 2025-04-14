"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      gsap.set(videoRef.current, { width: "230px" });

      // Animate to 100% on scroll
      gsap.to(videoRef.current, {
        width: "100%", // Animate to full container width
        ease: "power2.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div className="min-h-[140vh] bg-gray-100 flex flex-col justify-center items-center">
      <div className="overflow-hidden w-full">
        {" "}
        {/* full width */}
        <video
          ref={videoRef}
          src="https://github.com/frontendmakaidigitals/InsightVision/raw/refs/heads/master/public/media/ISVWebsite.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="origin-bottom-right ml-auto" // <-- ADD ml-auto here
        />
      </div>
    </div>
  );
};

export default VideoSection;
