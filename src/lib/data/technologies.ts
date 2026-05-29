import type { Technology } from "@/types";

export const technologyGroups: { category: string; items: Technology[] }[] = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", category: "Frontend" },
      { name: "React.js", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Framer Motion", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", category: "Backend" },
      { name: "PHP", category: "Backend" },
      { name: "REST API", category: "Backend" },
      { name: "GraphQL", category: "Backend" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", category: "Database" },
      { name: "PostgreSQL", category: "Database" },
      { name: "MongoDB", category: "Database" },
    ],
  },
  {
    category: "AI & ML",
    items: [
      { name: "OpenAI", category: "AI & ML" },
      { name: "LangChain", category: "AI & ML" },
      { name: "Pinecone", category: "AI & ML" },
      { name: "Whisper", category: "AI & ML" },
    ],
  },
  {
    category: "Automation",
    items: [
      { name: "n8n", category: "Automation" },
      { name: "Make", category: "Automation" },
      { name: "Zapier", category: "Automation" },
      { name: "GHL", category: "Automation" },
    ],
  },
  {
    category: "Ecommerce",
    items: [
      { name: "Shopify", category: "Ecommerce" },
      { name: "WooCommerce", category: "Ecommerce" },
    ],
  },
  {
    category: "Deployment",
    items: [
      { name: "Vercel", category: "Deployment" },
      { name: "AWS", category: "Deployment" },
      { name: "Cloudflare", category: "Deployment" },
      { name: "Docker", category: "Deployment" },
    ],
  },
  {
    category: "CMS",
    items: [
      { name: "Sanity", category: "CMS" },
      { name: "Contentful", category: "CMS" },
      { name: "Strapi", category: "CMS" },
    ],
  },
];

export const trustedTechnologies = [
  "Next.js",
  "React",
  "Node.js",
  "OpenAI",
  "Shopify",
  "Vercel",
  "n8n",
  "GHL",
  "AWS",
  "Cloudflare",
  "Tailwind",
  "TypeScript",
];
