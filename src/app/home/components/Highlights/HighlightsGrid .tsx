// components/ui/HighlightsGrid.tsx
"use client";
import { cn } from "@/utils/lib";
import React from "react";
import { HighlightsGridProps, HighlightsGridItemProps } from "./feature";
import { globalClass } from "@/components/globalClass";

export const HighlightsGrid = React.memo(({ 
  className, 
  children, 
  role = "region" 
}: HighlightsGridProps) => {
  return (
    <section
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 gap-y-28 max-lg:gap-y-4 lg:auto-rows-[18rem] lg:grid-cols-3",
        className,
      )}
      role={role}
      aria-label="Servicios y características principales"
    >
      {children}
    </section>
  );
});

HighlightsGrid.displayName = 'HighlightsGrid';

export const HighlightsGridItem = React.memo(({
  className,
  title,
  description,
  header,
  id
}: HighlightsGridItemProps) => {
  return (
    <article
      id={id}
      className={cn(
        "group/highlight shadow-input row-span-1 flex flex-col justify-center h-[26rem] max-lg:h-auto space-y-4",
        "border border-neutral-200 bg-[#fffdfde3] p-4 transition-all duration-300 ease-in-out",
        "dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        "shadow-[0_0_10px_3px_#c86dbd3d] rounded-3xl",
        "hover:shadow-[0_0_15px_5px_#c86dbd4d] hover:scale-[1.02]",
        "focus-within:ring-2 focus-within:ring-primary/50",
        className,
      )}
      role="article"
      tabIndex={0}
    >
      {header && (
        <div className="flex-1 overflow-hidden rounded-xl" role="img" aria-hidden="true">
          {header}
        </div>
      )}
      
      <div className="transition-transform duration-300 ease-in-out group-hover/highlight:translate-x-2">
        {title && (
          <h3 className={cn(
            "text-neutral-600 dark:text-neutral-200 font-semibold",
            globalClass.h5,
            "mb-2 leading-tight"
          )}>
            {title}
          </h3>
        )}
        
        {description && (
          <p className={cn(
            globalClass.pSmall,
          )}>
            {description}
          </p>
        )}
      </div>
    </article>
  );
});

HighlightsGridItem.displayName = 'HighlightsGridItem';