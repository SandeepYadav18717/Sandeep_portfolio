import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar/Navbar'
import Home from './Pages/Index.jsx'
import Cards, { Card } from './Cards/Cards.jsx'
import Skills from './Pages/Skills.jsx'
import Index from './Pages/Index.jsx'
import Cert from './Certifitae/Certi.jsx'
import Contact from './Contact/contact.jsx'
import Checkbox from "./Practice/Checkbox.jsx"







function App() {

  return (
    <>
    <Home/>
    <Skills/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <Card/>
    <Cert/>
   
   
    
    
    
    
    
    </>
  )
}

export default App 