import { useEffect } from "react";
import Navbar from "./navbar/Navbar";
import Index from "./Pages/Index";
import Skills from "./Pages/Skills";
import Cards from "./Cards/Cards";
import Contact from "./Contact/contact";
import "./App.css";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate"); // ye class trigger karegi
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".section").forEach((sec) => {
      observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <section id="home" className="section home"><Index /></section>
      <section id="skills" className="section skills"><Skills /></section>
      <section id="projects" className="section projects"><Cards /></section>
      <section id="contact" className="section contact"><Contact /></section>
    </>
  );
}

export default App;
