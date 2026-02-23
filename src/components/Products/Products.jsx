import React from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'

const Products = () => {

    const Categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFoods']

    const [activeTab, setActiveTab] = React.useState('All')

    const renderProducts = products.map(product => {
        return (
            <Cards key={product.id} product={product} />
        )
    })

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <Heading title={"Our"} subtitle={"Products"} />

                {/* Categories Tabs */}
                <div className='flex gap-3 justify-center mt-10'>
                    {Categories.map((category, index) => {
                        return (
                            <button key={index} className={`px-5 py-2 text-lg rounded-lg cursor-pointer ${activeTab === category ? 'bg-linear-to-b from-green-600 to-green-400 text-white' : 'bg-zinc-100'}`} onClick={() => setActiveTab(category)}>
                                {category}
                            </button>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Products
