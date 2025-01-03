import React from 'react';
import { Container } from './Container';
import { MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Container className="py-10">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
        Let's Connect
      </h2>
      
      <div className="bg-white dark:bg-slate-900 rounded-lg p-8 
        border border-gray-200 dark:border-slate-800 hover:border-gray-300 
        dark:hover:border-slate-700 transition-all duration-300
        hover:shadow-md dark:hover:shadow-slate-900/50">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <MessageSquare className="hidden md:block w-6 h-6 text-gray-600 dark:text-slate-300" />
          <p className="text-sm md:text-base text-gray-600 dark:text-slate-300">
            I'm open to working on interesting and impactful projects. Feel free to{' '}
            <a
              href="mailto:jatin.srivastaval1909@gmail.com"
              className="text-gray-900 dark:text-white font-medium underline underline-offset-4 
                hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              get in touch
            </a>{' '}
            if you have an idea or need help with development!
          </p>
        </div>
      </div>
    </Container>
  );
}