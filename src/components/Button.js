import React from 'react'
import PropTypes from 'prop-types';

const Button = ({value}) => {
  return (
    <button type='button' className='py-1 px-4 bg-yellow-600 rounded-sm font-light w-full text-center hover:bg-yellow-500'>{ value}</button>
  )
}
// props validation should be propTypes
Button.propTypes = {
    value: PropTypes.string.isRequired,
};
export default Button
