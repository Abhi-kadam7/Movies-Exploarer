import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <nav className='nav'>
 <h2><Link to='/'>🎥 Movies-Exploarer</Link></h2>
 <h3><Link to='/' >Home</Link></h3>
    </nav>
    </>
  )
}

export default Navbar