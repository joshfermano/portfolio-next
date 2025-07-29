'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, FolderOpen, Github, Eye, Grid, List } from 'lucide-react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import PageTransition from '../components/ui/PageTransition';
import ProjectModal from '../components/ui/ProjectModal';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import projects, { Project } from '../constants/projects';

// Import project images
import openspaceImg from '../assets/projects/openspace.png';
import aslImg from '../assets/projects/asl.png';
import pitakaImg from '../assets/projects/pitaka.jpg';
import perpsbotImg from '../assets/projects/perpsbot.png';
import stievebotImg from '../assets/projects/stievebot.png';
import hospitalerImg from '../assets/projects/hospitaler.png';

const ProjectsPage = () => {
  const [filter, setFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Create image mapping for projects
  const projectImages: { [key: number]: string | StaticImageData } = {
    1: openspaceImg,
    2: aslImg,
    3: pitakaImg,
    4: perpsbotImg,
    5: stievebotImg,
    6: hospitalerImg,
  };

  const handleProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    {
      id: 'web',
      label: 'Web Apps',
      count: projects.filter((p) => p.category === 'web').length,
    },
    {
      id: 'ai',
      label: 'AI/ML',
      count: projects.filter((p) => p.category === 'ai').length,
    },
    {
      id: 'mobile',
      label: 'Mobile',
      count: projects.filter((p) => p.category === 'mobile').length,
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  const HeaderSection = () => {
    const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

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
        className="text-center space-y-6 mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="flex items-center justify-center gap-3 mb-4">
          <FolderOpen className="h-8 w-8 text-primary" />
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-card-foreground">
            My Projects
          </h1>
        </div>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A collection of projects I&apos;ve built using modern technologies.
          From web applications to AI systems, each project represents a journey
          of learning and innovation.
        </p>

        {/* Filter Controls */}
        {/* Mobile-Optimized Filter Controls */}
        <div className="flex flex-col gap-4 mt-8">
          {/* Category Filter - Mobile First */}
          <div className="flex flex-wrap justify-center gap-2 p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-3 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}>
                {category.label}
                <span className="ml-1 text-xs opacity-70">
                  ({category.count})
                </span>
              </button>
            ))}
          </div>

          {/* View Mode Toggle - Hidden on small mobile */}
          <div className="hidden sm:flex items-center justify-center gap-2 p-1 bg-secondary rounded-lg max-w-fit mx-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === 'grid'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-card-foreground hover:bg-background/50'
              }`}
              title="Grid View">
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === 'list'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-card-foreground hover:bg-background/50'
              }`}
              title="List View">
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  const ProjectCard = ({
    project,
    index,
  }: {
    project: Project;
    index: number;
  }) => {
    const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
      <motion.div
        ref={elementRef}
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : prefersReducedMotion ? 0 : 40,
        }}
        transition={{
          duration: prefersReducedMotion ? 0.2 : 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: index * 0.1,
        }}
        layout
        className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
        {/* Project Image - Mobile Optimized */}
        <div className="relative overflow-hidden bg-secondary/30 aspect-[4/3] sm:aspect-video">
          {projectImages[project.id] ? (
            <Image
              src={projectImages[project.id]}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              placeholder="blur"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <FolderOpen className="h-12 w-12 text-muted-foreground" />
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 left-3">
              <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                Featured
              </span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground rounded-full capitalize">
              {project.category || 'Other'}
            </span>
          </div>
        </div>

        {/* Project Content - Mobile Optimized */}
        <div className="p-4 sm:p-5 flex flex-col">
          <div className="flex-1 space-y-3">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-card-foreground leading-tight group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 sm:line-clamp-none">
              {project.longDescription || project.description}
            </p>

            {/* Tech Stack - Mobile Optimized */}
            <div className="flex flex-wrap gap-1.5">
              {project.techStack
                .slice(0, 3)
                .map((tech: string, techIndex: number) => (
                  <span
                    key={techIndex}
                    className="tech-badge px-2 py-1 bg-secondary text-secondary-foreground rounded-md">
                    {tech}
                  </span>
                ))}
              {project.techStack.length > 3 && (
                <span className="tech-badge px-2 py-1 text-muted-foreground bg-secondary/50 rounded-md">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons - Mobile Optimized */}
          <div className="flex items-center gap-2 pt-4 mt-2 border-t border-border">
            <button
              onClick={() => handleProjectDetails(project)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm bg-accent hover:bg-accent/80 text-accent-foreground rounded-lg transition-colors flex-1 justify-center"
            >
              <Eye className="h-3.5 w-3.5" />
              <span className="hidden xs:inline">View </span>Details
            </button>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm bg-secondary hover:bg-secondary/80 rounded-lg transition-colors flex-1 justify-center">
                <Github className="h-3.5 w-3.5" />
                <span className="hidden xs:inline">Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors flex-1 justify-center">
                <Eye className="h-3.5 w-3.5" />
                <span className="hidden xs:inline">Live </span>Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <main className="max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
          <HeaderSection />

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16">
              <FolderOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                No projects found
              </h3>
              <p className="text-muted-foreground">
                Try selecting a different category or check back later for new
                projects.
              </p>
            </motion.div>
          )}

          {/* Summary Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-16 text-center p-8 bg-card border border-border rounded-xl">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">
              More Projects Coming Soon
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I&apos;m constantly working on new projects and exploring
              different technologies. Follow my journey on GitHub to see my
              latest experiments and contributions.
            </p>
            <div className="mt-6">
              <a
                href="https://github.com/joshfermano"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                <Github className="h-5 w-5" />
                Follow on GitHub
              </a>
            </div>
          </motion.div>
        </main>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        projectImage={selectedProject ? projectImages[selectedProject.id] : undefined}
      />
    </PageTransition>
  );
};

export default ProjectsPage;
