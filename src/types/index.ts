export * from "./design";

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  external?: boolean;
  children?: NavItem[];
}

export interface RouteConfig {
  path: string;
  label: string;
  description: string;
  priority: number;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
}

export type PricingTierId = "starter" | "pro" | "enterprise";
export type BillingCycle = "monthly" | "annual";

export interface PricingTier {
  id: PricingTierId;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualMonthlyPrice: number;
  popular?: boolean;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "services" | "pricing" | "technical" | "security";
}

export type ServiceCategory =
  | "web-development"
  | "cybersecurity"
  | "maintenance"
  | "seo-marketing"
  | "ai-automation"
  | "saas"
  | "cloud"
  | "cloud-devops"
  | "mobile-apps"
  | "ui-ux-design";

export interface ServiceCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  slug: string;
  badge?: string;
}

export interface TechStackItem {
  name: string;
  category: "frontend" | "backend" | "ai" | "devops" | "security";
  iconName: string;
  description: string;
  proficiencyLevel?: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface PortfolioCaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  imageUrl: string;
  slug: string;
}

export interface ContactFormData {
  fullName: string;
  companyName?: string;
  emailAddress: string;
  phoneNumber?: string;
  subject: string;
  message: string;
  contactMethod?: "email" | "phone";
}

export interface BookDemoFormData {
  fullName: string;
  companyName?: string;
  emailAddress: string;
  phoneNumber?: string;
  country?: string;
  projectTypes: string[];
  projectDescription?: string;
  budgetRange?: string;
  timeline?: string;
  meetingPreference?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string>;
  timestamp: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
  email: string;
  twitter: string;
}

export type AnimationVariant =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInDown"
  | "slideInLeft"
  | "slideInRight"
  | "scaleIn"
  | "stagger";

export interface PageSeoConfig {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  noIndex?: boolean;
  keywords?: string[];
}
