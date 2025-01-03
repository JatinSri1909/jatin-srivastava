import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Container } from './Container';
import { ProjectsProps } from '../types/resume';

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Container className="py-10">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-8">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden 
              hover:border-gray-300 dark:hover:border-slate-600 transition-colors flex flex-col
              bg-white/50 dark:bg-slate-900/50"
          >
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-slate-300 text-sm mb-6">
                {project.description}
              </p>
              
              <div className="flex-grow" />
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-slate-800 
                        text-gray-700 dark:text-slate-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-slate-300 
                      hover:text-gray-900 dark:hover:text-slate-100 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-slate-300 
                      hover:text-gray-900 dark:hover:text-slate-100 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};