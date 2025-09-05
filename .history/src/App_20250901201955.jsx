import { useEffect } from "react";
import Navbar from "./navbar/Navbar";
import Index from "./Pages/Index";
import Skills from "./Pages/Skills";
import Cards from "./Cards/Cards";
import Contact from "./Contact/contact";
import "./App.css";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Navbar />

      <section id="home" className="section">
        <Index />
      </section>

      <section id="skills" className="section">
        <Skills />
      </section>

      <section id="projects" className="section">
        <Cards />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>
    </>
  );
}

export default App;
