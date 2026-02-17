import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCat from "../../assets/fruits-and-veggies.png"
import MeatCat from "../../assets/meat-and-seafood.png"
import DairyCat from "../../assets/dairy-and-eggs.png"
import Button from '../Button/Button'

const Categories = () => {

    const renderCards = categories.map(card => {
        return (

            // Card 
            <div className='flex-1'>

                {/* Card Image */}
                <div className='w-full min-h-[30vh] relative -mb-10'>
                    <img src={card.image} alt={card.name} className='absolute bottom-0'/>
                </div>

                {/* Card Content */}
                <div className='bg-zinc-100 pt-17 p-8 rounded-xl'>
                    <h3 className="text-zinc-800 text-2xl font-bold mb-3">{card.name}</h3>
                    <p className="text-zinc-600 mb-3">{card.description}</p>
                    <Button text={"See All"} />
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <Heading title={"Shop"} subtitle={"by Categories"} />

                {/* Categories Cards */}
                <div className='flex gap-10 mt-15'>
                    {renderCards}
                </div>

            </div>
        </section>
    )
}

export default Categories

const categories = [
    {
        id: 1,
        name: "Vegetables & Fruits",
        description: "Fresh vegetables and fruits, organic produce sourced directly from local farmers. Explore a wide variety of seasonal vegetables and fruits, handpicked for quality and freshness.",
        image: FruitsCat
    },
    {
        id: 2,
        name: "Meat & Seafood",
        description: "High-quality meat and seafood, fresh and hygienic, sourced from trusted suppliers. Explore a wide variety of meat and seafood, handpicked for quality and freshness.",
        image: MeatCat
    },
    {
        id: 3,
        name: "Dairy & Eggs",
        description: "Wholesale dairy products, fresh and hygienic, sourced from trusted suppliers. Explore a wide variety of dairy products, handpicked for quality and freshness.",
        image: DairyCat
    }
]