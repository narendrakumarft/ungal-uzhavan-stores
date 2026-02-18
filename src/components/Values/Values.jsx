import React from 'react'
import Heading from '../Heading/Heading'
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { FaSeedling } from 'react-icons/fa6';
import basket from "../../assets/basket-full-vegetables.png"

const Values = () => {

    const leftValues = value.slice(0, 2).map(value => {
        return (
            <div key={value.id} className='flex md:flex-row-reverse items-center gap-7'>
                <div>
                    <span className='flex items-center justify-center bg-linear-to-b from-green-600 to-green-400 w-15 h-15 rounded-full text-white text-3xl'>{value.image}</span>
                </div>
                <div className='md:text-right'>
                    <h3 className='text-zinc-800 text-2xl font-bold'>{value.title}</h3>
                    <p className='text-zinc-600 mt-2'>{value.description}</p>
                </div>
            </div>
        )
    })

    const rightValues = value.slice(2, 4).map(value => {
        return (
            <div key={value.id} className='flex items-center gap-7 '>
                <div>
                    <span className='flex items-center justify-center bg-linear-to-b from-green-600 to-green-400 w-15 h-15 rounded-full text-white text-3xl'>{value.image}</span>
                </div>
                <div>
                    <h3 className='text-zinc-800 text-2xl font-bold'>{value.title}</h3>
                    <p className='text-zinc-600 mt-2'>{value.description}</p>
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <Heading title={"Our"} subtitle={"Values"} />

                <div className='flex md:flex-row flex-col md:gap-5 gap-15 mt-15'>

                    {/* Left Side Values */}
                    <div className='md:min-h-100 flex flex-col justify-between'>
                        {leftValues}
                    </div>

                    {/* Image */}
                    <div className='md:flex hidden'>
                        <img src={basket} alt="Basket Full of Vegetables" />
                    </div>

                    {/* Right Side Values */}
                    <div className='md:min-h-100 flex flex-col justify-between'>
                        {rightValues}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values

const value = [
    {
        id: 1,
        title: "Trust",
        description: "Building lasting relationships with our customers through transparency, reliability, and consistent quality in every product we deliver.",
        image: <FaHandHoldingHeart />
    },
    {
        id: 2,
        title: "Always Fresh",
        description: "Sourcing the freshest produce directly from local farmers to ensure premium quality and taste in every bite.",
        image: <FaLeaf />
    },
    {
        id: 3,
        title: "Food Safety",
        description: "Adhering to the highest hygiene standards in handling, packaging, and delivery to ensure safe and healthy food for your family.",
        image: <AiOutlineSafety />
    },
    {
        id: 4,
        title: "100% Organic",
        description: "Organic certification ensures that our products are grown without the use of harmful pesticides, herbicides, or synthetic fertilizers.",
        image: <FaSeedling />
    },

]
