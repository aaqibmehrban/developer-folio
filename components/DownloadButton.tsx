"use client"; // This makes the file a client component

import React from 'react';

const DownloadButton: React.FC = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/docs/cv.pdf'; // Adjust the path if your PDF is located elsewhere
    link.download = 'Aaqib_Mehrban_CV.pdf';
    link.click();
  };

  return (
    <button
      onClick={downloadCV}
      className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear"
    >
      Download CV
    </button>
  );
};

export default DownloadButton;
