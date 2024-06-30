"use client";

import React from "react";
import { Tabs } from "@/components/ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "About",
      value: "about",
      content: (
        <div className="w-full h-full rounded-2xl p-10 text-xl md:text-2xl text-gray-300 bg-transparent transition-all duration-300 hover:bg-[#122B39] hover:text-[#2eb0cb]">
          <p className="leading-relaxed">
            From the beginning of my academic journey in Geoinformatics Engineering at the National University of Sciences and Technology (NUST), I have been passionate about solving real-world problems through technology. My early foray into freelancing allowed me to work with over 100 clients globally, honing my skills in writing extensions for QGIS, data visualization, image processing, and structuring databases in PostgreSQL.
          </p>
          <p className="leading-relaxed mt-4">
            Fast-forward to today, and I have had the privilege of building software across various domains, including advertising, start-ups, large corporations, and digital product studios. Currently, as a Full Stack Developer, I lead a team in designing scalable and efficient products, leveraging advanced technologies to enhance performance and reduce maintenance costs.
          </p>
        </div>
      ),
    },
    {
      title: "Experience",
      value: "experience",
      content: (
        <div className="w-full h-full rounded-2xl p-10 text-xl md:text-2xl text-gray-300 bg-transparent transition-all duration-300 hover:bg-[#122B39] hover:text-[#2eb0cb]">
          <p className="leading-relaxed">
            Experience Tab
          </p>
        </div>
      ),
    },
    {
      title: "Projects",
      value: "projects",
      content: (
        <div className="w-full h-full rounded-2xl p-10 text-xl md:text-2xl text-gray-300 bg-transparent transition-all duration-300 hover:bg-[#122B39] hover:text-[#2eb0cb]">
          <p className="leading-relaxed">
            Projects Tab
          </p>
        </div>
      ),
    },
    {
      title: "Posts",
      value: "posts",
      content: (
        <div className="w-full h-full rounded-2xl p-10 text-xl md:text-2xl text-gray-300 bg-transparent transition-all duration-300 hover:bg-[#122B39] hover:text-[#2eb0cb]">
          <p className="leading-relaxed">
            Posts Tab
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
}
