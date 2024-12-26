import { Container } from './Container';
import { Skill } from '../types/resume';
import { SkillIcon } from './SkillIcon';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Container className="py-10">
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
                  className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-700 
                    rounded-md hover:border-gray-900 dark:hover:border-gray-300 transition-colors
                    hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <SkillIcon name={skill} className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  <span className="text-base font-medium text-gray-900 dark:text-gray-100">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};