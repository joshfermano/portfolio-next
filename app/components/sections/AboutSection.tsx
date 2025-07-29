'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { personalInfo } from '../../constants/personal';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const AboutSection = () => {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

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
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="p-4 border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-card"
    >
      <div className="flex flex-col space-y-3">
        <div className="flex items-center gap-2">
          <Info className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold text-card-foreground">About</h2>
        </div>
        
        <div className="flex flex-col space-y-4 text-sm text-card-foreground">
          {personalInfo.bio.map((paragraph, index) => {
            // Function to render markdown bold text
            const renderMarkdown = (text: string) => {
              const parts = text.split(/(\*\*[^*]+\*\*)/g);
              return parts.map((part, partIndex) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  const boldText = part.slice(2, -2);
                  return (
                    <span key={partIndex} className="font-bold text-primary">
                      {boldText}
                    </span>
                  );
                }
                return part;
              });
            };

            return (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="leading-relaxed"
              >
                {renderMarkdown(paragraph)}
              </motion.p>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;