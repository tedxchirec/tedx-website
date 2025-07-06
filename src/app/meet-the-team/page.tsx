import React from "react";
import teamData from "@/lib/teamData";
import SpeakerCard from "@/components/ui/SpeakerCard";

const departments = Array.from(
  new Set(teamData.sort((a, b) => a.DeptOrder - b.DeptOrder).map((m) => m.Department))
);

export default function MeetTheTeamPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-black">
      {/* Abstract background elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute left-1/4 top-10 w-40 h-40 bg-red-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute right-10 top-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1.2s" }} />
        <div className="absolute left-8 bottom-10 w-28 h-28 bg-red-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute right-1/4 bottom-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2.5s" }} />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-center text-white pt-32 md:pt-40 mb-12 md:mb-20 z-10">
        Meet the <span className="text-red-500">TEDx</span>CHIREC Team
      </h1>
      <div className="w-full flex flex-col gap-20 pb-16 md:pb-24">
        {departments.map((dept) => {
          const members = teamData.filter((m) => m.Department === dept);
          return (
            <section key={dept} className="relative w-full">
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-white">{dept}</h2>
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
