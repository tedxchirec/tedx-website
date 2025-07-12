"use client";

import React, { useState } from "react";
import AnimatedSection from "../../components/ui/AnimatedSection";

const faqs = [
  {
    q: "How can we register?",
    a: "Registrations will open soon—stay tuned for the official launch and complete instructions!",
  },
  {
    q: "Can I get a refund if I cancel or don’t show up?",
    a: "No, all registrations are non‑refundable, non‑transferable, and cannot be canceled or rescheduled. No refunds for no‑shows.",
  },
  {
    q: "Can someone else use my ticket or registration?",
    a: "No, each registration is valid for one person only and cannot be transferred.",
  },
  {
    q: "What’s the venue?",
    a: "The event will be held at CHIREC, Serilingampally campus.",
  },
  {
    q: "What time should I arrive at the venue on the day of the event?",
    a: "Registration opens at 3:00 PM. Please arrive before 3:45 PM—latecomers won't be admitted once the talks begin.",
  },
  {
    q: "Will food be provided at the event?",
    a: "Yes! Snacks, tea, coffee, and dinner will be provided. There will also be stalls available during the event.",
  },
  {
    q: "What is the dress code? Can I come in school uniform?",
    a: "Dress code is smart‑casual (e.g., trousers with a shirt/blazer, or jeans with a top). School uniforms are not allowed (for CHIREC students).",
  },
  {
    q: "When does the event start, and can we use phones?",
    a: "The session begins at 4:00 PM. Phones must be on silent and no electronic devices are allowed during sessions (they may be used during breaks).",
  },
  {
    q: "Are we allowed to film or record the sessions?",
    a: "No. Filming or recording during sessions is strictly prohibited according to TEDx guidelines. Violators may be removed without refund.",
  },
  {
    q: "Is transport provided for attendees?",
    a: "No. Attendees must arrange their own transportation to and from the venue.",
  },
  {
    q: "When will breaks happen, and where can we eat?",
    a: "Tea, coffee, snacks, and dinner will be served outside the Main Function Hall during scheduled breaks. Please return promptly after breaks—doors will close once sessions resume.",
  },
  {
    q: "Are there any other venue rules?",
    a: "Maintain silence and avoid moving during talks. Any behavioral misconduct may result in being asked to leave without refund. This decision is final.",
  },
  {
    q: "What if my registration details are incorrect?",
    a: "Registrations are verified on-site. Any inaccurate information may lead to cancellation of your spot.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-black pb-24 pt-32 md:pt-40 px-4 md:px-0 overflow-hidden">
      {/* Decorative animated background shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Left side */}
        <div className="hidden md:block absolute left-0 top-10 w-24 h-24 bg-gradient-to-br from-red-500/30 to-white/0 rounded-full blur-2xl animate-pulse" />
        <div
          className="hidden md:block absolute left-0 top-1/3 w-16 h-16 bg-red-400/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "0.6s" }}
        />
        <div
          className="hidden md:block absolute left-0 top-2/3 w-28 h-28 bg-white/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1.2s" }}
        />
        <div
          className="hidden md:block absolute left-0 bottom-10 w-20 h-20 bg-red-500/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1.8s" }}
        />
        {/* Right side */}
        <div className="hidden md:block absolute right-0 top-20 w-28 h-28 bg-gradient-to-tl from-red-400/20 to-white/0 rounded-full blur-2xl animate-pulse" />
        <div
          className="hidden md:block absolute right-0 top-1/2 w-16 h-16 bg-white/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "0.9s", transform: "translateY(-50%)" }}
        />
        <div
          className="hidden md:block absolute right-0 top-3/4 w-24 h-24 bg-red-300/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="hidden md:block absolute right-0 bottom-8 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2.1s" }}
        />
        {/* Corners for extra fill */}
        <div
          className="hidden md:block absolute left-8 top-8 w-10 h-10 bg-red-500/10 rounded-full blur-lg animate-bounce"
          style={{ animationDelay: "1.3s" }}
        />
        <div
          className="hidden md:block absolute right-8 bottom-8 w-10 h-10 bg-red-400/10 rounded-full blur-lg animate-bounce"
          style={{ animationDelay: "1.7s" }}
        />
        {/* Mobile */}
        <div
          className="md:hidden absolute left-2 top-1/5 w-12 h-12 bg-red-400/20 rounded-full blur-lg animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="md:hidden absolute left-2 bottom-1/5 w-10 h-10 bg-red-500/10 rounded-full blur-md animate-pulse"
          style={{ animationDelay: "1.2s" }}
        />
        <div
          className="md:hidden absolute right-2 top-1/4 w-12 h-12 bg-white/10 rounded-full blur-lg animate-float"
          style={{ animationDelay: "1.1s" }}
        />
        <div
          className="md:hidden absolute right-2 bottom-1/4 w-10 h-10 bg-red-300/10 rounded-full blur-md animate-pulse"
          style={{ animationDelay: "1.8s" }}
        />
      </div>

      {/* Animated FAQ Title */}
      <AnimatedSection delay={0}>
        <h1 className="geist-font text-[2.8rem] md:text-[5rem] font-extrabold text-red-500 mb-8 leading-none relative z-10 faq-title-interactive">
          <span className="relative inline-block">
            Frequently Asked Questions
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
              <span className="block w-full h-full rounded-full bg-gradient-to-br from-red-500/20 via-red-400/3 to-white/0 blur-xl animate-title-pulse" />
            </span>
          </span>
        </h1>
      </AnimatedSection>

      {/* FAQ Accordions */}
      <div className="w-full max-w-3xl mx-auto z-10 grid gap-6">
        {faqs.map((faq, idx) => (
          <AnimatedSection
            key={idx}
            delay={0.08 * idx + 0.1}
            className="w-full"
          >
            <div
              className={`group mb-0 rounded-2xl bg-gradient-to-br from-white/10 to-red-900/10 border border-white/20 shadow-xl overflow-hidden transition-all duration-300
                ${
                  open === idx
                    ? "scale-[1.025] shadow-2xl border-red-400/40"
                    : "hover:scale-[1.01] hover:shadow-lg"
                }
              `}
              // Make the hover effect apply to the whole card, including the answer area
              onMouseEnter={(e) => {
                e.currentTarget.classList.add("card-hovered");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.classList.remove("card-hovered");
              }}
            >
              <button
                className={`w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none transition-colors duration-200
                  ${open === idx ? "bg-red-500/10" : ""}
                `}
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <span className="text-lg md:text-xl font-semibold text-white ibm-font transition-colors duration-200 group-hover:text-red-500 card-hovered:text-red-500">
                  {faq.q}
                </span>
                <svg
                  className={`w-6 h-6 text-red-500 transform transition-transform duration-300 ${
                    open === idx ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={`faq-panel-${idx}`}
                className={`px-6 text-base md:text-lg text-gray-200 transition-all duration-500 ${
                  open === idx
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 card-hovered:bg-white/5"
                } overflow-hidden `}
                style={{
                  transitionProperty: "max-height, opacity, padding-bottom",
                  paddingBottom: open === idx ? "1.25rem" : "0rem",
                }}
              >
                {" "}
                <div
                  className={`text-[0.94rem] inter-font font-regular pt-5 ${
                    open === idx ? "animate-fade-in" : ""
                  }`}
                >
                  {" "}
                  {faq.a}{" "}
                </div>{" "}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Extra: subtle floating TEDx logo for visual interest */}
      <div className="pointer-events-none select-none absolute left-1/2 bottom-8 md:bottom-16 -translate-x-1/2 z-0 opacity-10 md:opacity-15 animate-float-slow">
        <span className="ibm-font text-5xl md:text-7xl font-extrabold text-red-500 drop-shadow-glow">
          TEDx
        </span>
      </div>
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
        .card-hovered,
        .card-hovered .card-hovered:bg-white\/5 {
          background-color: rgba(255, 255, 255, 0.05) !important;
        }
        .card-hovered .card-hovered:text-red-500 {
          color: #ef4444 !important;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-18px) scale(1.03);
          }
        }
      `}</style>
    </div>
  );
}
