import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import DownloadButton from './DownloadButton';
import { headerData } from '@/data/contentConfig';

type HeaderProps = {
  profileImage: string;
};

const Header: React.FC<HeaderProps> = ({ profileImage }) => {
  const { name, title, location, description, buttons } = headerData;

  return (
    <header className="bg-header-gradient rounded-custom-header-lg p-4 md:p-8 mx-2 md:mx-4 my-6 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
      <div className="relative w-24 h-24 md:w-48 md:h-48 rounded-full overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition duration-300 hover:from-blue-500 hover:via-green-500 hover:to-yellow-500 p-1">
        <div className="w-full h-full rounded-full bg-[#e7dfba] p-1">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold text-white">{name}</h1>
        <p className="text-lg md:text-xl text-gray-300">{title}</p>
        <p className="text-gray-400 flex justify-center md:justify-start items-center">
          <FaMapMarkerAlt className="mr-2" /> {location}
        </p>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-4">
          {buttons.map((button, index) =>
            button.isDownloadButton ? (
              <DownloadButton key={index} />
            ) : (
              <a
                key={index}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className={button.className}
              >
                {button.text}
              </a>
            )
          )}
        </div>
        <p className="mt-4 text-gray-300">{description}</p>
      </div>
    </header>
  );
};

export default Header;
