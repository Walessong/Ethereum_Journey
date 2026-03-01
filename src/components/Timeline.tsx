"use client";

import { useRef, useState, useLayoutEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import vitalikQuotesData from "@/data/vitalik_quotes.json";
import siteData from "@/data/site.json";
import type { VitalikQuote } from "@/data/vitalik_quotes";
import type { SiteConfig } from "@/data/site";

const site = siteData as SiteConfig;
const quotes = vitalikQuotesData as VitalikQuote[];
const SCROLL_MULTIPLIER = 2.5;

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (contentRef.current && typeof window !== "undefined") {
        const scrollWidth = contentRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setMaxScroll(Math.max(0, scrollWidth - viewportWidth));
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    const el = contentRef.current;
    if (el) ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [quotes.length]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScroll]);

  return (
    <section
      ref={sectionRef}
      style={{ height: `${SCROLL_MULTIPLIER * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden bg-stone-50">
        <div className="shrink-0 px-6 pt-16 md:px-12">
          <h2 className="text-xl font-light tracking-tight text-zinc-800 md:text-2xl">
            {site.timeline.title}
          </h2>
          <p className="mt-2 text-sm text-zinc-500">{site.timeline.subtitle}</p>
        </div>
        <div className="flex-1 overflow-hidden px-6 md:px-12">
          <motion.div
            ref={contentRef}
            style={{ x, fontFamily: "var(--font-noto-serif-sc), serif" }}
            className="flex h-full items-center gap-8 pb-24 pt-8"
          >
            {quotes.map((item) => (
              <article
                key={item.id}
                className="flex min-w-[280px] max-w-[320px] shrink-0 flex-col rounded-lg border border-stone-200/80 bg-white p-6 md:min-w-[340px] md:max-w-[380px] md:p-7"
              >
                <div className="flex items-baseline justify-between gap-4 text-xs text-stone-400">
                  <span className="tracking-widest">{item.year}</span>
                  {item.sourceLink && (
                    <a
                      href={item.sourceLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-zinc-300 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 transition-colors hover:border-zinc-900 hover:text-zinc-900"
                    >
                      原文
                      <span aria-hidden="true" className="text-[9px]">
                        ↗
                      </span>
                    </a>
                  )}
                </div>

                <div className="mt-4 flex flex-1 flex-col">
                  <div className="relative flex-1 border-l-2 border-zinc-200 pl-4">
                    <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-zinc-400" />
                    <blockquote className="text-lg font-medium leading-relaxed text-zinc-800 md:text-xl">
                      「{item.quote}」
                    </blockquote>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-stone-600">
                    {item.context}
                  </p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
