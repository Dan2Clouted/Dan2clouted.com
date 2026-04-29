import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin, FaUserFriends } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center bg-background overflow-hidden px-4">
      <img
        src="/hero.svg"
        alt="Hero Overlay"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40 pointer-events-none select-none"
      />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white text-4xl md:text-5xl font-extrabold leading-tight z-10"
      >
        Hello,
        <br />I am <span className="text-primary">DANIEL ADERIBIGBE</span>, I am
        a
        <br />
        <span className="text-secondary"> Aspiring Software Engineer</span>.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.5 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        className="flex gap-6 mt-10 text-primary text-2xl z-10"
      >
        <a
          href="https://github.com/dan2clouted"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-all duration-300"
        >
          <BsGithub />
        </a>
        <a
          href="https://linkedin.com/in/dan2clouted"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-all duration-300"
        >
          <FaLinkedin />
        </a>
      </motion.div>

      {/* Button Group */}
      <div className="flex gap-6 mt-10 z-10">
        <a
          href="#contact"
          className="flex items-center px-8 py-3 rounded-full border-2 border-primary text-white font-bold tracking-wide transition-all hover:bg-primary/10 focus:outline-none"
        >
          CONTACT ME <FaUserFriends className="ml-2 text-xl" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
