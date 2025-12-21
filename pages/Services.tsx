
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ServiceDomain } from '../types';
import { CheckCircle2, ArrowRight, Server, Briefcase, Globe, ChevronDown, HelpCircle, Layers, ShieldCheck, Zap, MousePointer2 } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-teal-600' : 'text-slate-900'}`}>{question}</span>
        <ChevronDown size={20} className={`transform transition-transform text-slate-400 ${isOpen ? 'rotate-180 text-teal-600' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const ProcessStep: React.FC<{ step: string; title: string; desc: string }> = ({ step, title, desc }) => (
  <div className="relative p-8 bg-white border border-slate-100 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-500 group">
    <div className="absolute -top-4 -left-4 w-12 h-12 bg-slate-900 text-teal-400 flex items-center justify-center rounded-2xl font-black text-xl shadow-lg border-4 border-white">
      {step}
    </div>
    <h4 className="text-xl font-black text-slate-900 mt-4 mb-3 uppercase tracking-tighter">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ServiceDomain>(ServiceDomain.SYSTEM_INTEGRATION);

  const filteredServices = SERVICES.filter(s => s.domain === activeTab);

  return (
    <div className="animate-fade-in pb-32">
      {/* High-Impact Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 grayscale"
            alt="Technology Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-teal-500/20 text-teal-400 text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
              <span>Solution Ecosystem</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
              The Architecture <br />of <span className="text-teal-400">Scale.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-medium">
              We don't just provide services; we engineer the intersections of technical resilience and financial strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Domain Navigation */}
      <section className="max-w-5xl mx-auto px-4 -mt-16 relative z-20">
        <div className="flex bg-white shadow-2xl rounded-[40px] p-3 border border-slate-100 backdrop-blur-xl">
          <button
            onClick={() => setActiveTab(ServiceDomain.SYSTEM_INTEGRATION)}
            className={`flex-1 py-6 px-10 rounded-[30px] transition-all duration-500 flex items-center justify-center space-x-4 ${
              activeTab === ServiceDomain.SYSTEM_INTEGRATION 
              ? 'bg-slate-900 text-white shadow-xl translate-y-[-4px]' 
              : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Layers className={activeTab === ServiceDomain.SYSTEM_INTEGRATION ? "text-teal-400" : "text-slate-400"} />
            <span className="text-lg font-black uppercase tracking-tighter">System Integration</span>
          </button>
          <button
            onClick={() => setActiveTab(ServiceDomain.FINANCIAL_CONSULTANCY)}
            className={`flex-1 py-6 px-10 rounded-[30px] transition-all duration-500 flex items-center justify-center space-x-4 ${
              activeTab === ServiceDomain.FINANCIAL_CONSULTANCY 
              ? 'bg-teal-600 text-white shadow-xl translate-y-[-4px]' 
              : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Briefcase className={activeTab === ServiceDomain.FINANCIAL_CONSULTANCY ? "text-white" : "text-slate-400"} />
            <span className="text-lg font-black uppercase tracking-tighter">Financial Strategy</span>
          </button>
        </div>
      </section>

      {/* Service Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">
              {activeTab === ServiceDomain.SYSTEM_INTEGRATION ? "Technical Core Services" : "Strategic Advisory Pillar"}
            </h2>
            <p className="text-lg text-slate-500 font-medium italic">
              Comprehensive frameworks designed for enterprise stakeholders and operational heads.
            </p>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Available Global Catalog v4.2</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-white rounded-[48px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 overflow-hidden flex flex-col p-10 lg:p-14"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110 duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-900 text-teal-400 flex items-center justify-center rounded-2xl mb-10 shadow-lg transform group-hover:rotate-6 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6 leading-tight uppercase tracking-tighter">{service.title}</h3>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">{service.description}</p>
                
                <div className="space-y-6 mb-12">
                  <h4 className="text-[10px] font-black text-teal-600 uppercase tracking-[0.4em]">Core Capabilities</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map(b => (
                      <span key={b} className="flex items-center space-x-2 bg-slate-50 px-4 py-2 rounded-xl text-slate-700 font-bold text-xs border border-slate-100 group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors">
                        <CheckCircle2 className="text-teal-500 w-3 h-3" />
                        <span>{b}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center space-x-3 text-slate-400">
                    <Globe size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">ISO 27001 Certified Engagement</span>
                  </div>
                  <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-teal-600 transition-all flex items-center justify-center space-x-3 active:scale-95 group/btn shadow-xl shadow-slate-900/10">
                    <span className="uppercase text-xs tracking-widest">Consult Principal</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The VittaLok Engagement Process */}
      <section className="py-40 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6">
              Engagement <span className="text-teal-600">Protocol.</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
              A structured, 4-stage deployment roadmap designed to minimize friction and maximize institutional impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -z-0 translate-y-[-24px]"></div>
            
            <ProcessStep 
              step="01" 
              title="Audit & Discover" 
              desc="Deep-dive situational analysis covering current IT architecture and financial efficiency nodes." 
            />
            <ProcessStep 
              step="02" 
              title="Strategic Design" 
              desc="Engineering a unified roadmap that aligns technical infrastructure with corporate growth KPIs." 
            />
            <ProcessStep 
              step="03" 
              title="Precision Deploy" 
              desc="Agile execution of systems or financial restructuring with zero operational downtime targets." 
            />
            <ProcessStep 
              step="04" 
              title="Continuous Audit" 
              desc="Ongoing performance monitoring and 24/7 technical-financial controllership." 
            />
          </div>
        </div>
      </section>

      {/* Refined FAQ */}
      <section className="max-w-4xl mx-auto px-4 mt-40">
        <div className="flex items-center justify-center space-x-4 mb-10">
          <div className="w-12 h-px bg-slate-200"></div>
          <div className="w-16 h-16 bg-white text-slate-900 flex items-center justify-center rounded-2xl shadow-lg border border-slate-100">
            <HelpCircle size={32} />
          </div>
          <div className="w-12 h-px bg-slate-200"></div>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Engagement Queries</h2>
          <p className="text-lg text-slate-500 font-medium">Clarifying the VittaLok methodology for your organization.</p>
        </div>
        <div className="bg-white rounded-[50px] p-10 lg:p-16 shadow-2xl border border-slate-100">
          <FAQItem 
            question="What is the Dual-Core Engagement model?" 
            answer="Our unique model ensures that for every technical deployment (Core 1), there is a corresponding financial strategy (Core 2) to ensure the investment drives tangible enterprise value and ROI." 
          />
          <FAQItem 
            question="How do you handle security during systems integration?" 
            answer="We operate on a 'Zero-Trust Integration' protocol. All migrations are segmented, encrypted at rest and in transit, and strictly adhere to ISO 27001 and SOC2 Type II standards." 
          />
          <FAQItem 
            question="Can we engage for short-term financial restructuring only?" 
            answer="Yes. While our strength is integrated delivery, our Financial Consultancy pillar operates independently for high-stakes M&A, debt restructuring, and IPO readiness audits." 
          />
          <FAQItem 
            question="What industries do you specialize in?" 
            answer="We have deep domain expertise in BFSI, Precision Manufacturing, Healthcare Systems, and Global Logistics—sectors where technical complexity meets high-value capital management." 
          />
        </div>
      </section>

      {/* Global Call to Action */}
      <section className="max-w-7xl mx-auto px-4 mt-40">
        <div className="bg-slate-900 rounded-[70px] p-16 lg:p-24 text-center text-white relative overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 transition-transform duration-10000" 
            alt="Office" 
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl lg:text-7xl font-black mb-10 leading-[0.9] tracking-tighter uppercase">
              Ready to <br /><span className="text-teal-400">Architect</span> Growth?
            </h2>
            <p className="text-2xl text-slate-400 mb-16 font-medium leading-relaxed">
              Connect with a Principal Advisor to begin your organizational audit.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
              <button className="w-full sm:w-auto px-14 py-6 bg-teal-500 text-slate-900 font-black rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-teal-500/20 transition-all text-sm uppercase tracking-[0.2em] active:scale-95">
                Request Principal Brief
              </button>
              <button className="w-full sm:w-auto px-14 py-6 bg-transparent border-2 border-white/20 text-white font-black rounded-3xl hover:bg-white/10 transition-all text-sm uppercase tracking-[0.2em] active:scale-95">
                Download Catalog
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
