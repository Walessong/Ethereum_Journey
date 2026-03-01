import HeroSection from "@/components/HeroSection";
import ConflictBlock from "@/components/ConflictBlock";
import conflictsData from "@/data/conflicts.json";
import type { ConflictEvent } from "@/data/conflicts";

const conflicts = conflictsData as ConflictEvent[];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      {conflicts.slice(0, 1).map((conflict) => (
        <ConflictBlock key={conflict.id} conflict={conflict} />
      ))}
    </main>
  );
}
