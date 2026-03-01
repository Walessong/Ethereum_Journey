/**
 * 核心冲突模块组件
 * 包含滚动动画逻辑，用于呈现三大冲突的叙事结构
 */

import type { ConflictEvent } from "@/data/conflicts";

interface ConflictBlockProps {
  conflict: ConflictEvent;
}

export default function ConflictBlock({ conflict }: ConflictBlockProps) {
  return (
    <section className="px-6 py-24">
      <h2 className="text-2xl font-light tracking-tight md:text-3xl">
        {conflict.title}
      </h2>
      <p className="mt-2 text-sm text-zinc-500">{conflict.year}</p>
      <div className="mt-12 space-y-8">
        <div>
          <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-400">
            当时的信仰
          </h3>
          <p className="mt-2 text-lg">{conflict.formerBelief}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-400">
            现实的击碎
          </h3>
          <p className="mt-2 text-lg">{conflict.realityCrash}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-400">
            新叙事诞生
          </h3>
          <p className="mt-2 text-lg">{conflict.newNarrative}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-400">
            历史推演
          </h3>
          <p className="mt-2 text-lg italic">{conflict.historicalAssumption}</p>
        </div>
      </div>
    </section>
  );
}
