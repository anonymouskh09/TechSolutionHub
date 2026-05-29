import { Hero } from "@/components/sections/Hero";
import { TrustedBadges } from "@/components/sections/TrustedBadges";
import { BrandPresentation } from "@/components/sections/BrandPresentation";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { AIShowcase } from "@/components/sections/AIShowcase";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBadges />
      <BrandPresentation />
      <ServicesOverview />
      <AIShowcase />
      <ProcessTimeline />
      <PortfolioPreview />
      <Testimonials />
      <StatsCounter />
      <CTABanner />
      <FAQ />
      <ContactCTA />
    </>
  );
}
