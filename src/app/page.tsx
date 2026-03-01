import HeroSection from "@/components/HeroSection";
import ConflictSection from "@/app/ConflictSection";
import Timeline from "@/components/Timeline";
import NarrativeFlow from "@/components/NarrativeFlow";
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
      <Timeline />
    </main>
  );
}
