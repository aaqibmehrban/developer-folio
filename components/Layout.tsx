import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Spotlight } from '../components/ui/Spotlight';
import { TabsDemo } from './TabsDemo'; // Adjust the import path as needed
import LightEffect from './LightEffect'; // Import the new LightEffect component
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaSquareXTwitter,FaSquareUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
// Instead of page.tsx in app i put all components here which i have to fix

interface LayoutProps {
  children: ReactNode;
}

const skills = [
  "Python", "Javascript", "TypeScript", "HTML5", "CSS3", "MUI", "Shadcn",
  "Tailwind", "React.js", "Next.js", "JQuery", "Node.js", "Express.js", "Django",
  "Flask", "MySQL", "Mongodb", "PostgreSQL", "Docker", "Git", "Github", "Jest",
  "Selenium", "Puppeteer", "Appium", "RESTful API", "Postman", "API Testing",
  "SQA", "Graphql", "Cloud Services", "Redis", "Vite", "Linux", "Slack", "Trello", "Figma"
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-custom-gradient">
      <Header profileImage="/profile.png" />
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 right-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <main className="flex-grow container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40 items-start">
          {/* Left Column */}
          <div className="flex flex-col space-y-4">
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
            <div className="space-y-2 rounded-lg p-4 bg-transparent transition-colors duration-300 hover:bg-[#122B39]">
              <h2 className="text-2xl font-regular text-white transform transition duration-400 hover:text-[#2eb0cb]">Education</h2>
              <div className="relative mb-4">
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 blur-lg"></div>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white"></div>
              </div>
              <div className="flex flex-col space-y-4 mt-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-light text-white">Masters in Geoinformatics Engineering</h3>
                    <p className="text-gray-300">Aalto University</p>
                  </div>
                  <div>
                    <p className="text-gray-300">Finland</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-light text-white">Bachelors in Geoinformatics Engineering</h3>
                    <p className="text-gray-300">National University of Science & Technology</p>
                  </div>
                  <div>
                    <p className="text-gray-300">Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
            <div className="flex justify-center space-x-4 mt-4">
                <a href="https://github.com/aaqibmehrban" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <FaGithub size={36} />
                </a>
                <a href="https://www.linkedin.com/in/aaqibmehrban" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <FaLinkedin size={36} />
                </a>
                <a href="https://x.com/rajaaaqib775" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <FaSquareXTwitter size={36} />
                </a>
                <a href="https://instagram.com/aaqibmehrban" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <FaInstagram size={36} />
                </a>
                <a href="mailto:rajaaaqib775@gmail.com" className="text-gray-300 hover:text-white">
                  <FaEnvelope size={36} />
                </a>
                <a href="https://fiverr.com/aaqibmehrban" className="text-gray-300 hover:text-white">
                  <TbBrandFiverr size={36} />
                </a>
                <a href="https://www.upwork.com/freelancers/~0181468059aaa92204?mp_source=share" className="text-gray-300 hover:text-white">
                  <FaSquareUpwork size={36} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="mt-4 md:mt-0">
            <TabsDemo />
          </div>
        </div>
      </main>

      <Footer />
      <LightEffect /> {/* Add the LightEffect component here */}
    </div>
  );
};

export default Layout;
