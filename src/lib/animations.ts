/**
 * Framer Motion 通用动画变体配置
 * 用于「信仰褪色」与「新叙事浮现」的沉浸式滚动叙事效果
 */

export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
};

export const fadeOut = {
  initial: { opacity: 1 },
  animate: { opacity: 0 },
};
