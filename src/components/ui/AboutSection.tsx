"use client";

import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className = "" }) => {
  const stats = [
    {
      number: "4",
      title: "Years of Innovation",
      icon: (
        <svg
          className="w-8 h-8 text-[#F5D6C6] mx-auto"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
            stroke="#F5D6C6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      number: "400+",
      title: "Attendees Inspired",
      icon: (
        <svg
          className="w-8 h-8 text-[#F5D6C6] mx-auto"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      ),
    },
    {
      number: "30+",
      title: "Speakers Elevated",
      icon: (
        <svg
          className="w-8 h-8 text-[#F5D6C6] mx-auto"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18 14L16 21H8L6 14M4 10H20M6 9C6 6.79086 7.34315 5 9 5M9 5C9 6.10457 9.89543 7 11 7H14C15.1046 7 16 6.10457 16 5C16 3.89543 15.1046 3 14 3H11C9.89543 3 9 3.89543 9 5Z"
            stroke="#F5D6C6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      number: "4",
      title: (
        <>
          Transformative
          <br />
          Events
        </>
      ),
      icon: (
        <svg
          className="w-7 h-7 text-[#F5D6C6] mx-auto"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      number: "10000+",
      title: "Views Reached",
      icon: (
        <svg
          className="w-8 h-8 text-[#F5D6C6] mx-auto"
          viewBox="0 0 1024 1024"
          fill="none"
        >
          <path
            d="M70.4 772c-13.6 0-24-10.4-24-24V140.8c0-13.6 10.4-24 24-24h882.4c13.6 0 24 10.4 24 24v607.2c0 16-11.2 24-22.4 24H70.4z m24-44h836V166.4H94.4V728z"
            fill="#F5D6C6"
          />
          <path
            d="M733.6 662.4c-13.6 0-24-10.4-24-24s10.4-24 24-24h93.6c13.6 0 24 10.4 24 24s-12.8 24-24 24H733.6zM512 884c-13.6 0-24-10.4-24-24V758.4c0-13.6 10.4-24 24-24s24 10.4 24 24v103.2c-0.8 12-11.2 22.4-24 22.4z"
            fill="#F5D6C6"
          />
          <path
            d="M316 904.8c-13.6 0-24-10.4-24-24s10.4-24 24-24h392.8c13.6 0 24 10.4 24 24s-12.8 24-24 24H316z"
            fill="#F5D6C6"
          />
        </svg>
      ),
    },
  ];

  return (
    <AnimatedSection
      className={`flex items-center justify-center px-4 md:px-12 relative ${className}`}
      style={{ minHeight: "100vh" }}
    >
      {/* Subtle Abstract Shapes on the sides */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left side shapes */}
        <div className="absolute left-4 md:left-10 top-1/4 w-20 md:w-32 h-20 md:h-32 bg-red-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute left-8 md:left-20 top-1/2 w-10 md:w-16 h-10 md:h-16 bg-white/3 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute left-2 md:left-5 bottom-1/3 w-14 md:w-24 h-14 md:h-24 bg-red-400/8 rounded-full blur-lg"></div>

        {/* Right side shapes */}
        <div className="absolute right-4 md:right-10 top-1/3 w-16 md:w-28 h-16 md:h-28 bg-red-500/6 rounded-full blur-xl animate-pulse [animation-delay:1s]"></div>
        <div className="absolute right-8 md:right-16 bottom-1/4 w-12 md:w-20 h-12 md:h-20 bg-white/4 rounded-lg rotate-12 animate-float [animation-delay:2s]"></div>
        <div className="absolute right-2 md:right-8 top-2/3 w-8 md:w-12 h-8 md:h-12 bg-red-300/5 rounded-full blur-md"></div>

        {/* Top shapes */}
        <div className="absolute top-4 md:top-10 left-1/3 w-4 md:w-6 h-4 md:h-6 bg-red-500/10 rounded-full animate-ping [animation-delay:3s]"></div>
        <div className="absolute top-8 md:top-16 right-1/3 w-3 md:w-4 h-3 md:h-4 bg-white/6 rounded-full animate-bounce [animation-delay:1.5s]"></div>

        {/* Bottom shapes */}
        <div className="absolute bottom-6 md:bottom-12 left-1/4 w-5 md:w-8 h-5 md:h-8 bg-red-400/7 rounded-lg rotate-45 animate-pulse [animation-delay:2.5s]"></div>
        <div className="absolute bottom-10 md:bottom-20 right-1/4 w-6 md:w-10 h-6 md:h-10 bg-white/3 rounded-full animate-float [animation-delay:4s]"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto text-center relative z-10 py-10 md:py-0 flex flex-col justify-center">
        {/* Header */}
        <h2 className="ibm-font text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
          About{" "}
          <span className="font-extrabold text-red-500">
            TED
            <span
              className="relative mx-0.5"
              style={{ fontSize: "0.7em", top: "-0.6em" }}
            >
              x
            </span>
          </span>
          <span className="font-light">Youth@CHIREC</span>
        </h2>

        {/* Description */}
        <p className="inter-font text-base md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto">
          TEDxYouth@CHIREC is a crucible of innovation, where the world&apos;s
          most audacious thinkers and creators converge. We don&apos;t just
          share ideas; we ignite movements. This year, we venture beyond the
          known, exploring the frontiers of science, art, and human
          consciousness.
        </p>

        {/* Stats in a row for the new format */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-8 md:mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer select-none transition-all duration-300 rounded-xl hover:bg-[#18181c] hover:shadow-xl hover:scale-105 focus-within:scale-105 focus-within:shadow-xl flex flex-col items-center justify-between h-full min-h-[9.5rem] md:min-h-[12rem] py-2"
              tabIndex={0}
            >
              <div className="geist-font text-2xl md:text-4xl font-bold text-red-500 mb-1 md:mb-2 transition-colors duration-300 group-hover:text-red-400 group-focus-within:text-red-400">
                {stat.number}
              </div>
              <div className="geist-font text-xs md:text-base font-semibold text-white mb-2 md:mb-3 min-h-[2.8em] md:min-h-[3.2em] flex items-center justify-center transition-colors duration-300 group-hover:text-gray-200 group-focus-within:text-gray-200 text-center w-full">
                {stat.title}
              </div>
              <div className="flex justify-center items-end h-8 md:h-8 w-8 md:w-8 opacity-80 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
                {stat.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="mb-8 md:mb-12">
          <div className="relative max-w-xs md:max-w-md mx-auto">
            <div className="relative overflow-hidden rounded-2xl border-2 border-red-500 shadow-2xl group">
              {/* Image placeholder with TEDx branding */}
              <div className="w-full h-56 md:h-80 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center p-6 md:p-8">
                  <div className="text-2xl md:text-4xl font-bold text-red-500 mb-2 md:mb-3">
                    TED
                    <span
                      className="relative mx-0.5"
                      style={{ fontSize: "0.7em", top: "-0.6em" }}
                    >
                      x
                    </span>
                  </div>
                  <div className="text-base md:text-lg text-gray-300 mb-1 md:mb-2">
                    CHIREC
                  </div>
                  <div className="text-xs md:text-sm text-gray-500">
                    Event Image Placeholder
                  </div>
                  <div className="mt-2 md:mt-3 text-xs text-gray-600">
                    Replace with actual event photo
                  </div>
                </div>
              </div>
              {/* Image overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60"></div>
            </div>

            {/* Decorative elements around the image */}
            <div className="absolute -top-2 -right-2 w-10 md:w-16 h-10 md:h-16 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-12 md:w-20 h-12 md:h-20 bg-red-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Call to Action */}
        <button
          className="inter-font bg-red-500 hover:bg-red-600 text-white px-5 md:px-6 lg:px-7 py-2.5 md:py-3 lg:py-3.5 rounded-full text-base  font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 max-w-xs md:max-w-sm mx-auto md:text-base lg:text-lg"
          style={{
            minWidth: "unset",
            fontSize: "1rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            paddingTop: "0.75rem",
            paddingBottom: "0.75rem",
            marginBottom: "1.5rem",
          }}
        >
          Book Now
        </button>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
