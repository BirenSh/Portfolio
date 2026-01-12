import React from 'react';

const About: React.FC = () => {
  const clients = ["Philips", "Bajaj Electricals", "Hindware", "Faber"];

  return (
    <section id="about" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 transition-transform duration-500 group-hover:scale-[1.02]">
            <img 
              src="https://picsum.photos/800/800?grayscale" 
              alt="Birendra Sharma Professional" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 hidden md:block group-hover:scale-110 transition-transform">
            <span className="text-4xl font-bold bg-gradient-to-br from-indigo-500 to-cyan-400 bg-clip-text text-transparent">3+</span>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Years Experience</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></span>
            The Developer Mindset
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            I am a results-driven Android Developer with over 3 years of production experience in building high-performance mobile applications. My expertise lies in Kotlin, Jetpack Compose, and clean MVVM architecture.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            I've successfully delivered complex CRM and Field Service solutions for prestigious clients, prioritizing scalability and smooth user experiences. I am passionate about writing clean, maintainable code and staying at the forefront of Android innovation.
          </p>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Trusted by Industry Leaders:</h3>
            <div className="flex flex-wrap gap-3">
              {clients.map(client => (
                <span key={client} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-transparent hover:border-indigo-500/30 transition-all hover-glow cursor-default">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;