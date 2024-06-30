import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

type HeaderProps = {
  profileImage: string;
};

const Header: React.FC<HeaderProps> = ({ profileImage }) => {
  return (
    <header className="bg-header-gradient rounded-custom-header-lg p-8 mx-4 my-6 flex justify-center items-center">
      <div className="flex items-center space-x-8">
        <img
          src={profileImage}
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover border-2 border-gray-300"
        />
        <div className="text-align-left">
          <h1 className="text-4xl font-bold text-white">Aaqib Mehrban</h1>
          <p className="text-xl text-gray-300">FullStack GIS Engineer</p>
          <p className="text-gray-400 flex items-center">
            <FaMapMarkerAlt className="mr-2" /> Espoo, Finland
          </p>
          <div className="flex space-x-2 mt-2">
            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
              Fiverr
            </button>
            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
              Upwork
            </button>
            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
              Hire Me for a Project
            </button>
          </div>
          <p className="mt-4 text-gray-300">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
