"use client"

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";

const content = [
  {
    title: "Furniture brand,",
    word :"e-commerce",
    description: "Blockchain platform for buying and selling NFTs with seamless user experience and secure transactions",
    checkText: "Design",
    image: "/home/catch1.jpg",
    checkList : [
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
    ]
  },
  {
    title: "NFT Digital ",
    word : "Marketplace",
    description: "Blockchain platform for buying and selling NFTs with seamless user experience and secure transactions",
    checkText: "Innovation",
    image: "/home/catch2.jpg",
    checkList : [
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
    ]
  },
  {
    title: "Mobile ",
    word : "Banking App",
    description: "Blockchain platform for buying and selling NFTs with seamless user experience and secure transactions",
    checkText: "Experience",
    image: "/home/catch3.jpg",
    checkList : [
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
    ]
  },
  {
    title: "AI-Powered",
    word : "Dashboard",
    description: "Blockchain platform for buying and selling NFTs with seamless user experience and secure transactions",
    checkText: "Future",
    image: "/home/catch4.jpg",
    checkList : [
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
    ]
  },
];


// Componente para el efecto de máquina de escribir
const TypewriterText = ({ text, isActive, delay = 0 } : { text: string, isActive: boolean, delay?: number }) => {
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
      // Cuando se desactiva, resetear para la próxima activación
      setDisplayedText("");
      setCurrentIndex(0);
    }
  }, [currentIndex, text, isActive, delay]);

  return (
    <span className="text-sm font-medium text-primary">
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

export default function StickyScrollMinimal() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [completedChecks, setCompletedChecks] = useState(new Set());
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const newIndex = Math.min(Math.floor(latest * content.length), content.length - 1);
      setActiveIndex(newIndex);
      
      // Agregar checks completados basado en el progreso del scroll
      const newCompleted = new Set();
      for (let i = 0; i <= newIndex; i++) {
        newCompleted.add(i);
      }
      setCompletedChecks(newCompleted);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="min-h-screen relative">
      <div className="max-w-[99rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={containerRef} className="relative h-[400vh]">
          <div className="sticky top-0 h-screen flex items-center">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
                <span className="absolute top-0 left-0 w-[40rem] h-[40rem]  bg-gradient-radial from-purple-200/40 via-pink-100/30 to-transparent rounded-full locos"/>
                <span className="absolute top-0 left-0 w-[40rem] h-[40rem]  bg-gradient-radial from-purple-200/40 via-pink-100/30 to-transparent rounded-full locos2"/>
              {/* Text Content with Progress Bar */}
              <div className="relative">
                {/* Main Content */}
                <div className="relative h-96 mb-12">
                  {content.map((item, index) => (
                    <motion.div
                      key={index}
                      className="absolute inset-0 space-y-4"
                      animate={{
                        opacity: activeIndex === index ? 1 : 0,
                        y: activeIndex === index ? 0 : 20,
                        scale: activeIndex === index ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex gap-5">
                        <span>{item.title}</span>
                        <span className="text-primary">{item.word}</span>
                      </h2>
                      <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                        {item.description}
                      </p>
                      <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                        {item.description}
                      </p>
                        <div className="flex flex-col gap-5 ps-5">
                          {item.checkList.map((data, key) =>(
                            <div className="flex gap-5 items-center justify-start" key={key}>
                              <div className="h-[12px] w-[13px] bg-cover bg-no-repeat bg-center" style={{backgroundImage : "url(icons/checkSolidss.png)"}} />
                              <p className="text-md text-gray-600 max-w-md leading-relaxed">{data.description}</p>
                            </div>
                          ))}
                        </div>
                    </motion.div>

                  ))}
                </div>

                {/* Progress Line with Checkmarks */}
                <div className="relative max-w-md mt-24">
                  {/* Background line */}
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 transform -translate-y-1/2"></div>
                  
                  {/* Animated progress line */}
                  <motion.div
                    className="absolute top-1/2 left-0 h-px bg-primary transform -translate-y-1/2"
                    animate={{
                      width: completedChecks.size > 0 ? `${((completedChecks.size - 1) / (content.length - 1)) * 100}%` : "0%"
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />

                  {/* Checkmarks */}
                  <div className="relative flex justify-between items-center">
                    {content.map((item, index) => (
                      <div key={index} className="relative flex flex-col items-center">
                        {/* Checkmark Circle */}
                        <motion.div
                          className={`w-6 h-6 rounded-full border flex items-center justify-center z-10 transition-all duration-300 ${
                            completedChecks.has(index)
                              ? 'bg-primary border-primary shadow-md' 
                              : 'bg-white border-gray-300'
                          }`}
                          style={{backgroundImage : "url(public/home/lucia.webp)"}}
                          animate={{
                            scale: activeIndex === index ? 1.15 : completedChecks.has(index) ? 1.05 : 1,
                          }}
                          transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
                        >
                          <motion.div
                            animate={{
                              opacity: completedChecks.has(index) ? 1 : 0,
                              scale: completedChecks.has(index) ? 1 : 0,
                            }}
                            transition={{ duration: 0.2, delay: completedChecks.has(index) ? 0.1 : 0 }}
                          >
                            <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                          </motion.div>
                        </motion.div>
                        
                        {/* Text with typewriter effect */}
                        <div className="mt-2 h-5 flex items-center justify-center min-w-[100px]">
                          {completedChecks.has(index) && (
                            <TypewriterText 
                              text={item.checkText}
                              isActive={activeIndex === index}
                              delay={50}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual Content */}
              <div className="relative h-96 w-full">
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
                    <div className="w-full h-full shadow-2xl rounded-lg overflow-hidden">
                      <div
                        className="h-full w-full bg-cover bg-no-repeat bg-center"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}