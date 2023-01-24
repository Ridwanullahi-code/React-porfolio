import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Redirect = () => {
    return (
        <div>
            <Navbar />
            <div className='flex flex-col space-y-3 justify-center items-center py-40 bg-white dark:bg-gray-800'>
                <i className="fa-sharp fa-solid fa-circle-check text-green-600 text-[30px]" />
                <h2>Message has successfully sent</h2>
                <p className="max-w-sm text-center">Thanks for the trust you have in me, I will respond to
                    this email soon!
                </p>
            </div>
            <Footer />
        </div>
    
  )
}

export default Redirect;
