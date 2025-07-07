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
    title: "Registration Opens",
    description:
      "Check in at the registration desk. All attendees must verify their details.",
    type: "registration",
  },
  {
    time: "15:45",
    title: "Campus Entry Deadline",
    description:
      "All attendees must be present on campus by this time. Latecomers will not be allowed inside during talks.",
    type: "info",
  },
  {
    time: "16:00",
    title: "Opening Ceremony",
    description: "Welcome address and event introduction.",
    type: "ceremony",
  },
  {
    time: "16:15",
    title: "Session 1: Speaker Talks",
    description: "First set of TEDx talks and performances.",
    type: "talk",
  },
  {
    time: "17:15",
    title: "Break & Networking",
    description:
      "Snacks, tea, and coffee served outside the CMPH. Phones may be used during this time.",
    type: "break",
  },
  {
    time: "17:45",
    title: "Session 2: Speaker Talks",
    description: "Second set of TEDx talks and performances.",
    type: "talk",
  },
  {
    time: "18:45",
    title: "Closing Ceremony",
    description: "Thank you note, acknowledgements, and event wrap-up.",
    type: "ceremony",
  },
  {
    time: "19:00",
    title: "Event Ends",
    description:
      "Attendees depart. Please ensure you have all your belongings.",
    type: "info",
  },
];

const typeColors: Record<string, string> = {
  registration: "bg-blue-900/70 text-blue-200",
  info: "bg-gray-800/70 text-gray-200",
  ceremony: "bg-purple-900/70 text-purple-200",
  talk: "bg-red-900/70 text-red-200",
  break: "bg-yellow-700/70 text-yellow-100",
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

      <h2 className="text-3xl md:text-5xl font-bold text-center mb-2">
        Event Schedule
      </h2>
      <div className="text-lg md:text-xl text-gray-300 text-center mb-12">
        August, 2025 • CHIREC ISRP Campus
      </div>

      {/* Timeline */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Vertical line */}
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
                        <span className="text-lg md:text-xl font-bold text-red-500 mr-2 min-w-[60px]">
                          {item.time}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-semibold capitalize ${
                            typeColors[item.type] ||
                            "bg-gray-700/70 text-gray-200"
                          }`}
                        >
                          {item.type}
                        </span>
                      </div>
                      <div className="text-lg md:text-2xl font-bold text-white leading-tight group-hover/card:text-red-400 transition-colors duration-300">
                        {item.title}
                      </div>
                      {item.subtitle && (
                        <div className="text-sm text-gray-400 font-medium mb-1">
                          {item.subtitle}
                        </div>
                      )}
                      <div className="text-sm md:text-base text-gray-300 group-hover/card:text-gray-100 transition-colors duration-300">
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
                        <span className="text-lg md:text-xl font-bold text-red-500 mr-2 min-w-[60px]">
                          {item.time}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-semibold capitalize ${
                            typeColors[item.type] ||
                            "bg-gray-700/70 text-gray-200"
                          }`}
                        >
                          {item.type}
                        </span>
                      </div>
                      <div className="text-lg md:text-2xl font-bold text-white leading-tight group-hover/card:text-red-400 transition-colors duration-300">
                        {item.title}
                      </div>
                      {item.subtitle && (
                        <div className="text-sm text-gray-400 font-medium mb-1">
                          {item.subtitle}
                        </div>
                      )}
                      <div className="text-sm md:text-base text-gray-300 group-hover/card:text-gray-100 transition-colors duration-300">
                        {item.description}
                      </div>
                    </div>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </div>
        {/* Mobile: stacked cards with timeline/dots on left */}
        <div className="md:hidden flex flex-col gap-12 relative">
          {/* Vertical line for mobile */}
          <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-red-900/30 via-white/10 to-red-900/30 z-0" />
          {schedule.map((item) => (
            <div key={item.time + item.title} className="flex items-center">
              {/* Dot */}
              <span className="w-3 h-3 rounded-full bg-red-500 border-2 border-black z-10 mr-4 ml-2" />
              {/* Card */}
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
                <div className="text-lg font-bold text-white leading-tight group-hover/card:text-red-400 transition-colors duration-300">
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
        {/* Dots for mobile */}
        <div className="md:hidden flex flex-col items-center absolute left-4 top-0 h-full z-0">
          {schedule.map((_, idx) => (
            <span key={idx} className="w-2 h-2 rounded-full bg-red-500 my-8" />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ScheduleSection;
