"use client";

import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function RegulationsPage() {
  return (
    <AnimatedSection className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-4 py-20 md:py-32">
      {/* Abstract background elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Centered and mobile-friendly shapes */}
        <div className="absolute left-1/2 top-8 w-32 h-32 bg-red-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.3s', transform: 'translateX(-50%)' }} />
        <div className="absolute left-1/2 bottom-8 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.1s', transform: 'translateX(-50%)' }} />
        {/* Existing shapes, now with responsive tweaks */}
        <div className="hidden md:block absolute left-1/4 top-0 w-40 h-40 bg-red-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="hidden md:block absolute right-10 top-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1.2s" }} />
        <div className="hidden md:block absolute left-8 bottom-0 w-28 h-28 bg-red-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="hidden md:block absolute right-1/4 bottom-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2.5s" }} />
      </div>
      <div className="w-full max-w-3xl mx-auto text-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-red-500 mb-8 drop-shadow-lg">Attendee Rules and Regulations</h1>
        <div className="bg-[#18181c]/80 rounded-2xl shadow-2xl border border-white/10 p-6 md:p-10 text-left text-gray-200 backdrop-blur-md">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Registration</h2>
          <ul className="list-disc list-inside space-y-3 mb-8">
            <li>This registration is non-refundable, non-transferable, and does not allow for cancellation or rescheduling; it is valid for one person only with no refunds for no-shows.</li>
            <li>By Registering and making a payment you agree that all details provided are accurate.</li>
            <li>All registrations are subject to verification, any discrepancy may result in the cancellation of the registration.</li>
            <li>Registrations on event day will begin at 3:00 pm.</li>
            <li>Request all attendees to be present at the school campus by 3:45 pm.</li>
            <li>Attendees reaching late at the venue will NOT be allowed inside the auditorium while talks are in progress.</li>
          </ul>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Dress Code</h2>
          <ul className="list-disc list-inside space-y-3 mb-8">
            <li>All attendees are expected to follow a smart and casual dress code.​</li>
            <li>Acceptable attire includes: Trousers with a shirt/blazer, Jeans with a shirt/top.</li>
            <li>Please note that Ripped jeans, sheer tops, sleeveless tops, dresses, skirts, and any other attire with an exposed midriff are not allowed.</li>
            <li>School Uniform is not allowed (For CHIREC students).</li>
          </ul>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">The Event Day</h2>
          <ul className="list-disc list-inside space-y-3 mb-8">
            <li>The session will begin at 4:00 pm. Request all attendees to turn your phones on silent mode once the event begins.</li>
            <li>Attendees are not allowed to use electronic devices during sessions. They may use their phone during the break.</li>
            <li>Filming during the sessions is strictly prohibited according to the Tedx guidelines, and necessary action will be taken if found doing so.</li>
            <li>Attendees are expected to return to the venue immediately after the break. Doors will be closed once the session starts.</li>
            <li>Snacks along with tea and coffee will be provided during breaks and should only be consumed outside the MFH.</li>
            <li>All attendees will need to avail their own conveyance while going back in the evening.</li>
          </ul>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Best Practices</h2>
          <ul className="list-disc list-inside space-y-3 mb-8">
            <li>We request you not to leave half-finished water bottles lying around the venue.</li>
            <li>Maintain silence during speaker talks and performances to get the best out of the talk.</li>
            <li>Any movement during the talks and performances are strongly discouraged.</li>
            <li>Any individual might be asked to leave the venue without any liability of a refund if there is any behavioral misdemeanor.</li>
            <li>This decision rests with the conference and venue management and is final and binding.</li>
          </ul>
          <p className="mt-6 text-base md:text-lg text-gray-400">
            As this is a formal event, attendees are expected to maintain decorum and adhere to the aforementioned guidelines. Failure to comply may result in strict action.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
