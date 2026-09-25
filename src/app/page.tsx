import { Hero } from "@/components/sections/Hero";
import { TrustedBadges } from "@/components/sections/TrustedBadges";
import { BrandPresentation } from "@/components/sections/BrandPresentation";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { AIShowcase } from "@/components/sections/AIShowcase";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { JsonLd } from "@/components/shared/JsonLd";
import { websiteSchema } from "@/lib/schema";

// Testimonials and StatsCounter are intentionally not rendered until real,
// verifiable client reviews and figures are available.
export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      <Hero />
      <TrustedBadges />
      <BrandPresentation />
      <ServicesOverview />
      <AIShowcase />
      <ProcessTimeline />
      <PortfolioPreview />
      <CTABanner />
      <FAQ />
      <ContactCTA />
    </>
  );
}
