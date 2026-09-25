import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { PageHeader } from "@/components/shared/PageHeader";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ContactForm } from "@/components/contact/ContactForm";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata(
  "Contact Us | Get a Free Project Quote | TechSolutionHub",
  "Contact TechSolutionHub about AI automation, web or mobile apps, custom software, SEO or design. Send your project details; we reply within 24 hours.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <PageHeader
        title="Contact TechSolutionHub"
        description="Tell us about your project — we reply within 24 hours"
      />
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 md:px-6">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-dark">Send a Message</h2>
            <ContactForm />
          </div>
          <aside>
            <h2 className="mb-6 text-2xl font-bold text-dark">Contact Info</h2>
            <div className="space-y-6 rounded-2xl border border-border bg-muted p-8">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 transition-colors hover:text-primary"
              >
                <MessageCircle className="mt-1 h-5 w-5 text-[#25D366]" />
                <div>
                  <p className="font-semibold text-dark">WhatsApp</p>
                  <p className="text-muted-foreground">+92 312 8572868</p>
                </div>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-4 transition-colors hover:text-primary"
              >
                <Mail className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold text-dark">Email</p>
                  <p className="text-muted-foreground">{siteConfig.email}</p>
                </div>
              </a>
              <p className="text-sm text-muted-foreground">
                We reply within 24 hours on business days.
              </p>
            </div>
            <h3 className="mb-4 mt-8 font-bold text-dark">Follow Us</h3>
            <SocialLinks />
          </aside>
        </div>
      </section>
      <section className="border-t border-border bg-muted py-12 text-center">
        <p className="text-muted-foreground">
          Prefer to chat?{" "}
          <Link
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:underline"
          >
            Message us on WhatsApp →
          </Link>
        </p>
      </section>
    </>
  );
}
