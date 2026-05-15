import { useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-ignore - Vanta doesn't have TypeScript types, we'll ignore the type error
import NET from 'vanta/dist/vanta.net.min';

const parseCssColorToHexNumber = (cssColor: string) => {
  const color = cssColor.trim() || '#888888';
  const shortHex = /^#([0-9a-f]{3})$/i.exec(color);
  if (shortHex) {
    const [, value] = shortHex;
    return parseInt(value.split('').map((ch) => ch + ch).join(''), 16);
  }

  const longHex = /^#([0-9a-f]{6})$/i.exec(color);
  if (longHex) {
    return parseInt(longHex[1], 16);
  }

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return 0x888888;

  ctx.fillStyle = color;
  const resolved = ctx.fillStyle;
  const rgbMatch = /^rgba?\((\d+),\s*(\d+),\s*(\d+)/i.exec(resolved);
  if (rgbMatch) {
    const [, r, g, b] = rgbMatch;
    return (Number(r) << 16) | (Number(g) << 8) | Number(b);
  }

  return 0x888888;
};

const getThemeHighlightColor = () => {
  return getComputedStyle(document.documentElement).getPropertyValue('--theme-highlight-color') || '#ffffff';
};

export const VantaBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const initialColor = parseCssColorToHexNumber(getThemeHighlightColor());

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
      color: initialColor,
      backgroundColor: 0x0,
      points: isMobile ? 6 : 12,
      maxDistance: 16,
      spacing: 12,
    });

    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      if (!vantaRef.current) return;
      const newColor = parseCssColorToHexNumber(getThemeHighlightColor());
      if (typeof vantaRef.current.setOptions === 'function') {
        vantaRef.current.setOptions({ color: newColor });
      } else if (vantaRef.current.options) {
        vantaRef.current.options.color = newColor;
      }
    });

    observer.observe(root, { attributes: true, attributeFilter: ['style'] });

    // Cleanup on unmount
    return () => {
      observer.disconnect();
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
