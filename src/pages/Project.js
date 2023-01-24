import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { service } from "../functions/pictures";

const Project = () => {
  return (
    <div>
      <Navbar color="bg-gray-900" />
      <div className="bg-white  dark:bg-gray-800">
        <div className="px-10 py-5">
        <h1 className="text-black font-bold text-[25px] dark:text-white">Frontend Development</h1>
          <div
            className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-5
            my-8 gap-y-5  light:bg-white dark:black justify-center items-center ">         
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
              </div>
        <div className="py-5 px-10">
           <h1 className="text-black font-bold text-[25px] dark:text-white">Data Analytics</h1>
          <div
            className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-5
            my-8 gap-y-5  light:bg-white dark:black justify-center items-center ">         
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
              </div>
        <div  className="px-5 md:px-10 py-5">
        <h1 className="text-black font-bold text-[25px] dark:text-white">Machine Learning</h1>
          <div
            className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-5
            my-8 gap-y-5  light:bg-white dark:black justify-center items-center ">         
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
