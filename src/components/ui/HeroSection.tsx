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
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-6 tracking-[0.05em] text-glow font-sans text-white">
        {title}
      </h1>
      
      <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl">
        {subtitle}
      </p>
      
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