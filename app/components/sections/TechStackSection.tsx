'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Laptop, ChevronRight } from 'lucide-react';
import techStack from '../../constants/tech-stack';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const TechStackSection = () => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0.05 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: prefersReducedMotion ? 0.15 : 0.3 },
    },
  };

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
        delay: 0.3,
      }}
      className="h-full p-4 border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-card flex flex-col">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Laptop className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-card-foreground">
              Tech Stack
            </h2>
          </div>

          <Link
            href="/tech-stack"
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
            View All <ChevronRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          {/* Frontend */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-bold text-card-foreground">Frontend</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-2">
              {techStack.frontend.slice(0, 9).map((tech, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="text-xs px-3 py-1 border border-border rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Backend */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-bold text-card-foreground">Backend</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-2">
              {techStack.backend.slice(0, 11).map((tech, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="text-xs px-3 py-1 border border-border rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* AI/ML */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-bold text-card-foreground">AI/ML</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-2">
              {techStack.aiml.slice(0, 9).map((tech, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="text-xs px-3 py-1 border border-border rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechStackSection;
