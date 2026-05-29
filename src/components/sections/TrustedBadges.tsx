"use client";

import { trustedTechnologies } from "@/lib/data/technologies";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function TrustedBadges() {
  const items = [...trustedTechnologies, ...trustedTechnologies];

  return (
    <SectionWrapper className="overflow-hidden border-y border-border bg-muted/30 py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="mb-8 text-center text-sm font-semibold tracking-wide text-muted-foreground uppercase">
          Trusted Technologies We Work With
        </h2>
        <div className="relative">
          <div className="flex animate-marquee gap-12 whitespace-nowrap">
            {items.map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="text-lg font-semibold text-dark/40 transition-colors hover:text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
