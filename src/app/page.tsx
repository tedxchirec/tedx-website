"use client";

import React from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import HeroSection from "@/components/ui/HeroSection";
import AboutSection from "@/components/ui/AboutSection";

import SpeakersSection from "@/components/speakers/SpeakersSection";

export default function HomePage() {
  const handleBookNowClick = () => {
    // Handle booking logic here
    console.log("Navigating to booking...");
  };

  return (
    <>
      {/* Hero Section with its own background */}
      <div className="relative h-screen">
        {/* Animated Background */}
        <AnimatedBackground />

        {/* Hero Section */}
        <HeroSection
          title="Fail Forward"
          subtitle="Ideas that challenge our perception of reality."
          ctaText="Book Now"
          onCtaClick={handleBookNowClick}
        />
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Speakers Section */}
      <SpeakersSection />
    </>
  );
}
