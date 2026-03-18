export const transition = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const fadeIn = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition,
};

export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition,
};

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.06 } },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
};
