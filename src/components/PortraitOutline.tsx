import React from 'react';
import { User } from 'lucide-react';

interface PortraitOutlineProps {
  label?: string;
  className?: string;
  height?: string;
  aspectRatio?: string;
}

export const PortraitOutline: React.FC<PortraitOutlineProps> = ({
  label = "PORTRAIT PLACEHOLDER",
  className = "",
  height = "min-h-[280px]",
  aspectRatio = "aspect-[3/4]"
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

      <div className="flex flex-col items-center justify-center my-auto p-4 text-center">
        <div className="border border-dashed border-white p-4 mb-3 group-hover:scale-110 transition-transform">
          <User size={36} aria-hidden="true" />
        </div>
        <p className="font-bold tracking-widest text-sm uppercase mb-1">
          {label}
        </p>
        <p className="text-[11px] text-gray-400 max-w-[200px] leading-relaxed">
          [ Leave this outline to put what you want here ]
        </p>
        <p className="text-[10px] bg-white text-black font-bold px-2 py-0.5 mt-3 uppercase tracking-tighter">
          INSERT &lt;IMG /&gt; HERE
        </p>
      </div>

      <div className="w-full flex justify-between text-[10px] text-gray-500 border-t border-gray-700 pt-2 font-mono">
        <span>DIM: 600x800</span>
        <span>MODE: B&W</span>
      </div>
    </div>
  );
};
