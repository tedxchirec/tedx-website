"use client";

import React, { useState } from "react";
import Image from "next/image";

interface SpeakerCardProps {
  height: number | string;
  width: number | string;
  image: string;
  description: string;
  descriptionClassName?: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  height,
  width,
  image,
  description,
  descriptionClassName,
}) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const handleToggle = () => {
    if (isMobile) setShowOverlay((v) => !v);
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden group shadow-lg border border-red-500 bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl focus-within:scale-105 focus-within:shadow-2xl"
      style={{ height, width, aspectRatio: '4/5' }}
      onClick={handleToggle}
      tabIndex={0}
    >
      <Image
        src={image}
        alt={description}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ zIndex: 1, objectFit: 'cover', objectPosition: 'top center', aspectRatio: '4/5' }}
        sizes="(max-width: 768px) 100vw, 400px"
        priority
      />
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/60 flex items-center justify-center z-10 transition-opacity duration-300 ${
          isMobile
            ? showOverlay
              ? 'opacity-100'
              : 'opacity-0'
            : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        <span
          className={`text-white text-center ${
            descriptionClassName ||
            "text-base md:text-lg font-medium md:font-semibold leading-snug md:leading-normal px-4"
          } drop-shadow-lg`}
        >
          {description}
        </span>
      </div>
    </div>
  );
};

export default SpeakerCard;
