import React from 'react'
import heroImg from "../../assets/grocery.png";
import Button from '../Button/Button';

const Hero = () => {
  return (
    <section>
        <div className='max-w-[1400px] min-h-screen mx-auto px-10 flex md:flex-row flex-col items-center md:pt-25 pt-35'>

            {/* Hero Content */}
            <div className='flex-1'>
                <span className='bg-green-600 text-white text-lg px-5 py-2 rounded-lg'>Export Best Quality</span>
                <h1 className='md:text-7xl/20 text-5xl/14 font-bold mt-4'>Fresh Produce <span className='text-green-600'>Delivered</span> to Your <span className='text-green-600'>Doorstep</span></h1>
                <p className='text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10'>Experience the convenience of <span className='text-green-600 font-semibold'>farm-fresh vegetables & fruits</span> delivered right to your doorstep. Sourced directly from local farmers, our products are guaranteed to be <span className='text-green-600 font-semibold'>fresh</span>, <span className='text-green-600 font-semibold'>organic</span>, and of the <span className='text-green-600 font-semibold'>highest quality</span>.</p>
                <Button  text={"Shop Now"}/>
            </div>

            {/* Hero Image */}
            <div className='flex-1'>
                <img src={heroImg} alt="Hero Image" />
            </div>

        </div>
    </section>
  )
}

export default Hero