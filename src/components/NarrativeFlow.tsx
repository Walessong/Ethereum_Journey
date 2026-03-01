"use client";

import conflictsData from "@/data/conflicts.json";
import type { ConflictEvent } from "@/data/conflicts";

const conflicts = conflictsData as ConflictEvent[];

function getSummary(conflict: ConflictEvent) {
  return {
    id: conflict.id,
    title: conflict.title,
    belief: conflict.formerBelief,
    reality: conflict.realityCrash,
    narrative: conflict.newNarrative,
  };
}

export default function NarrativeFlow() {
  const items = conflicts.map(getSummary);

  return (
    <section className="px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl border-t border-zinc-200 pt-10">
        <header className="mb-8 md:mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
            信仰 / 现实 / 新叙事
          </p>
          <h2 className="mt-3 text-lg font-light tracking-tight text-zinc-900 md:text-xl">
            以太坊五大转折节点的叙事流向总览
          </h2>
        </header>

        <div className="hidden gap-4 md:grid md:grid-cols-[minmax(0,3fr)_minmax(0,3fr)_minmax(0,3fr)] md:items-stretch">
          <div className="space-y-3">
            <div className="rounded-md border border-zinc-200 bg-zinc-50 px-4 py-3">
              <p className="text-xs font-semibold tracking-[0.18em] text-zinc-500">
                当时的信仰
              </p>
            </div>
            {items.map((item) => (
              <a
                key={`${item.id}-belief`}
                href={`#${item.id}`}
                className="group block rounded-md border border-zinc-200 bg-zinc-50 px-4 py-3 transition-colors hover:border-zinc-900"
              >
                <p className="text-xs font-medium tracking-[0.16em] text-zinc-400">
                  {item.title}
                </p>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-700">
                  {item.belief}
                </p>
              </a>
            ))}
          </div>

          <div className="space-y-3">
            <div className="rounded-md border border-zinc-200 bg-zinc-900 px-4 py-3">
              <p className="text-xs font-semibold tracking-[0.18em] text-zinc-100">
                现实的限制
              </p>
            </div>
            {items.map((item) => (
              <a
                key={`${item.id}-reality`}
                href={`#${item.id}`}
                className="group block rounded-md border border-zinc-900 bg-zinc-900 px-4 py-3 transition-transform transition-colors hover:-translate-y-0.5 hover:border-zinc-100"
              >
                <p className="text-xs font-medium tracking-[0.16em] text-zinc-400">
                  {item.title}
                </p>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-100">
                  {item.reality}
                </p>
              </a>
            ))}
          </div>

          <div className="space-y-3">
            <div className="rounded-md border border-zinc-200 bg-emerald-50 px-4 py-3">
              <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700">
                新叙事浮现
              </p>
            </div>
            {items.map((item) => (
              <a
                key={`${item.id}-narrative`}
                href={`#${item.id}`}
                className="group block rounded-md border border-emerald-100 bg-emerald-50 px-4 py-3 transition-colors hover:border-emerald-700"
              >
                <p className="text-xs font-medium tracking-[0.16em] text-emerald-700/80">
                  {item.title}
                </p>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-emerald-900">
                  {item.narrative}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <div className="space-y-6">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block rounded-lg border border-zinc-200 bg-white px-4 py-4"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                  {item.title}
                </p>
                <div className="mt-3 space-y-2 text-xs leading-relaxed text-zinc-600">
                  <div className="border-l-2 border-zinc-200 pl-3">
                    <span className="font-semibold text-zinc-500">信仰：</span>
                    <span>{item.belief}</span>
                  </div>
                  <div className="border-l-2 border-zinc-300 pl-3">
                    <span className="font-semibold text-zinc-600">现实：</span>
                    <span>{item.reality}</span>
                  </div>
                  <div className="border-l-2 border-emerald-400 pl-3">
                    <span className="font-semibold text-emerald-700">
                      新叙事：
                    </span>
                    <span>{item.narrative}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

