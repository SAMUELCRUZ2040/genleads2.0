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

interface ContentCardProps {
  content: ContentItem[];
  activeIndex: number;
}

export const ContentCard: React.FC<ContentCardProps> = ({ 
  content, 
  activeIndex 
}) => {
  return (
    <div className="relative h-auto min-h-[300px] lg:h-96">
      {content.map((item, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 space-y-3 sm:space-y-4"
          animate={{
            opacity: activeIndex === index ? 1 : 0,
            y: activeIndex === index ? 0 : 20,
            scale: activeIndex === index ? 1 : 0.95,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Título apilado verticalmente */}
          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              {item.title}
            </h2>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
              {item.word}
            </h2>
          </div>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            {item.description}
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            {item.description}
          </p>
          
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 ps-3 sm:ps-5">
            {item.checkList.map((data, key) => (
              <div className="flex gap-3 sm:gap-4 lg:gap-5 items-center justify-start" key={key}>
                <div 
                  className="h-[10px] w-[10px] sm:h-[12px] sm:w-[13px] bg-cover bg-no-repeat bg-center flex-shrink-0" 
                  style={{backgroundImage : "url(icons/checkSolidss.png)"}} 
                />
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};