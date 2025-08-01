'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon } from 'lucide-react';
import { personalInfo } from '../../constants/personal';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ExperienceSection = () => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : prefersReducedMotion ? 0 : 30,
      }}
      transition={{
        duration: prefersReducedMotion ? 0.2 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.1,
      }}
      className="h-full p-3 border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-card flex flex-col">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-2">
          <BriefcaseIcon className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold text-card-foreground">Experience</h2>
        </div>

        <div className="flex flex-col space-y-6 flex-1">
          {/* Professional Experience */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Professional Experience
            </h3>
            {personalInfo.experience
              .filter(
                (exp) =>
                  !exp.company.includes('GDG') &&
                  !exp.company.includes('University') &&
                  !exp.company.includes('Campus')
              )
              .map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col space-y-2">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        exp.current ? 'bg-primary' : 'bg-muted-foreground'
                      }`}></div>
                    <h4 className="text-sm font-bold text-card-foreground">
                      {exp.role}
                    </h4>
                  </div>
                  <div className="ml-4 flex flex-col space-y-1">
                    <p className="text-xs font-medium text-card-foreground">
                      {exp.company}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {exp.location}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {exp.year}
                    </span>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Education & University Experience */}
          <div className="flex flex-col space-y-3 pt-2 border-t border-border">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Education & University Experience
            </h3>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <h4 className="text-sm font-bold text-card-foreground">
                  {personalInfo.education.degree}
                </h4>
              </div>
              <div className="ml-4 flex flex-col space-y-4">
                <p className="text-xs font-medium text-card-foreground">
                  {personalInfo.education.institution}
                </p>
                <span className="text-xs text-muted-foreground">
                  {personalInfo.education.year}
                </span>
              </div>
            </motion.div>

            {/* University-related Experience */}
            {personalInfo.experience
              .filter(
                (exp) =>
                  exp.company.includes('GDG') ||
                  exp.company.includes('University') ||
                  exp.company.includes('Campus')
              )
              .map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex flex-col space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <h4 className="text-sm font-bold text-card-foreground">
                      {exp.role}
                    </h4>
                    <span className="text-xs px-2 py-1 bg-accent/20 text-accent-foreground rounded-full">
                      University
                    </span>
                  </div>
                  <div className="ml-4 flex flex-col space-y-1">
                    <p className="text-xs font-medium text-card-foreground">
                      {exp.company}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {exp.location}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {exp.year}
                    </span>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceSection;
