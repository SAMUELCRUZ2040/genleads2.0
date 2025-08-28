// BentoGrid Components Optimizados
"use client";
import { globalClass } from "@/components/globalClass";
import { cn } from "@/utils/lib";
import React from "react";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
  role?: string;
}

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  id?: string;
}

export const BentoGrid = React.memo(({ 
  className, 
  children, 
  role = "region" 
}: BentoGridProps) => {
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

BentoGrid.displayName = 'BentoGrid';

export const BentoGridItem = React.memo(({
  className,
  title,
  description,
  header,
  id
}: BentoGridItemProps) => {
  return (
    <article
      id={id}
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-center h-[28rem] max-lg:h-auto space-y-4",
        "border border-neutral-200 bg-white p-4 transition-all duration-300 ease-in-out",
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
      
      <div className="transition-transform duration-300 ease-in-out group-hover/bento:translate-x-2">
        {title && (
          <h3 className={cn(
            "text-neutral-600 dark:text-neutral-200 font-semibold",
            globalClass.p,
            "mb-2 leading-tight"
          )}>
            {title}
          </h3>
        )}
        
        {description && (
          <p className={cn(
            "text-neutral-600 dark:text-neutral-300",
            globalClass.p,
            "text-sm leading-relaxed opacity-80"
          )}>
            {description}
          </p>
        )}
      </div>
    </article>
  );
});

BentoGridItem.displayName = 'BentoGridItem';