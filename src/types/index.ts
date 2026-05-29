import type { LucideIcon } from "lucide-react";

export type ServiceIconName =
  | "Bot"
  | "MessageSquare"
  | "Phone"
  | "Globe"
  | "ShoppingBag"
  | "TrendingUp"
  | "GitBranch"
  | "Plug"
  | "Workflow"
  | "Cloud"
  | "Server"
  | "Layers";

export interface Service {
  slug: string;
  title: string;
  icon: ServiceIconName;
  description: string;
  features: string[];
  longDescription?: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  category: "All" | "AI" | "Web" | "Shopify" | "SaaS";
  image: string;
  description: string;
  technologies: string[];
  highlights: string[];
  liveUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Technology {
  name: string;
  category: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  excerpt: string;
  client: string;
  industry: string;
  results: string[];
}

export interface NavLink {
  href: string;
  label: string;
}

export type IconMap = Record<ServiceIconName, LucideIcon>;
