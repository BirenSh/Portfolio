import React from 'react';

const About: React.FC = () => {
  const clients = ["Philips", "Bajaj Electricals", "Hindware", "Faber", "Frootle"];

  return (
    <section id="about" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/profile.jpg`}
              alt="Birendra Sharma"
              className="w-full h-full object-cover transition-all duration-700 object-top"
            />
          </div>
          {/* Badge */}
          <div className="absolute -bottom-6 -right-6 p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 hidden md:block group-hover:scale-110 transition-transform z-10">
            <span className="text-4xl font-bold bg-gradient-to-br from-indigo-500 to-cyan-400 bg-clip-text text-transparent">3+</span>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Years Experience</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></span>
            Professional Summary
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            I am an Android Developer with production-level experience in building high-performance mobile applications using Kotlin, Jetpack Compose, and MVVM. I specialize in RESTful API integration, UI/UX optimization, and end-to-end development.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            I have a proven track record of delivering scalable apps for industry leaders and I am passionate about writing clean, efficient code while leveraging modern Android technologies like KMP and advanced AI developer tools.
          </p>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Clients I've Worked With:</h3>
            <div className="flex flex-wrap gap-3">
              {clients.map(client => (
                <span key={client} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-transparent hover:border-indigo-500/30 transition-all hover-glow cursor-default">
                  {client}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              <span className="font-bold text-slate-700 dark:text-slate-300">Education:</span> BCA from Bangalore University (2018 - 2021)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;