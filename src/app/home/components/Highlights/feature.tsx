// types/feature.ts
import React from "react";

export interface FeatureHighlightItem {
  id: string;
  title: string;
  description: string;
  header: React.ReactNode;
  className: string;
}

export interface HighlightsGridProps {
  className?: string;
  children?: React.ReactNode;
  role?: string;
}

export interface HighlightsGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  id?: string;
}