"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Bot, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const chips = [
  { icon: Bot, label: "AI Agents", value: "24/7" },
  { icon: TrendingUp, label: "Growth", value: "+120%" },
  { icon: Zap, label: "Automation", value: "10x" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-0 items-start overflow-hidden pt-[4.5rem] pb-8 md:min-h-screen md:items-center md:pb-0 md:pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
        <motion.div
          className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
          animate={{ y: [-20, 20, -20] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"
          animate={{ y: [20, -20, 20] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-6 md:gap-12 md:px-6 md:py-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary md:mb-6"
          >
            ⚡ Premium AI Automation Agency
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-4xl font-bold leading-tight tracking-tight text-dark md:text-5xl lg:text-6xl"
          >
            Building{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              AI-Powered
            </span>{" "}
            Digital Solutions for Modern Businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg"
          >
            We help businesses scale with AI automation, chatbot systems,
            high-performance web applications, workflow automation, and
            enterprise-grade development solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-8"
          >
            <Button asChild size="lg">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative hidden lg:block"
        >
          <div className="relative mx-auto max-w-md">
            <div className="absolute inset-0 rounded-3xl bg-gradient-brand opacity-20 blur-3xl" />
            <div className="relative rounded-2xl border border-border bg-white/80 p-6 shadow-card backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-dark">Automation Dashboard</span>
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                  Live
                </span>
              </div>
              <div className="space-y-3">
                {["Lead Qualification", "Email Sequence", "CRM Sync", "AI Response"].map(
                  (item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-muted/50 p-3"
                    >
                      <div className="h-2 w-2 rounded-full bg-gradient-brand" />
                      <span className="flex-1 text-sm text-dark">{item}</span>
                      <span className="text-xs text-muted-foreground">
                        {["Active", "Running", "Synced", "Online"][i]}
                      </span>
                    </div>
                  )
                )}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {["98%", "2.4s", "50+"].map((stat, i) => (
                  <div key={stat} className="rounded-lg bg-gradient-brand/10 p-3 text-center">
                    <div className="text-lg font-bold text-primary">{stat}</div>
                    <div className="text-xs text-muted-foreground">
                      {["Uptime", "Response", "Workflows"][i]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {chips.map((chip, i) => (
              <motion.div
                key={chip.label}
                className="absolute rounded-xl border border-border bg-white px-4 py-2 shadow-lg"
                style={{
                  top: i === 0 ? "-10%" : i === 1 ? "40%" : "75%",
                  left: i === 0 ? "-15%" : i === 1 ? "85%" : "-10%",
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 + i, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <chip.icon className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">{chip.label}</p>
                    <p className="text-sm font-bold text-dark">{chip.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted-foreground md:block"
        aria-label="Scroll to services"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.a>
    </section>
  );
}
