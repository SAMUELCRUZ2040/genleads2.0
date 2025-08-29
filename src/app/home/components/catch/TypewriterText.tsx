"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  isActive: boolean;
  delay?: number;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  isActive, 
  delay = 0 
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }
      }, delay + currentIndex * 8);

      return () => clearTimeout(timer);
    } else {
      setDisplayedText("");
      setCurrentIndex(0);
    }
  }, [currentIndex, text, isActive, delay]);

  return (
    <span className="text-xs sm:text-sm font-medium text-primary">
      {displayedText}
      {isActive && currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="ml-0.5"
        >
          |
        </motion.span>
      )}
    </span>
  );
};