'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Code } from 'lucide-react';
import Link from 'next/link';
import PageTransition from '../components/ui/PageTransition';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import techStack from '../constants/tech-stack';

const TechStackPage = () => {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const formatSectionTitle = (section: string) => {
    if (section === 'aiml') return 'AI/ML';
    if (section === 'developerTools') return 'Developer Tools';
    if (section === 'devops') return 'DevOps and Cloud';
    if (section === 'cms') return 'CMS';

    // Convert camelCase to title case
    return section.charAt(0).toUpperCase() + section.slice(1);
  };

  const HeaderSection = () => {
    const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

    return (
      <motion.div
        ref={elementRef}
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : (prefersReducedMotion ? 0 : 20) 
        }}
        transition={{ 
          duration: prefersReducedMotion ? 0.2 : 0.5,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        className="flex flex-col space-y-4 justify-center"
      >
        <div className="flex items-center gap-4 sm:gap-6">
          <Link 
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <h1 className="font-heading text-xl sm:text-2xl font-bold flex items-center gap-2 text-card-foreground">
            <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            Tech Stack
          </h1>
        </div>
      </motion.div>
    );
  };

  const TechSection = ({ section, technologies, index }: { section: string; technologies: string[]; index: number }) => {
    const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: prefersReducedMotion ? 0.01 : 0.03,
          delayChildren: 0.1
        }
      }
    };

    const itemVariants = {
      hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: prefersReducedMotion ? 0.1 : 0.2 }
      }
    };

    return (
      <motion.div
        ref={elementRef}
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : (prefersReducedMotion ? 0 : 30) 
        }}
        transition={{ 
          duration: prefersReducedMotion ? 0.2 : 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: index * 0.1
        }}
        className="flex flex-col justify-center gap-3"
      >
        <h2 className="font-heading text-lg sm:text-xl font-bold text-card-foreground">
          {formatSectionTitle(section)}
        </h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="flex flex-wrap gap-2"
        >
          {technologies.map((tech, techIndex) => (
            <motion.div
              key={`${section}-${techIndex}`}
              variants={itemVariants}
              className="group"
            >
              <span className="tech-badge inline-block px-3 py-1.5 bg-card border border-border rounded-lg text-card-foreground hover:border-primary/50 hover:bg-secondary/50 transition-all duration-200 cursor-default">
                {tech}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-xs text-muted-foreground">
          {technologies.length} {technologies.length === 1 ? 'technology' : 'technologies'}
        </div>
      </motion.div>
    );
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <main className="max-w-5xl mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col space-y-6 sm:space-y-8 justify-center">
            <HeaderSection />
            
            <div className="flex flex-col justify-center gap-6 sm:gap-8">
              {Object.entries(techStack).map(([section, technologies], index) => (
                <TechSection
                  key={section}
                  section={section}
                  technologies={technologies}
                  index={index}
                />
              ))}
            </div>

            {/* Summary Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-12 pt-8 border-t border-border text-center"
            >
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                This represents my current technical expertise. I&apos;m constantly learning and exploring new technologies 
                to stay current with industry trends and best practices.
              </p>
            </motion.div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default TechStackPage;