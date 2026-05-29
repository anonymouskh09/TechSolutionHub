"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/utils";

export function CTABanner() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-gradient-brand py-16 md:py-20">
      <motion.div
        className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        animate={{ y: [-15, 15, -15] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
      <motion.div
        className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        animate={{ y: [15, -15, 15] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Ready to Scale Your Business with AI?
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Book a free consultation and let&apos;s discuss your project
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="bg-white text-primary hover:bg-white/90"
          >
            <Link href="/contact">Book Free Consultation</Link>
          </Button>
          <Button asChild variant="outline">
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
