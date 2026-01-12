
import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
            Get in Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg">
            Have a project in mind or looking to hire a dedicated Android developer? I'm always open to discussing new opportunities.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-500 rounded-2xl group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Me</p>
                <a href="mailto:birendrasharma055@gmail.com" className="text-xl font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors">
                  birendrasharma055@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 text-blue-500 rounded-2xl group-hover:scale-110 transition-transform">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">+91 9742097725</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Message</label>
              <textarea 
                rows={4}
                placeholder="How can I help you?"
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white"
              ></textarea>
            </div>
            <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all">
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
