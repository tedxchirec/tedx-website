import React from "react";
import SpeakerCard from "../ui/SpeakerCard";
import AnimatedSection from "../ui/AnimatedSection";

const guestSpeakers = [
  {
    description:
      "Dr. Jane Smith is a world-renowned expert in innovation and technology, with over 20 years of experience leading global teams.",
    image: "/image/about/guest1.jpg",
  },
  {
    description:
      "Prof. John Doe is a celebrated author and thought leader, inspiring audiences worldwide with his groundbreaking research.",
    image: "/image/about/guest2.jpg",
  },
  {
    description:
      "Ms. Emily Lee is an industry leader, known for her transformative work in social entrepreneurship and impact.",
    image: "/image/about/guest3.jpg",
  },
];

const studentSpeakers = [
  {
    description:
      "Aarav Patel is an aspiring scientist passionate about climate solutions and youth advocacy.",
    image: "/image/about/student1.jpg",
  },
  {
    description:
      "Sara Kim is a young entrepreneur building tech for good and empowering her peers.",
    image: "/image/about/student2.jpg",
  },
  {
    description:
      "Riya Singh is a social activist dedicated to education and equality for all.",
    image: "/image/about/student3.jpg",
  },
];

const SpeakersSection: React.FC = () => (
  <AnimatedSection className="relative z-10 py-24 px-6 md:px-12 bg-black/90">
    {/* Unique background for guest speakers */}
    <div className="absolute left-0 top-0 w-40 h-40 bg-gradient-to-br from-red-500/30 to-transparent rounded-full blur-2xl -z-10" />
    <div className="absolute right-0 top-1/2 w-32 h-32 bg-red-400/20 rounded-full blur-2xl -z-10" />
    <div className="max-w-5xl mx-auto pb-20 md:pb-28">
      <h2 className="text-3xl md:text-4xl font-extrabold text-red-500 mb-8 md:mb-12 tracking-tight drop-shadow-lg text-center">
        Guest Speakers
      </h2>
      <div className="flex flex-wrap gap-10 md:gap-14 justify-center mb-20 md:mb-28">
        {guestSpeakers.map((speaker, idx) => (
          <SpeakerCard
            key={idx}
            height={320}
            width={240}
            image={speaker.image}
            description={speaker.description}
            descriptionClassName="text-base md:text-lg font-medium md:font-semibold leading-snug md:leading-normal px-2 md:px-4"
          />
        ))}
      </div>
    </div>
    {/* Unique background for student speakers */}
    <div className="absolute right-0 bottom-0 w-40 h-40 bg-gradient-to-tl from-red-500/20 to-transparent rounded-full blur-2xl -z-10" />
    <div className="absolute left-0 bottom-1/2 w-32 h-32 bg-red-400/10 rounded-full blur-2xl -z-10" />
    <div className="max-w-5xl mx-auto pb-10 md:pb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-red-500 mb-8 md:mb-12 tracking-tight drop-shadow-lg text-center">
        Student Speakers
      </h2>
      <div className="flex flex-wrap gap-10 md:gap-14 justify-center">
        {studentSpeakers.map((speaker, idx) => (
          <SpeakerCard
            key={idx}
            height={320}
            width={240}
            image={speaker.image}
            description={speaker.description}
            descriptionClassName="text-base md:text-lg font-medium md:font-semibold leading-snug md:leading-normal px-2 md:px-4"
          />
        ))}
      </div>
    </div>
    <style jsx>{`
      @media (max-width: 768px) {
        section, .animated-section {
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
