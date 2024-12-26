import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Container } from './Container';
import { ProjectsProps } from '../types/resume';

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Container className="py-10">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
        Projects
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        I like building things. I've worked on variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-slate-900/50 dark:backdrop-blur-sm rounded-lg overflow-hidden flex flex-col
              border border-transparent dark:border-slate-800/50 shadow-sm dark:shadow-slate-900/20"
          >
            <div className="h-48">
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-base font-semibold text-gray-900 dark:text-slate-100 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-slate-400 mb-4 text-xs leading-relaxed text-justify h-24 overflow-hidden">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700/50 text-gray-700 
                      dark:text-indigo-200 rounded text-[10px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-slate-400 hover:text-gray-900 
                      dark:hover:text-white transition-colors"
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-slate-400 hover:text-gray-900 
                      dark:hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};