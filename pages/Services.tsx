import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../constants";
import { ServiceDomain } from "../types";
import {
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Layers,
  Shield,
  FileText,
  BookOpen
} from "lucide-react";

/* ---------------- EXTRA CORE CAPABILITIES (SYSTEM INTEGRATION) ---------------- */
const extraCapabilitiesByTitle = {
  "ERP Integration": [
    "SAP / Oracle Integration",
    "Business Process Automation",
    "Legacy System Modernisation",
    "Real-time Data Synchronisation"
  ],
  "Cloud Infrastructure": [
    "Cloud Architecture Design",
    "Secure Cloud Migration",
    "High Availability & DR",
    "Cost Optimisation"
  ],
  "Cyber Security": [
    "Threat & Vulnerability Assessment",
    "Security Architecture Design",
    "Compliance & Risk Management",
    "Incident Response Planning"
  ],
  "Data & Analytics": [
    "Business Intelligence",
    "Data Warehousing",
    "Advanced Reporting",
    "Decision Support Systems"
  ]
};

/* ---------------- FINANCIAL STRATEGY DATA ---------------- */
const financialServices = [
  {
    icon: Shield,
    title: "Advisory Services",
    description:
      "Governance, assurance and internal control strengthening for enterprises.",
    features: [
      "Audit & Assurance",
      "Internal Controls",
      "Risk Advisory",
      "Governance Review"
    ]
  },
  {
    icon: FileText,
    title: "Tax Advisory",
    description:
      "Strategic tax planning, compliance and transaction support.",
    features: [
      "Direct Tax",
      "GST Advisory",
      "Tax Planning",
      "Litigation Support"
    ]
  },
  {
    icon: Briefcase,
    title: "Corporate Secretarial",
    description:
      "End-to-end secretarial and regulatory compliance services.",
    features: [
      "Company Incorporation",
      "ROC Filings",
      "Board Compliance",
      "Corporate Restructuring"
    ]
  },
  {
    icon: BookOpen,
    title: "Other Services",
    description:
      "Operational finance, accounting and professional training services.",
    features: [
      "Bookkeeping",
      "Statutory Registrations",
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

  const filteredServices = SERVICES.filter(
    (service) => service.domain === activeTab
  );

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

          {/* -------- SYSTEM INTEGRATION -------- */}
          {activeTab === ServiceDomain.SYSTEM_INTEGRATION &&
            filteredServices.map((service) => {
              const extra =
                extraCapabilitiesByTitle[
                  service.title as keyof typeof extraCapabilitiesByTitle
                ] || [];

              const combinedFeatures = [...service.benefits, ...extra];

              return (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-[48px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 p-10 lg:p-14"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px]" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-slate-900 text-teal-400 flex items-center justify-center rounded-2xl mb-10 shadow-lg">
                      {service.icon}
                    </div>

                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">
                      {service.title}
                    </h3>

                    <p className="text-xl text-slate-600 mb-10">
                      {service.description}
                    </p>

                    <div className="space-y-6 mb-12">
                      <h4 className="text-[10px] font-black text-teal-600 uppercase tracking-[0.4em]">
                        Core Capabilities
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {combinedFeatures.map((feature) => (
                          <span
                            key={feature}
                            className="flex items-center space-x-2 bg-slate-50 px-4 py-2 rounded-xl text-xs font-bold border"
                          >
                            <CheckCircle2 className="w-3 h-3 text-teal-500" />
                            <span>{feature}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-10 border-t flex justify-end">
                      <Link to="/contact">
                        <button className="px-8 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-teal-600 transition">
                          Consult Principal
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}

          {/* -------- FINANCIAL STRATEGY -------- */}
          {activeTab === ServiceDomain.FINANCIAL_CONSULTANCY &&
            financialServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white rounded-[48px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 p-10 lg:p-14"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px]" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-slate-900 text-teal-400 flex items-center justify-center rounded-2xl mb-10">
                      <Icon size={28} />
                    </div>

                    <h3 className="text-3xl font-black uppercase mb-6">
                      {service.title}
                    </h3>

                    <p className="text-xl text-slate-600 mb-10">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-12">
                      {service.features.map((f) => (
                        <span
                          key={f}
                          className="flex items-center space-x-2 bg-slate-50 px-4 py-2 rounded-xl text-xs font-bold border"
                        >
                          <CheckCircle2 className="w-3 h-3 text-teal-500" />
                          <span>{f}</span>
                        </span>
                      ))}
                    </div>

                    <div className="pt-10 border-t flex justify-end">
                      <Link to="/contact">
                        <button className="px-8 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-teal-600 transition">
                          Consult Principal
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default Services;
