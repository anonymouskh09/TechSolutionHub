"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const steps: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We analyze your business needs, goals, and technical requirements",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "UI/UX design with wireframes and prototypes for your approval",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Agile development with regular updates and milestone reviews",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description:
      "Production deployment with testing, monitoring, and full handover",
  },
];

export function ProcessTimeline() {
  return (
    <SectionWrapper className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-dark md:text-4xl">
          How We Work
        </h2>
        <div className="relative">
          <div className="absolute top-8 left-[12.5%] right-[12.5%] hidden h-0.5 bg-gradient-brand lg:block" />
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-white shadow-card">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand">
                      <Icon className="h-6 w-6 text-white" strokeWidth={2} aria-hidden />
                    </div>
                  </div>
                  <span className="mb-2 text-xs font-semibold tracking-wider text-primary uppercase">
                    Step {i + 1}
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-dark">{step.title}</h3>
                  <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
