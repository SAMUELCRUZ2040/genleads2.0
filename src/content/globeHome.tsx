"use client";

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export const GlobeHome = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;
    const devicePixelRatio = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;
    };

    resizeCanvas();

    const globe = createGlobe(canvas, {
      devicePixelRatio,
      width: canvas.width,
      height: canvas.height,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.8,
      mapSamples: 16000,
      mapBrightness: 6.5, // más brillo para mapa blanco
      baseColor: [0.9, 0.9, 0.9], // blanco casi puro
      markerColor: [0.9, 0.9, 0.9],
      glowColor: [0.4, 0.9, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
      },
    });

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      globe.destroy();
    };
  }, []);

  return (
    <div className={`w-full max-w-[600px] aspect-square ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};
