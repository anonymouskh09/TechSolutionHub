import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Terms of Service",
  "TechSolutionHub terms of service for website use and client engagements.",
  "/terms"
);

export default function TermsPage() {
  return (
    <>
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
