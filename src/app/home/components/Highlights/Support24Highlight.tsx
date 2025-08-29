// components/Highlights/Support24Highlight.tsx
"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import DifferentFirstRow from "@/content/differentFirstRow";
import DifferentSecondRow from "@/content/differentSecondRow";
import DifferentThreeRow from "@/content/differentThreeRow";
import { slideVariants } from "./animation";

export const Support24Highlight = React.memo(() => {
  const cardVariants = useMemo(() => slideVariants, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2 max-lg:flex-col max-lg:p-5"
    >
      <motion.div
        variants={cardVariants.left}
        className="h-full w-1/3 max-lg:w-full max-lg:h-[15rem] rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center relative"
      >
        <DifferentFirstRow />
      </motion.div>
      
      <motion.div className="h-full z-20 w-1/3 max-lg:w-full max-lg:h-[15rem] rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center relative">
        <DifferentSecondRow />
      </motion.div>
      
      <motion.div
        variants={cardVariants.right}
        className="h-full w-1/3 max-lg:w-full max-lg:h-[15rem] rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center relative"
      >
        <DifferentThreeRow />
      </motion.div>
    </motion.div>
  );
});

Support24Highlight.displayName = 'Support24Highlight';