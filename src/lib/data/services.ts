import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "ai-automation",
    title: "AI Automation",
    icon: "Bot",
    description:
      "Automate repetitive business processes with intelligent AI workflows that save time and reduce costs.",
    features: ["n8n Workflows", "Process Automation", "AI Decision Making", "API Triggers"],
    longDescription:
      "We design and deploy intelligent automation systems that eliminate manual work, connect your tools, and scale operations without adding headcount. From lead routing to document processing, our AI-powered workflows adapt to your business rules.",
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots",
    icon: "MessageSquare",
    description:
      "Custom AI chatbots trained on your business data for 24/7 customer support.",
    features: ["GPT-4 Powered", "Custom Training", "Multi-platform", "Analytics Dashboard"],
    longDescription:
      "Deploy conversational AI that understands your products, policies, and brand voice. Integrate across website, WhatsApp, and social channels with full analytics and human handoff when needed.",
  },
  {
    slug: "ai-calling-agents",
    title: "AI Calling Agents",
    icon: "Phone",
    description:
      "Intelligent voice AI agents that handle calls, qualify leads, and book appointments.",
    features: ["Voice AI", "Lead Qualification", "Auto Scheduling", "CRM Integration"],
    longDescription:
      "Voice agents that sound natural, follow your scripts, and integrate with your CRM. Perfect for outbound sales, appointment setting, and customer follow-ups at scale.",
  },
  {
    slug: "web-development",
    title: "Next.js Web Development",
    icon: "Globe",
    description:
      "High-performance web applications built with Next.js 15 and modern architecture.",
    features: ["Next.js 15", "TypeScript", "SEO Optimized", "Core Web Vitals"],
    longDescription:
      "We build blazing-fast, SEO-ready websites and web apps with Next.js, TypeScript, and Tailwind. Every project targets excellent Core Web Vitals and conversion-focused UX.",
  },
  {
    slug: "shopify-development",
    title: "Shopify Development",
    icon: "ShoppingBag",
    description:
      "Custom Shopify stores with conversion-focused design and integrations.",
    features: ["Custom Theme", "App Integration", "Speed Optimized", "Payment Setup"],
    longDescription:
      "From theme customization to full storefront builds, we create Shopify experiences that load fast, convert visitors, and integrate with your marketing stack.",
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    icon: "TrendingUp",
    description:
      "Data-driven SEO strategies that rank your business on top of search results.",
    features: ["Technical SEO", "On-Page SEO", "Link Building", "SEO Audits"],
    longDescription:
      "Comprehensive SEO programs covering technical audits, content strategy, and authority building. We focus on measurable rankings and qualified organic traffic.",
  },
  {
    slug: "ghl-pipeline",
    title: "GHL Pipeline Setup",
    icon: "GitBranch",
    description:
      "Complete GoHighLevel CRM setup with automated sales pipelines and funnels.",
    features: ["CRM Setup", "Sales Funnels", "Email Sequences", "Lead Tracking"],
    longDescription:
      "End-to-end GoHighLevel implementation: pipelines, automations, calendars, and integrations so your sales team never drops a lead.",
  },
  {
    slug: "api-integrations",
    title: "API Integrations",
    icon: "Plug",
    description:
      "Seamless third-party API integrations connecting all your business tools.",
    features: ["REST APIs", "Webhooks", "OAuth", "Real-time Sync"],
    longDescription:
      "Connect CRMs, payment gateways, marketing tools, and custom backends with reliable, secure integrations built for production workloads.",
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    icon: "Workflow",
    description:
      "End-to-end business workflow automation using n8n, Make, and Zapier.",
    features: ["n8n", "Make/Integromat", "Zapier", "Custom Triggers"],
    longDescription:
      "We map your processes and automate them with the right platform—self-hosted n8n for complex flows or Zapier/Make for rapid deployment.",
  },
  {
    slug: "cloud-deployment",
    title: "Cloud Deployment",
    icon: "Cloud",
    description:
      "Scalable cloud infrastructure setup on AWS, Vercel, and Cloudflare.",
    features: ["AWS", "Vercel", "Cloudflare", "Auto Scaling"],
    longDescription:
      "Production-ready infrastructure with CI/CD, monitoring, and security best practices. Deploy globally with minimal latency and maximum uptime.",
  },
  {
    slug: "server-migration",
    title: "Server Migration",
    icon: "Server",
    description:
      "Zero-downtime server migrations and production deployment with full support.",
    features: ["Zero Downtime", "Data Migration", "SSL Setup", "Performance Tuning"],
    longDescription:
      "Move legacy apps to modern stacks without business disruption. We handle DNS, SSL, data integrity, and post-migration optimization.",
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    icon: "Layers",
    description:
      "Full-stack SaaS platforms with auth, billing, dashboards, and scalable backend.",
    features: ["Multi-tenant", "Stripe Billing", "Auth System", "Admin Dashboard"],
    longDescription:
      "From MVP to scale: multi-tenant architecture, subscription billing, admin panels, and APIs designed for growth.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
