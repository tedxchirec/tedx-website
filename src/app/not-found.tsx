import React from "react";
import Link from "next/link";

export default function FourOFourPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center bg-black overflow-hidden">
      <h1 className="text-[5rem] md:text-[8rem] font-extrabold text-white drop-shadow-lg mb-2 leading-none">404</h1>
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">This Idea Hasn&apos;t Been Discovered Yet</h2>
      <p className="text-base md:text-lg text-gray-300 max-w-2xl mb-8">
        You&apos;ve ventured beyond the known path. The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex justify-center">
        <Link href="/" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 shadow-lg">
          &larr; Back to Homepage
        </Link>
      </div>
    </div>
  );
}
