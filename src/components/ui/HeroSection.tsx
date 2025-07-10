"use client";

import React from "react";

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
  className = "",
}) => {
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      // Default behavior - scroll to booking section or external link
      console.log("Book Now clicked");
    }
  };

  return (
    <div
      className={`relative z-10 flex flex-col items-center justify-center h-full px-6 text-center ${className}`}
    >
      {/* DENSE & HIGH-VISIBILITY SHAPES FOR BOTH DESKTOP AND MOBILE, CLOSER TO CENTER ON MOBILE */}
      <div className="absolute inset-0 overflow-visible pointer-events-none z-0">
        {/* Left column shapes - closer to center on desktop */}
        <div className="absolute left-6 top-10 w-16 h-16 md:left-24 md:top-16 md:w-28 md:h-28 bg-red-500/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute left-10 top-1/3 w-10 h-10 md:left-32 md:top-1/3 md:w-20 md:h-20 bg-white/20 rounded-lg rotate-12 animate-float [animation-delay:1.2s]"></div>
        <div className="absolute left-16 top-1/5 w-8 h-8 md:left-40 md:top-1/6 md:w-16 md:h-16 bg-white/30 rounded-full blur-md animate-bounce [animation-delay:1.7s]"></div>
        {/* Right column shapes - closer to center on desktop */}
        <div className="absolute right-6 top-12 w-14 h-14 md:right-24 md:top-20 md:w-24 md:h-24 bg-red-500/20 rounded-full blur-2xl animate-pulse [animation-delay:1.5s]"></div>
        <div className="absolute right-10 top-1/2 w-10 h-10 md:right-32 md:top-1/2 md:w-20 md:h-20 bg-white/20 rounded-lg rotate-45 animate-float [animation-delay:2.1s]"></div>
        <div className="absolute right-16 top-1/5 w-8 h-8 md:right-40 md:top-1/6 md:w-16 md:h-16 bg-white/30 rounded-full blur-md animate-bounce [animation-delay:2.3s]"></div>
        {/* Center vertical shapes (unchanged) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-20 w-24 h-24 md:w-32 md:h-32 bg-red-500/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute left-1/2 -translate-x-1/2 top-36 w-10 h-10 md:w-16 md:h-16 bg-white/12 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-1/4 w-6 h-6 md:w-10 md:h-10 bg-red-400/20 rounded-full blur-md animate-pulse [animation-delay:2.6s]"></div>
      </div>
      <h1 className="geist-font text-6xl md:text-8xl lg:text-9xl font-extrabold mb-6 tracking-[0.05em] text-glow font-sans text-white">
        {title}
      </h1>

      <p className="inter-font font-regular text-lg md:text-xl text-gray-300 mb-12 max-w-2xl">
        {subtitle}
      </p>

      {/* Event Info Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10 md:mb-12 w-full max-w-4xl mx-auto">
        <div className="ibm-font flex flex-col items-center md:items-start">
          <span className="text-white text-2xl md:text-3xl font-bold mb-1 md:mb-2">
            Presented By
          </span>
          <span className="inline-flex items-end text-3xl md:text-5xl text-white leading-none">
            <span className="font-extrabold text-red-500">TED</span>
            <span
              className="font-extrabold text-red-500 relative mx-0.5"
              style={{ fontSize: "0.7em", top: "-0.6em" }}
            >
              x
            </span>
            <span className="font-regular text-white">Youth@CHIREC</span>
          </span>
        </div>
        <div className="hidden md:block h-22 border-l-2 border-red-600 mx-2"></div>
        <div className="inter-font flex flex-col items-center md:items-start justify-center min-w-[220px]">
          <span className="text-white text-lg md:text-2xl font-bold mb-0.5 md:mb-1 text-center md:text-left">
            2nd August, 2025
          </span>
          <span className="text-red-500 text-sm md:text-base font-medium text-center md:text-left">
            CHIREC International School, Serilingampally
          </span>
        </div>
      </div>

      <button
        onClick={handleCtaClick}
        className="inter-font font-medium border-2 border-red-500 text-white hover:bg-red-500 hover:text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        {ctaText}
      </button>
    </div>
  );
};

export default HeroSection;
