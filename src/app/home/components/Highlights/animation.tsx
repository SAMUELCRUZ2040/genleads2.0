// constants/animation.ts
export const ANIMATION_CONFIG = {
  duration: 0.2,
  ease: "easeOut"
} as const;

export const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: ANIMATION_CONFIG }
};

export const slideVariants = {
  left: {
    initial: { x: 20, rotate: -5 },
    hover: { x: 0, rotate: 0, transition: ANIMATION_CONFIG }
  },
  right: {
    initial: { x: -20, rotate: 5 },
    hover: { x: 0, rotate: 0, transition: ANIMATION_CONFIG }
  }
};

export const chatAnimationVariants = {
  message: {
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: ANIMATION_CONFIG }
  },
  reply: {
    initial: { x: 0 },
    animate: { x: -10, rotate: -5, transition: ANIMATION_CONFIG }
  }
};