import { useMemo } from 'react';
import { calculateLeadQuality } from '../utils/scoring';
import type { Lead, RawLead } from '../types/lead.types';

export const useLeadScoring = (rawLeads: RawLead[]): Lead[] => {
  return useMemo(() => {
    return rawLeads.map(lead => {
      const { quality, score } = calculateLeadQuality(lead);
      return {
        ...lead,
        leadQuality: quality,
        qualityScore: score
      };
    });
  }, [rawLeads]);
};

export const useLeadStats = (leads: Lead[]) => {
  return useMemo(() => {
    const highQualityLeads = leads.filter(l => l.leadQuality === 'high').length;
    const mediumQualityLeads = leads.filter(l => l.leadQuality === 'medium').length;
    const lowQualityLeads = leads.filter(l => l.leadQuality === 'low').length;

    return {
      total: leads.length,
      high: highQualityLeads,
      medium: mediumQualityLeads,
      low: lowQualityLeads,
      highPercentage: Math.round((highQualityLeads / leads.length) * 100),
      mediumPercentage: Math.round((mediumQualityLeads / leads.length) * 100),
      lowPercentage: Math.round((lowQualityLeads / leads.length) * 100),
      potentialSavings: Math.round((lowQualityLeads / leads.length) * 19 * 12)
    };
  }, [leads]);
};
