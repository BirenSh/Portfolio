// Fix: Import React to resolve 'Cannot find namespace React' for React.ReactNode
import React from 'react';

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface SkillGroup {
  category: string;
  skills: { name: string; icon: React.ReactNode }[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface RoadmapItem {
  title: string;
  stage: string;
  description: string;
}
