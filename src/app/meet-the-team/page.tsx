import React from "react";
import teamData from "@/lib/teamData";
import SpeakerCard from "@/components/ui/SpeakerCard";

const departments = Array.from(
  new Set(teamData.sort((a, b) => a.DeptOrder - b.DeptOrder).map((m) => m.Department))
);

export default function MeetTheTeamPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-black">
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
      <h1 className="text-4xl md:text-6xl font-bold text-center text-white pt-32 md:pt-40 mb-12 md:mb-20 z-10">
        Meet the <span className="text-red-500">TEDx</span>Youth@CHIREC Team
      </h1>
      <div className="w-full flex flex-col gap-20 pb-16 md:pb-24">
        {departments.map((dept) => {
          const members = teamData.filter((m) => m.Department === dept);
          return (
            <section key={dept} className="relative w-full">
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-red-500">{dept}</h2>
              <div
                className="flex flex-wrap md:flex-nowrap justify-center items-center gap-8 md:gap-12 w-full px-2 md:px-8"
                style={{
                  rowGap: '3rem',
                }}
              >
                {members.map((member) => {
                  // Responsive: keep 4:5 aspect ratio, scale to screen width on mobile
                  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
                  const width = isMobile ? Math.min(window.innerWidth * 0.9, 340) : 425;
                  const height = width * 1.25;
                  return (
                    <SpeakerCard
                      key={member.Name}
                      height={height}
                      width={width}
                      image={`/team/${member.image}`}
                      description={member.Description}
                      descriptionClassName="text-base md:text-lg font-normal leading-snug px-2"
                    />
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
