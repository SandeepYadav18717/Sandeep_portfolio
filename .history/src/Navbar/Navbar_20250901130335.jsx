import "./Navabr.css";

import Navbar from './navbar/Navbar'
import Home from './Pages/Index.jsx'
import Cards, { Card } from './Cards/Cards.jsx'
import Skills from './Pages/Skills.jsx'
import Cert from './Certifitae/Certi.jsx'
import Contact from './Contact/contact.jsx'

import { useState,useEffect } from 'react'
function Navbar() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setLoaded(true);
  }, []);
  function About(){
    location.href = 'Home.jsx';
    console.log("clickedded");
  }
  function Project(){
    location.href = 'Cards.jsx';
    console.log("clicked");
  }

    return (
        <div id="container">
      <a className="nav-item" href="Index.jsx">Home</a>
      
      <a className="nav-item" href=".Pages/Skill.jsx">Skills</a>
      <a className="nav-item" href="./Cards/Cards.jsx">Projects</a>
      <a className="nav-item" href="#contact">Contact</a>
        </div>
    )
}

export default Navbar;