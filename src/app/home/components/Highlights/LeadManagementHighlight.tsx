// components/Highlights/LeadManagementHighlight.tsx
"use client";
import React from "react";
import { Globe } from "@/content/globeHome";

export const LeadManagementHighlight = React.memo(() => {
  return (
    <div className="overflow-hidden !p-0 rounded-xl">
      <Globe className="w-full h-full" />
    </div>
  );
});

LeadManagementHighlight.displayName = 'LeadManagementHighlight';