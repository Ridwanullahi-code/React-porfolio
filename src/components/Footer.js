import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-black  md:flex md:space-x-9 text-white p-3 py-2 items-center
     justify-center flex-col md:flex-row flex h-40'>
        <NavLink className="link" to="/about">About Us</NavLink>
        <a href="tel:+" className='link'>Phone Us</a>
        <NavLink className="link" to="/message">Message Us</NavLink>
    </div>
  )
}

export default Footer
