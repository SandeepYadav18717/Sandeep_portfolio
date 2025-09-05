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
    const show = () =>
      sections.forEach(sec => {
        if (sec.getBoundingClientRect().top < window.innerHeight - 100)
          sec.classList.add("visible");
      });
    window.addEventListener("scroll", show);
    show();
    return () => window.removeEventListener("scroll", show);
  }, []);

  return (
    <>
      <Navbar />
      <section id="home" className="section"><Index /></section>
      <section id="skills" className="section"><Skills /></section>
      <section id="projects" className="section"><Cards /></section>
      <section id="contact" className="section"><Contact /></section>
    </>
  );
}

export default App;
