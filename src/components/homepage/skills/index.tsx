import { skills } from "@/utils/data/skills";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      {/* Background glow */}
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-1/2 -translate-x-1/2 blur-3xl opacity-20 pointer-events-none" />

      {/* Gradient divider line */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Skills title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Scrolling Skills */}
      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skills.map((skill, id) => (
            <div
              key={id}
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group hover:scale-110 cursor-pointer"
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] group-hover:border-violet-500 transition-all duration-500">
                <div className="flex justify-center -translate-y-[1px]">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-10 w-auto rounded-lg"
                  />
                  <p className="text-white text-sm sm:text-lg">{skill.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
