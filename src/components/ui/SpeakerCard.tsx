import React from "react";
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
  return (
    <div
      className="relative rounded-2xl overflow-hidden group shadow-lg border border-red-500 bg-gray-900"
      style={{ height, width }}
    >
      <Image
        src={image}
        alt={description}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ zIndex: 1 }}
        sizes="(max-width: 768px) 100vw, 400px"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
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
