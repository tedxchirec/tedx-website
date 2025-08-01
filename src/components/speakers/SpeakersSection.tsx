import React from "react";
import SpeakerCard from "../ui/SpeakerCard";
import AnimatedSection from "../ui/AnimatedSection";

// Global styles for heading animation and glow
function SpeakersSectionGlobalStyles() {
  return (
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
  );
}

const guestSpeakers = [
  {
    description:
       "Shantha Sinha, former Chair of the National Commission for Protection of Child Rights (2007–2013) and Founder Secretary Trustee of MV Foundation (1981–2007), removed over one million children from work and mainstreamed them into schools across India, pioneering bridge courses for older children. She served as Professor of Political Science at the University of Hyderabad and received the Padma Shri (1998), Albert Shanker International Educational Award (1998), and Ramon Magsaysay Award (2003). Her work across states like Andhra Pradesh, Bihar, and Telangana revealed that all out-of-school children are child labourers and that poverty is not the root cause, challenging many entrenched myths.",
    image: "/speakers/guest1.png",
  },
  {
    description:
      "Sai, born with over 60% physical disability, overcame repeated rejections to excel as a gold medalist from CBIT, earn an MS in Computer Science from the University of Wisconsin, and an MBA from ISB. Now a Deloitte consultant, he became the first Asian with a disability to set foot on Antarctica and the first physically challenged Indian to skydive from 14,000 ft, also featuring on Satyamev Jayate. A recipient of the Helen Keller Role Model Award and ISB Torch Bearer Award, Sai co-founded Sahasra, impacting 15,000+ students, and has worked to promote employment for the physically challenged in India.",
    image: "/speakers/guest2.png",
  },
];

const studentSpeakers = [
  {
    description:
      "Akhilesh Palakodeti is a Y2 IBDP student at CHIREC International School where he studies Math, Physics, and Economics. He is deeply passionate about history, politics and sociology. He is an avid reader of the Economist magazine, who enjoys high-tension discussions and varying perspectives. Akhilesh represented India as a member of the Indian Debate Squad in 2023 and is the winner and best novice speaker of the International Competition for Young Debaters hosted by the Cambridge Union. He thrives on critical questions, late-night discussions, and mildly alarming amounts of coffee.",
    image: "/speakers/student1.png",
  },
  {
    description:
      "Rikith is a 12th grade CBSE student hoping to pursue economics and finance. When he’s not at an MUN strengthening his articulation skills and love for policy you’ll probably find him appealing to the umpire for a lbw that’s clearly not out! His friends call him an enthusiastic yapper- someone who can go on and on, about absolutely nothing. As a frequent baker he’s always trying to master intricate dishes which are bound to go south. His brownies are a school favourite! He is ecstatic to be part of the TedX team as a speaker and can’t wait till the day of the event!",
    image: "/speakers/student2.png",
  },
  {
    description:
      "Manya is a Grade 12 IBDP student at CHIREC. She started Project SignVerse to raise awareness about Indian Sign Language through interactive, empathy-driven sessions. Later, as part of ISB’s I-Venture program, she pitched AccessAbility — an AI-based idea to make sign language more accessible in everyday spaces. Outside of that, she’s usually painting, journaling, or learning Mandarin and Korean — with more languages definitely on the way. Her TEDx talk explores how silence, failure, and connection intertwine — and the quiet lessons they leave behind.",
    image: "/speakers/student3.png",
  },
  {
    description:
      "Thrinay is a driven student passionate about creating impact through leadership and innovation. As former school president and founder of CAS Connect, a platform linking Hyderabad’s youth and corporate organizations with NGOs, he blends tech with social good. His work with NGOs and victories at various  business summits  reflect his commitment to civic engagement and creative communication. A top scorer in Economics, Thrinay is also an avid Formula One fan, listener, and fast learner. In his talk, he explores failure: not as defeat, but as a chance to grow. He believes our response to failure shapes who we are more than the failure itself.",
    image: "/speakers/student4.png",
  },
];

const SpeakersSection: React.FC = () => (
  <>
    <SpeakersSectionGlobalStyles />
    <AnimatedSection className="relative z-10 pt-5 pb-6 px-6 md:px-12 bg-black/90">
      {/* Unique background for guest speakers */}
      <div className="absolute left-0 top-0 w-40 h-40 bg-gradient-to-br from-red-500/30 to-transparent rounded-full blur-2xl -z-10" />
      <div className="absolute right-0 top-1/2 w-32 h-32 bg-red-400/20 rounded-full blur-2xl -z-10" />
      <div className="w-full flex flex-col items-center pb-8 md:pb-12">
        <h2 className="geist-font text-[2.2rem] md:text-[3.5rem] font-extrabold text-red-500 mb-8 md:mb-12 leading-none relative z-10 faq-title-interactive text-center">
          <span className="relative inline-block">
            Guest Speakers
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
              <span className="block w-full h-full rounded-full bg-gradient-to-br from-red-500/20 via-red-400/3 to-white/0 blur-xl animate-title-pulse" />
            </span>
          </span>
        </h2>
        <div className="w-full flex flex-wrap justify-center gap-x-8 gap-y-12 px-2 md:px-8">
          {guestSpeakers.map((speaker, idx) => (
            <div
              key={idx}
              className="w-full max-w-[340px] aspect-[4/5] flex justify-center items-center"
            >
              <SpeakerCard
                width="100%"
                height="100%"
                image={speaker.image}
                description={speaker.description}
                descriptionClassName="text-[15px] font-normal leading-snug px-2"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Unique background for student speakers */}
      <div className="absolute right-0 bottom-0 w-40 h-40 bg-gradient-to-tl from-red-500/20 to-transparent rounded-full blur-2xl -z-10" />
      <div className="absolute left-0 bottom-1/2 w-32 h-32 bg-red-400/10 rounded-full blur-2xl -z-10" />
      <div className="w-full flex flex-col items-center pb-10 md:pb-16">
        <h2 className="geist-font text-[2.2rem] md:text-[3.5rem] font-extrabold text-red-500 mb-8 md:mb-12 leading-none relative z-10 faq-title-interactive text-center">
          <span className="relative inline-block">
            Student Speakers
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
              <span className="block w-full h-full rounded-full bg-gradient-to-br from-red-500/20 via-red-400/3 to-white/0 blur-xl animate-title-pulse" />
            </span>
          </span>
        </h2>
        <div className="w-full flex flex-wrap justify-center gap-x-8 gap-y-12 px-2 md:px-8">
          {studentSpeakers.map((speaker, idx) => (
            <div
              key={idx}
              className="w-full max-w-[340px] aspect-[4/5] flex justify-center items-center"
            >
              <SpeakerCard
                width="100%"
                height="100%"
                image={speaker.image}
                description={speaker.description}
                descriptionClassName="text-[0px] font-normal leading-snug px-2"
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          section,
          .animated-section {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          .flex-wrap {
            flex-direction: column;
            gap: 2rem;
            align-items: center;
          }
          .max-w-5xl {
            max-width: 100%;
          }
        }
      `}</style>
    </AnimatedSection>
  </>
);

export default SpeakersSection;
