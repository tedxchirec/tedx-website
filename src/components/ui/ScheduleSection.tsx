"use client";

import React from "react";

interface ScheduleItem {
  time: string;
  title: string;
  subtitle?: string;
  description: string;
  type: "talk" | "info" | "break" | "ceremony" | "registration" | string;
}

const schedule: ScheduleItem[] = [
  {
    time: "15:00",
    title: "Registrations Open",
    description: "Check in at the registration desk. All participants and attendees must verify their details.",
    type: "registration",
  },
  {
    time: "15:45",
    title: "Campus Entry Deadline",
    description: "All participants and attendees must be on campus by this time.",
    type: "info",
  },
  {
    time: "16:00 - 16:05",
    title: "Welcome by MC",
    description: "Opening remarks and welcome to the event.",
    type: "ceremony",
  },
  {
    time: "16:05 - 16:10",
    title: "Introduction of Event & Speakers",
    description: "Overview of the event and introduction of speakers.",
    type: "ceremony",
  },
  {
    time: "16:30 - 16:50",
    title: "Speaker #1",
    description: "First speaker session.",
    type: "talk",
  },
  {
    time: "16:50 - 17:10",
    title: "Speaker #2",
    description: "Second speaker session.",
    type: "talk",
  },
  {
    time: "17:10 - 17:30",
    title: "Speaker #3",
    description: "Third speaker session.",
    type: "talk",
  },
  {
    time: "17:30 - 18:00",
    title: "High Tea Break",
    description: "Refreshments and high tea served.",
    type: "break",
  },
  {
    time: "18:00 - 18:20",
    title: "Speaker #4",
    description: "Fourth speaker session.",
    type: "talk",
  },
  {
    time: "18:20 - 18:40",
    title: "Speaker #5",
    description: "Fifth speaker session.",
    type: "talk",
  },
  {
    time: "18:40 - 18:55",
    title: "Speaker #6",
    description: "Sixth speaker session.",
    type: "talk",
  },
  
  {
    time: "18:55-19:00",
    title: "Comms Speech",
    description: "Communications speech.",
    type: "closing",
  },
  {
    time: "19:00 - 19:05",
    title: "Vote of Thanks",
    description: "Closing remarks and acknowledgements.",
    type: "closing",
  },
]

const typeColors: Record<string, string> = {
  registration: "bg-blue-900/70 text-blue-200",
  info: "bg-gray-800/70 text-gray-200",
  ceremony: "bg-purple-900/70 text-purple-200",
  talk: "bg-red-900/70 text-red-200",
  break: "bg-yellow-700/70 text-yellow-100",
  closing: "bg-green-900/70 text-green-200",
};

import AnimatedSection from "./AnimatedSection";

