/**
 * 全站文案与标签数据接口
 * 与 site.json 结构严格对应
 */

export interface SiteConfig {
  hero: {
    declaration: string;
  };
  timeline: {
    title: string;
    subtitle: string;
  };
  conflictLabels: {
    formerBelief: string;
    realityCrash: string;
    newNarrative: string;
    historicalAssumption: string;
  };
}
