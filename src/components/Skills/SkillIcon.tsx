import React from 'react';
import {
  Blocks,
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Settings,
  Workflow,
} from 'lucide-react';

const iconMap = {
  'React/React Native': Code2,
  'TypeScript': Code2,
  'Node.js': Server,
  'GraphQL': Database,
  'MongoDB': Database,
  'AWS': Globe,
  'Docker': Blocks,
  'CI/CD': Workflow,
  'UI/UX': Layout,
  'DevOps': Settings,
};

interface SkillIconProps {
  skill: keyof typeof iconMap;
}

export function SkillIcon({ skill }: SkillIconProps) {
  const Icon = iconMap[skill] || Code2;
  return <Icon className="mb-2" size={24} />;
}