const ScheduleSection: React.FC = () => {
  return (
    <AnimatedSection className="relative py-20 md:py-32 px-4 md:px-0 min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div
          className="absolute left-1/4 top-10 w-40 h-40 bg-red-500/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute right-10 top-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="absolute left-8 bottom-10 w-28 h-28 bg-red-400/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute right-1/4 bottom-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>

      <h2 className="geist-font text-[2.8rem] md:text-[5rem] font-extrabold text-red-500 mb-9 leading-none relative z-10 faq-title-interactive text-center">
        <span className="relative inline-block">
          Event Schedule
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
            <span className="block w-full h-full rounded-full bg-gradient-to-br from-red-500/20 via-red-400/3 to-white/0 blur-xl animate-title-pulse" />
          </span>
        </span>
      </h2>
      <style jsx global>{`
        .faq-title-interactive {
          filter: drop-shadow(0 0 8px #ef4444cc);
          transition: filter 0.3s, color 0.3s;
        }
        .faq-title-interactive:hover {
  // Missing comma added here
          color: #fff;
          filter: drop-shadow(0 0 24px #ef4444cc) brightness(1.2);
        }
        .animate-title-pulse {
          animation: titlePulseGlow 2.5s ease-in-out infinite alternate;
        }
        @keyframes titlePulseGlow {
          0% {
            opacity: 0.7;
            filter: blur(16px);
          }
          100% {
            opacity: 1;
            filter: blur(32px);
          }
        }
      `}</style>
      <div className="inter-font text-lg md:text-xl text-gray-300 text-center mb-12">
        2nd August, 2025 • CHIREC ISRP Campus
      </div>

      {/* Timeline */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Vertical line - only on desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-red-900/30 via-white/10 to-red-900/30 -translate-x-1/2 z-0" />
        <div className="hidden md:grid md:grid-cols-3 md:gap-0">
          {schedule.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <React.Fragment key={item.time + item.title}>
                {/* Left card */}
                <div
                  className={`flex justify-end items-center min-h-[160px] ${
                    isLeft ? "" : "invisible"
                  }`}
                >
                  {isLeft && (
                    <div className="w-full max-w-md bg-[#151922] border border-white/5 rounded-2xl shadow-lg px-6 py-5 md:py-6 flex flex-col gap-2 transition-all duration-300 hover:scale-[1.025] hover:border-red-500/60 hover:shadow-xl hover:bg-[#1a1f2b] group/card">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="inter-font text-lg md:text-xl font-bold text-red-500 mr-2 min-w-[60px]">
                          {item.time}
                        </span>
                        <span
                          className={`geist-font text-xs px-2 py-0.5 rounded-full font-medium capitalize ${
                            typeColors[item.type] ||
                            "bg-gray-700/70 text-gray-200"
                          }`}
                        >
                          {item.type}
                        </span>
                      </div>
                      <div className="ibm-font text-lg md:text-2xl font-bold text-white leading-tight group-hover/card:text-red-500 transition-colors duration-300">
                        {item.title}
                      </div>
                      {item.subtitle && (
                        <div className="ibm-font text-sm text-gray-400 font-medium mb-1">
                          {item.subtitle}
                        </div>
                      )}
                      <div className="inter-font text-sm md:text-base text-gray-300 group-hover/card:text-gray-100 transition-colors duration-300">
                        {item.description}
                      </div>
                    </div>
                  )}
                </div>
                {/* Center timeline/dot */}
                <div className="flex flex-col items-center relative min-h-[160px]">
                  <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 border-4 border-black z-20" />
                  {/* Extend the line between dots except for last item */}
                  {idx < schedule.length - 1 && (
                    <span
                      className="absolute left-1/2 -translate-x-1/2 top-1/2 w-1 h-[160px] bg-gradient-to-b from-red-900/30 via-white/10 to-red-900/30 z-0"
                      style={{ marginTop: "32px" }}
                    />
                  )}
                </div>
                {/* Right card */}
                <div
                  className={`flex justify-start items-center min-h-[160px] ${
                    !isLeft ? "" : "invisible"
                  }`}
                >
                  {!isLeft && (
                    <div className="w-full max-w-md bg-[#151922] border border-white/5 rounded-2xl shadow-lg px-6 py-5 md:py-6 flex flex-col gap-2 transition-all duration-300 hover:scale-[1.025] hover:border-red-500/60 hover:shadow-xl hover:bg-[#1a1f2b] group/card">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="inter-font text-lg md:text-xl font-bold text-red-500 mr-2 min-w-[60px]">
                          {item.time}
                        </span>
                        <span
                          className={`geist-font text-xs px-2 py-0.5 rounded-full font-medium capitalize ${
                            typeColors[item.type] ||
                            "bg-gray-700/70 text-gray-200"
                          }`}
                        >
                          {item.type}
                        </span>
                      </div>
                      <div className="ibm-font text-lg md:text-2xl font-bold text-white leading-tight group-hover/card:text-red-500 transition-colors duration-300">
                        {item.title}
                      </div>
                      {item.subtitle && (
                        <div className="ibm-font text-sm text-gray-400 font-medium mb-1">
                          {item.subtitle}
                        </div>
                      )}
                      <div className="inter-font text-sm md:text-base text-gray-300 group-hover/card:text-gray-100 transition-colors duration-300">
                        {item.description}
                      </div>
                    </div>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </div>
        {/* Mobile: stacked cards, no timeline/dots */}
        <div className="md:hidden flex flex-col gap-12 relative">
          {schedule.map((item) => (
            <div key={item.time + item.title} className="flex items-center">
              {/* Card only, no dot or line */}
              <div className="w-full max-w-md mx-auto bg-[#151922] border border-white/5 rounded-2xl shadow-lg px-6 py-5 flex flex-col gap-2 transition-all duration-300 active:scale-[0.98] hover:scale-[1.015] hover:border-red-500/60 hover:shadow-xl hover:bg-[#1a1f2b] group/card">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg font-bold text-red-500 mr-2 min-w-[60px]">
                    {item.time}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-semibold capitalize ${
                      typeColors[item.type] || "bg-gray-700/70 text-gray-200"
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
                <div className="text-lg font-bold text-white leading-tight group-hover/card:text-red-500 transition-colors duration-300">
                  {item.title}
                </div>
                {item.subtitle && (
                  <div className="text-sm text-gray-400 font-medium mb-1">
                    {item.subtitle}
                  </div>
                )}
                <div className="text-sm text-gray-300 group-hover/card:text-gray-100 transition-colors duration-300">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* No extra dots for mobile */}
      </div>
    </AnimatedSection>
  );
};

export default ScheduleSection;
