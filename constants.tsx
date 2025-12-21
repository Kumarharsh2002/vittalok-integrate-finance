
import React from 'react';
import { 
  Server, Shield, Cloud, Settings, Layout, Code, 
  Briefcase, TrendingUp, ShieldAlert, BarChart3, Calculator, PieChart 
} from 'lucide-react';
import { ServiceDomain, ServiceDetail, IndustryDetail, CaseStudy } from './types';

export const COLORS = {
  primary: '#0F172A', // Navy
  secondary: '#0D9488', // Teal
  accent: '#64748B', // Steel Gray
};

export const SERVICES: ServiceDetail[] = [
  // System Integration
  {
    id: 'it-infra',
    title: 'IT Infrastructure Design',
    description: 'High-performance, scalable infrastructure tailored to your enterprise requirements.',
    benefits: ['Scalability', 'Reliability', 'Performance Optimization'],
    useCases: ['Enterprise HQ Setup', 'Multi-site Expansion'],
    industries: ['Manufacturing', 'Healthcare', 'BFSI'],
    domain: ServiceDomain.SYSTEM_INTEGRATION,
    icon: <Server className="w-6 h-6" />
  },
  {
    id: 'network-security',
    title: 'Network & Security Integration',
    description: 'Protecting your perimeter with advanced firewall, VPN, and zero-trust architectures.',
    benefits: ['Zero-Trust Security', 'Global Connectivity', 'Uptime'],
    useCases: ['Secure Remote Access', 'Multi-layer Defense'],
    industries: ['BFSI', 'Retail', 'IT'],
    domain: ServiceDomain.SYSTEM_INTEGRATION,
    icon: <Shield className="w-6 h-6" />
  },
  {
    id: 'cloud-solutions',
    title: 'Data Center & Cloud Solutions',
    description: 'Hybrid cloud strategies and on-premise data center migrations.',
    benefits: ['Cost Efficiency', 'Agility', 'Disaster Recovery'],
    useCases: ['AWS/Azure Migration', 'Private Cloud Deployment'],
    industries: ['Startups', 'IT', 'Manufacturing'],
    domain: ServiceDomain.SYSTEM_INTEGRATION,
    icon: <Cloud className="w-6 h-6" />
  },
  {
    id: 'cyber-compliance',
    title: 'Cybersecurity & Compliance',
    description: 'Ensuring your systems meet global standards like ISO 27001, SOC2, and GDPR.',
    benefits: ['Risk Mitigation', 'Legal Safety', 'Customer Trust'],
    useCases: ['Compliance Audit', 'Vulnerability Assessment'],
    industries: ['Healthcare', 'BFSI', 'Tech'],
    domain: ServiceDomain.SYSTEM_INTEGRATION,
    icon: <Settings className="w-6 h-6" />
  },

  // Financial Consultancy
  {
    id: 'fin-advisory',
    title: 'Financial Advisory',
    description: 'Strategic investment planning and capital allocation strategies.',
    benefits: ['High ROI', 'Sustainable Growth', 'Market Insight'],
    useCases: ['Portfolio Management', 'Investment Strategy'],
    industries: ['SMEs', 'Enterprises', 'Startups'],
    domain: ServiceDomain.FINANCIAL_CONSULTANCY,
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    id: 'corp-finance',
    title: 'Corporate Finance & Structuring',
    description: 'Optimizing corporate structure for tax efficiency and legal protection.',
    benefits: ['Capital Efficiency', 'Optimal Structure', 'M&A Support'],
    useCases: ['Entity Formation', 'Debt Restructuring'],
    industries: ['Global Groups', 'Private Equity'],
    domain: ServiceDomain.FINANCIAL_CONSULTANCY,
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    id: 'risk-management',
    title: 'Risk Management',
    description: 'Identifying and mitigating financial, operational, and market risks.',
    benefits: ['Stability', 'Crisis Prevention', 'Resilience'],
    useCases: ['Market Risk Hedging', 'Operational Audits'],
    industries: ['Manufacturing', 'BFSI', 'Retail'],
    domain: ServiceDomain.FINANCIAL_CONSULTANCY,
    icon: <ShieldAlert className="w-6 h-6" />
  },
  {
    id: 'business-valuation',
    title: 'Business Valuation',
    description: 'Accurate, data-driven valuations for sales, mergers, or funding rounds.',
    benefits: ['Fair Value Assessment', 'Negotiation Power', 'Due Diligence'],
    useCases: ['Exit Strategy', 'Series Funding'],
    industries: ['Tech Startups', 'SMEs'],
    domain: ServiceDomain.FINANCIAL_CONSULTANCY,
    icon: <BarChart3 className="w-6 h-6" />
  }
];

export const INDUSTRIES: IndustryDetail[] = [
  {
    id: 'it-tech',
    name: 'IT & Technology',
    challenges: ['Rapidly changing stack', 'Scaling security', 'Talent shortages'],
    solutions: 'We provide managed services and high-level financial planning for R&D investment.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'bfsi',
    name: 'Banking & Finance',
    challenges: ['Stringent regulations', 'Cyber threats', 'Legacy systems'],
    solutions: 'End-to-end integration of secure banking cores plus compliance-heavy financial advisory.',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'mfg',
    name: 'Manufacturing',
    challenges: ['Operational silos', 'Inventory risk', 'Energy costs'],
    solutions: 'IoT infrastructure integration paired with working capital optimization.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'Global Retailer Digital Transformation',
    domain: ServiceDomain.SYSTEM_INTEGRATION,
    problem: 'Siloed data across 500+ locations leading to inefficient stock management.',
    solution: 'Implemented a unified hybrid cloud data center and integrated enterprise ERP.',
    outcome: 'Achieved real-time visibility across all locations.',
    metrics: ['30% reduction in IT overhead', '99.99% system uptime', '20% faster checkout']
  },
  {
    id: 'cs2',
    title: 'FinTech Startup Series B Scaling',
    domain: ServiceDomain.FINANCIAL_CONSULTANCY,
    problem: 'Complex tax structure and lack of clear valuation for new funding round.',
    solution: 'Restructured corporate entities and provided a comprehensive 5-year financial strategy.',
    outcome: 'Successfully raised $40M at a premium valuation.',
    metrics: ['15% tax efficiency gain', '$40M raised', '4-month turnaround']
  }
];
