import React from 'react';
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiWebrtc, SiSocketdotio,
  SiPostgresql, SiMysql, SiMongodb,
  SiDocker, SiLinux, SiGit, SiGithub,
  SiApachekafka, SiRedis,
  SiPython, SiCplusplus
} from 'react-icons/si';
import { BiMessageSquareDetail } from 'react-icons/bi';

interface SkillIconProps {
  name: string;
  className?: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ name, className = '' }) => {
  const iconMap: Record<string, React.ComponentType> = {
    'HTML': SiHtml5,
    'CSS': SiCss3,
    'JavaScript': SiJavascript,
    'TypeScript': SiTypescript,
    'React': SiReact,
    'Next.js': SiNextdotjs,
    'Node.js': SiNodedotjs,
    'Express.js': SiExpress,
    'WebRTC': SiWebrtc,
    'WebSockets': SiSocketdotio,
    'BullMQ': BiMessageSquareDetail, // Using a message icon from react-icons/bi
    'PostgreSQL': SiPostgresql,
    'MySQL': SiMysql,
    'MongoDB': SiMongodb,
    'Docker': SiDocker,
    'Linux': SiLinux,
    'Git': SiGit,
    'GitHub': SiGithub,
    'Kafka': SiApachekafka,
    'Redis': SiRedis,
    'Python': SiPython,
    'C++': SiCplusplus,
  };

  const Icon = iconMap[name];
  
  if (!Icon) {
    return null;
  }

  return <Icon className={className} />;
};