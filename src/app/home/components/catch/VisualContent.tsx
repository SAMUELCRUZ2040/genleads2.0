"use client"

import React from "react";
import { motion } from "framer-motion";

interface ContentItem {
  title: string;
  word: string;
  description: string;
  image: string;
  checkList: { description: string }[];
}

interface VisualContentProps {
  content: ContentItem[];
  activeIndex: number;
}

export const VisualContent: React.FC<VisualContentProps> = ({ 
  content, 
  activeIndex 
}) => {
  return (
    <div className="relative h-64 sm:h-80 lg:h-96 w-full">
      {content.map((item, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 w-full h-full"
          animate={{
            opacity: activeIndex === index ? 1 : 0,
            scale: activeIndex === index ? 1 : 0.95,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="w-full h-full shadow-xl sm:shadow-2xl rounded-lg overflow-hidden">
            <div
              className="h-full w-full bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};