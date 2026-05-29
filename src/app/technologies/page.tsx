import type { Metadata } from "next";
import { technologyGroups } from "@/lib/data/technologies";
import { TechBadge } from "@/components/ui/TechBadge";
import { PageHeader } from "@/components/shared/PageHeader";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Our Technology Stack",
  "Frontend, backend, AI, automation, ecommerce, deployment, and CMS technologies we use at TechSolutionHub.",
  "/technologies"
);

export default function TechnologiesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Technologies", path: "/technologies" },
        ]}
      />
      <PageHeader
        title="Our Technology Stack"
        description="Modern tools and platforms we use to build world-class solutions"
      />
      <div className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-4 md:px-6">
          {technologyGroups.map((group) => (
            <SectionWrapper key={group.category}>
              <h2 className="mb-6 text-2xl font-bold text-dark">{group.category}</h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {group.items.map((tech) => (
                  <TechBadge key={tech.name} name={tech.name} />
                ))}
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </>
  );
}
