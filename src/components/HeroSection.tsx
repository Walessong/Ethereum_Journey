"use client";

import { motion } from "framer-motion";
import siteData from "@/data/site.json";
import type { SiteConfig } from "@/data/site";

const site = siteData as SiteConfig;

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24"
      style={{
        fontFamily: "var(--font-noto-serif-sc), serif",
        backgroundColor: "#fafafa",
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}
    >
      <motion.h1
        className="max-w-4xl text-center text-3xl font-medium leading-relaxed tracking-tight text-zinc-900 md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {site.hero.declaration}
      </motion.h1>
    </section>
  );
}
