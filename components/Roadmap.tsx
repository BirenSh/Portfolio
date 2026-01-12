import React from 'react';
import { ROADMAP } from '../constants';

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-16 flex items-center gap-3">
        <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></span>
        Career Roadmap
      </h2>

      <div className="grid md:grid-cols-4 gap-4">
        {ROADMAP.map((step, index) => (
          <div key={index} className="relative p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 group hover:border-indigo-500 hover:bg-white dark:hover:bg-slate-900 transition-all hover-glow card-lift">
            <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest block mb-2">{step.stage}</span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors">{step.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{step.description}</p>
            
            {index < ROADMAP.length - 1 && (
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-indigo-500 group-hover:border-indigo-500 transition-all">
                  →
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;