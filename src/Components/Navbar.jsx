import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Navbar.css"

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-brand'>
            <a href="/">Movie App</a>
        </div>
        <div className='navbar-links'>
            <Link to="/" className='nav-link'>Movies</Link>
            <Link to="/favorites" className='nav-link'>Favorites</Link>
            <Link to="/reviews" className='nav-link'>Reviews</Link>
        </div>
    </nav>
  )
}
