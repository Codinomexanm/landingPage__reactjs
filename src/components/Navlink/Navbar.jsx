import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='container_nav'>
      <nav className="navbar">
        <img src="src\assets\pngegg.png" alt="" srcset="" />
        <div className='links'>
          <a href="#home">Início</a>
          <Link to="/">Home</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/contact">contato</Link>
        </div>
      </nav>
    </div>
    )
}

export default Navbar