import React, {useEffect} from 'react'
import { DateTime } from "luxon";
import Navbar from '../components/Navbar'
import Input from '../components/Input'
import Card from '../components/Card'
import Pick from '../components/Pick'
import Footer from '../components/Footer'
import { data } from '../functions/data'

const Home = () => {
  const dt = DateTime.now().toLocaleString();
  return (
    <>
      <Navbar />
    <div className='bg-gray-100 px-2 sm:px-10 md:px-30 lg:px-40'>
        <Input />
        <div className="text-center"> 
          <h2 className="font-bold text-2xl">Daily prediction (Bug)</h2>
          <p>Kindly take from the numbers below and bet on them</p>
          <p><span className="font-bold">warning: </span>Bet responsibly as these are prediction only</p>
        </div>
      <div className="py-4">
        <Pick 
        head="Hot Picks"
        title="Uk 49's Lunchtime Hot Picks"
        text={`Hot picks for ${dt} draw`}
        summary="Bet on these four numbers to win R4,000 from a R1 stake:"
        />
      </div>
      <div className='grid space-y-6 md:space-y-0 md:grid-cols-3 lg:grid-cols:3 xl:grid-cols-3 justify-center items-center md:space-x-2'>
         {data.map((item) => ( 
        <Card key={item.id} color={item.color } title={item.title} heading={item.heading} text={item.text} />
      ))}
        </div>
         <Input />
      </div>
      <Footer />
    </>
     
  )
}

export default Home
