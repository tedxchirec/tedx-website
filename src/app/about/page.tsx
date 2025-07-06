import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About <span className="text-red-500">TEDx</span>Chirec
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
          Coming soon... This page will contain information about our mission, vision, and the team behind TEDxChirec.
        </p>
      </div>
    </PageLayout>
  );
}
