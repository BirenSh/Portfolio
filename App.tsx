
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Roadmap from './components/Roadmap';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemTheme)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-slate-950' : 'bg-slate-50'} transition-colors duration-500 overflow-x-hidden`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="container mx-auto px-4 md:px-8 max-w-7xl">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Roadmap />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
