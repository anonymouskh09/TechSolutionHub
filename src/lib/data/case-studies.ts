import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "modern-streetes-growth",
    title: "Modern Streetes: 98 PageSpeed & 2x Organic Traffic",
    excerpt:
      "How we rebuilt a property platform with Next.js and technical SEO for measurable growth.",
    client: "Modern Streetes",
    industry: "Real Estate",
    results: ["PageSpeed 98/100", "2x organic traffic", "40% faster load times"],
  },
  {
    slug: "ai-agentic-hub-automation",
    title: "AI Agentic Hub: Multi-Agent Workflow Platform",
    excerpt:
      "Building a production AI automation hub with real-time agents and n8n orchestration.",
    client: "AI Agentic Hub",
    industry: "AI / SaaS",
    results: ["10+ automated workflows", "24/7 agent uptime", "60% cost reduction"],
  },
  {
    slug: "zm-exports-international-seo",
    title: "ZM Exports: International B2B Lead Generation",
    excerpt:
      "Multi-region SEO and conversion-focused design for global export leads.",
    client: "ZM Exports",
    industry: "B2B / Export",
    results: ["3x qualified leads", "Multi-region SEO", "CRM integration"],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
