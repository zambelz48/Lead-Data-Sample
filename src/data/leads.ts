import type { RawLead } from '../types/lead.types';

export const mockLeads: RawLead[] = [
  {
    id: '1',
    company: 'Third Eye Health',
    industry: 'Healthcare Tech',
    productCategory: 'Healthcare, Technology',
    businessType: 'B2B',
    isFavorite: false,
  },
  {
    id: '2',
    company: 'InfiVR',
    industry: 'Software Development',
    productCategory: 'Aviation, Aerospace, Automobile',
    businessType: 'B2B',
    isFavorite: true,
  },
  {
    id: '3',
    company: 'InfiVR',
    industry: 'Software Development',
    productCategory: 'Aviation, Aerospace, Automobile',
    businessType: 'N/A',
    isFavorite: false,
  },
  {
    id: '4',
    company: 'InfiVR',
    industry: 'Software Development',
    productCategory: 'Aviation, Aerospace, Automobile',
    businessType: 'N/A',
    isFavorite: false,
  },
  {
    id: '5',
    company: 'Sidero',
    industry: 'IT Services, Software Development',
    productCategory: 'Custom Software Development, IT Outsourcing, Cloud Development',
    businessType: 'N/A',
    isFavorite: false,
  },
  {
    id: '6',
    company: 'The Iserv Company',
    industry: 'Information Technology & Services',
    productCategory: 'Colocation, Internet Access, Management',
    businessType: 'N/A',
    isFavorite: false,
  }
];
