export interface RawLead {
  id: string;
  company: string;
  industry: string;
  productCategory: string;
  businessType: string;
  isFavorite: boolean;
}

export interface Lead extends RawLead {
  leadQuality: 'high' | 'medium' | 'low';
  qualityScore: number;
}