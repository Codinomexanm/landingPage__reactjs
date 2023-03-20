import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Head from './Head';
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="src\assets\pngegg.png" alt="" srcset="" />
      <div className='links'>
        <a href="#home">Início</a>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">contato</Link>
      </div>
    </nav>
  )
}

export default Navbar