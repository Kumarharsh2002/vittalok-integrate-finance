
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Zap, Users, Target, CheckCircle2, Code, BarChart3, Globe, Award, Briefcase } from 'lucide-react';

const StatCard: React.FC<{ label: string; value: string; icon: React.ReactNode }> = ({ label, value, icon }) => (
  <div className="p-8 glass rounded-3xl border border-white/20 shadow-xl shadow-slate-200/50 group hover:bg-slate-900 hover:text-white transition-all duration-500">
    <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors">
      {icon}
    </div>
    <div className="text-4xl font-extrabold mb-2">{value}</div>
    <div className="text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-teal-400 transition-colors">{label}</div>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden pt-12 pb-24 lg:pt-0 lg:pb-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-teal-500/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-slate-900/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center space-x-3 px-4 py-2 bg-slate-900 text-teal-400 text-xs font-bold rounded-full uppercase tracking-tighter">
                <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-ping"></span>
                <span>Global Enterprise Integration & Finance Partner</span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                Scale With <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-slate-900">Absolute</span> <br />
                Precision.
              </h1>
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
                VittaLok delivers the dual-pillar framework of technical agility and financial foresight required to lead in the modern economy.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/services"
                  className="px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-teal-600 hover:shadow-2xl hover:shadow-teal-500/30 transition-all flex items-center justify-center group text-lg active:scale-95"
                >
                  View Our Solutions
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/case-studies"
                  className="px-10 py-5 glass border border-slate-200 text-slate-900 font-bold rounded-2xl hover:bg-white hover:shadow-xl transition-all flex items-center justify-center text-lg active:scale-95"
                >
                  Our Impact
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 grid grid-cols-2 gap-6 animate-float">
                <div className="space-y-6 mt-12">
                  <div className="glass p-8 rounded-[40px] shadow-2xl border border-white/50 transform hover:scale-105 transition-all">
                    <Zap className="text-teal-600 mb-6" size={40} />
                    <h3 className="text-2xl font-bold text-slate-900">Systems</h3>
                    <p className="text-sm text-slate-500 mt-2">Zero-latency integration for complex IT ecosystems.</p>
                  </div>
                  <div className="bg-slate-900 p-8 rounded-[40px] shadow-2xl text-white transform hover:scale-105 transition-all">
                    <ShieldCheck className="text-teal-400 mb-6" size={40} />
                    <h3 className="text-2xl font-bold">Security</h3>
                    <p className="text-sm text-slate-400 mt-2">Enterprise-grade cyber defense & global compliance.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-teal-600 p-8 rounded-[40px] shadow-2xl text-white transform hover:scale-105 transition-all">
                    <BarChart3 className="text-white mb-6" size={40} />
                    <h3 className="text-2xl font-bold">Strategy</h3>
                    <p className="text-sm text-teal-100 mt-2">Financial modeling for high-stakes growth & M&A.</p>
                  </div>
                  <div className="glass p-8 rounded-[40px] shadow-2xl border border-white/50 transform hover:scale-105 transition-all">
                    <Globe className="text-slate-900 mb-6" size={40} />
                    <h3 className="text-2xl font-bold">Global</h3>
                    <p className="text-sm text-slate-500 mt-2">Operational delivery across 40+ countries.</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-500/5 rounded-full blur-[100px] z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard icon={<Award />} label="Industry Awards" value="48+" />
            <StatCard icon={<Briefcase />} label="Success Projects" value="1.2k+" />
            <StatCard icon={<Users />} label="Expert Consultants" value="350+" />
            <StatCard icon={<Globe />} label="Global Presence" value="24/7" />
          </div>
        </div>
      </section>

      {/* Dual Domain Detailed Overview */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black text-slate-900 mb-6 leading-tight">Technology & Strategy <br />In Perfect Sync.</h2>
              <p className="text-xl text-slate-600">
                VittaLok eliminates the friction between IT investment and financial ROI by integrating both disciplines from the ground up.
              </p>
            </div>
            <Link to="/about" className="group flex items-center font-bold text-teal-600 border-b-2 border-teal-600 pb-1 hover:text-slate-900 hover:border-slate-900 transition-all">
              The VittaLok Framework <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group p-12 rounded-[50px] bg-slate-50 border border-slate-100 hover:shadow-3xl hover:border-teal-500 transition-all duration-700 flex flex-col h-full service-card overflow-hidden relative">
               <div className="absolute top-0 right-0 p-8 opacity-5 transform scale-150 rotate-12">
                  <Code size={200} />
               </div>
               <div className="w-20 h-20 bg-slate-900 text-teal-400 flex items-center justify-center rounded-3xl mb-10 icon-box transition-all duration-500">
                  <Code size={40} />
               </div>
               <h3 className="text-3xl font-bold text-slate-900 mb-6">System Integration</h3>
               <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  We architect the digital backbone of your organization. From legacy migrations to cloud-native zero-trust networks.
               </p>
               <ul className="grid grid-cols-1 gap-4 mb-12">
                  {['Cloud Migration', 'Enterprise Software', 'Cybersecurity', 'IT Audit'].map((item) => (
                    <li key={item} className="flex items-center space-x-3 text-slate-700 font-semibold">
                      <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="text-teal-600 w-4 h-4" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
               </ul>
               <Link to="/services" className="mt-auto px-8 py-4 bg-white border border-slate-200 rounded-2xl font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all text-center">
                  Technical Service Catalog
               </Link>
            </div>

            <div className="group p-12 rounded-[50px] bg-slate-900 text-white hover:shadow-3xl transition-all duration-700 flex flex-col h-full service-card overflow-hidden relative">
               <div className="absolute top-0 right-0 p-8 opacity-5 transform scale-150 rotate-12">
                  <BarChart3 size={200} />
               </div>
               <div className="w-20 h-20 bg-teal-500 text-slate-900 flex items-center justify-center rounded-3xl mb-10 icon-box transition-all duration-500">
                  <BarChart3 size={40} />
               </div>
               <h3 className="text-3xl font-bold text-white mb-6">Financial Advisory</h3>
               <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                  Strategic capital management and growth advisory tailored for high-growth tech enterprises and global manufacturers.
               </p>
               <ul className="grid grid-cols-1 gap-4 mb-12">
                  {['Corporate Structuring', 'Risk Management', 'M&A Advisory', 'Business Valuation'].map((item) => (
                    <li key={item} className="flex items-center space-x-3 text-slate-200 font-semibold">
                      <div className="w-6 h-6 bg-slate-800 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="text-teal-400 w-4 h-4" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
               </ul>
               <Link to="/services" className="mt-auto px-8 py-4 bg-teal-500 rounded-2xl font-bold text-slate-900 hover:bg-white transition-all text-center">
                  Consultancy Options
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-20">
             <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Voice of Experience</h2>
             <p className="text-slate-500 font-medium">Why the world's leading CIOs and CFOs partner with VittaLok.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Robert Sterling", role: "CFO, Glo-Retail Group", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200", quote: "VittaLok solved the 'Black Box' problem of our IT spend. Their financial models for our infrastructure rollout saved us $24M in two years." },
                { name: "Linda Wu", role: "CTO, TechPulse Innovations", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200", quote: "A partner that actually understands both zero-trust security and series-C funding rounds. Truly unique value proposition." },
                { name: "Marcus Thorne", role: "MD, Thorne Manufacturing", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200", quote: "They didn't just install a server. They integrated our entire global supply chain and structured our trade finance for 15% better efficiency." }
              ].map((t, idx) => (
                <div key={idx} className="glass p-10 rounded-[40px] border border-white relative group hover:-translate-y-2 transition-all duration-500">
                   <div className="absolute top-[-20px] left-10 w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/30">
                     <span className="text-white text-3xl font-serif">"</span>
                   </div>
                   <p className="text-slate-700 italic mb-8 leading-relaxed text-lg">
                     {t.quote}
                   </p>
                   <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                         <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{t.name}</div>
                        <div className="text-xs font-bold text-teal-600 uppercase tracking-widest">{t.role}</div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-teal-500/10 skew-x-12"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-5xl lg:text-7xl font-black mb-10 leading-tight text-white tracking-tighter">
            Your Future Infrastructure <br />
            Is Already <span className="text-teal-400">Integrated.</span>
          </h2>
          <p className="text-2xl text-slate-400 mb-16 max-w-2xl mx-auto">
            Ready to deploy the systems and strategies that will define your next decade?
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Link to="/contact" className="px-12 py-6 bg-teal-500 text-slate-900 font-black rounded-2xl hover:bg-white hover:shadow-3xl hover:shadow-teal-500/20 transition-all text-xl active:scale-95">
              Talk to an Executive Advisor
            </Link>
            <Link to="/services" className="px-12 py-6 bg-transparent border-2 border-white/20 text-white font-black rounded-2xl hover:bg-white/10 transition-all text-xl active:scale-95">
              Review Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
