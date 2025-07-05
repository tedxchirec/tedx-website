import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function TicketsPage() {
  return (
    <PageLayout>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Get Your Tickets
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
          Coming soon... Secure your spot at TEDxChirec and be part of the conversation.
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105">
          Notify Me When Available
        </button>
      </div>
    </PageLayout>
  );
}
