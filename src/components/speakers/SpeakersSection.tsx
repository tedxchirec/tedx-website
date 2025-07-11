import React from "react";
import SpeakerCard from "../ui/SpeakerCard";
import AnimatedSection from "../ui/AnimatedSection";

const guestSpeakers = [
  {
    description:
      "Dr. Jane Smith is a world-renowned expert in innovation and technology, with over 20 years of experience leading global teams.",
    image: "/speakers/guest1.png",
  },
  {
    description:
      "Prof. John Doe is a celebrated author and thought leader, inspiring audiences worldwide with his groundbreaking research.",
    image: "/speakers/guest2.png",
  },
  {
    description:
      "Ms. Emily Lee is an industry leader, known for her transformative work in social entrepreneurship and impact.",
    image: "/speakers/guest3.png",
  },
];

const studentSpeakers = [
  {
    description:
      "Aarav Patel is an aspiring scientist passionate about climate solutions and youth advocacy.",
    image: "/speakers/student1.png",
  },
  {
    description:
      "Sara Kim is a young entrepreneur building tech for good and empowering her peers.",
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
  <AnimatedSection className="relative z-10 py-24 px-6 md:px-12 bg-black/90">
    {/* Unique background for guest speakers */}
    <div className="absolute left-0 top-0 w-40 h-40 bg-gradient-to-br from-red-500/30 to-transparent rounded-full blur-2xl -z-10" />
    <div className="absolute right-0 top-1/2 w-32 h-32 bg-red-400/20 rounded-full blur-2xl -z-10" />
    <div className="w-full flex flex-col items-center pb-8 md:pb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-red-500 mb-8 md:mb-12 tracking-tight drop-shadow-lg text-center">
        Guest Speakers
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
      <h2 className="text-3xl md:text-4xl font-extrabold text-red-500 mb-8 md:mb-12 tracking-tight drop-shadow-lg text-center">
        Student Speakers
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
);

export default SpeakersSection;
