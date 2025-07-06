'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import HeroSection from '@/components/ui/HeroSection';
import AboutSection from '@/components/ui/AboutSection';

import SpeakersSection from '@/components/speakers/SpeakersSection';
import ScheduleSection from '@/components/ui/ScheduleSection';

export default function HomePage() {
  const handleBookNowClick = () => {
    // Handle booking logic here
    console.log('Navigating to booking...');
  };

  return (
    <PageLayout>
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

      {/* Schedule Section */}
      <ScheduleSection />

      {/* Speakers Section */}
      <SpeakersSection />
    </PageLayout>
  );
}
