
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent mb-2">
            Birendra Sharma
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/BirenSh" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-xl hover:text-emerald-500 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/birendra-sharma-893933215/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-xl hover:text-emerald-500 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:birendrasharma055@gmail.com" className="p-3 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-xl hover:text-emerald-500 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
