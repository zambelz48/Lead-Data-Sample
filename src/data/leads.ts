export interface Lead {
  id: string;
  company: string;
  industry: string;
  productCategory: string;
  businessType: string;
  isFavorite: boolean;
  leadQuality: 'high' | 'medium' | 'low';
  qualityScore: number;
}

export const mockLeads: Lead[] = [
  {
    id: '1',
    company: 'Third Eye Health',
    industry: 'Healthcare Tech',
    productCategory: 'Healthcare, Technology',
    businessType: 'B2B',
    isFavorite: false,
    leadQuality: 'high',
    qualityScore: 92
  },
  {
    id: '2',
    company: 'InfiVR',
    industry: 'Software Development',
    productCategory: 'Aviation, Aerospace, Automobile',
    businessType: 'B2B',
    isFavorite: true,
    leadQuality: 'high',
    qualityScore: 88
  },
  {
    id: '3',
    company: 'InfiVR',
    industry: 'Software Development',
    productCategory: 'Aviation, Aerospace, Automobile',
    businessType: 'N/A',
    isFavorite: false,
    leadQuality: 'medium',
    qualityScore: 75
  },
  {
    id: '4',
    company: 'InfiVR',
    industry: 'Software Development',
    productCategory: 'Aviation, Aerospace, Automobile',
    businessType: 'N/A',
    isFavorite: false,
    leadQuality: 'medium',
    qualityScore: 75
  },
  {
    id: '5',
    company: 'Sidero',
    industry: 'IT Services, Software Development',
    productCategory: 'Custom Software Development, IT Outsourcing, Cloud Development',
    businessType: 'N/A',
    isFavorite: false,
    leadQuality: 'low',
    qualityScore: 45
  },
  {
    id: '6',
    company: 'The Iserv Company',
    industry: 'Information Technology & Services',
    productCategory: 'Colocation, Internet Access, M...',
    businessType: 'N/A',
    isFavorite: false,
    leadQuality: 'medium',
    qualityScore: 68
  }
];

export const getQualityIndicator = (quality: Lead['leadQuality']) => {
  switch (quality) {
    case 'high':
      return { color: 'bg-green-500', label: '🟢 High Quality', textColor: 'text-green-400' };
    case 'medium':
      return { color: 'bg-yellow-500', label: '🟡 Medium Quality', textColor: 'text-yellow-400' };
    case 'low':
      return { color: 'bg-red-500', label: '🔴 Low Quality', textColor: 'text-red-400' };
    default:
      return { color: 'bg-gray-500', label: '⚪ Unknown', textColor: 'text-gray-400' };
  }
};
