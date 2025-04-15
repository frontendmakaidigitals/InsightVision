"use client";
import React, { useState } from "react";
import { StarFour } from "@phosphor-icons/react";
import { Marquee } from "@/components/magicui/marquee";
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
    <div className="py-16">
      <div className="container">
        <h2 className="text-3xl text-center lg:text-6xl font-Plus-Jakarta-Sans font-[600]">
          Technologies
        </h2>
      </div>
      <div className="mt-14">
        <Marquee reverse className="[--duration:30s]">
          {Images.map((tech, idx) => (
            <div
              key={idx}
              className="text-indigo-50 min-w-32 flex items-center justify-center font-DM-Sans font-[600] text-3xl"
            >
              <img src={`media/Logo/${tech}`} className="" alt={tech} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Techstack;
