const Input = () => {
    return (
    <div className='py-3 pt-8 bg-gray-100'>
    <p className='text-center text-sm'>Drop your phone number to receive daily prediction through sms</p>
    <form className='flex justify-center space-x-3 py-3 mx-5' >
      <input className='border border-gray-400 rounded-md flex-grow py-2 px-4 focus:outline-green-400' type="tel" placeholder="Phone Number" />
      <button className='bg-green-500 px-4 rounded-md py-2 px-4 text-white' type='submit'>Submit</button>
    </form>
    </div>
   
  )
}

export default Input
