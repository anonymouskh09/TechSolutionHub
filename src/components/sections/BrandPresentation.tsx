"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, Sparkles, Target } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/utils";

const highlights = [
  {
    icon: Sparkles,
    title: "AI-First Agency",
    text: "Automation, chatbots, and intelligent workflows built for scale.",
  },
  {
    icon: Globe2,
    title: "Global Delivery",
    text: "Serving clients across US, UK, UAE, Pakistan, and Europe.",
  },
  {
    icon: Target,
    title: "Results Driven",
    text: "From discovery to deployment — measurable outcomes every step.",
  },
];

export function BrandPresentation() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-muted py-12 md:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 text-center lg:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full border border-primary/30 bg-white px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase"
          >
            Company Presentation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-dark md:text-4xl"
          >
            Meet{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              TechSolutionHub
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
          >
            Premium international AI automation agency and software house —
            engineered to help modern businesses innovate, automate, and scale.
          </motion.p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Presentation slide — full brand lockup */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-brand opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-card md:p-12">
              <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
                <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                  Brand Identity
                </span>
                <span className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </span>
              </div>
              <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-slate-50 to-white px-6 py-10 md:min-h-[320px]">
                <Image
                  src="/logo/logo-full.jpg"
                  alt="TechSolutionHub — Innovate, Automate, Scale"
                  width={480}
                  height={280}
                  className="h-auto w-full max-w-md object-contain"
                  priority={false}
                />
              </div>
              <p className="mt-6 text-center text-xs font-medium tracking-[0.25em] text-muted-foreground uppercase">
                {siteConfig.tagline}
              </p>
            </div>
          </motion.div>

          {/* Presentation content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-border bg-white/80 p-6 backdrop-blur-sm shadow-card">
              <h3 className="mb-3 text-xl font-bold text-dark">Who We Are</h3>
              <p className="leading-relaxed text-muted-foreground">
                We combine AI automation, enterprise web development, and cloud
                infrastructure under one roof. Our team delivers production-ready
                systems — from Next.js platforms and Shopify stores to n8n
                workflows and SaaS products — for ambitious brands worldwide.
              </p>
            </div>

            <ul className="space-y-4">
              {highlights.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex gap-4 rounded-xl border border-border bg-white p-4 shadow-sm transition-shadow hover:shadow-card"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand">
                    <item.icon className="h-5 w-5 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <Button asChild size="lg">
              <Link href="/about">
                Explore Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
