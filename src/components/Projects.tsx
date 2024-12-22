import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Container } from './Container';
import { Project } from '../types/resume';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Container className="py-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden flex flex-col md:flex-row"
          >
            {project.imageUrl && (
              <div className="md:w-2/5">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
            )}
            <div className="p-6 md:w-3/5">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 
                      dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1 text-gray-600 dark:text-gray-400 
                      hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1 text-gray-600 dark:text-gray-400 
                      hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
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