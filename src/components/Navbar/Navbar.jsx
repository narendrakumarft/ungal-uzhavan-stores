import React from "react";
import { FaHeart } from "react-icons/fa6";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <header className="bg-white">
            <nav className="max-w-[1400px] mx-auto h-[14vh] px-10 flex justify-between items-center">

                {/* Logo */}
                <a href="#" className="text-3xl font-bold">Ungal <span className="text-green-600 uppercase">Uzhavan</span> Stores</a>

                {/* Desktop Menu */}
                <ul className="flex gap-10 items-center">
                    <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-green-600 transition-colors">Home</a></li>
                    <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-green-600 transition-colors">About</a></li>
                    <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-green-600 transition-colors">Process</a></li>
                    <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-green-600 transition-colors">Contact</a></li>
                </ul>

                {/* Nav Action */}
                <div className="flex items-center gap-6">
                    {/* Input Search */}
                    <div className="flex p-1 border border-green-600 rounded-full">
                        <input type="text" name="search" id="search" className="px-3 py-1 focus:outline-none" placeholder="Search" autoComplete="off" />
                        <button className="flex justify-center items-center px-3 bg-green-600 text-white rounded-full bg-linear-to-b from-green-600 to-green-800">
                            <a href="#"><FaSearch /></a>
                        </button>
                    </div>

                    <a href="#" className="text-zinc-800 text-2xl hover:text-green-600 transition-colors">
                        <FaHeart />
                    </a>
                    <a href="#" className="text-zinc-800 text-2xl hover:text-green-600 transition-colors">
                        <RiShoppingBag4Fill />
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
