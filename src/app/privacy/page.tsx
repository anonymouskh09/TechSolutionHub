import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Privacy Policy | TechSolutionHub",
  "TechSolutionHub privacy policy: how we collect, use and protect the information you share through our website and contact forms.",
  "/privacy"
);

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ]}
      />
      <PageHeader title="Privacy Policy" />
      <section className="mx-auto max-w-3xl px-4 py-12 leading-relaxed text-muted-foreground md:px-6 md:py-20">
        <p className="mb-4">
          TechSolutionHub respects your privacy. We collect information you
          provide through contact forms solely to respond to inquiries and deliver
          services. We do not sell personal data to third parties.
        </p>
        <p>
          For questions about this policy, contact us at techsolutionhub15@gmail.com.
        </p>
      </section>
    </>
  );
}
