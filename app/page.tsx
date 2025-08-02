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
import JoshChatbot from './components/JoshChatbot';
import Footer from './components/ui/Footer';

const HomePage = () => {
  return (
    <>
      <StructuredData />
      <ScrollNavbar />

      <PageTransition>
        <main className="max-w-5xl mx-auto px-4 py-4 space-y-6">
          {/* Hero Section - Full Width */}
          <HeroSection />

          {/* First Row: About (Left) | Experience (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
            {/* Left Column: About */}
            <div className="lg:col-span-2">
              <AboutSection />
            </div>

            {/* Right Column: Experience */}
            <div className="lg:col-span-1">
              <ExperienceSection />
            </div>
          </div>

          {/* Second Row: Tech Stack + Featured Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            {/* Tech Stack */}
            <TechStackSection />

            {/* Featured Projects */}
            <RecentProjectsSection />
          </div>

          {/* Third Row: Beyond Coding + Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
            {/* Beyond Coding - Takes up 2/3 of the space */}
            <div className="lg:col-span-2">
              <OffGridSection />
            </div>

            {/* Contact Section - Takes up 1/3 of the space */}
            <div className="lg:col-span-1">
              <ContactSection />
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </PageTransition>

      {/* Josh's Digital Twin Chatbot */}
      <JoshChatbot />
    </>
  );
};

export default HomePage;
