import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "ai-automation",
    title: "AI Automation",
    icon: "Bot",
    h1: "AI Automation Services for Growing Businesses",
    serviceType: "AI Automation",
    description:
      "Automate repetitive business processes with intelligent AI workflows that save time and reduce costs.",
    features: ["n8n Workflows", "Process Automation", "AI Decision Making", "API Triggers"],
    longDescription:
      "We design and deploy intelligent automation systems that eliminate manual work, connect your tools, and scale operations without adding headcount. From lead routing to document processing, our AI-powered workflows adapt to your business rules.",
    idealFor: [
      "Teams spending hours on repetitive data entry and follow-ups",
      "Sales teams that need instant lead routing and qualification",
      "Operations that rely on many disconnected tools",
    ],
    related: ["workflow-automation", "ai-chatbots", "ai-calling-agents", "ghl-pipeline"],
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots",
    icon: "MessageSquare",
    h1: "Custom AI Chatbot Development",
    serviceType: "AI Chatbot Development",
    description:
      "Custom AI chatbots trained on your business data for 24/7 customer support.",
    features: ["GPT-4 Powered", "Custom Training", "Multi-platform", "Analytics Dashboard"],
    longDescription:
      "Deploy conversational AI that understands your products, policies, and brand voice. Integrate across website, WhatsApp, and social channels with full analytics and human handoff when needed.",
    idealFor: [
      "Support teams answering the same questions every day",
      "E-commerce stores that need 24/7 pre-sales help",
      "Businesses capturing leads from website and WhatsApp traffic",
    ],
    related: ["ai-calling-agents", "ai-automation", "api-integrations", "web-development"],
  },
  {
    slug: "ai-calling-agents",
    title: "AI Calling Agents",
    icon: "Phone",
    h1: "AI Voice Calling Agent Development",
    serviceType: "AI Voice Agent Development",
    description:
      "Intelligent voice AI agents that handle calls, qualify leads, and book appointments.",
    features: ["Voice AI", "Lead Qualification", "Auto Scheduling", "CRM Integration"],
    longDescription:
      "Voice agents that sound natural, follow your scripts, and integrate with your CRM. Perfect for outbound sales, appointment setting, and customer follow-ups at scale.",
    idealFor: [
      "Clinics, agencies, and service businesses booking appointments by phone",
      "Sales teams following up on large lead lists",
      "Businesses that miss inbound calls outside office hours",
    ],
    related: ["ai-chatbots", "ai-automation", "ghl-pipeline", "workflow-automation"],
  },
  {
    slug: "web-development",
    title: "Next.js Web Development",
    icon: "Globe",
    h1: "Next.js Web Development Services",
    serviceType: "Web Development",
    description:
      "High-performance web applications built with Next.js and modern architecture.",
    features: ["Next.js", "TypeScript", "SEO Optimized", "Core Web Vitals"],
    longDescription:
      "We build blazing-fast, SEO-ready websites and web apps with Next.js, TypeScript, and Tailwind. Every project targets excellent Core Web Vitals and conversion-focused UX.",
    idealFor: [
      "Companies replacing a slow or outdated website",
      "Startups launching a marketing site or web app",
      "Brands that need a fast, search-friendly online presence",
    ],
    related: ["ui-ux-design", "seo-optimization", "custom-software-development", "cloud-deployment"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: "Smartphone",
    h1: "Mobile App Development Services",
    serviceType: "Mobile App Development",
    description:
      "Cross-platform iOS and Android apps with clean UX, secure APIs, and app store launch support.",
    features: ["iOS & Android", "React Native", "API & Backend", "App Store Launch"],
    longDescription:
      "We plan, design, and build mobile apps for iOS and Android from a single cross-platform codebase. Your app connects to secure APIs, works smoothly on every screen size, and ships with support for App Store and Google Play submission.",
    idealFor: [
      "Startups turning an idea into a first mobile product",
      "Businesses adding a customer-facing app to an existing platform",
      "Teams that need one codebase for both iOS and Android",
    ],
    related: ["ui-ux-design", "custom-software-development", "api-integrations", "saas-development"],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    icon: "Code",
    h1: "Custom Software Development Company",
    serviceType: "Custom Software Development",
    description:
      "Tailor-made business software, internal tools, and dashboards built around your workflows.",
    features: ["Business Analysis", "Custom Web Apps", "Admin Dashboards", "Legacy Modernization"],
    longDescription:
      "When off-the-shelf tools don't fit, we build software around the way your business works. From internal portals and admin dashboards to modernizing legacy systems, we deliver secure, maintainable applications with clear documentation and ongoing support.",
    idealFor: [
      "Businesses outgrowing spreadsheets and manual processes",
      "Companies with legacy systems that are hard to maintain",
      "Teams needing internal tools that match their exact workflow",
    ],
    related: ["saas-development", "web-development", "api-integrations", "ai-automation"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX & Graphic Design",
    icon: "Palette",
    h1: "UI/UX Design & Graphic Design Services",
    serviceType: "UI/UX Design",
    description:
      "User-centered UI/UX design, prototypes, and brand graphics that make products easy to use.",
    features: ["UX Research", "Wireframes & Prototypes", "UI Design Systems", "Brand & Graphic Design"],
    longDescription:
      "Good design turns visitors into customers. We map user journeys, create wireframes and interactive prototypes, and deliver polished interfaces and design systems for websites and apps — plus brand graphics, social media creatives, and marketing visuals that keep your identity consistent.",
    idealFor: [
      "Products with low conversion or confusing user flows",
      "Startups that need a design system before development",
      "Brands that need consistent graphics across web and social media",
    ],
    related: ["web-development", "mobile-app-development", "digital-marketing", "shopify-development"],
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    icon: "TrendingUp",
    h1: "SEO Services & Technical SEO",
    serviceType: "Search Engine Optimization",
    description:
      "Data-driven SEO strategies that rank your business on top of search results.",
    features: ["Technical SEO", "On-Page SEO", "Link Building", "SEO Audits"],
    longDescription:
      "Comprehensive SEO programs covering technical audits, content strategy, and authority building. We focus on measurable rankings and qualified organic traffic.",
    idealFor: [
      "Websites with good services but little organic traffic",
      "Businesses expanding into new countries and markets",
      "Sites that lost rankings after a redesign or migration",
    ],
    related: ["digital-marketing", "web-development", "shopify-development", "ui-ux-design"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: "Megaphone",
    h1: "Digital Marketing Services",
    serviceType: "Digital Marketing",
    description:
      "Performance-focused social media, paid ads, and content marketing that turn traffic into leads.",
    features: ["Social Media Marketing", "Google & Meta Ads", "Content Marketing", "Conversion Tracking"],
    longDescription:
      "We plan and run digital marketing campaigns that connect with your ideal customers. From social media content and paid advertising to email campaigns and analytics, every channel is tracked so you can see what drives leads and sales.",
    idealFor: [
      "Businesses launching a new product or entering a new market",
      "Brands that need consistent social media and ad campaigns",
      "Teams that want clear reporting on marketing ROI",
    ],
    related: ["seo-optimization", "ui-ux-design", "ghl-pipeline", "ai-automation"],
  },
  {
    slug: "shopify-development",
    title: "Shopify Development",
    icon: "ShoppingBag",
    h1: "Shopify Store Development Services",
    serviceType: "Shopify Development",
    description:
      "Custom Shopify stores with conversion-focused design and integrations.",
    features: ["Custom Theme", "App Integration", "Speed Optimized", "Payment Setup"],
    longDescription:
      "From theme customization to full storefront builds, we create Shopify experiences that load fast, convert visitors, and integrate with your marketing stack.",
    idealFor: [
      "Brands launching a new online store",
      "Stores with slow load times or low conversion rates",
      "Merchants connecting Shopify to CRM and marketing tools",
    ],
    related: ["ui-ux-design", "seo-optimization", "digital-marketing", "api-integrations"],
  },
  {
    slug: "ghl-pipeline",
    title: "GHL Pipeline Setup",
    icon: "GitBranch",
    h1: "GoHighLevel Pipeline Setup & Automation",
    serviceType: "CRM Setup and Automation",
    description:
      "Complete GoHighLevel CRM setup with automated sales pipelines and funnels.",
    features: ["CRM Setup", "Sales Funnels", "Email Sequences", "Lead Tracking"],
    longDescription:
      "End-to-end GoHighLevel implementation: pipelines, automations, calendars, and integrations so your sales team never drops a lead.",
    idealFor: [
      "Agencies and coaches moving their sales process into GoHighLevel",
      "Teams losing leads between forms, calls, and follow-ups",
      "Businesses that want automated email and SMS nurturing",
    ],
    related: ["ai-calling-agents", "workflow-automation", "ai-automation", "digital-marketing"],
  },
  {
    slug: "api-integrations",
    title: "API Integrations",
    icon: "Plug",
    h1: "API Integration Services",
    serviceType: "API Integration",
    description:
      "Seamless third-party API integrations connecting all your business tools.",
    features: ["REST APIs", "Webhooks", "OAuth", "Real-time Sync"],
    longDescription:
      "Connect CRMs, payment gateways, marketing tools, and custom backends with reliable, secure integrations built for production workloads.",
    idealFor: [
      "Businesses copying data manually between systems",
      "Products that need payments, CRM, or messaging integrations",
      "Teams replacing fragile scripts with reliable integrations",
    ],
    related: ["workflow-automation", "custom-software-development", "ai-automation", "saas-development"],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    icon: "Workflow",
    h1: "n8n, Make & Zapier Workflow Automation",
    serviceType: "Workflow Automation",
    description:
      "End-to-end business workflow automation using n8n, Make, and Zapier.",
    features: ["n8n", "Make/Integromat", "Zapier", "Custom Triggers"],
    longDescription:
      "We map your processes and automate them with the right platform—self-hosted n8n for complex flows or Zapier/Make for rapid deployment.",
    idealFor: [
      "Teams with repetitive tasks across email, CRM, and spreadsheets",
      "Businesses moving from Zapier to self-hosted n8n",
      "Operations that need reliable, monitored automations",
    ],
    related: ["ai-automation", "api-integrations", "ghl-pipeline", "ai-chatbots"],
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    icon: "Layers",
    h1: "SaaS Application Development",
    serviceType: "SaaS Development",
    description:
      "Full-stack SaaS platforms with auth, billing, dashboards, and scalable backend.",
    features: ["Multi-tenant", "Stripe Billing", "Auth System", "Admin Dashboard"],
    longDescription:
      "From MVP to scale: multi-tenant architecture, subscription billing, admin panels, and APIs designed for growth.",
    idealFor: [
      "Founders building a subscription software product",
      "Companies turning an internal tool into a SaaS offering",
      "SaaS teams that need to scale an existing MVP",
    ],
    related: ["custom-software-development", "cloud-deployment", "ui-ux-design", "api-integrations"],
  },
  {
    slug: "cloud-deployment",
    title: "Cloud Deployment",
    icon: "Cloud",
    h1: "Cloud Deployment Services on AWS, Vercel & Cloudflare",
    serviceType: "Cloud Deployment",
    description:
      "Scalable cloud infrastructure setup on AWS, Vercel, and Cloudflare.",
    features: ["AWS", "Vercel", "Cloudflare", "Auto Scaling"],
    longDescription:
      "Production-ready infrastructure with CI/CD, monitoring, and security best practices. Deploy globally with minimal latency and maximum uptime.",
    idealFor: [
      "Apps moving from shared hosting to modern cloud platforms",
      "Teams that need CI/CD and automated deployments",
      "Products serving users in multiple regions",
    ],
    related: ["server-migration", "saas-development", "web-development", "custom-software-development"],
  },
  {
    slug: "server-migration",
    title: "Server Migration",
    icon: "Server",
    h1: "Zero-Downtime Server Migration Services",
    serviceType: "Server Migration",
    description:
      "Zero-downtime server migrations and production deployment with full support.",
    features: ["Zero Downtime", "Data Migration", "SSL Setup", "Performance Tuning"],
    longDescription:
      "Move legacy apps to modern stacks without business disruption. We handle DNS, SSL, data integrity, and post-migration optimization.",
    idealFor: [
      "Businesses leaving outdated or unreliable hosting",
      "Teams consolidating servers to cut hosting costs",
      "Websites that must stay online during the move",
    ],
    related: ["cloud-deployment", "web-development", "seo-optimization", "custom-software-development"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
