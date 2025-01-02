import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Container } from './Container';
import { ProjectsProps } from '../types/resume';

// Predefined light colors array
const lightColors = [
  'hsl(0, 85%, 80%)',     // Soft Red
  'hsl(30, 85%, 80%)',    // Soft Orange
  'hsl(60, 85%, 80%)',    // Soft Yellow
  'hsl(120, 85%, 75%)',   // Soft Green
];

// Function to get dark version of the color (for dark mode)
const getDarkVersion = (color: string) => {
  const hue = color.match(/\d+/)?.[0];
  return `hsl(${hue}, 60%, 70%)`; // Slightly darker but still colorful for dark mode
};

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  // Assign colors to projects cyclically
  const projectColors = React.useMemo(() => 
    projects.map((_, index) => {
      const lightColor = lightColors[index % lightColors.length];
      return {
        light: lightColor,
        dark: getDarkVersion(lightColor)
      };
    }), [projects.length]
  );

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
              hover:border-gray-300 dark:hover:border-slate-600 transition-colors"
          >
            <div 
              className="relative w-full h-48"
              style={{
                backgroundColor: `var(--project-bg-${index})`,
              }}
            >
              <style>
                {`
                  :root {
                    --project-bg-${index}: ${projectColors[index].light};
                  }
                  .dark {
                    --project-bg-${index}: ${projectColors[index].dark};
                  }
                `}
              </style>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-contain p-2"
              />
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-slate-300 text-sm mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
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
        ))}
      </div>
    </Container>
  );
};