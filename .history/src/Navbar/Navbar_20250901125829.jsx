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
            <div className='nav-item' >Home</div>
            <div className='nav-item'onClick= {About}>About us</div>
            <div className='nav-item'>Skills</div>
            <div className='nav-item' onClick={Project}>Project</div>
        </div>
    )
}

export default Navbar;