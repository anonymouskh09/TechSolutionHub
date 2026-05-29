import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-automation-guide-2026",
    title: "The Complete Guide to AI Automation for SMBs in 2026",
    excerpt:
      "Learn how small and medium businesses can implement AI workflows without enterprise budgets.",
    date: "2026-05-15",
    category: "AI",
    readTime: "8 min read",
  },
  {
    slug: "nextjs-15-performance-tips",
    title: "Next.js 15 Performance: 10 Tips for Core Web Vitals",
    excerpt:
      "Practical optimizations to hit 90+ Lighthouse scores on production Next.js apps.",
    date: "2026-04-22",
    category: "Development",
    readTime: "6 min read",
  },
  {
    slug: "ghl-pipeline-best-practices",
    title: "GoHighLevel Pipeline Setup: Best Practices",
    excerpt:
      "How to structure CRM pipelines and automations that convert leads into customers.",
    date: "2026-03-10",
    category: "Automation",
    readTime: "5 min read",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
