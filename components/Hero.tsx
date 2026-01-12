
import React from 'react';
import { Download, ChevronRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32 flex flex-col items-center text-center">
      <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/30 rounded-full">
        Available for Hire
      </div>
      
      <h1 className="text-4xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
        Birendra Sharma
      </h1>
      
      <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
        Android Developer | Kotlin | Jetpack Compose
      </h2>
      
      <p className="text-lg text-slate-500 dark:text-slate-500 max-w-2xl mb-12">
        Building scalable, high-performance Android applications with modern architecture and cutting-edge mobile technologies.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
        <a
          href="#projects"
          className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 group"
        >
          View Projects
          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#"
          className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
        >
          <Download size={20} />
          Download Resume
        </a>
      </div>

      <div className="flex items-center gap-8">
        <a href="https://github.com/BirenSh" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-500 transition-colors">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/birendra-sharma-893933215/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-500 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="mailto:birendrasharma055@gmail.com" className="text-slate-400 hover:text-emerald-500 transition-colors">
          <Mail size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
