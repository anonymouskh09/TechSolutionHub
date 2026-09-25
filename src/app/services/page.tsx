import type { Metadata } from "next";
import { services } from "@/lib/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { PageHeader } from "@/components/shared/PageHeader";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { CTABanner } from "@/components/sections/CTABanner";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Software Development & AI Services | TechSolutionHub",
  "Explore our services: AI automation, chatbots, calling agents, web & mobile apps, custom software, UI/UX, SEO and digital marketing. Get a free quote.",
  "/services"
);

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <PageHeader
        title="Software Development, AI & Digital Services"
        description="End-to-end development, automation, design, and growth services for businesses worldwide"
      />
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
                headingLevel="h2"
              />
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
