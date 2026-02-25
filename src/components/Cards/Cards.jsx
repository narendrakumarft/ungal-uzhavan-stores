import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa6'
import Button from '../Button/Button'

const Cards = () => {
    return (
        <div>
            {/* Card Actions */}
            <div>
                <span>
                    <FaHeart />
                </span>
                <button>
                    <FaPlus />
                </button>
            </div>

            {/* Card Image */}
            <div>
                <img src="" alt="" />
            </div>

            {/* Card Content */}
            <div>
                <h3>Title</h3>
                <p>Price</p>
                <Button text="Add to Cart" />
            </div>
        </div>
    )
}

export default Cards
