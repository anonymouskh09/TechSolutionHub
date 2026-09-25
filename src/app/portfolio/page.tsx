import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Portfolio: Web, AI & SaaS Projects | TechSolutionHub",
  "Browse our portfolio of Next.js websites, AI automation platforms, SaaS products and news portals built for clients. Start a project like these today.",
  "/portfolio"
);

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ]}
      />
      <PageHeader
        title="Web, AI & SaaS Project Portfolio"
        description="Websites, AI platforms, and SaaS products we have built for clients"
      />
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <PortfolioGrid />
        </div>
      </section>
      <CTABanner />
    </>
  );
}
