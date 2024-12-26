import { Container } from './Container';
import { Skill, SkillsProps } from '../types/resume';
import { SkillIcon } from './SkillIcon';

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Container className="py-10">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
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
                  className="flex items-center gap-1.5 px-2.5 py-1 border border-gray-300 dark:border-gray-700 
                    rounded-md hover:border-gray-900 dark:hover:border-gray-300 transition-colors
                    hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <SkillIcon name={skill} className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};