import React from "react";
import resume from '../logo/Ajayi-Ridwan.pdf'

const Banner = () => {
  return (
    <div className="relative light:bg-white dark:black flex flex-col space-y-2">
      <p>Hello <span className="text-deepBlue dark:text-deepGreen font-semibold">I am</span></p>

      <h2 className="dark:text-deepGreen font-bold text-[22px] text-deepBlue">AJAYI RIDWAN</h2>
      <h3 className="font-mono text-[17px] font-semibold">FrontEnd Web Developer</h3>
      <p className="max-w-lg font-serif dark:text-gray-400 text-gray-800">
        I can help you build user-focused websites and applications that will increase business
        productivity, actuate competition advantages and revenue growth. Look through some of my
        work and experience! If you like what you see and have a project you need coded,
        don’t hestiate to contact me.
      </p>
      <div className="flex space-x-7">
        <a type="button" className="light:text-gray-700 dark:text-gray-100 border cursor-pointer
            border-gray-300 hover:opacity-90 dark:border dark:border-deepGreen bg-white dark:bg-deepGreen
            hover:text-black dark:hover:text-white dark:active:bg-[#014f4f] dark:active:border-[#014f4f]
            px-3 py-1 text-sm font-medium rounded-md"
          href={resume}
          target="_blank" rel="noreferrer" download
        >
          Download Resume
        </a>
        <button type="button" className="light:text-gray-700 dark:text-gray-100 border cursor-pointer
            border-gray-300 hover:opacity-90 dark:border-[#014f4f] dark:active:bg-[#014f4f] dark:active:border-[#014f4f] bg-white dark:bg-deepGreen
            hover:text-black dark:hover:text-white px-3 py-1 text-sm font-medium rounded-md">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Banner;
