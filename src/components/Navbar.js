import React from "react";
import { NavLink } from "react-router-dom";
import { GlobeAltIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
    <nav className="px-2 flex justify-between items-center bg-black py-4 md:px-12 text-white">
      <NavLink to="/" className="link"><GlobeAltIcon className="h-8 w-8 text-white" /></NavLink>
      <ul className="flex md:space-x-8 space-x-5">
        <li><NavLink className="link" to="/">Home</NavLink></li>
        <li><NavLink className="link" to="/prediction">Prediction</NavLink></li>
        <li><NavLink className="link" to="/result">Result</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
