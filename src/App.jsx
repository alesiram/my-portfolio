import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '/src/components/About.jsx'
import Navbarmui from '/src/components/Navbar.jsx'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Hello from './components/Hello'
import './App.css'


function App() {

  return (
    <>
    <a id="top" />
    <Navbarmui />
    <main>
      <section id='hello'><Hello /></section>
      <section id='about'> <About /></section>
      <section id='projects'><Projects /></section>
      <section id='contact'><Contact /> </section>
    </main>
    
    </>
  )
}

export default App
