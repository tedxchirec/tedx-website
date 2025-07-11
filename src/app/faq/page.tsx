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
      {/* Abstract background shapes - left/right only, evenly spaced, visible on all devices */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Left side (desktop) */}
        <div className="hidden md:block absolute left-0 top-8 w-16 h-16 bg-red-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.2s' }}></div>
        <div className="hidden md:block absolute left-0 top-1/3 w-12 h-12 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        <div className="hidden md:block absolute left-0 top-2/3 w-20 h-20 bg-red-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.4s' }}></div>
        <div className="hidden md:block absolute left-0 bottom-8 w-14 h-14 bg-red-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2.0s' }}></div>
        {/* Right side (desktop) */}
        <div className="hidden md:block absolute right-0 top-12 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="hidden md:block absolute right-0 top-1/2 w-16 h-16 bg-red-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.1s', transform: 'translateY(-50%)' }}></div>
        <div className="hidden md:block absolute right-0 top-3/4 w-12 h-12 bg-red-300/10 rounded-full blur-md animate-float" style={{ animationDelay: '1.7s' }}></div>
        <div className="hidden md:block absolute right-0 bottom-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2.3s' }}></div>
        {/* Mobile (always visible, smaller) */}
        <div className="md:hidden absolute left-2 top-1/4 w-10 h-10 bg-red-400/10 rounded-full blur-lg animate-float" style={{ animationDelay: '0.6s' }}></div>
        <div className="md:hidden absolute left-2 bottom-1/4 w-8 h-8 bg-red-500/10 rounded-full blur-md animate-float" style={{ animationDelay: '1.8s' }}></div>
        <div className="md:hidden absolute right-2 top-2/4 w-10 h-10 bg-white/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        <div className="md:hidden absolute right-2 bottom-1/4 w-8 h-8 bg-red-300/10 rounded-full blur-md animate-pulse" style={{ animationDelay: '2.4s' }}></div>
      </div>
      <h1 className="ibm-font text-4xl md:text-6xl font-bold text-center text-red-500 mb-12 z-10">Frequently Asked Questions</h1>
      <div className="w-full max-w-2xl mx-auto z-10">
        {faqs.map((faq, idx) => (
          <AnimatedSection
            key={idx}
            delay={0.08 * idx}
            className="w-full"
          >
            <div className="mb-4 rounded-2xl bg-white/10 border border-white/20 shadow-lg overflow-hidden">
              <button
                className={`w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none transition-colors duration-200 ${open === idx ? 'bg-red-500/10' : ''}`}
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <span className="text-lg md:text-xl font-semibold text-white ibm-font">{faq.q}</span>
                <svg
                  className={`w-6 h-6 text-red-400 transform transition-transform duration-200 ${open === idx ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-panel-${idx}`}
                className={`px-6 pb-5 text-base md:text-lg text-gray-200 transition-all duration-200 ${open === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
                style={{
                  transitionProperty: 'max-height, opacity',
                }}
              >
                {open === idx && <div>{faq.a}</div>}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
