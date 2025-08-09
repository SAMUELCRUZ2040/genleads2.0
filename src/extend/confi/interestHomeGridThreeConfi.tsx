"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/utils/lib";

gsap.registerPlugin(ScrollTrigger);

export const InterestHomeGridThreeConfi = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${content.length * 400}`,
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const index = Math.floor(self.progress * content.length);
          setActiveCard(Math.min(index, content.length - 1));
        },
      });
    }, section);

    return () => ctx.revert();
  }, [content.length]);

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen max-w-7xl mx-auto flex items-center justify-center bg-white"
    >
      <div className="flex w-full justify-center space-x-10 p-10">
        {/* Textos */}
        <div className="flex items-start px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-black">
              {content[activeCard].title}
            </h2>
            <p className="text-lg mt-5 max-w-sm text-gray-700">
              {content[activeCard].description}
            </p>
          </div>
        </div>

        {/* Cuadro lateral */}
        <div
          style={{
            background: linearGradients[activeCard % linearGradients.length],
          }}
          className={cn(
            "h-60 w-80 overflow-hidden rounded-md hidden lg:block",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </div>
    </div>
  );
};
