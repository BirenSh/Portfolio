import React, { useState, useEffect, useRef } from 'react';
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
  
  const mousePos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialDark = savedTheme === 'dark' || (!savedTheme && systemTheme);
    setIsDarkMode(initialDark);
    if (initialDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      // Immediately set visible once mouse moves
      document.documentElement.style.setProperty('--glow-opacity', '1');
    };

    const animateGlow = () => {
      const easing = 0.08;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * easing;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * easing;

      document.documentElement.style.setProperty('--mouse-x', `${currentPos.current.x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${currentPos.current.y}px`);

      animationFrameId.current = requestAnimationFrame(animateGlow);
    };

    const handleMouseLeave = () => {
      document.documentElement.style.setProperty('--glow-opacity', '0');
    };

    const handleMouseEnter = () => {
      document.documentElement.style.setProperty('--glow-opacity', '1');
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    
    animationFrameId.current = requestAnimationFrame(animateGlow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  const toggleTheme = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    
    if (nextMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-500 overflow-x-hidden relative">
      {/* Background Spotlight - Sits at z-1 */}
      <div className="spotlight"></div>

      {/* Navbar and Content - Sits at z-10 */}
      <div className="relative z-10">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <main className="container mx-auto px-4 md:px-8 max-w-7xl relative">
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
    </div>
  );
};

export default App;