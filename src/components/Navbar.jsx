import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-left">
          <img src='./Group 1.png' alt='Logo' />
        </div>
        <div className="nav-right">
          <a>
            <Link to="#hero" className='Link'>Home</Link>
          </a>
          <a>
            <Link to="#about" className='Link'>About</Link>
          </a>
          <a>
            <Link to="#project" className='Link'>Project</Link>
          </a>
          <a>
            <Link to="#contact" className='Link'>Contact</Link>
          </a>
          <div className='animation start-home'></div>
        </div>
      </nav>
    </div>
  )
}
