"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-black pb-24 pt-32 md:pt-40 px-4 md:px-0 overflow-hidden">
      {/* Decorative animated background shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Left side */}
        <div className="hidden md:block absolute left-0 top-10 w-24 h-24 bg-gradient-to-br from-red-500/30 to-white/0 rounded-full blur-2xl animate-pulse" />
        <div className="hidden md:block absolute left-0 top-1/3 w-16 h-16 bg-red-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: "0.6s" }} />
        <div className="hidden md:block absolute left-0 top-2/3 w-28 h-28 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1.2s" }} />
        <div className="hidden md:block absolute left-0 bottom-10 w-20 h-20 bg-red-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: "1.8s" }} />
        {/* Right side */}
        <div className="hidden md:block absolute right-0 top-20 w-28 h-28 bg-gradient-to-tl from-red-400/20 to-white/0 rounded-full blur-2xl animate-pulse" />
        <div className="hidden md:block absolute right-0 top-1/2 w-16 h-16 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: "0.9s", transform: "translateY(-50%)" }} />
        <div className="hidden md:block absolute right-0 top-3/4 w-24 h-24 bg-red-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="hidden md:block absolute right-0 bottom-8 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: "2.1s" }} />
        {/* Corners for extra fill */}
        <div className="hidden md:block absolute left-8 top-8 w-10 h-10 bg-red-500/10 rounded-full blur-lg animate-bounce" style={{ animationDelay: "1.3s" }} />
        <div className="hidden md:block absolute right-8 bottom-8 w-10 h-10 bg-red-400/10 rounded-full blur-lg animate-bounce" style={{ animationDelay: "1.7s" }} />
        {/* Mobile */}
        <div className="md:hidden absolute left-2 top-1/5 w-12 h-12 bg-red-400/20 rounded-full blur-lg animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="md:hidden absolute left-2 bottom-1/5 w-10 h-10 bg-red-500/10 rounded-full blur-md animate-pulse" style={{ animationDelay: "1.2s" }} />
        <div className="md:hidden absolute right-2 top-1/4 w-12 h-12 bg-white/10 rounded-full blur-lg animate-float" style={{ animationDelay: "1.1s" }} />
        <div className="md:hidden absolute right-2 bottom-1/4 w-10 h-10 bg-red-300/10 rounded-full blur-md animate-pulse" style={{ animationDelay: "1.8s" }} />
      </div>

      <AnimatedSection delay={0} className="w-full max-w-3xl mx-auto z-10">
        <h1 className="geist-font text-[2.2rem] md:text-[3.5rem] font-extrabold text-red-500 mb-10 leading-none relative z-10 faq-title-interactive text-center">
          <span className="relative inline-block">
            About TEDx
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
              <span className="block w-full h-full rounded-full bg-gradient-to-br from-red-500/20 via-red-400/3 to-white/0 blur-xl animate-title-pulse" />
            </span>
          </span>
        </h1>
        <div className="inter-font text-base md:text-xl text-gray-300 mb-10 leading-relaxed text-center">
          <span className="font-bold text-red-500">About TEDx, x = independently organized event</span><br /><br />
          In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
        </div>
        <h2 className="geist-font text-[2.2rem] md:text-[3.5rem] font-extrabold text-red-500 mb-6 leading-none relative z-10 faq-title-interactive text-center">
          <span className="relative inline-block">
            About TED
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
              <span className="block w-full h-full rounded-full bg-gradient-to-br from-red-500/20 via-red-400/3 to-white/0 blur-xl animate-title-pulse" />
            </span>
          </span>
        </h2>
        <div className="inter-font text-base md:text-xl text-gray-300 mb-10 leading-relaxed text-center">
          TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.<br /><br />
          TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. In addition to the TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs that are translated into more than 100 languages and distributed via partnerships around the world. Each year, thousands of independently run TEDx events bring people together to share ideas and bridge divides in communities on every continent. Through the Audacious Project, TED has helped catalyze more than $3 billion in funding for projects that seek to make the world more beautiful, sustainable and just. In 2020, TED launched Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future, and in 2023 TED launched TED Democracy to spark a new kind of conversation focused on realistic pathways towards a more vibrant and equitable future. View a full list of TED’s many programs and initiatives.
        </div>
      </AnimatedSection>

      <style jsx global>{`
        .faq-title-interactive {
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
