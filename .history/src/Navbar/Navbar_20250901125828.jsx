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
       
}

export default Navbar;