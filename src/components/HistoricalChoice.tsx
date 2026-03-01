"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface HistoricalChoiceProps {
  conflictTitle: string;
  resultSummary: string;
  impact: string;
}

type ChoiceKey = "The DAO 事件" | "DeFi 爆发" | "The Merge" | "Shapella 与 Dencun" | "default";

interface ChoiceConfig {
  optionA: string;
  optionB: string;
  historyChoice: "A" | "B";
  supportRate: string;
  historyLabel: string;
}

const CHOICES: Record<ChoiceKey, ChoiceConfig> = {
  "The DAO 事件": {
    optionA: "回滚代码挽回资金",
    optionB: "坚持代码绝对不可篡改",
    historyChoice: "A",
    supportRate: "约 85% 赞成回滚，15% 选择留在 ETC",
    historyLabel: "现实中，以太坊选择通过硬分叉回滚 The DAO 资金，牺牲一次绝对不可篡改，换取整条链的继续存活。"
  },
  "DeFi 爆发": {
    optionA: "死守 Layer1 一体化扩容",
    optionB: "把扩容押注在 Rollup 与二层",
    historyChoice: "B",
    supportRate: "主流开发者与基础设施团队逐步转向二层路线",
    historyLabel: "现实中，以太坊没有无止境地抬高主链参数，而是把扩容筹码押在 Rollup 与二层之上。"
  },
  "The Merge": {
    optionA: "继续 PoW 挖矿与算力竞争",
    optionB: "切换到 PoS 质押与经济惩罚",
    historyChoice: "B",
    supportRate: "几乎全部主流客户端与生态力量押注 PoS 链",
    historyLabel: "现实中，以太坊完成了从 PoW 到 PoS 的合并，让能耗与安全叙事一并重写。"
  },
  "Shapella 与 Dencun": {
    optionA: "维持质押长期锁定，不急于开放提款",
    optionB: "开放提款并引入 Blob 模块化扩展",
    historyChoice: "B",
    supportRate: "绝大多数参与者接受「主链只负责安全」的模块化共识",
    historyLabel: "现实中，以太坊通过 Shapella 与 Dencun，把提款与 Blob 交易写入协议，明确主链负责安全与数据，而扩展交给二层。"
  },
  default: {
    optionA: "选择保守路线，维持现状",
    optionB: "选择激进路线，重写协议",
    historyChoice: "B",
    supportRate: "多数学术与工程力量站在变革一侧",
    historyLabel: "现实中，以太坊往往选择在风险与收益之间向前迈一步，用升级押注下一轮的不可能三角。"
  }
};

export default function HistoricalChoice({
  conflictTitle,
  resultSummary,
  impact
}: HistoricalChoiceProps) {
  const baseTitle = conflictTitle.split("：")[0] as ChoiceKey;
  const config = CHOICES[baseTitle] ?? CHOICES.default;

  const [choice, setChoice] = useState<"A" | "B" | null>(null);

  const onChoose = (value: "A" | "B") => {
    setChoice(value);
  };

  const showResult = choice !== null;
  const isHistoryA = config.historyChoice === "A";

  return (
    <section className="mt-10 rounded-lg border border-zinc-200 bg-white/70 px-4 py-5 md:px-6 md:py-6">
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
        如果你是当年的核心开发者，你会如何选择？
      </p>
      <div className="mt-4 flex flex-col gap-3 md:flex-row">
        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={() => onChoose("A")}
          className={`w-full rounded-full border px-4 py-2 text-sm font-medium transition-colors md:w-1/2 ${
            choice === "A"
              ? "border-zinc-900 bg-zinc-900 text-zinc-50"
              : "border-zinc-300 bg-white text-zinc-800 hover:border-zinc-900"
          }`}
        >
          {config.optionA}
        </motion.button>
        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={() => onChoose("B")}
          className={`w-full rounded-full border px-4 py-2 text-sm font-medium transition-colors md:w-1/2 ${
            choice === "B"
              ? "border-zinc-900 bg-zinc-900 text-zinc-50"
              : "border-zinc-300 bg-white text-zinc-800 hover:border-zinc-900"
          }`}
        >
          {config.optionB}
        </motion.button>
      </div>

      <AnimatePresence initial={false}>
        {showResult && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 8, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="mt-5 space-y-3 rounded-md bg-zinc-50 px-4 py-4 text-sm leading-relaxed text-zinc-700 md:px-5 md:py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                历史的真实选择
              </p>
              <p>{config.historyLabel}</p>
              <p className="mt-2 text-xs text-zinc-500">
                模拟当年社区支持率：{config.supportRate}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                历史落点
              </p>
              <p className="text-sm">
                {resultSummary}
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                {impact}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

