"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Workflow } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/button";

const features = [
  "Cut repetitive manual work with intelligent AI workflows",
  "Connect CRM, email, chat, and phone in one automation layer",
  "Scale operations without proportional headcount growth",
  "Real-time analytics and AI-driven decision support",
];

export function AIShowcase() {
  return (
    <SectionWrapper className="bg-muted py-12 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-dark md:text-4xl">
            The Future of Business is Automated
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            AI automation is no longer optional—it is the competitive edge.
            TechSolutionHub designs production-ready systems that integrate with
            your existing stack and deliver measurable ROI from day one.
          </p>
          <ul className="mt-8 space-y-4">
            {features.map((feature, i) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </span>
                <span className="text-dark/80">{feature}</span>
              </motion.li>
            ))}
          </ul>
          <Button asChild className="mt-8">
            <Link href="/contact">
              Start Automating
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-brand opacity-10 blur-2xl" />
          <div className="relative space-y-4">
            {[
              { title: "Trigger", desc: "New lead captured" },
              { title: "Process", desc: "AI qualifies & routes" },
              { title: "Action", desc: "CRM + email + call" },
              { title: "Result", desc: "Meeting booked" },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-card"
                style={{ marginLeft: `${i * 12}px` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  <Workflow className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase">
                    Step {i + 1}: {step.title}
                  </p>
                  <p className="font-medium text-dark">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
