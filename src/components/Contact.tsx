import React from 'react';
import { Container } from './Container';
import { Mail, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Container className="py-10">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
        Let's Connect
      </h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          <p className="text-gray-600 dark:text-gray-400">
            I'm open to working on interesting and impactful projects. If you have an idea or need help with development, feel free to reach out!
          </p>
        </div>
        
        <a
          href="mailto:jatinmavrik007@gmail.com"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 
            text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
        >
          <Mail className="w-4 h-4" />
          Get in Touch
        </a>
      </div>
    </Container>
  );
}