const ResultCard = () => {
  return (
    <div className='relative bg-white p-4 px-2 md:px-6 border rounded-3 space-y-3 shadow'>
          <div className='flex justify-between items-center'>
              <h1 className="font-bold md:text-lg text-sm">Wednesday 4th january 2023</h1>
              <p style= {{color:"#696969", fontSize:"13px"}}>show in drawn order</p>
          </div>
          <div className='flex justify-between items-center'>
              <h2 className="font-bold">Lunchtime Draw  <span style={{color:'grey'}}>1:49pm</span></h2>
              <p className='font-bold'>Bonus</p>
          </div>
          <div className='flex space-x-1 md:space-x-6 '>
              <span className='circle draw Blue'>17</span>
              <span className='circle draw purple'>21</span>
              <span className='circle draw deepRed'>24</span>
              <span className='circle draw red'>32</span>
              <span className='circle draw green'>37</span>
              <span className='circle draw yellow'>42</span>
              <span className='absolute right-2 md:right-5 circle draw purple'>34</span>
          </div>
          <div className='flex justify-between items-center'>
              <p className="font-bold">Teatime Draw <span style={{color:'grey'}}>1:49pm</span></p>
              <p className="font-bold">Bonus</p>
          </div>
          <div className='flex space-x-1 md:space-x-6'>
              <span className='draw circle Blue'>17</span>
              <span className='draw circle green'>21</span>
              <span className='draw circle deepRed'>24</span>
              <span className='draw circle red'>32</span>
              <span className='draw circle purple'>37</span>
              <span className='draw circle green'>42</span>
              <span className='absolute right-2 md:right-5 draw circle Blue'>34</span>
          </div>
    </div>
  )
}

export default ResultCard
