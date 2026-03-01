"use client";

import { motion } from "framer-motion";
import siteData from "@/data/site.json";
import type { ConflictEvent } from "@/data/conflicts";
import type { SiteConfig } from "@/data/site";

const site = siteData as SiteConfig;

interface ConflictBlockProps {
  conflict: ConflictEvent;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export default function ConflictBlock({ conflict }: ConflictBlockProps) {
  const labels = site.conflictLabels;

  return (
    <motion.section
      className="min-h-screen px-6 py-24 md:px-12 lg:px-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-2xl font-light tracking-tight text-zinc-800 md:text-3xl">
          {conflict.title}
        </h2>
        <p className="mt-2 text-sm text-zinc-500">{conflict.year}</p>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={fadeInUp}
          className="rounded-lg p-8 md:p-10"
          style={{
            backgroundColor: "var(--color-belief-bg)",
          }}
        >
          <h3
            className="text-xs font-medium uppercase tracking-[0.2em]"
            style={{ color: "var(--color-belief-label)" }}
          >
            {labels.formerBelief}
          </h3>
          <p
            className="mt-4 text-lg leading-relaxed md:text-xl"
            style={{ color: "var(--color-belief-text)" }}
          >
            {conflict.formerBelief}
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="rounded-lg border-l-4 p-8 md:p-10"
          style={{
            backgroundColor: "var(--color-reality-bg)",
            borderLeftColor: "var(--color-reality-accent)",
          }}
        >
          <h3
            className="text-xs font-medium uppercase tracking-[0.2em]"
            style={{ color: "var(--color-reality-label)" }}
          >
            {labels.realityCrash}
          </h3>
          <p
            className="mt-4 text-lg font-medium leading-relaxed md:text-xl"
            style={{ color: "var(--color-reality-text)" }}
          >
            {conflict.realityCrash}
          </p>
        </motion.div>
      </div>

      <motion.div variants={fadeInUp} className="mt-16 space-y-10">
        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            {labels.newNarrative}
          </h3>
          <p className="mt-3 text-lg leading-relaxed text-zinc-700">
            {conflict.newNarrative}
          </p>
        </div>
        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            {labels.historicalAssumption}
          </h3>
          <p className="mt-3 text-lg italic leading-relaxed text-zinc-600">
            {conflict.historicalAssumption}
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
