import type { PortfolioProject, Service } from "@/types";
import { getSiteUrl } from "@/lib/site-url";
import { siteConfig } from "@/lib/utils";

const siteUrl = getSiteUrl();

/** Stable @id so every page's schema points at the same Organization node */
export const ORGANIZATION_ID = `${siteUrl}/#organization`;
export const WEBSITE_ID = `${siteUrl}/#website`;

const areaServed = siteConfig.areaServed.map((name) =>
  name === "Europe"
    ? { "@type": "Place", name }
    : { "@type": "Country", name }
);

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: siteConfig.name,
  alternateName: "Tech Solution Hub",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/logo/logo.png`,
    width: 1024,
    height: 1024,
  },
  image: `${siteUrl}/logo/logo.png`,
  description: siteConfig.description,
  slogan: "Innovate • Automate • Scale",
  email: siteConfig.email,
  areaServed,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-312-8572868",
    contactType: "sales",
    email: siteConfig.email,
    url: `${siteUrl}/contact`,
    areaServed,
    availableLanguage: ["English", "Urdu"],
  },
  knowsAbout: [
    "AI Automation",
    "AI Chatbot Development",
    "AI Voice Agents",
    "Web Development",
    "Mobile App Development",
    "Custom Software Development",
    "UI/UX Design",
    "Search Engine Optimization",
    "Digital Marketing",
    "Workflow Automation",
    "GoHighLevel CRM",
    "SaaS Development",
    "Cloud Deployment",
  ],
  sameAs: [
    siteConfig.social.linkedin,
    siteConfig.social.instagram,
    siteConfig.social.facebook,
    siteConfig.social.github,
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: siteConfig.name,
  alternateName: "Tech Solution Hub",
  url: siteUrl,
  description: siteConfig.description,
  inLanguage: "en",
  publisher: { "@id": ORGANIZATION_ID },
};

export function serviceSchema(service: Service, description: string) {
  const url = `${siteUrl}/services/${service.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.h1 ?? service.title,
    serviceType: service.serviceType ?? service.title,
    description,
    url,
    provider: { "@id": ORGANIZATION_ID },
    areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} deliverables`,
      itemListElement: service.features.map((feature) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: feature },
      })),
    },
  };
}

export function portfolioSchema(project: PortfolioProject) {
  const url = `${siteUrl}/portfolio/${project.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#project`,
    name: project.title,
    headline: `${project.title} — ${project.category} project`,
    description: project.description,
    url,
    image: `${siteUrl}${project.image}`,
    creator: { "@id": ORGANIZATION_ID },
    keywords: project.technologies.join(", "),
    sameAs: project.liveUrl,
  };
}
