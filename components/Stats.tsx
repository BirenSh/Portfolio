
import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="pb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 group-hover:scale-110 transition-transform">
              {stat.value}
              <span className="text-emerald-500">{stat.suffix}</span>
            </div>
            <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
