import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaSquareXTwitter, FaSquareUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
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

const SocialLinks = () => {
  return (
    <div className="space-y-2">
    <div className="flex justify-center space-x-4 mt-4">
        {footerData.socialLinks.map(({ href, icon }, index) => {
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
    
  );
};

export default SocialLinks;
