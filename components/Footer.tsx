import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaSquareXTwitter, FaSquareUpwork } from 'react-icons/fa6';
import { TbBrandFiverr } from 'react-icons/tb';
import { footerData } from '@/data/contentConfig';

const iconComponents = {
  FaGithub,
  FaLinkedin,
  FaSquareXTwitter,
  FaInstagram,
  FaEnvelope,
  TbBrandFiverr,
  FaSquareUpwork,
} as const;

type IconKey = keyof typeof iconComponents;

const Footer = () => {
  const { text, socialLinks } = footerData;

  return (
    <footer className="text-gray-300 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-40 items-start">
        {/* Left Column */}
        <div className="flex justify-end">
          <div className="flex space-x-4">
            {socialLinks.map(({ href, icon }, index) => {
              const IconComponent = iconComponents[icon as IconKey];
              return (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white bg-[#0D1425] p-2 rounded-lg border border-gray-500 hover:border-white transition-all"
                >
                  <IconComponent size={24} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Column */}
        <div className="text-center md:text-left text-gray-400">
          <p className="px-4">
            {text.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
