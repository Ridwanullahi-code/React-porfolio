import React from 'react'
import PropTypes from 'prop-types';
import Button from '../components/Button';

const Pick = ({head, title, text, summary}) => {
  return (
    <div className='pick bg mx-auto'>
          <h1 className='head px-3 py-4 font-bold text-lg'>{head}</h1>
          <div className="px-3 py-3 space-y-4">
              <h2 className='font-bold'>{title}</h2>
              <p className='text-gray-600 text-sm'>{text}</p>
              <ul className="hot_picks flex space-x-4">
                  <li className="list circle draw">24</li>
                  <li className="list circle draw">62</li>
                  <li className="list circle draw">1</li>
                  <li className="list circle draw">4</li>
              </ul>
              <p>{summary}</p>
         <Button value="Bet Here" />
          <hr className='bg-gray-200'/>
      </div>
      <div className="px-3 py-3 space-y-4">
              <h2 className='font-bold'>{title}</h2>
              <p className='text-gray-600 text-sm'>{text}</p>
              <ul className="hot_picks flex space-x-4">
                  <li className="list draw circle">24</li>
                  <li className="list draw circle">62</li>
                  <li className="list draw circle">1</li>
                  <li className="list draw circle">4</li>
              </ul>
              <p>{summary}</p>
              <Button value="Bet Here" />
          </div>
    </div>
  )
}

// props validation should be propTypes
Pick.propTypes = {
    summary: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    head: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
export default Pick
