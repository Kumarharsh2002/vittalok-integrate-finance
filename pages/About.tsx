
import React from 'react';
import { Target, Eye, ShieldCheck, Heart, Cpu, BarChart, Globe, Zap, Award, Users } from 'lucide-react';
import ceoPicture from './assests/ceo-picture.jpeg';

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="p-8 bg-slate-50 border border-slate-100 rounded-[32px] hover:shadow-xl transition-all duration-500 group">
    <div className="w-14 h-14 bg-white text-teal-600 flex items-center justify-center rounded-2xl mb-6 shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
  </div>
);

const teamAvatars = [
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100"
];

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Institutional Hero */}
      <section className="pt-20 pb-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-900 text-teal-400 text-[10px] font-black uppercase tracking-widest rounded-full">
                <span>The VittaLok Organization</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                Engineering <br />
                <span className="text-teal-600">Sovereign</span> <br />
                Success.
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Founded on the principle of **Technical-Fiscal Synthesis**, VittaLok architects the digital and financial moats of tomorrow for global institutions and high-growth enterprises.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-3">
                  {teamAvatars.map((url, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-200 shadow-sm">
                      <img src={url} alt={`Team Member ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                {/* <div>
                  <div className="text-sm font-bold text-slate-900">450+ Dedicated Professionals</div>
                  <div className="text-xs text-slate-500">Global HQ: New York Financial District</div>
                </div> */}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-[48px] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                  alt="VittaLok Corporate Center" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-slate-900/10"></div>
              </div>
              {/* Decorative Geometric Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-900/5 rounded-full blur-3xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The "Dual Core" Narrative */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5">
           <Zap size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight tracking-tighter">
                Why Technology <br />& Finance?
              </h2>
              <div className="w-20 h-1.5 bg-teal-500 mb-8"></div>
              <p className="text-xl text-slate-400 leading-relaxed font-medium">
                In the modern economy, technical architecture and capital strategy are two sides of the same coin. Isolating them leads to enterprise friction and value leakage.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 glass-dark rounded-[40px] border border-white/5 group hover:bg-white/10 transition-all">
                <Cpu className="text-teal-400 mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">Infrastructure Muscle</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We deploy zero-trust environments, cloud-native cores, and secure pipelines that act as the physical backbone of the organization.
                </p>
              </div>
              <div className="p-10 glass-dark rounded-[40px] border border-white/5 group hover:bg-white/10 transition-all">
                <BarChart className="text-teal-400 mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">Capital Intelligence</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Our financial strategists ensure every technical dollar is mapped to a growth milestone, a tax efficiency, or a valuation boost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission: Institutional Dossier Style */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 bg-white p-12 lg:p-16 rounded-[60px] shadow-sm border border-slate-100 flex flex-col justify-between group hover:shadow-2xl transition-all duration-700 relative overflow-hidden">
               <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none transition-transform duration-1000 group-hover:scale-110">
                  <Globe size={300} />
               </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-teal-100 text-teal-600 flex items-center justify-center rounded-2xl mb-10 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <Eye size={32} />
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter uppercase">The Vision</h2>
                <p className="text-2xl text-slate-600 leading-relaxed font-medium">
                  "To become the world's most trusted partner in the creation of harmonious, high-performance enterprises where technology is a financial accelerator."
                </p>
              </div>
              <div className="mt-12 flex items-center space-x-4 opacity-30 relative z-10">
                 <Globe size={40} />
                 <span className="text-xs font-bold uppercase tracking-widest">Global Standardization Protocol</span>
              </div>
            </div>

            <div className="flex-1 bg-slate-900 text-white p-12 lg:p-16 rounded-[60px] shadow-2xl flex flex-col justify-between group hover:bg-slate-950 transition-all duration-700 relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none transition-transform duration-1000 group-hover:scale-110">
                  <Target size={300} />
               </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 text-teal-400 flex items-center justify-center rounded-2xl mb-10 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  <Target size={32} />
                </div>
                <h2 className="text-4xl font-black mb-8 tracking-tighter uppercase">The Mission</h2>
                <p className="text-2xl text-slate-400 leading-relaxed font-medium italic">
                  "To bridge the gap between complex infrastructure and strategic growth, providing stakeholders with absolute clarity in every decision node."
                </p>
              </div>
              <div className="mt-12 flex items-center space-x-4 opacity-30 relative z-10">
                 <ShieldCheck size={40} />
                 <span className="text-xs font-bold uppercase tracking-widest text-teal-400">Security & Accuracy Baseline</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Our Foundational Values</h2>
            <p className="text-lg text-slate-500 font-medium">The recursive principles that guide every VittaLok engagement.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<ShieldCheck />} 
              title="Absolute Integrity" 
              description="Confidentiality and ethical transparency are the base protocols for every stakeholder interaction." 
            />
            <ValueCard 
              icon={<Award />} 
              title="Pragmatic Innovation" 
              description="We avoid technical debt by deploying only what is proven to drive financial and operational ROI." 
            />
            <ValueCard 
              icon={<Users />} 
              title="Stakeholder Empathy" 
              description="Understanding the CFO's budget and the CTO's performance goals simultaneously." 
            />
            <ValueCard 
              icon={<Target />} 
              title="Precision Delivery" 
              description="Timeline accuracy and budget adherence are managed through algorithmic oversight." 
            />
          </div>
        </div>
      </section>

      {/* Enhanced Leadership Section */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase">Executive <span className="text-teal-600">Command</span></h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Led by veterans from global financial institutions and top-tier technology firms, our board brings a unique hybrid perspective to every challenge.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                name: 'Ms. Richi Agrawal', 
                role: 'Founder & CEO', 
                img: ceoPicture, 
                bio: 'Finance & audit professional with over 10 years of experience in Statutory Audit, Internal Audit, Regulatory Compliance, and financial management, and a qualified Chartered Accountant.' 
              },
              { 
                name: 'Michael Chen', 
                role: 'Head of Systems Architecture', 
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400", 
                bio: 'An MIT fellow with 15 years experience scaling private cloud infrastructures for industrial conglomerates.' 
              },
              // { 
              //   name: 'Aaliyah Khan', 
              //   role: 'Strategic Capital Advisor', 
              //   img: "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?auto=format&fit=crop&q=80&w=400", 
              //   bio: 'Leading our financial wing, Aaliyah specializes in M&A due diligence and tax-optimized corporate scaling.' 
              // }
            ].map((leader, idx) => (
              <div key={idx} className="group flex flex-col h-full bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img src={leader.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt={leader.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-2">Subject Dossier</p>
                    <p className="text-sm leading-relaxed italic">"{leader.bio}"</p>
                  </div>
                </div>
                <div className="p-8 text-center bg-white relative z-10">
                  <h3 className="text-2xl font-black text-slate-900 mb-1">{leader.name}</h3>
                  <p className="text-teal-600 font-black uppercase tracking-widest text-[10px]">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      {/* <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-4xl lg:text-6xl font-black text-slate-900 mb-2">$4.2B+</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Capital Optimized</div>
            </div>
            <div>
              <div className="text-4xl lg:text-6xl font-black text-slate-900 mb-2">12k+</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Nodes Integrated</div>
            </div>
            <div>
              <div className="text-4xl lg:text-6xl font-black text-slate-900 mb-2">99.9%</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">System Resilience</div>
            </div>
            <div>
              <div className="text-4xl lg:text-6xl font-black text-slate-900 mb-2">15</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Global Markets</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA section */}
      <section className="py-32 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter uppercase">Partner with <br />Expertise.</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to explore how the VittaLok Framework can transform your technical debt into strategic capital?
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <button className="px-12 py-5 bg-teal-500 text-slate-900 font-black rounded-2xl hover:bg-white transition-all text-sm uppercase tracking-widest">
              Schedule Leadership Call
            </button>
            <button className="px-12 py-5 bg-transparent border-2 border-white/20 text-white font-black rounded-2xl hover:bg-white/10 transition-all text-sm uppercase tracking-widest">
              Explore Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
