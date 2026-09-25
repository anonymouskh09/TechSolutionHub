import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Terms of Service | TechSolutionHub",
  "TechSolutionHub terms of service covering website use, project engagements, intellectual property and payments.",
  "/terms"
);

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ]}
      />
      <PageHeader title="Terms of Service" />
      <section className="mx-auto max-w-3xl px-4 py-12 leading-relaxed text-muted-foreground md:px-6 md:py-20">
        <p className="mb-4">
          By using the TechSolutionHub website and services, you agree to our
          standard terms for project engagement, intellectual property, and
          payment as outlined in individual proposals and contracts.
        </p>
        <p>
          For legal inquiries, contact techsolutionhub15@gmail.com.
        </p>
      </section>
    </>
  );
}
