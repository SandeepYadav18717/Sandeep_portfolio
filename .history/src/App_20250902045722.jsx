import { useEffect } from "react";
import Navbar from "./navbar/Navbar";
import Index from "./Pages/Index";
import Skills from "./Pages/Skills";
import Certi,{c} from "./Certifitae/Certi";
import Cards from "./Cards/Cards";
import Contact from "./Contact/contact";
import "./App.css";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 } // 20% section visible hote hi trigger
    );

    document.querySelectorAll(".section").forEach((sec) => {
      observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>


      <Navbar />
      <section id="home" className="section"><Index /></section>
      <section id="skills" className="section"><Skills /></section>
      <section id="projects" className="section"><Cards /></section>
      <section id="Certifitae" className="section"><Certi /></section>
       <section id="contact" className="section"><Contact /></section>
    </>
  );
}

export default App;