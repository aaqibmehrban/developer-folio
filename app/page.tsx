import React from 'react';
import Layout from '@/components/Layout';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import { TabsData } from '@/components/TabsData';

const Home = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-40 items-start">
        {/* Left Column */}
        <div className="flex flex-col space-y-4">
          <Skills />
          <Education />
          {/* <SocialLinks /> */}
        </div>

        {/* Right Column */}
        <div className="mt-4 md:mt-0">
          <TabsData />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
