import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#experience", label: "EXPERIENCE" },
    { href: "#skills", label: "SKILLS" },
    { href: "#education", label: "EDUCATION" },
    { href: "#projects", label: "PROJECTS" },
  ];

  return (
    // removed sticky + border; navbar is no longer stagnant and no underline
    <header className="z-50">
      <nav className="px-6 py-4 flex justify-between items-center bg-[#0b1422]/80 backdrop-blur">
        <h2 className="text-xl sm:text-2xl font-bold text-primary">
          DANIEL ADERIBIGBE
        </h2>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6 text-sm text-white">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="no-underline hover:text-primary transition duration-300 text-lg"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden p-2 text-white text-2xl"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile dropdown with smooth animation */}
      <div
        id="mobile-menu"
        className={[
          "md:hidden overflow-hidden origin-top bg-[#0b1422]/90 backdrop-blur",
          "transition-[max-height,opacity,transform] duration-300 ease-out",
          open
            ? "max-h-96 opacity-100 scale-y-100"
            : "max-h-0 opacity-0 scale-y-95",
        ].join(" ")}
      >
        <ul className="px-6 py-2 space-y-2 text-white text-lg">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 no-underline hover:text-primary transition"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
