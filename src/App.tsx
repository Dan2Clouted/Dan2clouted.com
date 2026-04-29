import Navbar from "./components/navbar";
import Hero from "./components/homepage/hero";
import About from "./components/homepage/about";
import Experience from "./components/homepage/experience";
import Skills from "./components/homepage/skills";
import Education from "./components/homepage/education";
import Projects from "./components/homepage/projects";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/ScrollToTop";
import ContactForm from "./components/homepage/contact/contactform";

function App() {
  return (
    <div className="font-nun bg-background text-base">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
