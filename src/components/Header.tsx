import React from 'react';
import { MapPin } from 'lucide-react';
import { Container } from './Container';
import { HeaderProps } from '../types/resume';

export const Header: React.FC<HeaderProps> = ({ data }) => {
  const firstName = data.name.split(' ')[0];
  const lastName = data.name.split(' ').slice(1).join(' ');

  return (
    <Container className="py-8">
      <div className="space-y-8">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
          Hi, I'm {firstName}{' '}
          <span className="text-blue-600 dark:text-blue-400">{lastName}</span> 👋
        </h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-400">
          {data.title}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed text-justify">
          {data.bio}
        </p>
        
        <div className="flex items-center gap-2 text-lg text-gray-600 dark:text-gray-400">
          <MapPin size={20} />
          {data.location}
        </div>
      </div>
    </Container>
  );
};