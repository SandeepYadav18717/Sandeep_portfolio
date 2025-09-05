import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar/Navbar'
import Home from './Pages/Index.jsx'
import Cards, { Card } from './Cards/Cards.jsx'
import Skills from './Pages/Skills.jsx'
import Cert from './Certifitae/Certi.jsx'
import Contact from './Contact/contact.jsx'







function App() {

  return (
    <>
    <Nav
    <Home/>
    <Skills/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <Cards/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <Cert/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <Contact/>
   
   
    
    
    
    
    
    </>
  )
}

export default App 