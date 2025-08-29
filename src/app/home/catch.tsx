"use client"

import React, { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import { ProgressLine } from "./components/catch/ProgressLine";
import { VisualContent } from "./components/catch/VisualContent";
import { ContentCard } from "./components/catch/ContentCard";

interface ContentItem {
  title: string;
  word: string;
  description: string;
  checkText: string;
  image: string;
  checkList: { description: string }[];
}

const content: ContentItem[] = [
  {
    title: "Furniture brand,",
    word: "e-commerce",
    description: "Blockchain platform for buying and selling NFTs with seamless user experience and secure transactions",
    checkText: "Design",
    image: "/home/catch1.jpg",
    checkList: [
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
    ]
  },
  {
    title: "NFT Digital ",
    word: "Marketplace",
    description: "Blockchain platform for buying and selling NFTs with seamless user experience and secure transactions",
    checkText: "Innovation",
    image: "/home/catch2.jpg",
    checkList: [
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
    ]
  },
  {
    title: "Mobile ",
    word: "Banking App",
    description: "Blockchain platform for buying and selling NFTs with seamless user experience and secure transactions",
    checkText: "Experience",
    image: "/home/catch3.jpg",
    checkList: [
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
    ]
  },
  {
    title: "AI-Powered",
    word: "Dashboard",
    description: "Blockchain platform for buying and selling NFTs with seamless user experience and secure transactions",
    checkText: "Future",
    image: "/home/catch4.jpg",
    checkList: [
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
      { description: "User-friendly interface with advanced " },
    ]
  },
];

export default function StickyScrollMinimal() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [completedChecks, setCompletedChecks] = useState(new Set<number>());
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const newIndex = Math.min(Math.floor(latest * content.length), content.length - 1);
      setActiveIndex(newIndex);
      
      const newCompleted = new Set<number>();
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
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">
              {/* Background gradients */}
              <span className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-gradient-radial from-purple-200/40 via-pink-100/30 to-transparent rounded-full locos"/>
              <span className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-gradient-radial from-purple-200/40 via-pink-100/30 to-transparent rounded-full locos2"/>
              
              {/* Text Content */}
              <div className="relative w-full">
                {/* Progress Line - Mobile */}
                <ProgressLine 
                  content={content}
                  activeIndex={activeIndex}
                  completedChecks={completedChecks}
                  isMobile={true}
                />

                {/* Main Content */}
                <ContentCard
                  content={content}
                  activeIndex={activeIndex}
                />

                {/* Progress Line - Desktop */}
                <ProgressLine 
                  content={content}
                  activeIndex={activeIndex}
                  completedChecks={completedChecks}
                  isMobile={false}
                />
              </div>

              {/* Visual Content */}
              <VisualContent 
                content={content}
                activeIndex={activeIndex}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}