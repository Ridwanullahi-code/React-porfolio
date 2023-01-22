import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import { service } from '../functions/pictures'
import { feedback } from '../functions/customerFeedback'
import Card from '../components/Card';
import Service from '../components/Service';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto dark:bg-gray-900 p-16"> 
        <Banner />
      </div>
      <div className="flex flex-col space-y-3 py-y">
        <div className='text-center flex flex-col space-y-1 my-6'>
          <h2 className="text-deepBlue font-bold dark:text-gray-100">What will do</h2>
          <p className=" max-w-sm md:max-w-lg mx-auto font-tin text-sm  py-2
            dark:text-gray-400">We place huge value on strong relationships and have seen the benefit they
            bring to our business. Customer feedback is vital in helping us to get it right
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols:3 xl:grid-cols-3 gap-x-5
            my-8 gap-y-10 justify-center items-center light:bg-white dark:black px-10">
        <Service
          icon="fa-solid fa-code-merge dark:text-deepGreen text-[25px]"
          summary="Web development service for everybody"
          skill="Web Development"
        />
        <Service
          icon="fa-solid fa-laptop-code dark:text-deepGreen text-[25px]"
          summary="Web development service for everybody"
          skill="Data Analytics"
        />
        <Service
          icon="fa-brands fa-codepen dark:text-deepGreen text-[25px]"
          summary="Web development service for everybody"
          skill="Machine Learning"
        />
      </div>
      </div>
      <div className="light:bg-white dark:black flex flex-col space-y-3 py-5">
        <div className='text-center flex flex-col space-y-1 my-6'>
          <h2 className="font-bold text-deepBlue dark:text-white">Recent Projects</h2>
          <p className=" max-w-sm md:max-w-lg mx-auto font-tin text-sm text-gray-800 dark:text-gray-400">We place huge value on strong relationships and have seen the benefit they
            bring to our business. Customer feedback is vital in helping us to get it right
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols:3 xl:grid-cols-3 gap-x-5
            my-8 gap-y-5 justify-center items-center  px-10  rounded-md ">
          {service.map((data, index) => (
          <Card
            key={index}
            link={data.link}
            skill={data.skill}
            summary={data.summary}
            stack={data.stack}
            tools={data.tools}	 
            demo={data.demo}  
            />
          ))}
        </div>
         <NavLink className="light:text-gray-700 dark:text-gray-300 border flex items-center 
            border-gray-300 dark:border-gray-700 hover:opacity-90 dark:border bg-white
             dark:bg-gray-700  justify-center
            hover:text-black dark:hover:text-white px-3 py-2 w-80 mx-auto text-sm font-medium
             rounded-md">
            View all
          </NavLink>
      </div>
      <div className="py-5 light:bg-white dark:black  rounded-md my-5 md:mx-5 px-3 md:px-0">
        <div className='text-center flex flex-col space-y-2 my-6'>
          <h2 className="text-gray-800 font-bold dark:text-gray-200">TESTIMONIALS</h2>
          <p className="font-bold text-3xl md:text-4xl text-deepBlue dark:text-[#36d8d6e0]">What clients say</p>
          <p className=" max-w-sm md:max-w-lg mx-auto font-tin text-sm text-gray-800 py-2 dark:text-gray-400">We place huge value on strong relationships and have seen the benefit they
            bring to our business. Customer feedback is vital in helping us to get it right
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols:3 xl:grid-cols-3 gap-x-5
            my-8 gap-y-5 justify-center items-center light:bg-white dark:black p-10">
          {feedback.map((feed, index) => (
            <Testimonial
            key={index}
            image={feed.image}
            alt={feed.alt}
            message={feed.message}
            name={feed.name}
            prof={feed.prof}
          />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
