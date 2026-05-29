import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Portfolio | TechSolutionHub Projects & Case Studies",
  "View TechSolutionHub portfolio projects including web development, AI platforms, e-commerce stores, news websites, and digital solutions.",
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
        title="Our Portfolio"
        description="Delivering results for clients worldwide"
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
