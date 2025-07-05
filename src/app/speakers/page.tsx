import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function SpeakersPage() {
  return (
    <PageLayout>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Our Speakers
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
          Coming soon... Meet the inspiring speakers who will challenge your perception of reality.
        </p>
      </div>
    </PageLayout>
  );
}
