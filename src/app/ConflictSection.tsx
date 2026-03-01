"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ConflictBlock from "@/components/ConflictBlock";
import type { ConflictEvent } from "@/data/conflicts";

interface ConflictSectionProps {
  conflict: ConflictEvent;
}

export default function ConflictSection({ conflict }: ConflictSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.2, 0.72, 0.85, 1],
    [0.4, 0.88, 1, 1, 0.55, 0.18]
  );
  const scale = useTransform(scrollYProgress, [0, 0.18, 0.78, 1], [0.98, 1, 1, 0.97]);
  const y = useTransform(scrollYProgress, [0, 0.22], [32, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, scale, y }}>
      <ConflictBlock conflict={conflict} />
    </motion.div>
  );
}
