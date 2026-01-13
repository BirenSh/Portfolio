import React from 'react';
import { SKILLS } from '../constants.tsx';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-16 flex items-center gap-3">
        <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></span>
        Technical Arsenal
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((group) => (
          <div 
            key={group.category}
            className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 card-lift hover-glow shadow-sm"
          >
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">
              {group.category}
            </h3>
            <div className="space-y-4">
              {group.skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 group/item">
                  <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg group-hover/item:bg-indigo-50 dark:group-hover/item:bg-indigo-950/30 group-hover/item:scale-110 transition-all">
                    {skill.icon}
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;