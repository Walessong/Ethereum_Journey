"use client";

import { motion } from "framer-motion";

const TITLE = "以太坊是一部不断重写去中心化定义的历史";
const SUBTITLE =
  "2015 年上线时，Ethereum 被称为世界计算机。十年后，它更像一个全球结算层。这是工程现实对理想主义的长期重塑。";

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
        {TITLE}
      </motion.h1>
      <motion.p
        className="mt-6 max-w-2xl text-center text-sm leading-relaxed text-zinc-600 md:mt-8 md:text-base"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {SUBTITLE}
      </motion.p>
    </section>
  );
}
