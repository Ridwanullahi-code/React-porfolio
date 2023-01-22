import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  MapIcon, MapPinIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/solid'

import twitter from '../logo/twitter.png'
import google from '../logo/google.jpg'
import linkedin from '../logo/linkedin.png'

const Footer = () => {
  return (
    <section className='bg-gray-200 dark:bg-gray-900 flex flex-col pt-4 pb-3 md:pb-0'>
      <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row justify-around items-center py-4'>
        <div className='flex flex-col space-y-1 items-center font-bold'>
          <h2 className='font-bold dark:text-white light:text-gray-900'>Address</h2>
          <address className='flex items-baseline'>
            <div className='flex flex-col items-baseline space-y-1 light:text-black dark:text-gray-300 text-[14px] '>
              <span className='text-sm flex items-center'>
                <MapIcon className='dark:text-deepGreen h-4 w-4 mx-1' />
                Osun Nigeria
                </span>
                <span className='text-sm flex items-center'>
                  <MapPinIcon className='dark:text-deepGreen h-4 w-4 mx-1' />
                  5363 Road Avenue
                </span>
                <span className='text-sm flex items-center'>
                  <PhoneIcon className='dark:text-deepGreen h-4 w-4 mx-1'/>
                  (+234) 814 4580 946
              </span>
              <div className='text-sm flex items-center'>
                  <EnvelopeIcon className='dark:text-deepGreen h-4 w-4 mx-1'/>
                  <a href="mailto:">@example.gmail.com</a>
              </div>
            </div>
          </address>
        </div>
      <div className="flex flex-col items-center">
        <h2 className='font-bold dark:text-white text-gray-900'>Useful Links</h2>
        <div className='flex flex-col items-center light:text-black text-[14px] dark:text-gray-300'>
          <NavLink className="link text-sm" to="/about">About Me</NavLink>
          <NavLink className="link text-sm" to="/message">Contact Me</NavLink>
          <NavLink className="link text-sm" to="/message">Services</NavLink>
          <NavLink className="link text-sm" to="/message">Projects</NavLink>
          <NavLink className="link text-sm" to="/message">FAQs</NavLink>
        </div>
      </div>
      <form className='flex items-center flex-col md:space-y-2'>
        <h2 className='font-bold dark:text-white text-gray-900'>Subscribe</h2>
        <p className='light:text-black text-[14px] dark:text-gray-300 pb-1'>Get notify when the new work posted</p>
          <div className='flex items-center flex-shrink w-full md:w-60 lg:w-80 h-10 rounded-md cursor-pointer
         bg-deepGreen hover:bg-opacity-90 active:bg-[#014f4f]'>
        <input type="email" className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' placeholder='Email Address'/>
        <PaperAirplaneIcon className="h-12 p-4 text-white" />
        </div>
      </form>
      </div>
      <div className='flex flex-col items-center justify-center space-y-1 `
      md:border-bottom-gray-200 py-2 connect'>
        <h2 className='font-bold dark:text-white light:text-gray-900'>Follow Us</h2>
        <div className='flex space-x-3'>
          <a href="https://twitter.com/Ridwanullahi22" target="_blank" rel="noreferrer">
            <img className="circle" src={twitter} alt="twitter logo" /></a>
          <a href="https://twitter.com/Ridwanullahi22" target="_blank" rel="noreferrer">
            <img className="circle" src={google} alt="google logo" />
          </a>
          <a href="https://www.linkedin.com/in/ajayi-ridwan/" target="_blank" rel="noreferrer">
            <img className="circle" src={linkedin} alt="linkedin logo" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footer
