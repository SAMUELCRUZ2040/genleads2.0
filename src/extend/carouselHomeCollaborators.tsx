"use client";

import { globalClass } from "@/components/globalClass";
import { cn } from "@/utils/lib";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCardsColaborators = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
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
        "scroller z-20 max-w-7xl",
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
                <figure
                className={cn(
                    "relative h-28 w-auto cursor-pointer p-5 flex justify-center items-center",
                )}
                >
                    <img
                        src={`/home/${item.name}.png`}
                        height={160}
                        width={160}
                        alt={item.name}
                        className="grayscale hover:grayscale-0 "
                    />
                </figure>
          )
        })}
      </ul>
<div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#fff1fd] to-transparent"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#fff1fd] to-transparent"></div>

    </div>
  );
};