import React, { useState } from "react";
import { SERVICES } from "../constants";
import { ServiceDomain } from "../types";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Briefcase,
  ChevronDown,
  HelpCircle,
  Layers,
  Shield,
  FileText,
  BookOpen
} from "lucide-react";

/* ---------------- FAQ ITEM ---------------- */
const FAQItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className={`text-lg font-bold ${isOpen ? "text-teal-600" : ""}`}>
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`transition-transform ${isOpen ? "rotate-180 text-teal-600" : ""}`}
        />
      </button>
      {isOpen && (
        <p className="pb-6 text-slate-600 leading-relaxed">{answer}</p>
      )}
    </div>
  );
};

/* ---------------- PROCESS STEP ---------------- */
const ProcessStep: React.FC<{
  step: string;
  title: string;
  desc: string;
}> = ({ step, title, desc }) => (
  <div className="relative p-8 bg-white rounded-[32px] shadow-sm hover:shadow-xl transition">
    <div className="absolute -top-4 -left-4 w-12 h-12 bg-slate-900 text-teal-400 flex items-center justify-center rounded-xl font-black">
      {step}
    </div>
    <h4 className="text-xl font-black mt-6 mb-3">{title}</h4>
    <p className="text-slate-500 text-sm">{desc}</p>
  </div>
);

/* ---------------- FINANCIAL SERVICES DATA (short features) ---------------- */
const financialServices = [
  {
    icon: Shield,
    title: "Advisory Services",
    description:
      "Assurance, governance and internal control strengthening for enterprise scale.",
    features: [
      "Accounting & Audit Opinions",
      "GST Audits",
      "Special Project Audits",
      "Internal Controls"
    ]
  },
  {
    icon: FileText,
    title: "Tax Advisory",
    description:
      "Practical tax planning, compliance and dispute support across direct & indirect taxes.",
    features: [
      "Direct Tax Compliance",
      "Transaction Advisory",
      "GST Advisory",
      "Tax Planning"
    ]
  },
  {
    icon: Briefcase,
    title: "Corporate Secretarial",
    description:
      "End-to-end secretarial support to keep governance and filings on point.",
    features: [
      "Incorporation",
      "Ongoing Compliance",
      "Regulatory Filings",
      "Restructuring Support"
    ]
  },
  {
    icon: BookOpen,
    title: "Other Services",
    description:
      "Operational finance services and value-add programs for teams and leaders.",
    features: [
      "Bookkeeping & Accounts",
      "Registrations (PAN/GST/EPF)",
      "Financial Statements",
      "Workshops & Training"
    ]
  }
];

/* ---------------- MAIN COMPONENT ---------------- */
const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ServiceDomain>(
    ServiceDomain.SYSTEM_INTEGRATION
  );

  const filteredServices = SERVICES.filter((s) => s.domain === activeTab);

  return (
    <div className="pb-32">
      {/* ---------------- TABS ---------------- */}
      <section className="max-w-5xl mx-auto px-4 mt-20">
        <div className="flex bg-white shadow-xl rounded-[40px] p-3">
          <button
            onClick={() => setActiveTab(ServiceDomain.SYSTEM_INTEGRATION)}
            className={`flex-1 py-6 rounded-[30px] font-black ${
              activeTab === ServiceDomain.SYSTEM_INTEGRATION
                ? "bg-slate-900 text-white"
                : "text-slate-500"
            }`}
          >
            <Layers className="inline mr-2" />
            System Integration
          </button>
          <button
            onClick={() => setActiveTab(ServiceDomain.FINANCIAL_CONSULTANCY)}
            className={`flex-1 py-6 rounded-[30px] font-black ${
              activeTab === ServiceDomain.FINANCIAL_CONSULTANCY
                ? "bg-teal-600 text-white"
                : "text-slate-500"
            }`}
          >
            <Briefcase className="inline mr-2" />
            Financial Strategy
          </button>
        </div>
      </section>

      {/* ---------------- SERVICES GRID ---------------- */}
      <section className="max-w-7xl mx-auto px-4 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* SYSTEM INTEGRATION (unchanged) */}
          {activeTab === ServiceDomain.SYSTEM_INTEGRATION
            ? filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-[48px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 overflow-hidden flex flex-col p-10 lg:p-14"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110 duration-700"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-slate-900 text-teal-400 flex items-center justify-center rounded-2xl mb-10 shadow-lg transform group-hover:rotate-6 transition-transform">
                      {service.icon}
                    </div>

                    <h3 className="text-3xl font-black text-slate-900 mb-6 leading-tight uppercase tracking-tighter">
                      {service.title}
                    </h3>

                    <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                      {service.description}
                    </p>

                    <div className="space-y-6 mb-12">
                      <h4 className="text-[10px] font-black text-teal-600 uppercase tracking-[0.4em]">
                        Core Capabilities
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((b) => (
                          <span
                            key={b}
                            className="flex items-center space-x-2 bg-slate-50 px-4 py-2 rounded-xl text-slate-700 font-bold text-xs border border-slate-100 group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors"
                          >
                            <CheckCircle2 className="text-teal-500 w-3 h-3" />
                            <span>{b}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="flex items-center space-x-3 text-slate-400"></div>

                      <Link to="/contact">
                        <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-teal-600 transition-all flex items-center justify-center space-x-3 active:scale-95 group/btn shadow-xl shadow-slate-900/10">
                          <span className="uppercase text-xs tracking-widest">Consult Principal</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            : /* FINANCIAL STRATEGY -- cards styled same as system cards, short features */
              financialServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="group relative bg-white rounded-[48px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 overflow-hidden flex flex-col p-10 lg:p-14"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110 duration-700"></div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-slate-900 text-teal-400 flex items-center justify-center rounded-2xl mb-10 shadow-lg transform group-hover:rotate-6 transition-transform">
                        {/* render icon component */}
                        <Icon size={28} />
                      </div>

                      <h3 className="text-3xl font-black text-slate-900 mb-6 leading-tight uppercase tracking-tighter">
                        {service.title}
                      </h3>

                      <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                        {service.description}
                      </p>

                      <div className="space-y-6 mb-12">
                        <h4 className="text-[10px] font-black text-teal-600 uppercase tracking-[0.4em]">
                          Core Capabilities
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {service.features.map((f) => (
                            <span
                              key={f}
                              className="flex items-center space-x-2 bg-slate-50 px-4 py-2 rounded-xl text-slate-700 font-bold text-xs border border-slate-100 group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors"
                            >
                              <CheckCircle2 className="text-teal-500 w-3 h-3" />
                              <span>{f}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex items-center space-x-3 text-slate-400"></div>

                        <Link to="/contact">
                          <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-teal-600 transition-all flex items-center justify-center space-x-3 active:scale-95 group/btn shadow-xl shadow-slate-900/10">
                            <span className="uppercase text-xs tracking-widest">Consult Principal</span>
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </section>

      {/* ---------------- CTA (NO DOWNLOAD BUTTON) ---------------- */}
      <section className="max-w-6xl mx-auto px-4 mt-40">
        <div className="bg-slate-900 rounded-[60px] p-20 text-center text-white">
          <h2 className="text-5xl font-black mb-6">
            Ready to <span className="text-teal-400">Architect</span> Growth?
          </h2>
          <p className="text-slate-400 mb-12 text-xl">
            Connect with a Principal Advisor to begin your engagement.
          </p>

          <Link to="/contact">
            <button className="px-16 py-6 bg-teal-500 text-slate-900 font-black rounded-3xl hover:bg-white transition">
              Request Principal Brief
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
