import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';

interface DockProps {
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  email: string;
}

export const Dock: React.FC<DockProps> = ({ socialLinks, email }) => {
  return (
    <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-gray-900/80 
      backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 border border-gray-200 dark:border-gray-800 z-50 w-[90%] md:w-auto">
      <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6">
        {socialLinks.github && (
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        )}
        {socialLinks.linkedin && (
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
        {socialLinks.twitter && (
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
        )}
        <a
          href={`mailto:${email}`}
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
        <div className="w-px h-5 bg-gray-200 dark:bg-gray-800" />
        <ThemeToggle />
      </div>
    </div>
  );
};