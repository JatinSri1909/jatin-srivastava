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
      <div className="grid grid-cols-1 md:flex md:flex-col gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-slate-900 rounded-lg overflow-hidden 
              border border-gray-200 dark:border-slate-800 hover:border-gray-300 
              dark:hover:border-slate-700 transition-all duration-300
              hover:shadow-md dark:hover:shadow-slate-900/50"
          >
            <div className="p-6 flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100">
                  {project.title}
                </h3>
                
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-slate-300 
                      hover:text-gray-900 dark:hover:text-slate-100 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-slate-300 
                      hover:text-gray-900 dark:hover:text-slate-100 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <p className="text-gray-600 dark:text-slate-300 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-slate-800 
                      text-gray-700 dark:text-slate-300 rounded whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};