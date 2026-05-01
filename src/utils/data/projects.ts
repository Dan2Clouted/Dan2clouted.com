import danimeImg from "../img/danime.png";
import demoportfolioImg from "../img/demoportfolio.png";
import tvshowImg from "../img/danieltvshow.png";

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
    name: "TV Show Finder",
    description:
      "A web app to search and explore TV shows using live API data.",
    tech: ["JavaScript", "HTML", "CSS", "TVMaze API"],
    image: tvshowImg,
    github: "https://github.com/Dan2Clouted/Project-TV-Show",
    demo: "https://tvshow.dan2clouted.com",
  },
  {
    name: "Danime",
    description: "An anime tracker web app with live API search.",
    tech: ["C#", "ASP.NET", "Jikan API", "SQLite"],
    image: danimeImg,
    github: "https://github.com/dan2clouted/danime",
    demo: "https://danime.dan2clouted.com",
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
