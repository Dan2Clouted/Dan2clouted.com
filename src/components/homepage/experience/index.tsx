import ExperienceCard from "../../helper/ExperienceCard";
import Lottie from "lottie-react";
import experienceAnimation from "../../../assets/experience.json";

const Experience = () => {
  return (
    <div className="relative w-full bg-background overflow-hidden px-6 py-28 font-mont ">
      {/* Grid overlay */}
      <img
        src="/section.svg"
        alt="Grid Overlay"
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0 pointer-events-none"
      />

      {/* Background glow */}
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-1/2 -translate-x-1/2 blur-3xl opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-white text-center">
        {/* Title */}
        <div className="mb-14">
          <h2 className="inline-block px-6 py-2 text-xl rounded-md bg-[#1a1443] border border-white/10 shadow-glow">
            Experience
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Animation */}
          <div className="flex justify-center">
            <Lottie
              animationData={experienceAnimation}
              loop={true}
              className="max-w-[380px] w-full h-auto"
            />
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-8">
            <ExperienceCard
              title="JUNIOR SOFTWARE ENGINEER"
              company="ZZC System Ltd"
              date="Nov 2024 – May 2025"
            />

            <ExperienceCard
              title="SELF EMPLOYED"
              company="Code and build something everyday."
              date="Jan 2022 – Present"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
