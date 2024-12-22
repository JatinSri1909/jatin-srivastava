import React from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import { Container } from './Container';
import { ResumeData } from '../types/resume';

interface HeaderProps {
  data: Pick<ResumeData, 'name' | 'title' | 'bio' | 'location' | 'email' | 'socialLinks'>;
}

export const Header: React.FC<HeaderProps> = ({ data }) => {
  const firstName = data.name.split(' ')[0];
  const lastName = data.name.split(' ').slice(1).join(' ');

  return (
    <Container className="py-20">
      <div className="space-y-8">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
          Hi, I'm {firstName}{' '}
          <span className="text-gray-600 dark:text-gray-400">{lastName}</span> 👋
        </h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-400">
          {data.title}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
          {data.bio}
        </p>
        
        <div className="flex flex-wrap gap-4 text-lg text-gray-600 dark:text-gray-400">
          <span className="flex items-center gap-2">
            <MapPin size={20} />
            {data.location}
          </span>
          <span className="flex items-center gap-2">
            <Mail size={20} />
            {data.email}
          </span>
        </div>

        <div className="flex gap-4">
          {data.socialLinks.github && (
            <a 
              href={data.socialLinks.github}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <Github size={28} />
            </a>
          )}
          {data.socialLinks.linkedin && (
            <a 
              href={data.socialLinks.linkedin}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <Linkedin size={28} />
            </a>
          )}
        </div>
      </div>
    </Container>
  );
};