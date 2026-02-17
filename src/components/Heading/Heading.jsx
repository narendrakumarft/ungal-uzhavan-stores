import React from 'react'

const Heading = ({title, subtitle}) => {
  return (
    <div className='w-fit mx-auto'>
        <h2 className='md:text-5xl text-3xl font-bold'>
            <span className='text-green-600'>{title}</span> {subtitle}
        </h2>
        <div className='w-34 h-1 bg-green-600 md:mt-6 mt-3 ml-auto'></div>
    </div>
  )
}

export default Heading