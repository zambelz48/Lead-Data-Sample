import type { Lead, RawLead } from '../types/lead.types';

export const calculateLeadQuality = (lead: RawLead): { quality: Lead['leadQuality'], score: number } => {
  let score = 0;

  // Industry scoring (40% weight)
  const industryScore = getIndustryScore(lead.industry);
  score += industryScore * 0.4;

  // Business type scoring (30% weight)
  const businessTypeScore = getBusinessTypeScore(lead.businessType);
  score += businessTypeScore * 0.3;

  // Product category scoring (30% weight)
  const categoryScore = getCategoryScore(lead.productCategory);
  score += categoryScore * 0.3;

  const finalScore = Math.round(score);

  return {
    score: finalScore,
    quality: finalScore >= 80 ? 'high' : finalScore >= 60 ? 'medium' : 'low'
  };
};

const getIndustryScore = (industry: string): number => {
  const highValueIndustries = [
    'healthcare tech', 'software development', 'fintech', 'saas',
    'enterprise software', 'cybersecurity', 'ai/ml', 'data analytics'
  ];

  const mediumValueIndustries = [
    'it services', 'information technology', 'consulting', 'digital marketing',
    'e-commerce', 'telecommunications'
  ];

  const industryLower = industry.toLowerCase();

  if (highValueIndustries.some(hvi => industryLower.includes(hvi))) {
    return 100;
  }

  if (mediumValueIndustries.some(mvi => industryLower.includes(mvi))) {
    return 70;
  }

  return 40;
};

const getBusinessTypeScore = (businessType: string): number => {
  if (businessType === 'B2B') return 100;
  if (businessType === 'B2B2C') return 80;
  if (businessType === 'B2C') return 50;
  return 30; // N/A or unknown
};

const getCategoryScore = (category: string): number => {
  const highValueKeywords = [
    'technology', 'software', 'healthcare', 'enterprise', 'automation',
    'cloud', 'security', 'analytics', 'ai', 'machine learning'
  ];

  const categoryLower = category.toLowerCase();
  const matches = highValueKeywords.filter(keyword => categoryLower.includes(keyword));

  // More matches = higher score
  if (matches.length >= 3) return 100;
  if (matches.length >= 2) return 80;
  if (matches.length >= 1) return 60;

  return 30;
};
