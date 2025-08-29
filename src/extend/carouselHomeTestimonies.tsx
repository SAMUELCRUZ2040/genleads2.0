"use client";

import { globalClass } from "@/components/globalClass";
import { cn } from "@/utils/lib";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    specialitation: string;
    image: string;
    start: number;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "110s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
                "scroller  z-20 max-w-7xl  ",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => {
          return(
            <li
              className={cn(
                "relative w-[350px] max-w-full  px-8 py-6 md:w-[450px]  ",
                "shadow-[0_0_10px_3px_#c86dbd3d] shrink-0 rounded-2xl border",
                "flex flex-col gap-8 items-start justify-center"
              )}
              key={idx}
            >

              <span className="w-full flex justify-between">
                  <p>{item.name}</p>
                  <div className="h-7 w-7 bg-cover bg-no-repeat bg-center" style={{backgroundImage : `url(/icons/check.png)`}} />
              </span>
              <div className={cn(
                "flex flex-col gap-3",
                `${globalClass.p}`
              )}>

                <p>{item.specialitation}</p>
                <p className={`${globalClass.p}`}>{item.quote}</p>
              </div>
                <div className="start flex gap-5">
                  {[...Array(item.start)].map((_, i) => (
                    <div
                      key={i}
                      className="h-7 w-7 bg-cover bg-no-repeat bg-center"
                      style={{ backgroundImage: `url(/icons/start.png)` }}
                    />
                  ))}
                </div>
            </li>
          )
        })}
      </ul>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#fffafe] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#fffafe] to-transparent" />
    </div>
  );
};