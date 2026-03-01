"use client";

import { motion } from "framer-motion";
import type { ConflictEvent } from "@/data/conflicts";

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
  return (
    <motion.section
      className="min-h-screen px-6 py-24 md:px-12 lg:px-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      {/* 标题区 */}
      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-2xl font-light tracking-tight text-zinc-800 md:text-3xl">
          {conflict.title}
        </h2>
        <p className="mt-2 text-sm text-zinc-500">{conflict.year}</p>
      </motion.div>

      {/* 左右分栏：信仰 vs 现实 */}
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* 左栏：当时的信仰 - 柔和色调 */}
        <motion.div
          variants={fadeInUp}
          className="rounded-lg bg-stone-100/80 p-8 md:p-10"
        >
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
            当时的信仰
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-stone-600 md:text-xl">
            {conflict.formerBelief}
          </p>
        </motion.div>

        {/* 右栏：现实的击碎 - 锐利醒目 */}
        <motion.div
          variants={fadeInUp}
          className="rounded-lg border-l-4 border-red-600/90 bg-zinc-900 p-8 md:p-10"
        >
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-red-400/90">
            现实的击碎
          </h3>
          <p className="mt-4 text-lg font-medium leading-relaxed text-zinc-100 md:text-xl">
            {conflict.realityCrash}
          </p>
        </motion.div>
      </div>

      {/* 下方：新叙事与历史推演 */}
      <motion.div variants={fadeInUp} className="mt-16 space-y-10">
        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            新叙事诞生
          </h3>
          <p className="mt-3 text-lg leading-relaxed text-zinc-700">
            {conflict.newNarrative}
          </p>
        </div>
        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            历史推演
          </h3>
          <p className="mt-3 text-lg italic leading-relaxed text-zinc-600">
            {conflict.historicalAssumption}
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
