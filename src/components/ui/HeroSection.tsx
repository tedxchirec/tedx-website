'use client';

import React from 'react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Fail Forward",
  subtitle = "Ideas that challenge our perception of reality.",
  ctaText = "Book Now",
  onCtaClick,
  className = ''
}) => {
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      // Default behavior - scroll to booking section or external link
      console.log('Book Now clicked');
    }
  };

  return (
    <div className={`relative z-10 flex flex-col items-center justify-center h-full px-6 text-center ${className}`}>
      {/* Subtle Abstract Shapes on the sides */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left side shapes */}
        <div className="absolute left-4 md:left-10 top-1/4 w-20 md:w-32 h-20 md:h-32 bg-red-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute left-8 md:left-20 top-1/2 w-10 md:w-16 h-10 md:h-16 bg-white/3 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute left-2 md:left-5 bottom-1/3 w-14 md:w-24 h-14 md:h-24 bg-red-400/8 rounded-full blur-lg"></div>

        {/* Right side shapes */}
        <div className="absolute right-4 md:right-10 top-1/3 w-16 md:w-28 h-16 md:h-28 bg-red-500/6 rounded-full blur-xl animate-pulse [animation-delay:1s]"></div>
        <div className="absolute right-8 md:right-16 bottom-1/4 w-12 md:w-20 h-12 md:h-20 bg-white/4 rounded-lg rotate-12 animate-float [animation-delay:2s]"></div>
        <div className="absolute right-2 md:right-8 top-2/3 w-8 md:w-12 h-8 md:h-12 bg-red-300/5 rounded-full blur-md"></div>

        {/* Top shapes */}
        <div className="absolute top-4 md:top-10 left-1/3 w-4 md:w-6 h-4 md:h-6 bg-red-500/10 rounded-full animate-ping [animation-delay:3s]"></div>
        <div className="absolute top-8 md:top-16 right-1/3 w-3 md:w-4 h-3 md:h-4 bg-white/6 rounded-full animate-bounce [animation-delay:1.5s]"></div>

        {/* Bottom shapes */}
        <div className="absolute bottom-6 md:bottom-12 left-1/4 w-5 md:w-8 h-5 md:h-8 bg-red-400/7 rounded-lg rotate-45 animate-pulse [animation-delay:2.5s]"></div>
        <div className="absolute bottom-10 md:bottom-20 right-1/4 w-6 md:w-10 h-6 md:h-10 bg-white/3 rounded-full animate-float [animation-delay:4s]"></div>
      </div>
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-6 tracking-[0.05em] text-glow font-sans text-white">
        {title}
      </h1>
      
      <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl">
        {subtitle}
      </p>

      {/* Event Info Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10 md:mb-12 w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-white text-2xl md:text-3xl font-bold mb-1 md:mb-2">Presented By</span>
          <span className="inline-flex items-end text-3xl md:text-5xl font-extrabold text-white leading-none">
            <span className="text-red-600">TED</span>
            <span className="text-red-500 relative mx-0.5" style={{ fontSize: '0.7em', top: '-0.6em' }}>x</span>
            <span className="text-white">Youth@CHIREC</span>
          </span>
        </div>
        <div className="hidden md:block h-22 border-l-2 border-red-600 mx-2"></div>
        <div className="flex flex-col items-center md:items-start justify-center min-w-[220px]">
          <span className="text-white text-lg md:text-2xl font-bold mb-0.5 md:mb-1 text-center md:text-left">24 August, 2025</span>
          <span className="text-red-500 text-sm md:text-base font-medium text-center md:text-left">CHIREC International School, Serilingampally</span>
        </div>
      </div>

      <button 
        onClick={handleCtaClick}
        className="border-2 border-red-500 text-white hover:bg-red-500 hover:text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        {ctaText}
      </button>
    </div>
  );
};

export default HeroSection;