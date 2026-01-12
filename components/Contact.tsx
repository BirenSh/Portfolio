import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></span>
            Get in Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg">
            Have a project in mind or looking to hire a dedicated Android developer? I'm always open to discussing new opportunities.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-500 rounded-2xl group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Me</p>
                <a href="mailto:birendrasharma055@gmail.com" className="text-xl font-bold text-slate-900 dark:text-white hover:text-indigo-500 transition-colors">
                  birendrasharma055@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="p-4 bg-cyan-50 dark:bg-cyan-950/30 text-cyan-500 rounded-2xl group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</p>
                <p className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">+91 9742097725</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl hover-glow transition-all">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white focus:bg-white dark:focus:bg-slate-900"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white focus:bg-white dark:focus:bg-slate-900"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Message</label>
              <textarea 
                rows={4}
                placeholder="How can I help you?"
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white focus:bg-white dark:focus:bg-slate-900"
              ></textarea>
            </div>
            <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 transition-all hover-glow hover:-translate-y-1">
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;