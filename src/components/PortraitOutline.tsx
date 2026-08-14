import React from 'react';
import { PortfolioLanguageData } from '../data/portfolioData';

interface PortraitOutlineProps {
  label?: string;
  className?: string;
  height?: string;
  aspectRatio?: string;
  imageUrl?: string;
  text: PortfolioLanguageData['PORTRAIT_TEXT'];
}

export const PortraitOutline: React.FC<PortraitOutlineProps> = ({
  label,
  className = '',
  height = 'min-h-[280px]',
  aspectRatio = 'aspect-[3/4]',
  imageUrl = '/images/profile1.webp',
  text,
}) => {
  const resolvedLabel = label ?? text.defaultLabel;

  return (
    <div 
      className={`border-2 border-white/90 p-3 bg-black text-white flex flex-col items-center justify-between ${height} ${aspectRatio} relative shadow-xl backdrop-blur-sm group ${className}`}
      role="region"
      aria-label={`${text.imagePlaceholderAria}: ${resolvedLabel}`}
    >
      {/* Subtle corner accents */}
      <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-white/60 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-white/60 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 border-white/60 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-white/60 pointer-events-none" aria-hidden="true" />

      {/* Image container */}
      <div className="flex-1 w-full flex items-center justify-center overflow-hidden border border-white/20 bg-zinc-950">
        <img 
          src={imageUrl} 
          alt={resolvedLabel} 
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
          loading="lazy"
        />
      </div>

      {/* Caption Label */}
      <div className="w-full text-center border-t border-white/20 pt-2.5 mt-2.5">
        <p className="font-bold tracking-widest text-xs uppercase text-zinc-300">
          {resolvedLabel}
        </p>
      </div>
    </div>
  );
};
