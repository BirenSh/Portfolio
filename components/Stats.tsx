import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../constants';

const Counter = ({ value, duration = 2000 }: { value: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalMiliseconds = duration;
    let incrementTime = (totalMiliseconds / end);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return <span ref={countRef}>{count}</span>;
};

const Stats: React.FC = () => {
  return (
    <section className="pb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center group p-4 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-default">
            <div className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 group-hover:scale-110 transition-transform">
              <Counter value={stat.value} />
              <span className="text-indigo-500">{stat.suffix}</span>
            </div>
            <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest group-hover:text-indigo-400 transition-colors">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;