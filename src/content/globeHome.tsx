"use client";

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
 
useEffect(() => {
  let phi = 0;
  if (!canvasRef.current) return;

  const canvas = canvasRef.current;

  const resize = () => {
    const { width, height } = canvas.getBoundingClientRect();
    createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: height * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6.5, // más brillo para mapa blanco
      baseColor: [0.9, 0.9, 0.9], // blanco casi puro
      markerColor: [0.9, 0.9, 0.9],
      glowColor: [0.784, 0.427, 0.741], // #C86DBD solo para el aura
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });
  };

  resize();
  window.addEventListener("resize", resize);

  return () => {
    window.removeEventListener("resize", resize);
  };
}, []);
 
  return (
    <canvas
      ref={canvasRef}
      style={{ width: 400, height: 400, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};