"use client";

import { Carousel, Card } from "@/app/App_Chunks/Carousel";
import React from "react";

export function Productivity() {
  const cards = data.map((card) => <Card key={card.src} card={card} />);

  return (
    <div className="w-full h-full pt-1 pb-24">
      <h2 className="container text-4xl lg:text-5xl font-[500] text-[#310115]">
        Productivity Tools
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Performance Monitoring",
    title: "Response Time Tracking",
    src: "https://images.unsplash.com/photo-1668358554066-56b68095d219?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "object-center",
  },
  {
    category: "Field Operations",
    title: "GPS Tracking of Agents",
    src: "https://certo-software.imgix.net/app/uploads/2024/01/how-to-detect-gps-tracking-on-your-cell-phone-new.jpg?w=2000&h=&auto=format",
    position: "object-center",
  },
  {
    category: "Customer Engagement",
    title: "Total Calls Logged",
    src: "https://discussions.apple.com/content/attachment/3f5b8c90-1a62-4c33-9b42-1c8656a11c5e",
    position: "object-left",
  },
  {
    category: "Customer Engagement",
    title: "WhatsApp Conversations",
    src: "https://s.yimg.com/ny/api/res/1.2/GTxRDkCOJt3Q._8zsjqD9A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjg-/https://media.zenfs.com/en/how_to_geek_999/069c7d9dfda2a9dee9054da2c82f49dc",
    position: "object-center",
  },
  {
    category: "Scheduling",
    title: "Meetings Arranged",
    src: "https://www.theforage.com/blog/wp-content/uploads/2023/04/What-Is-a-Panel-Interview.jpg",
    position: "object-center",
  },
  {
    category: "Scheduling",
    title: "Meetings Completed",
    src: "https://www.andmeetings.com/wp-content/uploads/2016/02/Ways-to-close-in-a-meeting.jpg",
    position: "object-center",
  },
  {
    category: "CRM & Productivity",
    title: "CRM Usage Monitoring",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "object-center",
  },
  {
    category: "Sales",
    title: "Sales Revenue Tracker",
    src: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "object-center",
  },
  {
    category: "Sales",
    title: "Lead Conversion Rate",
    src: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "object-center",
  },
  {
    category: "Sales",
    title: "Follow-Up Rate",
    src: "https://mlckguqn3ubl.i.optimole.com/cb:kl_A~21c25/w:1920/h:768/q:90/f:best/ig:avif/https://www.voicesage.com/wp-content/uploads/2021/09/customer-centric-hero.jpg",
    position: "object-center",
  },
  {
    category: "Sales",
    title: "Average Time to Close",

    position: "object-center",
    src: "https://images.unsplash.com/photo-1592495981488-073153776d9a?q=80&w=3012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
