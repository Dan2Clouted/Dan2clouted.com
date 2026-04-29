import EducationCard from "../../helper/EducationCard";
import Lottie from "lottie-react";
import educationAnimation from "../../../assets/education.json";

const Education = () => {
  return (
    <div className="relative w-full bg-background overflow-hidden px-6 py-28">
      {/* Background Grid */}
      <img
        src="/section.svg"
        alt="Grid Overlay"
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-white text-center">
        {/* Title */}
        <div className="mb-14">
          <h2 className="inline-block px-6 py-2 text-xl rounded-md bg-[#1a1443] border border-white/10 shadow-glow font-mont">
            Educations
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Animation */}
          <div className="flex justify-center">
            <Lottie
              animationData={educationAnimation}
              loop={true}
              className="max-w-[380px] w-full h-auto"
            />
          </div>

          {/* Education Cards */}
          <div className="flex flex-col gap-6">
            <EducationCard
              year="2023 – 2025"
              title="FURTHER EDUCATION COLLEGE (T-LEVELS)"
              institution="Barnsley College"
            />
            <EducationCard
              year="2022 – 2023"
              title="GENERAL CERTIFICATE OF SECONDARY EDUCATION (GCSE)"
              institution="Saint Pius X Catholic High School"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
