// src/sections/Projects.tsx
import React from "react";
import { projects } from "../../../utils/data/projects";
import ProjectCard from "../../../components/helper/ProjectCard";

const Projects: React.FC = () => (
  <section id="projects" className="py-20 px-4">
    <div>
      <img
        src="/section.svg"
        alt="Grid Overlay"
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0 pointer-events-none"
      />
    </div>

    <div className="relative border-t bg-background border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
      </div>
    </div>

    <div className="relative z-10 max-w-6xl mx-auto text-white text-center">
      <div className="mb-14">
        <h2 className="inline-block px-6 py-2 text-xl rounded-md bg-[#1a1443] border border-white/10 shadow-glow">
          Projects
        </h2>
      </div>
    </div>
    {projects.map((project, idx) => (
      <ProjectCard key={idx} {...project} reverse={idx % 1 === 1} />
    ))}
  </section>
);

export default Projects;
