import { Container } from './Container';
import { SkillsProps } from '../types/resume';
import { SkillIcon } from './SkillIcon';

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  // Flatten all skills into a single array
  const allSkills = skills.reduce((acc, skillGroup) => [...acc, ...skillGroup.items], [] as string[]);

  return (
    <Container className="py-10">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-8">
        Skills
      </h2>
      <div className="flex flex-wrap gap-4">
        {allSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-1.5 px-2.5 py-1 border border-gray-300 dark:border-slate-700 
              rounded-md hover:border-gray-900 dark:hover:border-slate-500 transition-colors
              hover:bg-gray-50 dark:hover:bg-slate-800"
          >
            <SkillIcon name={skill} className="w-4 h-4 text-gray-700 dark:text-slate-300" />
            <span className="text-sm font-medium text-gray-900 dark:text-slate-100">{skill}</span>
          </div>
        ))}
      </div>
    </Container>
  );
};