import HeroSection from "@/components/HeroSection";
import ConflictSection from "@/app/ConflictSection";
import conflictsData from "@/data/conflicts.json";
import type { ConflictEvent } from "@/data/conflicts";

const conflicts = conflictsData as ConflictEvent[];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      {conflicts.map((conflict) => (
        <ConflictSection key={conflict.id} conflict={conflict} />
      ))}
    </main>
  );
}
