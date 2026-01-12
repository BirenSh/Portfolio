import React, { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    // Constructing mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoUrl = `mailto:birendrasharma055@gmail.com?subject=${subject}&body=${body}`;

    // Small timeout to simulate processing before opening mail client
    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }, 600);
  };

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

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="p-4 bg-rose-50 dark:bg-rose-950/30 text-rose-500 rounded-2xl group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.3)] transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Address</p>
                <p className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-rose-500 transition-colors">Bangalore, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl hover-glow transition-all relative overflow-hidden">
          {showSuccess && (
            <div className="absolute inset-0 z-20 bg-white/90 dark:bg-slate-900/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-300">
              <CheckCircle size={64} className="text-emerald-500 mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Drafted!</h3>
              <p className="text-slate-600 dark:text-slate-400">Your email client should open with the pre-filled message. Just hit send!</p>
              <button 
                onClick={() => setShowSuccess(false)}
                className="mt-6 text-indigo-500 font-semibold hover:underline"
              >
                Send another message
              </button>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white focus:bg-white dark:focus:bg-slate-900"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white focus:bg-white dark:focus:bg-slate-900"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Message</label>
              <textarea 
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                required
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white focus:bg-white dark:focus:bg-slate-900"
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 transition-all hover-glow hover:-translate-y-1 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Preparing...' : 'Send Message'}
              {!isSubmitting && <Send size={18} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;