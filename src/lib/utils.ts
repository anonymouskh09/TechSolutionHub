import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "TechSolutionHub",
  tagline: "INNOVATE • AUTOMATE • SCALE",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://techsolutionhub.com",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "techsolutionhub15@gmail.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "923128572868",
  whatsappUrl: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP ?? "923128572868"}`,
  calendly: "https://calendly.com/techsolutionhub",
  description:
    "Premium AI automation, chatbot systems, Next.js web development, Shopify, SEO, and cloud deployment services for modern businesses.",
  keywords: [
    "AI Automation",
    "Next.js Development",
    "AI Chatbots",
    "Web Development Pakistan",
    "SaaS Development",
    "Shopify Development",
    "SEO Agency",
    "n8n Automation",
    "GHL Setup",
  ],
};
