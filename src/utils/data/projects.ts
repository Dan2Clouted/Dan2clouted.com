import danimeImg from "../img/danime.png";
import suremailerImg from "../img/suremailer.jpg";
import demoportfolioImg from "../img/demoportfolio.png";

export interface Project {
  name: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    name: "Danime",
    description: "An anime tracker web app with live API search.",
    tech: ["C#", "ASP.NET", "Jikan API", "SQLite"],
    image: danimeImg,
    github: "https://github.com/dan2clouted/danime",
    demo: "https://danime.dan2clouted.com",
  },
  {
    name: "Sure Mailer",
    description:
      "A bulk email campaign builder for managing contacts, designing custom emails, and scheduling group sends. Features campaign editing, preview, and automated delivery.",
    tech: ["PHP", "MySQL", "Mailtrap API", "JavaScript", "HTML/CSS"],
    image: suremailerImg,
    github: "",
    demo: "",
  },
  {
    name: "My Portfolio",
    description:
      "A personal portfolio website showcasing my projects, skills, and experience.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: demoportfolioImg,
    github: "https://github.com/dan2clouted/portfolio",
    demo: "https://dan2clouted.com",
  },
];
