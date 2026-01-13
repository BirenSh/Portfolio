import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { PROJECTS } from '../constants.tsx';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
            <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></span>
            Featured Projects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md">
            Selection of CRM and field service tools built with modern Android standards.
          </p>
        </div>
        <a href="https://github.com/BirenSh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-indigo-500 font-semibold hover:text-indigo-600 group">
          View all on GitHub <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.title}
            className="group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-2xl card-lift hover-glow"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-500 rounded-2xl group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all">
                  <Code size={24} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-500 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium rounded-full border border-slate-100 dark:border-slate-800 group-hover:border-indigo-500/20 group-hover:text-indigo-500 transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/20 rounded-3xl pointer-events-none transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;