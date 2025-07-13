"use client";

import React from "react";
import Link from "next/link";

export default function FourOFourPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center bg-black">
      {/* Subtle Abstract Shapes on the sides */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* ...existing code for shapes... */}
        <div className="absolute left-1/2 top-8 w-32 h-32 bg-red-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "0.3s", transform: "translateX(-50%)" }}></div>
        <div className="absolute left-1/2 bottom-8 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1.1s", transform: "translateX(-50%)" }}></div>
        <div className="absolute left-1/2 top-1/2 w-20 h-20 bg-red-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2.2s", transform: "translate(-50%, -50%)" }}></div>
        <div className="hidden md:block absolute left-4 md:left-10 top-1/4 w-20 md:w-32 h-20 md:h-32 bg-red-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="hidden md:block absolute left-8 md:left-20 top-1/2 w-10 md:w-16 h-10 md:h-16 bg-white/3 rounded-lg rotate-45 animate-float"></div>
        <div className="hidden md:block absolute left-2 md:left-5 bottom-1/3 w-14 md:w-24 h-14 md:h-24 bg-red-400/8 rounded-full blur-lg"></div>
        <div className="hidden md:block absolute right-4 md:right-10 top-1/3 w-16 md:w-28 h-16 md:h-28 bg-red-500/6 rounded-full blur-xl animate-pulse [animation-delay:1s]"></div>
        <div className="hidden md:block absolute right-8 md:right-16 bottom-1/4 w-12 md:w-20 h-12 md:h-20 bg-white/4 rounded-lg rotate-12 animate-float [animation-delay:2s]"></div>
        <div className="hidden md:block absolute right-2 md:right-8 top-2/3 w-8 md:w-12 h-8 md:h-12 bg-red-300/5 rounded-full blur-md"></div>
        <div className="hidden md:block absolute top-4 md:top-10 left-1/3 w-4 md:w-6 h-4 md:h-6 bg-red-500/10 rounded-full animate-ping [animation-delay:3s]"></div>
        <div className="hidden md:block absolute top-8 md:top-16 right-1/3 w-3 md:w-4 h-3 md:h-4 bg-white/6 rounded-full animate-bounce [animation-delay:1.5s]"></div>
        <div className="hidden md:block absolute bottom-6 md:bottom-12 left-1/4 w-5 md:w-8 h-5 md:h-8 bg-red-400/7 rounded-lg rotate-45 animate-pulse [animation-delay:2.5s]"></div>
        <div className="hidden md:block absolute bottom-10 md:bottom-20 right-1/4 w-6 md:w-10 h-6 md:h-10 bg-white/3 rounded-full animate-float [animation-delay:4s]"></div>
      </div>
      <h1 className="geist-font text-[4rem] md:text-[7rem] font-extrabold mb-2 leading-none relative z-10 faq-title-interactive text-center" style={{ letterSpacing: '-0.01em' }}>
        <span className="relative inline-block">
          404
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
            <span className="block w-full h-full rounded-full bg-gradient-to-br from-red-500/20 via-red-400/3 to-white/0 blur-xl animate-title-pulse" />
          </span>
        </span>
      </h1>
      <h2 className="ibm-font text-2xl md:text-4xl font-bold faq-title-interactive text-center mb-4">
        This Idea Hasn&apos;t Been Discovered Yet
      </h2>
      <p className="inter-font text-base md:text-lg text-gray-300 max-w-2xl mb-8">
        You&apos;ve ventured beyond the known path. The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex justify-center">
        <Link href="/" className="inter-font font-medium border-2 border-red-500 text-white hover:bg-red-500 hover:text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
          &larr; Back to Homepage
        </Link>
      </div>
      <style jsx global={true}>{`
        .faq-title-interactive {
          color: #ef4444;
          filter: drop-shadow(0 0 8px #ef4444cc);
          transition: filter 0.3s, color 0.3s;
        }
        .faq-title-interactive:hover {
          color: #fff;
          filter: drop-shadow(0 0 24px #ef4444cc) brightness(1.2);
        }
        .animate-title-pulse {
          animation: titlePulse 2.5s ease-in-out infinite alternate;
        }
        @keyframes titlePulse {
          0% {
            opacity: 0.7;
            transform: scale(1);
          }
          100% {
            opacity: 1;
            transform: scale(1.08);
          }
        }
      `}</style>
    </div>
  );
}
