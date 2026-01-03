
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ShieldCheck } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'System Integration',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      console.log('Form submitted:', formState);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="animate-fade-in pb-32">
      {/* Premium Header */}
      <section className="bg-slate-900 py-32 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-none tracking-tighter">Strategic <br />Connection.</h1>
          <p className="text-2xl text-slate-400 font-medium max-w-2xl mx-auto">
            Secure, confidential consultation for enterprise stakeholders and decision-makers.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Sidebar */}
          <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
            <div className="bg-slate-900 p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-teal-500/10 rounded-full"></div>
              <h3 className="text-2xl font-bold mb-8 relative z-10">Direct Channels</h3>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 text-teal-400 flex items-center justify-center rounded-2xl flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Executive Line</p>
                    <a href="tel:+18005550199" className="text-lg font-bold hover:text-teal-400 transition-colors underline decoration-teal-500/30 underline-offset-4">
                      +91 7838600498
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 text-teal-400 flex items-center justify-center rounded-2xl flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Advisory Email</p>
                    <a href="mailto:strategy@vittalok.com" className="text-lg font-bold hover:text-teal-400 transition-colors underline decoration-teal-500/30 underline-offset-4">
                         contact@vittalok.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 text-teal-400 flex items-center justify-center rounded-2xl flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Global Headquarters</p>
                    <p className="text-lg font-bold text-white">
                      Laxmi Nagar, <br />New Delhi, 110094
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-10 rounded-[40px] border border-white">
               <ShieldCheck className="text-teal-600 mb-6" size={40} />
               <h3 className="text-xl font-bold text-slate-900 mb-4">Confidentiality Assured</h3>
               <p className="text-slate-600 text-sm leading-relaxed">
                 All initial consultations are protected by standard mutual non-disclosure terms. Your strategic data remains yours.
               </p>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="bg-white p-10 lg:p-16 rounded-[50px] shadow-3xl border border-slate-100 relative overflow-hidden">
              {submitted ? (
                <div className="text-center py-20 animate-fade-in">
                  <div className="w-24 h-24 bg-teal-100 text-teal-600 flex items-center justify-center rounded-full mx-auto mb-10 shadow-lg shadow-teal-500/20">
                    <CheckCircle size={48} />
                  </div>
                  <h2 className="text-5xl font-black text-slate-900 mb-6">Confirmed.</h2>
                  <p className="text-2xl text-slate-500 mb-12 max-w-lg mx-auto leading-relaxed">
                    Our intake specialist has received your inquiry. Expect an executive brief within 4 business hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-teal-600 transition-all active:scale-95"
                  >
                    Close Session
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-12">
                    <h2 className="text-4xl font-black text-slate-900">Inquiry Intake</h2>
                    <span className="text-[10px] font-black bg-slate-100 text-slate-500 px-3 py-1 rounded-full uppercase tracking-widest">Confidential Form</span>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Stakeholder Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none font-bold text-slate-900"
                          placeholder="Ex. Sarah Jenkins"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Corporate Email</label>
                        <input
                          type="email"
                          required
                          className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none font-bold text-slate-900"
                          placeholder="sjenkins@enterprise.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Primary Domain</label>
                        <select
                          className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-teal-500 transition-all outline-none font-bold text-slate-900 appearance-none cursor-pointer"
                          value={formState.serviceType}
                          onChange={(e) => setFormState({ ...formState, serviceType: e.target.value })}
                        >
                          <option>System Integration</option>
                          <option>Financial Consultancy</option>
                          <option>Integrated (Dual Domain)</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Engagement urgency</label>
                        <select className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-teal-500 transition-all outline-none font-bold text-slate-900 appearance-none cursor-pointer">
                          <option>Immediate Audit Required</option>
                          <option>Project Planning (3-6 mo)</option>
                          <option>Strategic Discovery</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Brief Description of Objectives</label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-6 py-5 rounded-3xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none font-bold text-slate-900"
                        placeholder="What are your core technical or financial goals?"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-6 bg-slate-900 text-white font-black rounded-3xl transition-all shadow-2xl flex items-center justify-center space-x-3 group relative overflow-hidden ${isSubmitting ? 'opacity-70 cursor-wait' : 'hover:bg-teal-600 hover:shadow-teal-500/20 active:scale-95'}`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                          <span className="uppercase tracking-widest text-xs">Transmitting...</span>
                        </div>
                      ) : (
                        <>
                          <span className="text-xl">Transmit Inquiry</span>
                          <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Your IP and connection are encrypted for security.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map/Location Footer */}
      {/* <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-slate-200 w-full h-[500px] rounded-[60px] flex items-center justify-center text-slate-400 relative overflow-hidden group shadow-inner">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-10000" alt="New York Map" />
          <div className="absolute inset-0 bg-slate-900/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="glass p-8 rounded-[40px] shadow-3xl flex flex-col items-center text-center max-w-sm animate-float">
               <div className="w-16 h-16 bg-teal-500 text-white flex items-center justify-center rounded-[20px] mb-6 shadow-xl shadow-teal-500/20">
                 <MapPin size={32} />
               </div>
               <h4 className="text-2xl font-black text-slate-900 mb-2">NY Hub</h4>
               <p className="text-slate-600 font-bold mb-6 text-sm">Strategic Operations & Advisory Center</p>
               <button className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl text-xs hover:bg-teal-600 transition-all">Get Directions</button>
             </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
