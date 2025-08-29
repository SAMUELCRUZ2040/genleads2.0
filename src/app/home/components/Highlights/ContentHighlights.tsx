// components/ContentHighlights.tsx
"use client";
import React, { useMemo } from "react";
import { cn } from "@/utils/lib";
import { HIGHLIGHTS_ITEMS } from "./highlights";
import { HighlightsGrid, HighlightsGridItem } from "./HighlightsGrid ";

export function ContentHighlights() {
  const memoizedItems = useMemo(() => HIGHLIGHTS_ITEMS, []);

  return (
    <HighlightsGrid className="max-w-[85rem] mx-auto lg:auto-rows-[20rem] gap-y-[7.5rem] justify-center items-center">
      {memoizedItems.map((item) => (
        <HighlightsGridItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
        />
      ))}
    </HighlightsGrid>
  );
}