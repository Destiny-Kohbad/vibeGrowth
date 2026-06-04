export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string; // Lucide icon name
  benefits: string[];
  metrics: string; // e.g. "Up to 3x Sales"
  averageProjectTime: string; // e.g. "5-7 business days"
  category: "development" | "marketing" | "design" | "automation";
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  results: string;
  image: string; // placeholder description or custom svg paths
  tech: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string; // initial avatar SVG / visual
  platform: string; // e.g. "Upwork Verified" or "Direct Client"
  stars: number;
}

export interface PlatformItem {
  name: string;
  iconName: string;
  category: "CMS" | "Marketing" | "Community";
  color: string; // Tailwinds colors or gradient hex values
  highlight: string;
}
