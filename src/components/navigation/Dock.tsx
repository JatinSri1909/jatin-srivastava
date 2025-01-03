import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';
import { DockProps } from '../../types/resume';

export const Dock: React.FC<DockProps> = ({ socialLinks, email }) => {
  return (
    <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 
      rounded-[5px] px-3 md:px-6 py-2 md:py-3 border border-gray-200 dark:border-gray-800 z-50 
      w-auto min-w-[180px] max-w-[90%] md:w-auto">
      <div className="flex items-center justify-evenly md:justify-start gap-3 md:gap-6">
        {socialLinks.github && (
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
          >
            <Github className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        )}
        {socialLinks.linkedin && (
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
          >
            <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        )}
        {socialLinks.twitter && (
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
          >
            <Twitter className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        )}
        <a
          href={`mailto:${email}`}
          className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
        >
          <Mail className="w-4 h-4 md:w-5 md:h-5" />
        </a>
        <div className="w-px h-4 md:h-5 mx-0.5 md:mx-0 bg-white/20" />
        <ThemeToggle />
      </div>
    </div>
  );
};