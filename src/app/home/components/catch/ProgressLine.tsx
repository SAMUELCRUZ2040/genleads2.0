"use client"

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { TypewriterText } from "./TypewriterText";

interface ContentItem {
  title: string;
  word: string;
  checkText: string;
  description: string;
  image: string;
  checkList: { description: string }[];
}

interface ProgressLineProps {
  content: ContentItem[];
  activeIndex: number;
  completedChecks: Set<number>;
  isMobile?: boolean;
}

export const ProgressLine: React.FC<ProgressLineProps> = ({
  content,
  activeIndex,
  completedChecks,
  isMobile = false
}) => {
  const containerClasses = isMobile 
    ? "lg:hidden relative w-full mb-8 px-4"
    : "hidden lg:block relative w-full mt-8 px-4";
    
  const containerHeight = isMobile ? "h-20" : "h-24";
  const circleSize = isMobile ? "w-5 h-5 sm:w-6 sm:h-6" : "w-7 h-7";
  const checkSize = isMobile ? "w-2 h-2 sm:w-3 sm:h-3" : "w-4 h-4";
  const lineHeight = isMobile ? "h-[2px]" : "h-[3px]";
  const maxWidth = isMobile ? "max-w-md" : "max-w-2xl";
  const paddingX = isMobile ? "px-2" : "px-4";

  return (
    <div className={containerClasses}>
      <div className={`relative ${containerHeight} flex items-center justify-center`}>
        <div className={`flex items-center justify-between w-full ${maxWidth}`}>
          {content.map((item, index) => (
            <React.Fragment key={index}>
              {/* Círculo */}
              <div className={`flex flex-col items-center relative z-10 ${!isMobile ? 'pt-9' : ''}`}>
                <motion.div
                  className={`${circleSize} rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                    completedChecks.has(index)
                      ? 'bg-gradient-to-br from-primary to-purple-600 border-primary shadow-lg' 
                      : activeIndex === index
                      ? 'bg-white border-primary shadow-md'
                      : 'bg-white border-gray-300 shadow-sm'
                  }`}
                  animate={{
                    scale: activeIndex === index ? 1.3 : completedChecks.has(index) ? 1.1 : 1,
                    boxShadow: activeIndex === index 
                      ? isMobile
                        ? "0 8px 25px -5px rgba(124, 58, 237, 0.4), 0 0 0 4px rgba(124, 58, 237, 0.1)"
                        : "0 10px 30px -5px rgba(124, 58, 237, 0.4), 0 0 0 6px rgba(124, 58, 237, 0.1)"
                      : completedChecks.has(index)
                      ? isMobile
                        ? "0 6px 20px -3px rgba(124, 58, 237, 0.25)"
                        : "0 8px 25px -3px rgba(124, 58, 237, 0.25)"
                      : "0 2px 4px -1px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    animate={{
                      opacity: completedChecks.has(index) ? 1 : 0,
                      scale: completedChecks.has(index) ? 1 : 0,
                      rotate: completedChecks.has(index) ? 0 : -90
                    }}
                    transition={{ duration: 0.3, delay: completedChecks.has(index) ? 0.1 : 0 }}
                  >
                    <Check className={`${checkSize} text-white`} strokeWidth={3} />
                  </motion.div>
                </motion.div>
                
                {/* Texto con efecto typewriter */}
                <div className={`mt-6 ${isMobile ? 'h-4 sm:h-5 min-w-[60px] sm:min-w-[80px]' : 'h-6 min-w-[80px]'} flex items-center justify-center`}>
                  {completedChecks.has(index) && (
                    <TypewriterText 
                      text={item.checkText}
                      isActive={activeIndex === index}
                      delay={50}
                    />
                  )}
                </div>
              </div>
              
              {/* Línea de conexión entre círculos */}
              {index < content.length - 1 && (
                <div className={`flex-1 ${paddingX} relative flex items-center`}>
                  {/* Línea base */}
                  <div className={`w-full ${lineHeight} bg-gray-200 rounded-full relative overflow-hidden`}>
                    {/* Línea animada de progreso */}
                    <motion.div
                      className={`absolute left-0 top-0 h-full ${
                        isMobile 
                          ? 'bg-gradient-to-r from-primary to-purple-500'
                          : 'bg-gradient-to-r from-primary via-purple-500 to-purple-600'
                      } rounded-full`}
                      animate={{
                        width: completedChecks.has(index + 1) ? "100%" : "0%"
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut", delay: completedChecks.has(index + 1) ? 0.2 : 0 }}
                    />
                    
                    {/* Efecto de brillo que se mueve - solo desktop */}
                    {!isMobile && completedChecks.has(index + 1) && (
                      <motion.div
                        className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                        animate={{
                          x: [-32, 120]
                        }}
                        transition={{
                          duration: 1.2,
                          delay: 0.5,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </div>
                  
                  {/* Puntos decorativos animados */}
                  {completedChecks.has(index + 1) && (
                    <>
                      <motion.div
                        className={`absolute top-1/2 ${isMobile ? 'left-1/2' : 'left-1/3'} w-1 h-1 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2`}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.7] }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      />
                      {!isMobile && (
                        <motion.div
                          className="absolute top-1/2 left-2/3 w-1 h-1 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.6] }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                        />
                      )}
                    </>
                  )}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};