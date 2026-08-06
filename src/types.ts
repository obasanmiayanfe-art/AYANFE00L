export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  iconName: string;
  badge?: string;
  startingPrice?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'WordPress' | 'WooCommerce' | 'Shopify' | 'Wix' | 'Squarespace' | 'All';
  platform: string;
  client: string;
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
  technology: string[];
  imageUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  review: string;
  verified: boolean;
  projectType: string;
}

export interface SkillItem {
  name: string;
  percentage: number;
  category: 'CMS & E-commerce' | 'Design & Page Builders' | 'Frontend Code' | 'Optimization & SEO';
  experienceYears: string;
  highlight: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface WhyChoosePoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface BrandLogo {
  name: string;
  symbol: string;
  category: string;
}

export interface EstimatorOption {
  id: string;
  name: string;
  price: number;
  timeframe: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  platform: string;
  budgetRange: string;
  timeline: string;
  message: string;
  servicesNeeded: string[];
}
