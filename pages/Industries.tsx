
import React from 'react';
import { INDUSTRIES } from '../constants';
import { 
  CheckCircle2, Building2, Landmark, Factory, ShoppingCart, Activity, 
  Rocket, ShieldCheck, TrendingUp, Cpu, Globe, ArrowUpRight, 
  Lock, Zap, BarChart3, Binary
} from 'lucide-react';

const industryIcons: Record<string, any> = {
  'it-tech': <Rocket className="w-12 h-12" />,
  'bfsi': <Landmark className="w-12 h-12" />,
  'mfg': <Factory className="w-12 h-12" />,
};

const SectorMetric: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="border-l-2 border-teal-500 pl-4 py-2">
    <div className="text-2xl font-black text-slate-900 tracking-tighter">{value}</div>
    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</div>
  </div>
);

const ComplianceBadge: React.FC<{ label: string }> = ({ label }) => (
  <span className="inline-flex items-center px-2 py-1 bg-slate-100 text-slate-500 text-[9px] font-black uppercase tracking-widest rounded border border-slate-200">
    <Lock size={10} className="mr-1" /> {label}
  </span>
);

const Industries: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white min-h-screen">
      {/* Cinematic Hero */}
      <section className="bg-slate-900 py-32 lg:py-48 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Global Business Hub" 
            className="w-full h-full object-cover grayscale opacity-30 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-teal-500/10 text-teal-400 text-xs font-black uppercase tracking-widest rounded-full mb-8 border border-teal-500/20">
              <Globe size={14} className="animate-pulse" />
              <span>Institutional Sector Intelligence</span>
            </div>
            <h1 className="text-6xl lg:text-9xl font-black mb-8 leading-[0.85] tracking-tighter">
              Global <br />Sector <span className="text-teal-400">Mastery.</span>
            </h1>
            <p className="text-xl lg:text-3xl text-slate-400 font-medium leading-relaxed">
              VittaLok navigates the high-stakes intersection of <span className="text-white">technical complexity</span> and <span className="text-white">capital stewardship</span> for the world's most demanding industries.
            </p>
          </div>
        </div>
      </section>

      {/* Sector Analysis Dossiers */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-48">
          {INDUSTRIES.map((industry, idx) => (
            <div 
              key={industry.id} 
              className={`flex flex-col lg:flex-row gap-16 lg:gap-32 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Strategic Imagery Sidebar */}
              <div className="lg:w-1/2 relative group">
                <div className="aspect-[4/5] rounded-[64px] overflow-hidden shadow-2xl relative">
                  <img 
                    src={industry.image} 
                    alt={industry.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Floating Identity Card */}
                  <div className="absolute top-12 left-12 w-28 h-28 bg-white rounded-3xl shadow-3xl flex items-center justify-center text-slate-900 group-hover:bg-teal-500 group-hover:text-white transition-all duration-500">
                    {industryIcons[industry.id] || <Building2 className="w-12 h-12" />}
                  </div>

                  {/* Sector Designation */}
                  <div className="absolute bottom-12 left-12 right-12 p-8 glass rounded-[32px] border border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Standardized Protocol</span>
                      <ShieldCheck size={16} className="text-teal-600" />
                    </div>
                    <p className="text-sm font-bold text-slate-800 italic">
                      "Engineered for high-frequency operational scaling and deep financial auditability."
                    </p>
                  </div>
                </div>
              </div>

              {/* Sector Content Brief */}
              <div className="lg:w-1/2 space-y-12">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                      {industry.name}
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <ComplianceBadge label="SOC2 Type II" />
                    <ComplianceBadge label="ISO 27001" />
                    <ComplianceBadge label="PCI DSS" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-10 py-8 border-y border-slate-100">
                   <SectorMetric label="Cost Reduction (Avg)" value="22.5%" />
                   <SectorMetric label="Uptime Reliability" value="99.999%" />
                </div>

                <div className="space-y-8">
                  <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 relative overflow-hidden group/card hover:bg-slate-900 transition-colors duration-500">
                    <div className="absolute top-0 right-0 p-6 opacity-10 text-teal-600 group-hover/card:text-teal-400">
                      <Binary size={80} />
                    </div>
                    <h3 className="text-[10px] font-black text-teal-600 uppercase tracking-[0.4em] mb-4 group-hover/card:text-teal-400">Integrated Solution</h3>
                    <p className="text-2xl text-slate-600 font-medium leading-relaxed italic group-hover/card:text-slate-300">
                      "{industry.solutions}"
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="flex items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <Zap size={14} className="mr-2 text-teal-500" />
                        Tech Hurdles
                      </h4>
                      <ul className="space-y-3">
                        {industry.challenges.map((c, i) => (
                          <li key={i} className="flex items-start space-x-2 text-sm text-slate-600 font-bold">
                             <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                             <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="flex items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <BarChart3 size={14} className="mr-2 text-teal-500" />
                        Fiscal Targets
                      </h4>
                      <div className="space-y-2">
                        {['CAPEX Optimization', 'Audit Readiness', 'M&A Resilience'].map((t, i) => (
                           <div key={i} className="px-4 py-2 bg-slate-50 rounded-xl text-xs font-black text-slate-500 uppercase border border-slate-100">
                             {t}
                           </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                   <button className="px-12 py-6 bg-slate-900 text-white font-black rounded-3xl hover:bg-teal-600 transition-all flex items-center space-x-4 shadow-2xl group active:scale-95">
                     <span className="uppercase tracking-widest text-xs">Access Sector Dossier</span>
                     <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Specialized Sub-Sectors */}
      <section className="py-40 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
           <Globe size={600} className="absolute -right-1/4 -bottom-1/4 text-white" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                Niche <br /><span className="text-teal-400">Capabilities.</span>
              </h2>
              <p className="text-xl text-slate-400 font-medium">
                Deep vertical expertise in sub-sectors requiring hyper-specialized technical and financial frameworks.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                name: 'Healthcare Core', 
                icon: <Activity className="text-white" />, 
                desc: 'HIPAA-compliant system cores with complex medicare-aligned billing financial models.',
                img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600"
              },
              { 
                name: 'Precision Retail', 
                icon: <ShoppingCart className="text-white" />, 
                desc: 'Omnichannel infrastructure paired with global supply-chain trade finance systems.',
                img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600"
              },
              { 
                name: 'Emerging Tech', 
                icon: <Rocket className="text-white" />, 
                desc: 'Scalable cloud architecture and series A-D financial readiness frameworks.',
                img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-[60px] overflow-hidden group hover:bg-white/10 transition-all duration-700 flex flex-col">
                <div className="h-72 overflow-hidden relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-slate-900/40"></div>
                  <div className="absolute bottom-8 left-8 w-16 h-16 bg-teal-500 flex items-center justify-center rounded-2xl shadow-xl transform group-hover:rotate-6 transition-transform">
                    {item.icon}
                  </div>
                </div>
                <div className="p-12 flex-grow flex flex-col">
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{item.name}</h3>
                  <p className="text-slate-400 leading-relaxed font-medium mb-12 flex-grow">{item.desc}</p>
                  <button className="flex items-center space-x-2 text-teal-400 font-black uppercase tracking-widest text-[10px] hover:text-white transition-colors">
                    <span>Explore Methodology</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Conversion Section */}
      <section className="py-40 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-slate-50 text-teal-600 flex items-center justify-center rounded-3xl mx-auto mb-10 shadow-sm border border-slate-100">
            <TrendingUp size={40} />
          </div>
          <h2 className="text-5xl lg:text-8xl font-black text-slate-900 mb-10 leading-[0.9] tracking-tighter uppercase">
            Built for <br /><span className="text-teal-600">Sovereign Growth.</span>
          </h2>
          <p className="text-2xl text-slate-500 font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
            Our sector leads are former CFOs and Heads of Infrastructure. We speak your language—whether it's ROI, EBTIDA, or Microservices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="w-full sm:w-auto px-16 py-7 bg-slate-900 text-white font-black rounded-[2rem] hover:bg-teal-600 transition-all text-sm uppercase tracking-[0.2em] shadow-2xl active:scale-95">
              Consult Sector Lead
            </button>
            <button className="w-full sm:w-auto px-16 py-7 bg-transparent border-2 border-slate-200 text-slate-900 font-black rounded-[2rem] hover:bg-slate-50 transition-all text-sm uppercase tracking-[0.2em] active:scale-95">
              Sector Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
