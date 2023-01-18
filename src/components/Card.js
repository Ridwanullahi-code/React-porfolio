import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types';


const Card = ({color ,title, heading, text}) => {
  return (
    <div className='border border-grey-300 rounded-md'>
          <h1 className={`text-center text-white py-2 font-bold`} style={{backgroundColor:`${color}`}}>{title}</h1>
          <div className='bg-white p-2 pr-0 space-y-2 py-4'>
              <h2 className="text-blue-900 font-bold">{heading }</h2>
              <p className="font-sm text-xs text-gray-700">{ text}</p>
          </div>
      <div className="flex-grow px-4 py-4 border border-grey btn-cont">
         <Button value="Join Now" />
      </div>
        
    </div>
  )
}

// props validation should be propTypes
Card.propTypes = {
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
export default Card
