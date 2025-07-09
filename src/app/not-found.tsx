import React from "react";
import Link from "next/link";

export default function FourOFourPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center bg-black overflow-hidden">
      <h1 className="text-[5rem] md:text-[8rem] font-extrabold text-red-400 drop-shadow-lg mb-2 leading-none relative z-10 animate-glow text-glow">404
        {/* Aura/Holo effect */}
        <span className="absolute inset-0 pointer-events-none -z-10">
          <span className="block w-full h-full rounded-full bg-gradient-to-br from-red-500/20 via-red-400/3 to-white/0 blur-xl animate-glow" />
        </span>
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">This Idea Hasn&apos;t Been Discovered Yet</h2>
      <p className="text-base md:text-lg text-gray-300 max-w-2xl mb-8">
        You&apos;ve ventured beyond the known path. The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex justify-center">
        <Link
          href="/"
          className="group relative overflow-hidden bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          <span className="relative z-10">&larr; Back to Homepage</span>
          <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      </div>
    </div>
  );
}
