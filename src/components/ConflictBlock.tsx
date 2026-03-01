"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import siteData from "@/data/site.json";
import type { ConflictEvent } from "@/data/conflicts";
import type { SiteConfig } from "@/data/site";
import HistoricalChoice from "@/components/HistoricalChoice";

const site = siteData as SiteConfig;

interface ConflictBlockProps {
  conflict: ConflictEvent;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

interface GlossaryTextProps {
  text: string;
  glossary?: Record<string, string>;
}

function GlossaryText({ text, glossary }: GlossaryTextProps) {
  const safeGlossary = glossary ?? {};
  const terms = Object.keys(safeGlossary);
  if (!terms.length) return <>{text}</>;

  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "g");
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, index) => {
        const definition = safeGlossary[part];

        if (definition) {
          return (
            <span
              key={`${part}-${index}`}
              className="relative inline-block cursor-help underline decoration-dotted underline-offset-4 group"
            >
              {part}
              <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-56 -translate-x-1/2 rounded-md bg-zinc-900 px-3 py-2 text-xs leading-relaxed text-zinc-100 opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100">
                {definition}
              </span>
            </span>
          );
        }

        return <span key={`${part}-${index}`}>{part}</span>;
      })}
    </>
  );
}

export default function ConflictBlock({ conflict }: ConflictBlockProps) {
  const labels = site.conflictLabels;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl border-t border-zinc-200 pt-10">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="flex w-full items-baseline justify-between gap-4 text-left"
        >
          <div>
            <h2 className="text-2xl font-light tracking-tight text-zinc-800 md:text-3xl">
              {conflict.title}
            </h2>
            <p className="mt-1 text-sm text-zinc-500">{conflict.year}</p>
          </div>
          <span className="shrink-0 text-sm text-zinc-500">
            {isOpen ? "收起" : "展开"}
          </span>
        </button>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div
            className="rounded-lg p-6 md:p-8"
            style={{ backgroundColor: "var(--color-belief-bg)" }}
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
              <GlossaryText
                text={conflict.formerBelief}
                glossary={conflict.glossary}
              />
            </p>
          </div>

          <div
            className="rounded-lg border-l-4 p-6 md:p-8"
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
              <GlossaryText
                text={conflict.realityCrash}
                glossary={conflict.glossary}
              />
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-8">
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              {labels.newNarrative}
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-zinc-700">
              <GlossaryText
                text={conflict.newNarrative}
                glossary={conflict.glossary}
              />
            </p>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-10 overflow-hidden border-t border-zinc-200 pt-8"
            >
              <div className="space-y-8">
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-10"
                >
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                      技术核心与指标
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-700 md:text-base">
                      <GlossaryText
                        text={conflict.technicalCore ?? ""}
                        glossary={conflict.glossary}
                      />
                    </p>
                  </div>
                  <div className="rounded-md border border-dashed border-zinc-300 bg-zinc-50 px-4 py-3 text-sm leading-relaxed text-zinc-700">
                    <GlossaryText
                      text={conflict.metrics ?? ""}
                      glossary={conflict.glossary}
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  className="rounded-lg border-l-4 border-sky-500/80 bg-sky-950/80 px-5 py-4 text-sm leading-relaxed text-sky-50 md:px-6"
                >
                  <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200/90">
                    争议与反例
                  </div>
                  <p>
                    <GlossaryText
                      text={conflict.counterarguments ?? ""}
                      glossary={conflict.glossary}
                    />
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  className="pt-2"
                >
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                    {labels.historicalAssumption}
                  </h3>
                  <p className="mt-3 text-lg italic leading-relaxed text-zinc-600">
                    <GlossaryText
                      text={conflict.historicalAssumption ?? ""}
                      glossary={conflict.glossary}
                    />
                  </p>
                </motion.div>

                <HistoricalChoice
                  conflictTitle={conflict.title}
                  resultSummary={conflict.newNarrative}
                  impact={conflict.whyItMatters ?? ""}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
