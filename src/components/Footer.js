import React from 'react'
import { NavLink } from 'react-router-dom'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'

const Footer = () => {
  return (
    <div className='bg-black flex flex-col space-y-6 md:flex-row  md:justify-around items-center text-white px-10 md:px-20 py-8'>
      <div className="flex flex-col items-center space-y-5 flex md:space-x-0">
        <NavLink className="link" to="/about">About Us</NavLink>
        <a href="tel:+" className='link'>Phone Us</a>
        <NavLink className="link" to="/message">Message Us</NavLink>
      </div>
      <div className="text-sm flex flex-col items-center justify-center space-y-2">
        <span className="circle draw deepRed bg-white text-black">18+</span>
        <div className="flex space-x-1 items-center">
          <ExclamationCircleIcon className="h-6 w-6 text-white" />
          <p className="text-sm md:text-2xl">Always Bet Responsibly</p>
        </div>
        <p className="text-center md:w-80 w-full" 
          style={{ fontSize: "13px", color:"grey"}}>Bet49s.co.za only provides information about online lotto operators
          that are fully licensed and regulated by the South African government.
          Keep Gambling Fun!
        </p>
      </div>
    </div>
  )
}

export default Footer
