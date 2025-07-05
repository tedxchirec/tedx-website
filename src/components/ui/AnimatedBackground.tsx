'use client';

import React from 'react';

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 flex items-center justify-center ${className}`}>
      <div className="relative">
        {/* Main animated sphere with morphing and glow effects */}
        <div className="w-96 h-96 md:w-[500px] md:h-[500px] bg-gradient-to-br from-red-900/30 via-red-700/20 to-red-600/10 animate-float animate-glow animate-morph"></div>
        
        {/* Secondary layer with different animation timing */}
        <div className="absolute inset-8 bg-gradient-to-tl from-red-800/20 to-transparent rounded-full animate-pulse [animation-delay:1s]"></div>
        
        {/* Floating particles with staggered animations */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-red-500/60 rounded-full animate-bounce [animation-delay:0.5s]"></div>
        <div className="absolute top-32 right-16 w-1 h-1 bg-white/40 rounded-full animate-ping [animation-delay:1s]"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-red-400/50 rounded-full animate-pulse [animation-delay:1.5s]"></div>
        <div className="absolute bottom-40 right-12 w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce [animation-delay:2s]"></div>
        <div className="absolute top-1/2 left-8 w-1 h-1 bg-red-300/40 rounded-full animate-ping [animation-delay:0.8s]"></div>
        <div className="absolute top-20 right-1/3 w-2 h-2 bg-white/20 rounded-full animate-pulse [animation-delay:2.3s]"></div>
        
        {/* Multiple rotating rings with different speeds */}
        <div className="absolute inset-0 rounded-full border border-red-500/20 animate-spin [animation-duration:20s]"></div>
        <div className="absolute inset-4 rounded-full border border-white/10 animate-spin [animation-duration:30s] [animation-direction:reverse]"></div>
        <div className="absolute inset-12 rounded-full border border-red-400/15 animate-spin [animation-duration:25s]"></div>
        
        {/* Orbiting elements */}
        <div className="absolute inset-0 animate-spin [animation-duration:40s]">
          <div className="absolute top-0 left-1/2 w-1 h-1 bg-red-500/50 rounded-full transform -translate-x-1/2"></div>
        </div>
        <div className="absolute inset-0 animate-spin [animation-duration:35s] [animation-direction:reverse]">
          <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-white/30 rounded-full transform -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
