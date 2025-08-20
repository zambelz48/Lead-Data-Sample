import type { Lead } from '../types/lead.types';

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