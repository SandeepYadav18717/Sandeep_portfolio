import "./Navabr.css";



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
      <a className="nav-item" href="#home">Home</a>
      <a className="nav-item" href="#about">About</a>
      <a className="nav-item" href="#skills">Skills</a>
      <a className="nav-item" href="#projects">Projects</a>
      <a className="nav-item" href="#contact">Contact</a>
        </div>
    )
}

export default Navbar;