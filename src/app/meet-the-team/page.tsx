"use client";

import React from "react";
import { teamData, TeamMember } from "@/lib/teamData";
import SpeakerCard from "@/components/ui/SpeakerCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

const departments: string[] = Array.from(
  new Set(teamData.sort((a: TeamMember, b: TeamMember) => a.DeptOrder - b.DeptOrder).map((m: TeamMember) => m.Department))
);

export default function MeetTheTeamPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-black">
      {/* Subtle Abstract Shapes on the sides */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Centered and mobile-friendly shapes */}
        <div className="absolute left-1/2 top-8 w-32 h-32 bg-red-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.3s', transform: 'translateX(-50%)' }}></div>
        <div className="absolute left-1/2 bottom-8 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.1s', transform: 'translateX(-50%)' }}></div>
        <div className="absolute left-1/2 top-1/2 w-20 h-20 bg-red-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2.2s', transform: 'translate(-50%, -50%)' }}></div>
        {/* Existing shapes, now with responsive tweaks */}
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
      <h1 className="text-4xl md:text-6xl font-bold text-center text-white pt-32 md:pt-40 mb-12 md:mb-20 z-10">
        Meet the <span className="text-red-500">TEDx</span>Youth@CHIREC Team
      </h1>
      <div className="w-full flex flex-col gap-20 pb-16 md:pb-24">
        {departments.map((dept: string, idx: number) => {
          const members = teamData.filter((m: TeamMember) => m.Department === dept);
          return (
            <AnimatedSection key={dept} className="relative w-full" delay={0.1 * idx}>
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-15 text-red-500">{dept}</h2>
              <div
                className="flex flex-wrap justify-center gap-x-8 gap-y-12 w-full px-2 md:px-8"
              >
                {members.map((member: TeamMember) => (
                  <div
                    key={member.Name}
                    className="w-full max-w-[340px] aspect-[4/5] flex justify-center items-center"
                  >
                    <SpeakerCard
                      width="100%"
                      height="100%"
                      image={`/team/${member.image}`}
                      description={member.Description}
                      descriptionClassName="text-base md:text-lg font-normal leading-snug px-2"
                    />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );
}
