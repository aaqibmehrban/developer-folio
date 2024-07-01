import React from 'react';
import { skills } from '@/data/contentConfig';

const Skills = () => {
  return (
    <div className="rounded-lg p-4 bg-transparent transition-colors duration-300 hover:bg-[#122B39]">
      <h1 className="text-2xl font-regular text-white transform transition duration-400 hover:text-[#2eb0cb]">Skills</h1>
      <div className="relative mb-4">
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 blur-lg"></div>
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white"></div>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <button key={index} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Skills;
