import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Predict from '../components/Predict';

const Prediction = () => {
  const list = [[8, 2, 4, 4, 3], [6, 7, 4, 8, 9]]
  
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className='py-5 grid grid-flow-row-dense md:grid-cols-2'>
        <Predict list={list}/>
        <Predict list={list}/> 
        <Predict list={list}/>
        <Predict list={list}/> 
      </div>
      <div>
        <div>
          <span>{list[rand] }</span>
          <span>{ }</span>
        </div>
        <button className="rounded-md p-2 bg-green-500 text-white 
        border-green-500 font-bold" type="button">
          Get two pairs
        </button>
        </div>
      <div className="mx-10  md:mx-40">
        <Input />
      </div>
    <Footer />
    </div>
  )
}

export default Prediction
