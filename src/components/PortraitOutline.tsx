import React from 'react';
import { User } from 'lucide-react';

interface PortraitOutlineProps {
  label?: string;
  className?: string;
  height?: string;
  aspectRatio?: string;
  imageUrl?: string;
}

export const PortraitOutline: React.FC<PortraitOutlineProps> = ({
  label = "PORTRAIT PLACEHOLDER",
  className = "",
  height = "min-h-[280px]",
  aspectRatio = "aspect-[3/4]",
  imageUrl = "/images/profile1.webp",
}) => {
  return (
    <div 
      className={`border-2 border-white p-4 flex flex-col items-center justify-between bg-black text-white ${height} ${aspectRatio} relative group ${className}`}
      role="region"
      aria-label={`Image placeholder: ${label}`}
    >
      {/* ASCII Corners */}
      <div className="absolute top-1 left-1 text-xs select-none text-gray-500" aria-hidden="true">+--</div>
      <div className="absolute top-1 right-1 text-xs select-none text-gray-500" aria-hidden="true">--+</div>
      <div className="absolute bottom-1 left-1 text-xs select-none text-gray-500" aria-hidden="true">+--</div>
      <div className="absolute bottom-1 right-1 text-xs select-none text-gray-500" aria-hidden="true">--+</div>

      <div className="w-full text-center border-b border-gray-700 pb-2 text-[10px] tracking-widest text-gray-400">
        // FRAME_BUFFER_ALLOCATED
      </div>

      {/* Image container - properly sized and cropped to fit the frame */}
      <div className="flex-1 w-full flex items-center justify-center overflow-hidden">
        <img 
          src={imageUrl || "/images/images/profile1.webp"} 
          alt={label} 
          className="w-full h-full object-cover" 
          loading="lazy"
        />
      </div>

      <div className="w-full text-center border-t border-gray-700 pt-2">
        <p className="font-bold tracking-widest text-sm uppercase text-gray-300">
          {label}
        </p>
      </div>

      <div className="w-full flex justify-between text-[10px] text-gray-500 border-t border-gray-700 pt-2 font-mono">
        <span>DIM: 600x800</span>
        <span>MODE: B&W</span>
      </div>
    </div>
  );
};
