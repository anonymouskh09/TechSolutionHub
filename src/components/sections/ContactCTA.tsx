import Link from "next/link";
import { Calendar, Mail, MessageCircle } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { siteConfig } from "@/lib/utils";

const cards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "+92 312 8572868",
    href: siteConfig.whatsappUrl,
    external: true,
  },
  {
    icon: Mail,
    title: "Email",
    description: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Book a free consultation",
    href: siteConfig.calendly,
    external: true,
  },
];

export function ContactCTA() {
  return (
    <SectionWrapper className="bg-muted py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-dark md:text-4xl">
          Let&apos;s Build Something Amazing
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center rounded-2xl border border-border bg-white p-8 text-center shadow-card transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white transition-transform group-hover:scale-105">
                <card.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-dark">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
