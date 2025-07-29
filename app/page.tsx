import React from 'react';
import PageTransition from './components/ui/PageTransition';
import ScrollNavbar from './components/ui/ScrollNavbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/ExperienceSection';
import TechStackSection from './components/sections/TechStackSection';
import RecentProjectsSection from './components/sections/RecentProjectsSection';
import ContactSection from './components/sections/ContactSection';
import OffGridSection from './components/sections/OffGridSection';
import StructuredData from './components/StructuredData';

const HomePage = () => {
  return (
    <>
      <StructuredData />
      <ScrollNavbar />

      <PageTransition>
        <main className="max-w-5xl mx-auto px-4 py-6 space-y-6">
          {/* Hero Section - Full Width */}
          <HeroSection />

          {/* About Section - Full Width */}
          <AboutSection />

          {/* Two Column Layout: Experience + Tech Stack & Recent Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Experience Section */}
            <div className="lg:col-span-1 space-y-4 flex flex-col">
              <ExperienceSection />
              <div className="flex-1">
                <ContactSection />
              </div>
            </div>

            {/* Tech Stack and Recent Projects */}
            <div className="lg:col-span-3 space-y-4 flex flex-col">
              {/* Tech Stack and Recent Projects Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Tech Stack */}
                <TechStackSection />

                {/* Recent Projects */}
                <RecentProjectsSection />
              </div>

              {/* Beyond Coding Section - Full Width under Tech Stack & Projects */}
              <div className="flex-1">
                <OffGridSection />
              </div>
            </div>
          </div>
        </main>
      </PageTransition>
    </>
  );
};

export default HomePage;
