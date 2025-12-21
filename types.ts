
// Added React import for React.ReactNode namespace
import React from 'react';

export enum ServiceDomain {
  SYSTEM_INTEGRATION = 'System Integration',
  FINANCIAL_CONSULTANCY = 'Financial Consultancy'
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  useCases: string[];
  industries: string[];
  domain: ServiceDomain;
  icon: React.ReactNode;
}

export interface IndustryDetail {
  id: string;
  name: string;
  challenges: string[];
  solutions: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  domain: ServiceDomain;
  problem: string;
  solution: string;
  outcome: string;
  metrics: string[];
}