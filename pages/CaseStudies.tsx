import React from 'react';
import { CASE_STUDIES } from '../constants';
// Added Activity to the lucide-react imports
import { CheckCircle2, TrendingUp, Cpu, BarChart, Activity } from 'lucide-react';

const CaseStudies: React.FC = () => {
  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-center">Success Stories</h1>
          <p className="text-xl text-slate-400 text-center max-w-3xl mx-auto">
            Measured impact across technological deployment and financial strategy.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {CASE_STUDIES.map((study) => (
            <div key={study.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col lg:flex-row">
              <div className="lg:w-1/3 p-8 lg:p-12 bg-slate-50 flex flex-col">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-teal-100 text-teal-700 text-xs font-bold rounded-full uppercase tracking-wider mb-6 w-fit">
                  {study.domain}
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-8 leading-tight">{study.title}</h2>
                
                <div className="mt-auto space-y-6">
                  <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Key Outcome</p>
                    <p className="text-lg font-bold text-slate-900">{study.outcome}</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3 p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 flex items-center mb-4">
                        <span className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mr-3 text-sm font-bold">P</span>
                        The Problem
                      </h3>
                      <p className="text-slate-600 text-lg leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 flex items-center mb-4">
                        <span className="w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center mr-3 text-sm font-bold">S</span>
                        Our Solution
                      </h3>
                      <p className="text-slate-600 text-lg leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                     <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                          <TrendingUp size={80} />
                        </div>
                        <h3 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2">Results & Metrics</h3>
                        <div className="space-y-4">
                          {study.metrics.map(metric => (
                            <div key={metric} className="flex items-center space-x-3">
                              <CheckCircle2 className="text-teal-400 flex-shrink-0" />
                              <span className="font-medium text-slate-200">{metric}</span>
                            </div>
                          ))}
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Engagement Models</h2>
            <p className="text-lg text-slate-600">Flexible ways to partner with VittaLok.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center">
              <div className="w-14 h-14 bg-white text-teal-600 flex items-center justify-center rounded-2xl mx-auto mb-6 shadow-sm">
                <Cpu size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Project Based</h3>
              <p className="text-slate-600">Specific infrastructure rollout or financial restructuring for defined milestones.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900 text-white text-center">
              <div className="w-14 h-14 bg-teal-600 text-white flex items-center justify-center rounded-2xl mx-auto mb-6 shadow-lg">
                <Activity size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Managed Services</h3>
              <p className="text-slate-300">Continuous 24/7 IT operations and ongoing financial controllership for your group.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center">
              <div className="w-14 h-14 bg-white text-slate-900 flex items-center justify-center rounded-2xl mx-auto mb-6 shadow-sm">
                <BarChart size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Strategic Partnership</h3>
              <p className="text-slate-600">High-level advisory and fractional CxO services for long-term growth roadmaps.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;