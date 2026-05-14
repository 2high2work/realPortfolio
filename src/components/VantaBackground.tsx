import { useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-ignore - Vanta doesn't have TypeScript types, we'll ignore the type error
import NET from 'vanta/dist/vanta.net.min';

export const VantaBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Vanta NET effect
    vantaRef.current = NET({
      el: containerRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
      color: 0x888888,
      backgroundColor: 0x0,
      points: 12,
      maxDistance: 16,
      spacing: 12,
    });

    // Cleanup on unmount
    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: -1 }}
    />
  );
};
