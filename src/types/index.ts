export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  metrics: {
    costSaved?: string;
    timeReduced?: string;
    revenueIncreased?: string;
    efficiency?: string;
  };
  image: string;
  demoUrl?: string;
  caseStudyUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  ctaText: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  budget: string;
  type: 'hire' | 'client' | 'investor';
}

export interface SavingsCalculation {
  currentMonthlyCost: number;
  hoursPerWeek: number;
  hourlyRate: number;
  automationPercentage: number;
  projectedSavings: {
    monthly: number;
    annual: number;
    timeHours: number;
  };
}