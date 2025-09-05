import { useEffect } from "react";
import Navbar from "./navbar/Navbar";
import Index from "./Pages/Index";
import Skills from "./Pages/Skills";
import Cards from "./Cards/Cards";
import Contact from "./Contact/contact";
import "./App.css";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".page");

    function animate() {
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
          sec.classList.add("active"); // show animation
        } else {
          sec.classList.remove("active"); // reset
        }
      });
    }

    // run on scroll + load + navigation
    window.addEventListener("scroll", animate);
    window.addEventListener("popstate", animate); 
    animate(); // first time

    return () => {
      window.removeEventListener("scroll", animate);
      window.removeEventListener("popstate", animate);
    };
  }, []);

  return (
    <>
      <Navbar />
      <section id="home" className="page"><Index /></section>
      <section id="skills" className="page"><Skills /></section>
      <section id="projects" className="page"><Cards /></section>
      <section id="contact" className="page"><Contact /></section>
    </>
  );
}

export default App;
