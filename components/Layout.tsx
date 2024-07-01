import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Spotlight } from '../components/ui/Spotlight';
import LightEffect from './LightEffect';
import { profileImage } from '@/data/contentConfig';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-custom-gradient">
      <Header profileImage={profileImage} />
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
        {children}
      </main>
      <Footer />
      <LightEffect />
    </div>
  );
};

export default Layout;
