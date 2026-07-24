"use client";

import React from "react";
import Link from "next/link";
import { Tabs } from "@/components/ui/tabs";
import ProjectThumb from "@/components/ProjectThumb";
import { aboutText, experience, featuredProjects, posts, repoLink, resumeUrl } from "@/data/contentConfig";

export function TabsData() {
  const tabs = [
    {
      title: "About",
      value: "about",
      content: (
        <div className="w-full h-full rounded-2xl p-10 text-md md:text-1xl text-gray-300 bg-transparent transition-all duration-300 hover:bg-[#122B39] hover:text-[#2eb0cb]">
          {aboutText.map((paragraph, index) => (
            <p key={index} className="leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
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
                <p className="mt-3 text-gray-300">{exp.summary}</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
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
              <Link key={index} href={`/projects/${project.slug}`} className="block p-4 rounded-lg border border-gray-700 hover:bg-[#122B39] hover:border-[#2eb0cb] transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                      {project.url && <span className="text-[#2eb0cb]"> ↗</span>}
                    </h3>
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
                  <div>
                    <ProjectThumb image={project.image} title={project.title} />
                  </div>
                </div>
              </Link>
            ))}
            <div className="flex flex-wrap items-center gap-6 mt-8">
              <Link href="/archive" className="text-[#2eb0cb] hover:text-white transition duration-300">
                View Full Archived List →
              </Link>
              <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-[#2eb0cb] hover:text-white transition duration-300">
                View Github Repo List →
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Posts",
      value: "posts",
      content: (
        <div className="w-full h-full rounded-2xl p-10 text-md md:text-1xl text-gray-300 bg-transparent transition-all duration-300 hover:bg-[#122B39] hover:text-[#2eb0cb]">
          <div className="space-y-8">
            {posts.map((post, index) => (
              <div key={index} className="p-4 rounded-lg border border-gray-700 hover:bg-[#122B39] hover:border-[#2eb0cb] transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-regular text-white">{post.year}</h3>
                    <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-white hover:text-[#2eb0cb]">
                      {post.title}
                    </a>
                  </div>
                  <div>
                    <img src={post.thumbnail} alt={post.title} className="rounded-lg shadow-md" />
                  </div>
                </div>
              </div>
            ))}
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
