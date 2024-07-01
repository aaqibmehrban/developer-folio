"use client";

import React from "react";
import { Tabs } from "@/components/ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "About",
      value: "about",
      content: (
        <div className="w-full h-full rounded-2xl p-10 text-md md:text-1xl text-gray-300 bg-transparent transition-all duration-300 hover:bg-[#122B39] hover:text-[#2eb0cb]">
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
        <div className="w-full h-full rounded-2xl p-10 text-md md:text-1xl text-gray-300 bg-transparent transition-all duration-300 hover:bg-[#122B39] hover:text-[#2eb0cb]">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white">2023 - 2024</h3>
              <h3 className="text-2xl font-bold text-white">Full Stack Developer at Fornax Technologies</h3>
              <ul className="list-none mt-2 space-y-2">
                <li>Led a team of 4 Developers, ensuring effective task management and client collaboration for timely, high-quality outputs.</li>
                <li>Designed scalable, efficient products leveraging advanced technologies, resulting in a 20% improvement in performance and a 26.6% reduction in maintenance costs.</li>
                <li>Established structured code review processes and guidelines for the company.</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-sm">JavaScript</span>
                <span className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-sm">React</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">2022 - 2023</h3>
              <h3 className="text-2xl font-bold text-white">Python Developer at Marktpilot</h3>
              <ul className="list-none mt-2 space-y-2">
                <li>Created 100+ web scrapers for real-time data collection, enriching product features with current information from diverse sources.</li>
                <li>Optimized an ETL data pipeline in Python, accelerating data analysis with improved accuracy and speed.</li>
                <li>Authored detailed documentation for web scrapers and data tools, enhancing usability and maintenance.</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Python</span>
                <span className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Web Scraping</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">2021 - 2022</h3>
              <h3 className="text-2xl font-bold text-white">Full Stack Developer at Horizon Technologies</h3>
              <ul className="list-none mt-2 space-y-2">
                <li>Worked as a junior dev for a large team, leading full-stack development and integrating modern UI and backend tech, on a project with a user base of around 10,000 users per day.</li>
                <li>Implemented robust data processing and analysis pipelines, enhancing the platform&apos;s  capabilities in handling and visualizing spatial data.</li>
                <li>Learned to work as a team and contributed to 3 big GIS projects of a company.</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-sm">JavaScript</span>
                <span className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-sm">GIS</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Projects",
      value: "projects",
      content: (
        <div className="w-full h-full rounded-2xl p-10 text-lg md:text-2xl text-gray-300 bg-transparent transition-all duration-300 hover:bg-[#122B39] hover:text-[#2eb0cb]">
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
        <div className="w-full h-full rounded-2xl p-10 text-lg md:text-2xl text-gray-300 bg-transparent transition-all duration-300 hover:bg-[#122B39] hover:text-[#2eb0cb]">
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
