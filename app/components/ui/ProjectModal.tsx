'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Eye, Calendar, Code, Layers } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import CustomButton from './CustomButton';
import { Project } from '../../constants/projects';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  projectImage?: string | StaticImageData;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  isOpen, 
  onClose, 
  projectImage 
}) => {
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2 sm:p-4">
            <motion.div
              initial={{ 
                opacity: 0, 
                scale: prefersReducedMotion ? 1 : 0.9,
                y: prefersReducedMotion ? 0 : 20 
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: 0 
              }}
              exit={{ 
                opacity: 0, 
                scale: prefersReducedMotion ? 1 : 0.9,
                y: prefersReducedMotion ? 0 : 20 
              }}
              transition={{ 
                duration: prefersReducedMotion ? 0.1 : 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="bg-background border border-border rounded-xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] mt-2 sm:mt-0 flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative p-4 sm:p-6 border-b border-border flex-shrink-0">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl sm:text-2xl font-bold text-card-foreground">
                        {project.title}
                      </h2>
                      {project.featured && (
                        <span className="px-2 py-1 text-xs bg-primary text-primary-foreground rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Layers className="h-4 w-4" />
                        <span>{project.category || 'Web'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Code className="h-4 w-4" />
                        <span>{project.techStack.length} Technologies</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-accent rounded-lg transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  {/* Project Image */}
                  {projectImage && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border">
                      <Image
                        src={projectImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Description */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Project Overview
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: prefersReducedMotion ? 0 : index * 0.05,
                            duration: prefersReducedMotion ? 0.1 : 0.3 
                          }}
                          className="px-3 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium border border-border hover:bg-secondary/80 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Key Features
                      </h3>
                      <ul className="space-y-2 text-muted-foreground ml-4">
                        {project.keyFeatures.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              delay: prefersReducedMotion ? 0 : index * 0.1,
                              duration: prefersReducedMotion ? 0.1 : 0.3 
                            }}
                            className="flex items-start gap-2"
                          >
                            <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="flex-shrink-0 p-4 sm:p-6 border-t border-border bg-secondary/20">
                <div className="flex flex-col gap-3">
                  <div className="hidden sm:block text-sm text-muted-foreground text-center">
                    Want to see more projects like this?
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <CustomButton variant="secondary" className="w-full flex items-center justify-center gap-2 h-11">
                          <Github className="h-4 w-4" />
                          View Code
                        </CustomButton>
                      </a>
                    )}
                    
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <CustomButton variant="primary" className="w-full flex items-center justify-center gap-2 h-11">
                          <Eye className="h-4 w-4" />
                          Live Demo
                        </CustomButton>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;