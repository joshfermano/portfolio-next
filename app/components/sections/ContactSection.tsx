'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Contact,
  Mail,
  Linkedin,
  Github,
  Instagram,
  Facebook,
} from 'lucide-react';
import CustomButton from '../ui/CustomButton';
import { personalInfo } from '../../constants/personal';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ContactSection = () => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const socialIcons = {
    linkedin: Linkedin,
    github: Github,
    instagram: Instagram,
    facebook: Facebook,
  };

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
        delay: 0.2,
      }}
      className="p-3 border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-card">
      <div className="flex flex-col space-y-3">
        <div className="flex items-center gap-2">
          <Contact className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold text-card-foreground">Connect</h2>
        </div>

        <div className="flex flex-col gap-3">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="space-y-2">
            <div className="text-xs text-muted-foreground break-all">
              {personalInfo.email}
            </div>
            <CustomButton
              onClick={() =>
                window.open(`mailto:${personalInfo.email}`, '_blank')
              }
              variant="primary"
              size="sm"
              className="w-full">
              <Mail className="h-4 w-4" />
              Email Me
            </CustomButton>
          </motion.div>

          {/* Social Links */}
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-bold text-card-foreground">
              Social Links
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-row gap-3 justify-center">
              {Object.entries(personalInfo.socialLinks).map(
                ([platform, url]) => {
                  const IconComponent =
                    socialIcons[platform as keyof typeof socialIcons];
                  const platformName =
                    platform.charAt(0).toUpperCase() + platform.slice(1);

                  return (
                    <motion.div key={platform} variants={itemVariants}>
                      <CustomButton
                        onClick={() => window.open(url, '_blank')}
                        variant="secondary"
                        size="sm"
                        className="w-10 h-10 p-0 flex items-center justify-center"
                        title={platformName}>
                        <IconComponent className="h-4 w-4" />
                      </CustomButton>
                    </motion.div>
                  );
                }
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
