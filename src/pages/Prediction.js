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
      <div className="mx-10 md:mx-40">
        <Input />
      </div>
    <Footer />
    </div>
  )
}

export default Prediction
