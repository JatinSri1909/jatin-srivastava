import React from 'react';
import { Container } from './Container';
import { Skill } from '../types/resume';
import { TechLogo } from './TechLogo';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Container className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12">
        Skills
      </h2>
      <div className="space-y-8">
        {skills.map((skillGroup, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {skillGroup.category}:
            </h3>
            <div className="flex flex-wrap gap-4">
              {skillGroup.items.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex items-center gap-2 px-3 py-2 border border-black dark:border-white text-black dark:text-white rounded-md transition-all duration-300 hover:scale-110 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md"
                >
                  <TechLogo name={skill} className="w-5 h-5" />
                  <span className="text-base font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};