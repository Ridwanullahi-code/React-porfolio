const Choose = () => {
    return (
        <div className=" flex flex-col space-y-6 p-10  md:mx-5 choose text-white">
            <div>
                <h2 className="text-center">Why Choose Us</h2>
                <p className="text-center text-zinc-300" style={{ fontSize:'13px'}}>For us, it’s all about what adds value
                for you and your business. Above all, we want our words to work for you.
                </p>
            </div>
            <div className='sm:mx-5 md:mx-20 lg:mx-40'>
                <h3 className='font-bold mb-2'>Anything you might need from our plumbing specialist</h3>
                <p className='max-w-md text-zinc-300' style={{ fontSize:'13px'}} >Attention to Details It is our attention to the small stuff, scheduling of timelines
                    and keen project management that makes us stand out from the rest.
                </p>
            </div>
            <div className='sm:mx-5 md:mx-20 lg:mx-40 flex flex-col space-y-3'>
                <div className="flex space-x-2 items-center">
                    <i className="fa-solid fa-bath" style={{fontSize:"32px"}}/>
                    <span>
                        <p className=''>Residential Plumbing Services</p>
                        <p style={{ fontSize:'14px'}} className="text-zinc-300">Anything you might need from our plumbing specialist</p>
                    </span>
                </div>
                <div className="flex space-x-2 items-center">
                    <i className="fa-solid fa-house" style={{fontSize:"32px"}}/>
                    <span>
                        <p className=''>Residential Plumbing Services</p>
                        <p style={{ fontSize:'14px'}} className="text-zinc-300">Anything you might need from our plumbing specialist</p>
                    </span>
                </div>
                <div className="flex space-x-2 items-center">
                    <i className="fa-solid fa-house" style={{fontSize:"32px"}}/>
                    <span>
                        <p className=''>Residential Plumbing Services</p>
                        <p style={{ fontSize:'14px'}} className="text-zinc-300">Anything you might need from our plumbing specialist</p>
                    </span>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Choose;