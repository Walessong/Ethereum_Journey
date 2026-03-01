/**
 * Vitalik 语录与思想流变数据接口
 * 与 vitalik_quotes.json 结构严格对应
 */

export interface VitalikQuote {
  id: string;
  year: string;
  quote: string;
  context: string;
  source?: string;
  sourceLink: string;
}
