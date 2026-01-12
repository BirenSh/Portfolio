
import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
            <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
            Featured Projects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md">
            Selection of CRM and field service tools built with modern Android standards.
          </p>
        </div>
        <a href="https://github.com/BirenSh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-emerald-500 font-semibold hover:underline">
          View all on GitHub <ExternalLink size={16} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.title}
            className="group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-500 rounded-2xl group-hover:scale-110 transition-transform">
                  <Code size={24} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-emerald-500 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium rounded-full border border-slate-100 dark:border-slate-800 group-hover:border-emerald-500/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Visual highlight on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500/20 rounded-3xl pointer-events-none transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
