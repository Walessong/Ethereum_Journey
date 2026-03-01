/**
 * 冲突事件数据接口定义
 * 与 conflicts.json 结构严格对应
 */

export interface ConflictEvent {
  year: string;
  title: string;
  formerBelief: string;
  realityCrash: string;
  newNarrative: string;
  historicalAssumption?: string;
  technicalCore?: string;
  metrics?: string;
  counterarguments?: string;
  glossary?: Record<string, string>;
  representativeProtocols?: string[];
  whyItMatters?: string;
  technicalChanges?: string;
  controversy?: string;
  id?: string;
}
