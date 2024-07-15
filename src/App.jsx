import React from 'react'

import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Titlecards from './components/Titlecards.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'
import {BrowserRouter} from 'react-router-dom';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Hero />
    <About />
    <Titlecards />
    <Project />
    <Contact />
    </BrowserRouter> 
    </>
  )
}

export default App
