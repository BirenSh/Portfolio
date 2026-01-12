import React from 'react';
import { Download, ChevronRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Attempt to open local asset first, or fallback to Google Drive link
    const localResume = 'assets/docs/resume.pdf';
    const remoteResume = 'https://drive.google.com/file/d/1AT29RgBSNGrjHN1paSdMySu87ybbcfrt/view?usp=sharing';
    
    // In a real environment, we'd check if local file exists, 
    // here we prioritize the external link for immediate availability
    window.open(remoteResume, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 md:py-32 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
        Birendra Sharma
      </h1>
      
      <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400 mb-8 max-w-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
        Mobile App Developer | Kotlin | Jetpack Compose
      </h2>
      
      <p className="text-lg text-slate-500 dark:text-slate-500 max-w-2xl mb-12">
        Android Developer with production-level experience building high-performance mobile applications. Passionate about clean architecture and modern Android technologies.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
        <button
          onClick={scrollToProjects}
          className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/20 hover-glow hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
        >
          View Projects
          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button
          onClick={handleDownloadResume}
          className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 hover-glow transition-all flex items-center justify-center gap-2"
        >
          <Download size={20} />
          Download Resume
        </button>
      </div>

      <div className="flex items-center gap-8">
        <a href="https://github.com/BirenSh" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-500 hover:scale-125 transition-all">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/birendra-sharma-893933215/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-500 hover:scale-125 transition-all">
          <Linkedin size={24} />
        </a>
        <a href="mailto:birendrasharma055@gmail.com" className="text-slate-400 hover:text-indigo-500 hover:scale-125 transition-all">
          <Mail size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;