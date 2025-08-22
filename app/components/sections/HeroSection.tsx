'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Linkedin, Github } from 'lucide-react';
import CustomButton from '../ui/CustomButton';
import { personalInfo } from '../../constants/personal';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const HeroSection = () => {
  // Detect if user prefers reduced motion
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
      }}
      className="flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 md:p-6 bg-card border border-border rounded-lg shadow-sm">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: prefersReducedMotion ? 0.1 : 0.3,
          delay: prefersReducedMotion ? 0 : 0.1,
        }}
        className="relative w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src="/profile-icon.png"
          alt={`${personalInfo.name} Profile Picture`}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Profile Info */}
      <div className="flex flex-col space-y-2 md:space-y-3 text-center md:text-left flex-1">
        <motion.div
          initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0.1 : 0.3,
            delay: prefersReducedMotion ? 0 : 0.2,
          }}>
          <h1 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-card-foreground leading-tight">
            {personalInfo.name}
          </h1>
          <p className="text-sm md:text-base text-muted-foreground mt-1">
            {personalInfo.title}
          </p>

          <div className="flex items-center justify-center md:justify-start gap-1.5 mt-2">
            <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4 text-muted-foreground" />
            <span className="text-xs md:text-sm text-muted-foreground">
              {personalInfo.location}
            </span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0.1 : 0.3,
            delay: prefersReducedMotion ? 0 : 0.3,
          }}
          className="flex flex-row gap-2 md:gap-3 justify-center md:justify-start">
          <CustomButton
            onClick={() =>
              window.open(personalInfo.socialLinks.linkedin, '_blank')
            }
            variant="primary"
            size="sm"
            className="text-xs md:text-sm font-normal px-3 py-1.5 md:px-4 md:py-2">
            <Linkedin className="h-3.5 w-3.5 md:h-4 md:w-4" />
            LinkedIn
          </CustomButton>

          <CustomButton
            onClick={() =>
              window.open(personalInfo.socialLinks.github, '_blank')
            }
            variant="primary"
            size="sm"
            className="text-xs md:text-sm font-normal px-3 py-1.5 md:px-4 md:py-2">
            <Github className="h-3.5 w-3.5 md:h-4 md:w-4" />
            GitHub
          </CustomButton>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
