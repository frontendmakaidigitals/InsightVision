"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type CTOProps = {
  heading: string;
  description: string;
  button?:string
};
const CTO = ({ heading, description, button='Contact us' }: CTOProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerDimension, setContainerDimension] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setContainerDimension({ width: offsetWidth, height: offsetHeight });
    }
  }, []);
  return (
    <div className="my-20 overflow-hidden">
      <div className="container max-w-6xl">
        <div
          ref={containerRef}
          className="  bg-black rounded-2xl  p-10 overflow-hidden relative"
        >
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <svg
              viewBox={`0 0 ${containerDimension.width} ${containerDimension.height}`}
              width={containerDimension.width}
              height={containerDimension.height}
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  gradientTransform="rotate(268, 0.5, 0.5)"
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="ffflux-gradient"
                >
                  <stop
                    stopColor="hsl(230, 100%, 49%)"
                    stopOpacity="1"
                    offset="0%"
                  ></stop>
                  <stop
                    stopColor="hsl(272, 68%, 62%)"
                    stopOpacity="1"
                    offset="100%"
                  ></stop>
                </linearGradient>
                <filter
                  id="ffflux-filter"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                  filterUnits="objectBoundingBox"
                  primitiveUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.003 0.002"
                    numOctaves="2"
                    seed="53"
                    stitchTiles="stitch"
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    result="turbulence"
                  ></feTurbulence>
                  <feGaussianBlur
                    stdDeviation="41 0"
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    in="turbulence"
                    edgeMode="duplicate"
                    result="blur"
                  ></feGaussianBlur>
                  <feBlend
                    mode="color-dodge"
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    in="SourceGraphic"
                    in2="blur"
                    result="blend"
                  ></feBlend>
                </filter>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill="url(#ffflux-gradient)"
                filter="url(#ffflux-filter)"
              />
            </svg>
          </div>

          <div className={"rounded-3xl  text-white  relative z-10 "}>
            <div className="">
              <h3 className="text-slate-50 text-xl lg:text-3xl font-Plus-Jakarta-Sans font-[600]">
                {heading}
              </h3>
              <p className="text-slate-100 mt-4 text-sm">{description}</p>
            </div>
            <div className="flex justify-end mt-5">
              <Link href="/Contact">
                <button className="px-4 py-2 bg-violet-600 cursor-pointer text-slate-50 font-[600] font-Plus-Jakarta-Sans rounded-lg">
                  {button}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTO;
