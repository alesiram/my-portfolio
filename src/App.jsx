import { useState } from 'react'

import './App.css'
import About from '/src/components/About.jsx'
import Navbarmui from '/src/components/Navbar.jsx'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Hello from './components/Hello'


function App() {

  return (
    <>
     <Navbarmui />
      <div class="text-box">
      <Hello />
        <About />
        <Projects />
        <Contact /> 
        
      </div>
      
    </>
  )
}

export default App
