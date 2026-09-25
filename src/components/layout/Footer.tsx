import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Mail, MessageCircle } from "lucide-react";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { services } from "@/lib/data/services";
import { siteConfig, cn } from "@/lib/utils";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/technologies", label: "Technologies" },
  { href: "/blog", label: "Blog" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const footerServices = services.slice(0, 8);

  return (
    <footer className="bg-dark text-white" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" showTagline className="mb-4" />
            <p className="mb-6 text-sm leading-relaxed text-white/70">
              Global software development and AI automation agency.
            </p>
            <SocialLinks
              iconClassName="border-white/20 text-white/70 hover:border-primary hover:bg-primary/20 hover:text-white"
            />
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold tracking-wide uppercase">Quick Links</h2>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold tracking-wide uppercase">Services</h2>
            <ul className="space-y-2">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold tracking-wide uppercase">Contact</h2>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  +92 312 8572868
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white",
                "transition-transform hover:scale-105"
              )}
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} TechSolutionHub. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
