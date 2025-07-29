'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FolderOpen, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { featuredProjects } from '../../constants/projects';

const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="p-6 border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-card hover:scale-[1.02] cursor-pointer h-full"
    >
      <div className="flex flex-col space-y-6 h-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FolderOpen className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-card-foreground">Projects</h2>
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
          className="flex flex-col gap-4 flex-1"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="border border-border p-4 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-all duration-200"
            >
              <div className="flex flex-col space-y-3">
                <h3 className="font-bold text-base text-card-foreground line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-col space-y-2">
                  <span className="text-sm font-semibold text-card-foreground">Tech Stack:</span>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 border border-border rounded bg-background text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition-colors text-xs"
                  >
                    <Github className="h-3 w-3" />
                    Code
                  </a>
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition-colors text-xs"
                    >
                      <ExternalLink className="h-3 w-3" />
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

export default ProjectsSection;