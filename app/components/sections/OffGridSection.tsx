'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';
import { personalInfo } from '../../constants/personal';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const OffGridSection = () => {
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
        delay: 0.4,
      }}
      className="p-3 border border-border rounded-lg shadow-sm hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 bg-card group">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-2">
          <Coffee className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
          <h2 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
            Off The Grid
          </h2>
        </div>

        <div className="flex flex-col space-y-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-sm hover:shadow-md">
            {personalInfo.interests.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                className="text-sm leading-relaxed"
                style={{
                  marginBottom:
                    index < personalInfo.interests.length - 1 ? '0.75rem' : '0',
                }}
                dangerouslySetInnerHTML={{
                  __html: paragraph.replace(
                    /\*\*(.*?)\*\*/g,
                    '<strong>$1</strong>'
                  ),
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default OffGridSection;
