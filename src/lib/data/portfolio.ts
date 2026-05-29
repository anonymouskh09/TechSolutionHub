import type { PortfolioProject } from "@/types";

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "modern-streetes",
    title: "Modern Streetes",
    category: "Web",
    image: "/portfolio/modern-streetes.png",
    description:
      "Full-stack modern platform with advanced filtering and SEO optimization.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MySQL"],
    highlights: ["PageSpeed 98/100", "Mobile First", "SEO Optimized"],
    liveUrl: "https://modernstreetes.com",
  },
  {
    slug: "al-ameeraa",
    title: "Al-Ameeraa",
    category: "Web",
    image: "/portfolio/al-ameeraa.png",
    description:
      "Premium brand website with custom animations and conversion optimization.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    highlights: ["Premium Design", "Fast Loading", "High Conversion"],
    liveUrl: "https://al-ameeraa.shop",
  },
  {
    slug: "ai-agentic-hub",
    title: "AI Agentic Hub",
    category: "AI",
    image: "/portfolio/ai-agentic-hub.png",
    description:
      "AI automation platform with multi-agent workflows and real-time processing.",
    technologies: ["Next.js", "OpenAI API", "n8n", "Node.js"],
    highlights: ["Multi-Agent AI", "Real-time Processing", "Custom Workflows"],
    liveUrl: "https://aiagentichub.io",
  },
  {
    slug: "aurumnode",
    title: "AurumNode",
    category: "SaaS",
    image: "/portfolio/aurumnode.png",
    description:
      "SaaS infrastructure platform with cloud management and scaling tools.",
    technologies: ["Next.js", "Node.js", "Cloudflare", "Vercel"],
    highlights: ["99.9% Uptime", "Auto Scaling", "Cloud Native"],
    liveUrl: "https://aurumnode.com",
  },
  {
    slug: "47-news-hd",
    title: "47 News HD",
    category: "Web",
    image: "/portfolio/47-news-hd.png",
    description:
      "High-traffic news portal with live content delivery and CDN optimization.",
    technologies: ["Next.js", "PHP", "MySQL", "Cloudflare CDN"],
    highlights: ["100k+ Monthly Visitors", "Live Updates", "CDN Optimized"],
    liveUrl: "https://47newshd.tv",
  },
  {
    slug: "zm-exports",
    title: "ZM Exports",
    category: "Web",
    image: "/portfolio/zm-exports.png",
    description:
      "International B2B export company website with lead generation and multi-region.",
    technologies: ["Next.js", "Tailwind CSS", "API Integrations"],
    highlights: ["Lead Generation", "International SEO", "Multi-region"],
    liveUrl: "https://zmexports.online",
  },
];

export const portfolioFilters = ["All", "AI", "Web", "Shopify", "SaaS"] as const;

export function getPortfolioBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}
