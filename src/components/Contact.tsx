import React from 'react';
import { Container } from './Container';
import { Mail, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Container className="py-10">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
        Let's Connect
      </h2>
      
      <div className="bg-white dark:bg-slate-900/50 dark:backdrop-blur-sm rounded-lg p-8 
        border border-gray-200 dark:border-slate-800/50 shadow-sm dark:shadow-slate-900/20">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
          <MessageSquare className="hidden md:block w-6 h-6 text-gray-600 dark:text-indigo-300" />
          <p className="text-sm md:text-base text-gray-600 dark:text-slate-300">
            I'm open to working on interesting and impactful projects. If you have an idea or need help with development, feel free to reach out!
          </p>
        </div>
        
        <div className="flex justify-center md:justify-start">
          <a
            href="mailto:jatin.srivastaval1909@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-indigo-900 
              text-white rounded-lg hover:bg-gray-800 dark:hover:bg-indigo-800 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </a>
        </div>
      </div>
    </Container>
  );
}