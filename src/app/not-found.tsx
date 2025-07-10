import React from "react";
import Link from "next/link";

export default function FourOFourPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center bg-black overflow-hidden">
      <h1 className="geist-font text-[5rem] md:text-[8rem] font-extrabold text-red-500 drop-shadow-lg mb-2 leading-none relative z-10 animate-glow text-glow">
        404
        {/* Aura/Holo effect */}
        <span className="absolute inset-0 pointer-events-none -z-10">
          <span className="block w-full h-full rounded-full bg-gradient-to-br from-red-500/20 via-red-400/3 to-white/0 blur-xl animate-glow" />
        </span>
      </h1>
      <h2 className="ibm-font text-2xl md:text-4xl font-bold text-white mb-4">
        This Idea Hasn&apos;t Been Discovered Yet
      </h2>
      <p className="inter-font text-base md:text-lg text-gray-300 max-w-2xl mb-8">
        You&apos;ve ventured beyond the known path. The page you&apos;re looking
        for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex justify-center">
        <Link
          href="/"
          className="inter-font font-medium border-2 border-red-500 text-white hover:bg-red-500 hover:text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          &larr; Back to Homepage
        </Link>
      </div>
    </div>
  );
}
