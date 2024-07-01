import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import DownloadButton from './DownloadButton';

type HeaderProps = {
  profileImage: string;
};

const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/cv.pdf'; // Adjust the path if your PDF is located elsewhere
  link.download = 'Aaqib_Mehrban_CV.pdf';
  link.click();
};

const Header: React.FC<HeaderProps> = ({ profileImage }) => {
  return (
    <header className="bg-header-gradient rounded-custom-header-lg p-8 mx-4 my-6 flex justify-center items-center">
      <div className="flex items-center space-x-8">
        {/* <img
          src={profileImage}
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover border-2 border-gray-300"
        /> */}
       <div className="relative w-48 h-48 rounded-full overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition duration-300 hover:from-blue-500 hover:via-green-500 hover:to-yellow-500 p-1">
        <div className="w-full h-full rounded-full bg-[#e7dfba] p-1">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>


        <div className="text-align-left">
          <h1 className="text-4xl font-bold text-white">Aaqib Mehrban</h1>
          <p className="text-xl text-gray-300">FullStack Developer | GIS Engineer</p>
          <p className="text-gray-400 flex items-center">
            <FaMapMarkerAlt className="mr-2" /> Espoo, Finland
          </p>
          <div className="flex space-x-2 mt-2">
          <a
            href="https://calendly.com/rajaaaqib775/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear"
          >
            Book a Meeting
          </a>
          <DownloadButton />
            <a
            href="https://wa.me/+923419679543" // Replace `your_phone_number` with your actual phone number
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear inline-block"
          >
            Request a Service
          </a>
          </div>
          <p className="mt-4 text-gray-300">
            I build pixel-perfect, engaging, and accessible digital GIS experiences.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
