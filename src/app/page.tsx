import HeroSection from "@/components/HeroSection";
import ConflictSection from "@/app/ConflictSection";
import Timeline from "@/components/Timeline";
import NarrativeFlow from "@/components/NarrativeFlow";
import Conclusion from "@/components/Conclusion";
import conflictsData from "@/data/conflicts.json";
import type { ConflictEvent } from "@/data/conflicts";

const conflicts = conflictsData as unknown as ConflictEvent[];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <NarrativeFlow />
      {conflicts.map((conflict) => (
        <ConflictSection key={conflict.id} conflict={conflict} />
      ))}
      <section className="px-6 pb-8 pt-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl text-sm leading-relaxed text-zinc-600 md:text-base">
          <p>
            在 Vitalik 的公开文章与演讲中，可以清晰看到四个阶段的轨迹：
            早期的极客理想主义，指向 The DAO 之后的治理现实；
            在 Rollup 与模块化架构中做出工程妥协；
            最终落在以安全与长期生存为优先的路线选择上。
          </p>
        </div>
      </section>
      <Timeline />
      <Conclusion />
    </main>
  );
}
