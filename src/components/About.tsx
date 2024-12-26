import React from 'react';
import { Container } from './Container';
import { Book, Globe } from 'lucide-react';
import { AboutProps } from '../types/resume';

export const About: React.FC<AboutProps> = ({ interests, learning }) => {
  return (
    <Container className="py-10">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
        About Me
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Globe className="w-6 h-6 text-gray-600 dark:text-gray-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Interests
              </h3>
              <ul className="space-y-2">
                {interests.map((interest, index) => (
                  <li 
                    key={index}
                    className="text-gray-600 dark:text-gray-400"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Book className="w-6 h-6 text-gray-600 dark:text-gray-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Currently Learning
              </h3>
              <ul className="space-y-2">
                {learning.map((item, index) => (
                  <li 
                    key={index}
                    className="text-gray-600 dark:text-gray-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}