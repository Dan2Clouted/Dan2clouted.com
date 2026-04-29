// src/sections/About.tsx
import React from "react";

const About: React.FC = () => (
  <section id="about" className="py-24 px-4 bg-background flex justify-center">
    <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start md:gap-x-16">
      {/* Left: Text */}
      <div className="md:w-2/3 w-full mb-10 md:mb-0 font-nun">
        <h2 className="text-2xl mb-4 text-secondary font-bold">WHO AM I?</h2>
        <p className=" text-text font-nun leading-relaxed text-xl">
          My name is{" "}
          <span className="font-bold text-primary">DANIEL ADERIBIGBE</span>
          . I’m a passionate and curious Software Engineer who loves turning
          ideas into real web applications.
          <br />
          I thrive on learning new technologies, solving real-world problems,
          and pushing myself to grow every day. I always bring a creative and
          committed approach to my work, and I enjoy collaborating with others
          to achieve the best results.
          <br />
          My favorite challenges are those that involve APIs, databases, and
          making digital experiences that genuinely help people
        </p>
      </div>
      {/* Right: Avatar */}
      <div className="md:w-1/3 w-full flex justify-center md:justify-end">
        <img
          src="utils/img/danielavatar.png"
          alt="Daniel's avatar"
          className="w-48 h-48 rounded-xl shadow-lg object-cover bg-white/10"
        />
      </div>
    </div>
  </section>
);

export default About;
