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
      className="relative rounded-2xl overflow-hidden group shadow-lg border border-red-500 bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl focus-within:scale-105 focus-within:shadow-2xl hover:border-transparent focus-within:border-transparent"
      style={{ height, width, aspectRatio: "4/5" }}
      onClick={handleToggle}
      tabIndex={0}
    >
      <Image
        src={image}
        alt={description}
        fill
        className={
          `object-cover transition-transform duration-500 group-hover:scale-105 ` +
          (isMobile
            ? showOverlay
              ? "opacity-0"
              : "opacity-100"
            : "opacity-100 group-hover:opacity-0")
        }
        style={{
          zIndex: 1,
          objectFit: "cover",
          objectPosition: "top center",
          aspectRatio: "4/5",
        }}
        sizes="(max-width: 768px) 100vw, 400px"
        priority
      />
      {/* Overlay */}
      <div
        className={`absolute inset-0 z-20 transition-opacity duration-300 pointer-events-none rounded-2xl ${
          isMobile
            ? showOverlay
              ? "opacity-100"
              : "opacity-0"
            : "opacity-0 group-hover:opacity-100"
        }`}
        style={{
          background:
            "linear-gradient(135deg, rgba(116, 0, 0, 1), rgba(191,8,8,1))",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className={`inter-font text-white text-center flex flex-col items-center justify-center font-normal break-words w-full h-full px-2 leading-tight min-h-[2.5em] ${
            descriptionClassName || ""
          }`}
          style={{ fontSize: "1.03rem" }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
