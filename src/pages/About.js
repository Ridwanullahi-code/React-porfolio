import { NavLink } from 'react-router-dom'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image from '../logo/my-photo.jpeg'

const About = () => {
  return (
    <>
      <Navbar color="bg-gray-900" />
      <div className="bg-white dark:bg-gray-800 h-full flex flex-col  py-40 px-5
      space-y-6 md:px-10 lg:px-40">
        <div className="flex flex-col justify-between space-y-6 lg:flex-row">
            <div className="space-y-5 ">
            <h1 className="font-bold text-2xl text-[33px]">About me</h1>
            <p className="max-w-xl">
            Hey, I am Ridwan! Software developer at microverse and Data Analyst. Welcome to
            my spot on the web for my projects, tutorials, art, musings, and
            anything else I want to show the world. Check out the projects page
            to see a highlight of my open-source work, and the blog for my
            tutorials and more.
            </p>
            <p className="max-w-xl">
                You can contact me by email at <a href="mailto:ridwanullahiajayi01@gmail.com"
                className="text-blue-500" target="_blank" rel="noreferrer">
                hello</a> or to say hi at <NavLink className="text-sm text-blue-500" to="/message">contact</NavLink>. I always appreciate meeting new people.
            </p>
        </div>
            <div className="hidden lg:flex xl:flex h-64 w-64
            dark:bg-gray-900 bg-gray-200 rounded-md p-5">
            <img src={image} className="w-full" />
            </div>
        </div>
        <div className="space-y-5">
        <h1 className="font-bold text-2xl text-[30px]">Random facts</h1>
        <hr className="max-w-xl" />
        <ul className="space-y-2 list-disc px-5">
            <li>Software development student 👨💻 at Microverse</li>
            <li>Open-source enthusiast with a love for clean code, pair programming</li>
            <li>Remote work aficionado. Eager to be challenged in order to grow</li>
            <li>A second-year student studying Information Technology at Federal University of Technology Akure.</li>
        </ul>
        </div>
        <div className="block lg:hidden xl:hidden h-38 w-38 dark:bg-gray-900 
        bg-gray-200 py-10 px-5 rounded-md">
            <img src={image} className="w-full" />
        </div>
    </div>
    <Footer />
    </>
  );
};

export default About;
