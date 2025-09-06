import axios from 'axios';
import { ContactFormData, Project } from '../types';

const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

// Mock projects data - in real app this would come from a CMS or database
export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Invoice Processing System',
    description: 'Automated invoice processing using OCR and machine learning for a mid-size accounting firm.',
    problem: 'Manual invoice processing taking 40+ hours per week, high error rates, delayed client billing.',
    solution: 'Custom Angular dashboard with NestJS backend, integrated AI for data extraction and validation.',
    technologies: ['Angular', 'NestJS', 'Python', 'OCR APIs', 'PostgreSQL'],
    metrics: {
      costSaved: '$85,000/year',
      timeReduced: '87%',
      efficiency: '95% accuracy improvement'
    },
    image: '/placeholder-invoice.jpg',
    demoUrl: 'https://demo.example.com',
    caseStudyUrl: '/case-study/invoice-automation'
  },
  {
    id: '2',
    title: 'Sales Pipeline Automation',
    description: 'End-to-end sales automation connecting CRM, email marketing, and reporting systems.',
    problem: 'Sales team spending 60% of time on admin tasks, inconsistent follow-ups, poor lead qualification.',
    solution: 'Integrated workflow automation with smart lead scoring and automated nurture sequences.',
    technologies: ['React', 'Node.js', 'Zapier', 'HubSpot API', 'SendGrid'],
    metrics: {
      revenueIncreased: '+$320,000',
      timeReduced: '60%',
      efficiency: '40% more qualified leads'
    },
    image: '/placeholder-sales.jpg',
    demoUrl: 'https://demo2.example.com'
  },
  {
    id: '3',
    title: 'Manufacturing QA Dashboard',
    description: 'Real-time quality assurance monitoring with predictive maintenance alerts.',
    problem: 'Reactive maintenance leading to $200k+ in downtime, manual quality checks missing defects.',
    solution: 'IoT sensor integration with ML-powered predictive analytics and automated alerting.',
    technologies: ['Angular', 'NestJS', 'IoT Sensors', 'TensorFlow', 'MongoDB'],
    metrics: {
      costSaved: '$450,000/year',
      efficiency: '92% reduction in unplanned downtime',
      timeReduced: '75% faster defect detection'
    },
    image: '/placeholder-manufacturing.jpg'
  }
];

export const apiService = {
  // Projects
  getProjects: async (): Promise<Project[]> => {
    try {
      const response = await api.get('/projects');
      return response.data;
    } catch (error) {
      console.log('Using mock data for projects');
      return mockProjects;
    }
  },

  // Contact form
  submitContact: async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
    try {
      const response = await api.post('/contact', data);
      return response.data;
    } catch (error) {
      console.log('Contact form submitted (mock):', data);
      return { success: true, message: 'Thank you for your message! I\'ll get back to you within 24 hours.' };
    }
  },

  // Newsletter signup (bonus feature)
  subscribeNewsletter: async (email: string): Promise<{ success: boolean }> => {
    try {
      const response = await api.post('/newsletter', { email });
      return response.data;
    } catch (error) {
      console.log('Newsletter subscription (mock):', email);
      return { success: true };
    }
  }
};