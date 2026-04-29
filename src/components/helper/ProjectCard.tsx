import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

interface Props {
  name: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  reverse?: boolean; // to alternate image/text
}

const ProjectCard: React.FC<Props> = ({
  name,
  description,
  tech,
  image,
  github,
  demo,
  reverse,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className={`flex flex-col md:flex-row ${
      reverse ? "md:flex-row-reverse" : ""
    } min-h-[340px] md:gap-x-16 mb-20`}
  >
    {/* Image - always vertically centered */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="md:w-1/2 w-full flex items-center justify-center"
    >
      <img
        src={image}
        alt={name}
        className="rounded-xl shadow-xl w-full max-w-[480px] object-cover"
      />
    </motion.div>
    {/* Info - always vertically centered */}
    <div className="md:w-1/2 w-full flex items-center px-0 md:px-10 mt-6 md:mt-0">
      <div>
        <h3 className="text-3xl font-bold text-white font-mont mb-3">{name}</h3>
        <p className="text-lg text-muted-foreground mb-3 font-nun">
          {description}
        </p>
        <ul className="text-white/80 mb-6 font-nun list-disc list-inside">
          {tech.map((t, idx) => (
            <li key={idx}>{t}</li>
          ))}
        </ul>
        {(github || demo) && (
          <div className="flex items-center gap-4">
            <a
              href={github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-white font-semibold border-b-2 border-white/30 hover:border-primary transition pb-1`}
              style={{
                pointerEvents: github ? "auto" : "none",
                opacity: github ? 1 : 0.5,
              }}
            >
              Explore this project <FaGithub />
            </a>
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary font-bold underline underline-offset-4"
              >
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
