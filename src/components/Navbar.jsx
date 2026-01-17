import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = ({onHomeClick}) => {
  return (
    <>
    <nav className='nav'>
 <h2><Link to='/' onClick={onHomeClick}>🎥 Movies-Explorer</Link></h2>
 <h3><Link to='/'onClick={onHomeClick} >Home</Link></h3>
    </nav>
    </>
  )
}

export default Navbar