"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  ctaText = "Reserve Your Spot",
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

  // --- FINAL HERO LAYOUT (RESPONSIVE JUMPER PLACEMENT) ---
  // Cliff SVG: width 100vw, height auto, anchored to bottom, no forced height
  // Jumper: centered, feet just above the gap, size and position adapt to device size

  const NAVBAR_HEIGHT = 80;
  const JUMPER_MIN_HEIGHT = 120;
  const JUMPER_MAX_HEIGHT = 1000;
  const JUMPER_PADDING_DESKTOP = 40; // px, more padding on desktop
  const JUMPER_PADDING_MOBILE = 16; // px, less padding on mobile

  // Responsive: detect available space for jumper and device size
  const [jumperHeight, setJumperHeight] = useState(320);
  const [jumperBottom, setJumperBottom] = useState("28vh");
  useEffect(() => {
    function updateJumperSize() {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      // Estimate cliff height as 0.28 * windowHeight (SVG aspect ratio), but don't force it
      const estimatedCliffHeight = windowHeight * 0.28;
      // Responsive padding
      const isMobile = windowWidth < 768;
      const padding = isMobile ? JUMPER_PADDING_MOBILE : JUMPER_PADDING_DESKTOP;
      // Available space for jumper
      const available = windowHeight - NAVBAR_HEIGHT - estimatedCliffHeight;
      const desired = Math.max(
        JUMPER_MIN_HEIGHT,
        Math.min(available, JUMPER_MAX_HEIGHT)
      );
      setJumperHeight(desired);
      // Place jumper just above the cliff, but lower on mobile
      // On desktop: bottom = estimatedCliffHeight + padding
      // On mobile: bottom = estimatedCliffHeight * 0.7 (move lower) + padding
      const bottom = isMobile
        ? `${estimatedCliffHeight * 0.7 + padding}px`
        : `${estimatedCliffHeight - padding}px`;
      setJumperBottom(bottom);
    }
    updateJumperSize();
    window.addEventListener("resize", updateJumperSize);
    return () => window.removeEventListener("resize", updateJumperSize);
  }, []);

  return (
    <div
      className={`relative z-10 flex flex-col items-center justify-center h-full min-h-[480px] md:min-h-[600px] px-0 text-center ${className}`}
      style={{
        background: "linear-gradient(135deg, #7c0a0a 0%, #1a0101 100%)",
        overflow: "visible",
      }}
    >
      {/* Cliff as full-width SVG, anchored to bottom, no forced height */}
      <Image
        src="/hero/cliff.svg"
        alt="Cliff"
        className="absolute left-0 bottom-0"
        width={1920}
        height={400}
        style={{
          width: "100vw",
          height: "auto",
          minHeight: 0,
          maxHeight: "none",
          objectFit: "contain",
          objectPosition: "bottom",
          zIndex: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
        draggable="false"
        priority
      />
      {/* Jumper - centered, as large as possible, never overlaps navbar or cliffs, position adapts to device size */}
      <Image
        src="/hero/jump.svg"
        alt="Jumping silhouette hero"
        className="absolute left-1/2"
        width={600}
        height={800}
        style={{
          width: "auto",
          height: jumperHeight,
          maxHeight: JUMPER_MAX_HEIGHT,
          minHeight: JUMPER_MIN_HEIGHT,
          transform: "translateX(-50%)",
          bottom: jumperBottom,
          zIndex: 2,
          transition: "height 0.2s, bottom 0.2s",
          pointerEvents: "none",
          userSelect: "none",
        }}
        draggable="false"
        priority
      />

      {/* Main Content Overlay - centered */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pt-10 md:pt-20 pb-8">
        {/* Title with arrows as part of the F glyph, matching the reference */}
        <h1
          className="font-extrabold text-white text-center leading-[0.95] text-[2.7rem] md:text-6xl lg:text-7xl mb-4 drop-shadow-xl"
          style={{ letterSpacing: "-0.01em", position: "relative" }}
        >
          {/* First line: F with arrow as part of the glyph, true overlay */}
          <span className="geist-font flex flex-row items-center justify-center gap-2">
            <span
              className="relative"
              style={{ display: "inline-block", fontWeight: 900 }}
            >
              <span
                style={{
                  fontWeight: 900,
                  fontFamily: "inherit",
                  fontSize: "1em",
                  position: "relative",
                  display: "inline-block",
                  lineHeight: 1,
                }}
              >
                F
                {/* Flatter triangle, base flush with F's top bar, width just wider than F's bar */}
                <svg
                  width="0.28em"
                  height="0.6em"
                  viewBox="0 0 2 20"
                  style={{
                    position: "absolute",
                    left: "0.46em", // aligns base with F's top bar
                    top: "0.04em", // fine-tune as needed
                    pointerEvents: "none",
                  }}
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="0,0 4,6 0,12" />
                </svg>
              </span>
            </span>
            <span>AIL</span>
          </span>
          {/* Second line: F with arrow as part of the glyph, true overlay */}
          <span className="geist-font flex flex-row items-center justify-center gap-2 mt-2">
            <span
              className="relative"
              style={{ display: "inline-block", fontWeight: 900 }}
            >
              <span
                style={{
                  fontWeight: 900,
                  fontFamily: "inherit",
                  fontSize: "1em",
                  position: "relative",
                  display: "inline-block",
                  lineHeight: 1,
                }}
              >
                F
                {/* Flatter triangle, base flush with F's top bar, width just wider than F's bar */}
                <svg
                  width="0.28em"
                  height="0.6em"
                  viewBox="0 0 2 20"
                  style={{
                    position: "absolute",
                    left: "0.46em", // aligns base with F's top bar
                    top: "0.04em", // fine-tune as needed
                    pointerEvents: "none",
                  }}
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="0,0 4,6 0,12" />
                </svg>
              </span>
            </span>
            <span>ORWARD</span>
            <div className="flex w-full justify-center"></div>
          </span>
        </h1>
        {/* Details Section - modern card style, tighter TEDx spacing */}
        <div className="mt-6 mb-10 bg-white/10 rounded-2xl px-6 py-5 shadow-lg flex flex-col items-center gap-2 w-full max-w-xl border border-white/20 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-2">
            <span className="inter-font text-white text-lg md:text-xl font-medium">
              Presented by
            </span>
            <span className="ibm-font flex flex-row items-center gap-0.5">
              <span className="text-red-500 font-extrabold text-xl md:text-2xl tracking-tight">
                TED
              </span>
              <span
                className="text-red-500 font-extrabold text-lg md:text-xl align-super"
                style={{
                  fontSize: "0.7em",
                  top: "-0.6em",
                  position: "relative",
                  marginLeft: "-0.2em",
                  marginRight: "-0.1em",
                }}
              >
                x
              </span>
              <span className="text-white font-light text-lg md:text-xl">
                Youth@CHIREC
              </span>
            </span>
          </div>
          <div className="inter-font flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-2">
            <span className="text-white font-bold text-base md:text-lg">
              2nd August, 2025
            </span>
            <span className="text-red-400 text-xs md:text-base font-medium">
              CHIREC International School, Serilingampally
            </span>
          </div>
        </div>
        <button
          onClick={handleCtaClick}
          className="inter-font font-medium border-2 border-red-500 text-white hover:bg-red-500 hover:text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 shadow-md"
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
