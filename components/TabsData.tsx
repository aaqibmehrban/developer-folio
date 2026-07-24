"use client";

import React from "react";
import Link from "next/link";
import { Tabs } from "@/components/ui/tabs";
import ProjectThumb from "@/components/ProjectThumb";
import { aboutText, experience, featuredProjects, focusAreas, resumeUrl } from "@/data/contentConfig";

export function TabsData() {
  const tabs = [
    {
      title: "About",
      value: "about",
      content: (
        <div className="w-full h-full rounded-2xl p-6 md:p-10 bg-transparent transition-all duration-300">
          <div className="relative max-w-2xl pl-5">
            <div className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-gradient-to-b from-[#2eb0cb] to-purple-500" />
            <p className="text-xl md:text-2xl font-light leading-snug tracking-tight text-white">
              {aboutText[0]}
            </p>
          </div>

          <div className="max-w-2xl mt-6 space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
            {aboutText.slice(1).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {focusAreas.map((area, idx) => (
              <span
                key={idx}
                className="text-xs md:text-sm tracking-wide uppercase text-[#2eb0cb] border border-[#2eb0cb]/30 bg-[#2eb0cb]/5 px-3 py-1 rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Experience",
      value: "experience",
      content: (
        <div className="w-full h-full rounded-2xl p-10 text-md md:text-1xl text-gray-300 bg-transparent transition-all duration-300">
          <div className="space-y-10">
            {experience.map((exp, index) => (
              <div key={index} className="p-4 rounded-lg border border-gray-700 hover:bg-[#122B39] hover:border-[#2eb0cb] transition-all duration-300">
                <h3 className="text-sm font-regular text-gray-400">{exp.dateRange} · {exp.location}</h3>
                <h3 className="text-2xl font-bold text-white mt-1">{exp.position}</h3>
                <p className="text-[#2eb0cb]">{exp.company} · {exp.employmentType}</p>
                <p className="mt-4 text-gray-300 leading-relaxed">{exp.narrative}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-sm">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-2">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Projects",
      value: "projects",
      content: (
        <div className="w-full h-full rounded-2xl p-10 text-md md:text-1xl text-gray-300 bg-transparent transition-all duration-300">
          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="p-4 rounded-lg border border-gray-700 hover:bg-[#122B39] hover:border-[#2eb0cb] transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-start">
                  <div>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-[#2eb0cb] hover:text-white transition-colors mb-2"
                      >
                        {project.urlLabel ?? "View Project"} ↗
                      </a>
                    )}
                    <Link href={`/projects/${project.slug}`} className="block">
                      <h3 className="text-2xl font-bold text-white hover:text-[#2eb0cb] transition-colors">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="mt-2 text-gray-300">{project.description}</p>
                    {project.stars && (
                      <p className="mt-2 text-gray-300">⭐ {project.stars}</p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.skills.map((skill, idx) => (
                        <span key={idx} className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <Link href={`/projects/${project.slug}`} className="block">
                    <ProjectThumb
                      image={project.image}
                      title={project.title}
                      className="rounded-lg shadow-md w-full aspect-video object-cover"
                    />
                  </Link>
                </div>
              </div>
            ))}
            <div className="flex flex-wrap items-center gap-6 mt-8">
              <Link href="/archive" className="text-[#2eb0cb] hover:text-white transition duration-300">
                View Full Archived List →
              </Link>
            </div>
          </div>
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
