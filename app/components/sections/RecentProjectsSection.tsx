'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FolderOpen, ChevronRight, Github, Eye } from 'lucide-react';
import { featuredProjects } from '../../constants/projects';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const RecentProjectsSection = () => {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0.05 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.2 : 0.4 }
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
        delay: 0.35
      }}
      className="p-3 border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-card"
    >
      <div className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FolderOpen className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-card-foreground">Featured Projects</h2>
          </div>
          
          <Link 
            href="/projects"
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            View All <ChevronRight className="h-3 w-3" />
          </Link>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-2"
        >
          {featuredProjects.slice(0, 2).map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="border border-border p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-200 group"
            >
              <div className="flex flex-col space-y-1 h-full">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-sm text-card-foreground line-clamp-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-xs text-muted-foreground line-clamp-2 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 pt-2">
                  {project.techStack.slice(0, 2).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-background border border-border rounded text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 2 && (
                    <span className="text-xs px-2 py-1 text-muted-foreground">
                      +{project.techStack.length - 2} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2 py-1 text-xs bg-secondary hover:bg-secondary/80 border border-border rounded transition-colors"
                    >
                      <Github className="h-3 w-3" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2 py-1 text-xs bg-primary text-primary-foreground hover:bg-primary/90 rounded transition-colors"
                    >
                      <Eye className="h-3 w-3" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RecentProjectsSection;