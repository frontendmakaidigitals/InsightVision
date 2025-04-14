"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
const Techstack = () => {
  const image1 = [
    "electron.png",
    "bunjs.png",
    "hyper.png",
    "android.png",
    "angular.png",
    "appwrite.png",
    "reactjs.png",
    "aws.png",
    "kotlin.svg",
  ];

  const image2 = [
    "bash.png",
    "analytics.png",
    "django.png",
    "docker.png",
    "flutter.png",
    "go.png",
    "gcloud.png",
    "wordpress.svg",
    "azure.png",
  ];

  const Images = [...image1, ...image2];
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  return (
    <div>
      <div className="container my-10 pb-20">
        <h2 className="text-3xl text-center mb-2 lg:text-6xl font-Plus-Jakarta-Sans font-[600]">
          Technologies
        </h2>
        <div className="grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-9 gap-y-24 place-items-center">
          {Images.map((image, idx) => (
            <motion.div
              onMouseEnter={() => setHoverIdx(idx)}
              onMouseLeave={() => setHoverIdx(null)}
              className=" h-12 flex justify-center items-center group relative"
              key={idx}
            >
              <motion.div
                animate={{
                  padding: hoverIdx === idx ? "1.2rem 1.2rem" : "0.5rem",
                  backgroundColor: hoverIdx === idx ? "#DDE2F7" : "",
                  width: hoverIdx === idx ? "250px" : "75px",
                  height: hoverIdx === idx ? "200px" : "75px",
                  zIndex: hoverIdx === idx ? 10 : 1, // << ADDED this line
                }}
                className="absolute flex group-hover:shadow-md justify-center items-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-xl"
              >
                <motion.div
                  animate={{
                    top: hoverIdx === idx ? ".7rem" : "0rem",
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }} // << added this
                  className="absolute w-24 h-24 group-hover:-translate-x-1/2 group-hover:left-1/2"
                >
                  <motion.img
                    src={`media/Logo/${image}`}
                    className="w-full h-full object-contain"
                    animate={{
                      scale: hoverIdx === idx ? 1 : 1,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }} // << added this
                  />
                </motion.div>

                {hoverIdx === idx ? (
                  <motion.p
                    className="mt-24 text-start text-sm px-2"
                    initial={{ opacity: 0, y: 10, width:'250px' }}
                    animate={{ opacity: 1, y: 0, width:'250px' }}
                    exit={{ opacity: 0, y: 10, width:'250px' }}
                    transition={{delay:.2}}
                  >
                    <span className="capitalize font-[600] block text-xl font-Plus-Jakarta-Sans">
                      {image.replace(/\.(png|svg)$/, "")}
                    </span>
                    <span className="mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                  </motion.p>
                ) : null}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techstack;
