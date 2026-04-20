import React from 'react';

interface Brick3DProps {
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Brick3D: React.FC<Brick3DProps> = ({ color = '#3b82f6', size = 'md', className = '' }) => {
  const sizeMap = {
    sm: 'scale-[0.5]',
    md: 'scale-[0.8]',
    lg: 'scale-[1.2]',
  };

  return (
    <div className={`relative perspective-[1000px] ${sizeMap[size]} ${className}`}>
      <div className="relative w-32 h-16 transition-transform duration-700 preserve-3d rotate-x-[-20deg] rotate-y-[-30deg]">
        {/* Top Face */}
        <div 
          className="absolute inset-0 bg-opacity-90 flex items-center justify-center border-b-4 border-black/10"
          style={{ backgroundColor: color, transform: 'translateZ(32px)' }}
        >
          {/* Studs */}
          <div className="grid grid-cols-4 gap-2 p-2 w-full h-full">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.2)]" style={{ backgroundColor: color }}></div>
            ))}
          </div>
        </div>
        
        {/* Front Face */}
        <div 
          className="absolute inset-0 border-t-4 border-black/5"
          style={{ 
            backgroundColor: color, 
            filter: 'brightness(0.8)',
            height: '32px',
            transform: 'rotateX(-90deg) translateZ(0px) translateY(16px)' 
          }}
        ></div>

        {/* Right Face */}
        <div 
          className="absolute inset-0 border-l-4 border-black/5"
          style={{ 
            backgroundColor: color, 
            filter: 'brightness(0.6)',
            width: '32px',
            transform: 'rotateY(90deg) translateZ(116px)' 
          }}
        ></div>
      </div>
    </div>
  );
};
