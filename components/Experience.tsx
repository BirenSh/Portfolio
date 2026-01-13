import React from 'react';
import { EXPERIENCE } from '../constants.tsx';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-16 flex items-center gap-3">
        <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></span>
        Professional Experience
      </h2>

      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-8 space-y-16">
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="relative pl-8 group hover:-translate-y-1 transition-transform">
            <div className="absolute -left-2.5 top-0 w-5 h-5 bg-indigo-500 rounded-full border-4 border-white dark:border-slate-950 group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all" />
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">{exp.company}</h3>
                <p className="text-indigo-500 dark:text-indigo-400 font-medium">{exp.role}</p>
              </div>
              <span className="mt-2 md:mt-0 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold rounded-full border border-indigo-100 dark:border-indigo-800">
                {exp.period}
              </span>
            </div>

            <ul className="space-y-3">
              {exp.achievements.map((item, i) => (
                <li key={i} className="text-slate-600 dark:text-slate-400 flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;