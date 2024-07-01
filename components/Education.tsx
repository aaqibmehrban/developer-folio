import React from 'react';
import { education } from '@/data/contentConfig';

const Education = () => {
  return (
    <div className="space-y-2 rounded-lg p-4 bg-transparent transition-colors duration-300 hover:bg-[#122B39]">
      <h2 className="text-2xl font-regular text-white transform transition duration-400 hover:text-[#2eb0cb]">Education</h2>
      <div className="relative mb-4">
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 blur-lg"></div>
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white"></div>
      </div>
      <div className="flex flex-col space-y-4 mt-4">
        {education.map((edu, index) => (
          <div key={index} className="flex justify-between">
            <div>
              <h3 className="text-lg font-light text-white">{edu.degree}</h3>
              <p className="text-gray-300">{edu.school}</p>
            </div>
            <div>
              <p className="text-gray-300">{edu.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
