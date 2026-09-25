import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getSiteUrl } from "@/lib/site-url";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "TechSolutionHub",
  tagline: "INNOVATE • AUTOMATE • SCALE",
  url: getSiteUrl(),
  gaId: process.env.NEXT_PUBLIC_GA_ID,
  email: process.env.NEXT_PUBLIC_EMAIL ?? "techsolutionhub15@gmail.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "923128572868",
  whatsappUrl: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP ?? "923128572868"}`,
  calendly: "https://calendly.com/techsolutionhub",
  social: {
    linkedin: "https://www.linkedin.com/company/tech-solutions-hub-0/",
    instagram:
      "https://www.instagram.com/tech_solutionhub?igsh=eTFxNTk3YW82b3E0",
    facebook: "https://www.facebook.com/share/1BLniAGA1V/",
    github: "https://github.com/anonymouskh09",
  },
  description:
    "Global software development and AI automation agency: AI chatbots, calling agents, web & mobile apps, custom software, UI/UX design, SEO and digital marketing.",
  /** Markets we serve — used for schema.org areaServed */
  areaServed: [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "United Arab Emirates",
    "Europe",
  ],
  keywords: [
    "software development agency",
    "AI automation agency",
    "custom software development company",
    "AI chatbot development",
    "AI voice calling agents",
    "web development company",
    "mobile app development",
    "UI/UX design services",
    "SEO services",
    "digital marketing services",
    "n8n automation",
    "GoHighLevel setup",
  ],
};
