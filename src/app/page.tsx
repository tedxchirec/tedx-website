'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import HeroSection from '@/components/ui/HeroSection';

export default function HomePage() {
  const handleBookNowClick = () => {
    // Handle booking logic here
    console.log('Navigating to booking...');
  };

  return (
    <PageLayout>
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Hero Section */}
      <HeroSection 
        title="Fail Forward"
        subtitle="Ideas that challenge our perception of reality."
        ctaText="Book Now"
        onCtaClick={handleBookNowClick}
      />
    </PageLayout>
  );
}
