1. 技术栈选择

--------

* **前端框架**：Next.js (App Router) + React + TypeScript。这套组合在 AI 编程环境下的生成质量最高，并且天生支持出色的 SEO 和页面加载性能。

* **样式方案**：Tailwind CSS。非常适合 AI 快速生成复杂的极简学术风排版，且修改成本极低。

* **动画与交互**：Framer Motion。用于实现“旧信仰破碎、新叙事浮现”的沉浸式滚动叙事 (Scrollytelling) 效果。

* **数据存储**：本地 JSON 或 MDX 文件。无需搭建后端数据库，将带有强烈观点的文本内容与前端组件彻底解耦，方便后续随时修正“史观”。

* **部署方案**：Vercel。开箱即用，代码提交即可自动发布。
2. 项目目录结构

---------

建议采用以下扁平且语义化的结构，降低 AI 理解上下文的认知负担：

Plaintext
    src/
      app/                 * 页面路由入口
        page.tsx           * 网站主页 (单页应用入口)
        layout.tsx         * 全局布局与字体配置
      components/          * 可复用组件库
        HeroSection.tsx    * 首屏大字报宣言组件
        ConflictBlock.tsx  * 核心冲突模块 (包含滚动动画逻辑)
        Timeline.tsx       * Vitalik 思想流变时间轴组件
      data/                * 核心叙事文本
        conflicts.json     * 三大冲突的具体文案配置
        vitalik_quotes.json* 语录与思想流变数据
      lib/                 * 辅助工具
        animations.ts      * Framer Motion 的通用动画变体配置

3. 数据模型设计

---------

为了让 AI 准确渲染冲突模块，我们需要定义严格的数据接口 (TypeScript Interface)。以 `conflicts.json` 为例，其数据模型如下：

TypeScript
    export interface ConflictEvent {
      id: string;
      year: string;
      title: string;          * 冲突名称，如 "The DAO 事件"
      formerBelief: string;   * 当时的信仰
      realityCrash: string;   * 现实的击碎
      newNarrative: string;   * 新叙事诞生
      historicalAssumption: string; * 历史推演
    }

4. 关键技术点与挑战

-----------

* **内容与逻辑解耦**：所有的文本必须存放在 `src/data/` 目录下。要求 AI 生成组件时，必须通过 `import` 读取这些数据，绝对禁止将大段文本硬编码在 React 组件内部。

* **滚动视差与性能控制**：在实现沉浸式滚动叙事时，利用 Framer Motion 的 `useScroll` 和 `useTransform` 钩子。要求 AI 优化滚动事件的监听，避免因频繁重绘导致页面卡顿。

* **视觉对比的实现**：在定义 Tailwind 主题时，需明确设置代表“信仰”的柔和色调与代表“现实”的锐利色调，供 `ConflictBlock` 组件在不同滚动深度时进行颜色过渡。
