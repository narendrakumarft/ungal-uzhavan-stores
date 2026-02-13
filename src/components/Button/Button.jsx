import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='bg-linear-to-b from-green-600 to-green-800 text-white md:text-lg text-md px-8 py-3 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-green-600/50 transition-all duration-300 cursor-pointer'>
            {props.text}
        </button>
    </div>
    
  )
}

export default Button
