import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Predict from '../components/Predict';

const Prediction = () => {
  const list = [[8, 2, 4, 4, 3], [6, 7, 4, 8, 9]]
  const [randOne, setRandOne] = useState([]);
  const [randTwo, setRandTwo] = useState([]);
  const colors = ['Blue', "yellow", "green", "deepRed"]
 
  function getMultipleRandom(arr, num, state) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  state([...shuffled.slice(0, num)]);
  }
  
  return (
    <div className="bg-gray-100">
      <Navbar />
      <h1 className="text-center font-bold text-2xl py-5">Uk49 Prediction for today</h1>
      <div className='py-5 grid grid-flow-row-dense md:grid-cols-2'>
        <Predict array={list}/>
        <Predict array={list}/> 
        <Predict array={list}/>
        <Predict array={list}/> 
      </div>
      <div className="mx-auto flex flex-col md:flex-row space-y-5 md:space-y-0 mx-5 md:mx-10 md:space-x-20">
        <div className="flex-col flex space-y-5  bg-white shadow w-full p-5 rounded-md px-5 md:px-20">
          <div className="flex space-x-4 mx-auto">
          {randOne && randOne.map((ar ,index) => (
          <span className={`draw circle ${colors[index]}`} key={index}>{ ar}</span>
        ))}
        </div>
        <button type="button" className="rounded-md p-2 bg-green-500 text-white"
          onClick={ () => getMultipleRandom(list[0], 2, setRandOne) }>
          Get two pairs bet
        </button>
        </div>
        <div className="flex-col flex space-y-5  bg-white shadow w-full p-5 rounded-md px-5 md:px-20">
          <div className="flex space-x-4 mx-auto">
          {randTwo && randTwo.map((ar ,index) => (
          <span className={`draw circle ${colors[index]}`} key={index}>{ ar}</span>
        ))}
        </div>
        <button type="button" className="rounded-md p-2 bg-green-500 text-white"
          onClick={ () => getMultipleRandom(list[1], 3, setRandTwo) }>
          Get three pairs bet
        </button>
        </div>
      </div>
      <div className="mx-10 md:mx-40">
        <Input />
      </div>
    <Footer />
    </div>
  )
}

export default Prediction
