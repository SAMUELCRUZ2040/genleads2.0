// components/Highlights/CommunicationHighlight.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInVariants } from "./animation";

export const CommunicationHighlight = React.memo(() => {
  return (
    <motion.div
      variants={fadeInVariants}
      className="relative flex flex-1 w-full h-full min-h-[8rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2 items-center justify-center overflow-hidden"
    >
      <Image
        src="/home/different.avif"
        alt="Comunicación abierta con el equipo"
        fill
        className="object-cover w-full h-full absolute top-0 left-0"
        loading="lazy"
      />
    </motion.div>
  );
});

CommunicationHighlight.displayName = 'CommunicationHighlight';