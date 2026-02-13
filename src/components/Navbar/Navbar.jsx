import React from "react";
import { FaHeart } from "react-icons/fa6";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";

const Navbar = () => {

    const [showMenu, setShowMenu] = React.useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className="bg-white fixed top-0 left-0 right-0">
            <nav className="max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center">

                {/* Logo */}
                <a href="#" className="text-3xl font-bold">Ungal <span className="text-green-600 uppercase">Uzhavan</span></a>

                {/* Desktop Menu Option */}
                <ul className="md:flex gap-x-10 items-center hidden">
                    <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-green-600 transition-colors">Home</a></li>
                    <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-green-600 transition-colors">About</a></li>
                    <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-green-600 transition-colors">Process</a></li>
                    <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-green-600 transition-colors">Contact</a></li>
                </ul>

                {/* Nav Action */}
                <div className="flex items-center gap-6">
                    {/* Input Search */}
                    <div className="md:flex p-1 border border-green-600 rounded-full hidden">
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

                    {/* Hamburger */}
                    <a href="#" className="text-zinc-800 text-3xl hover:text-green-600 transition-colors md:hidden" onClick={toggleMenu}>
                        {showMenu ? <MdMenuOpen /> : <MdOutlineMenu />}
                    </a>
                </div>

                {/* Mobile Menu Option */}
                <ul className={`flex  flex-col gap-y-11 p-10 items-center md:hidden absolute top-30 -left-full transform -translate-x-1/2 bg-green-600/15 backdrop-blur-lg rounded-xl transition-all duration-500 ${showMenu ? "left-1/2" : "-translate-x-full"}`}>
                    <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-green-600 transition-colors">Home</a></li>
                    <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-green-600 transition-colors">About</a></li>
                    <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-green-600 transition-colors">Process</a></li>
                    <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-green-600 transition-colors">Contact</a></li>

                    <li className="flex p-1 border border-green-600 rounded-full md:hidden">
                        <input type="text" name="search" id="search" className="px-3 py-1 focus:outline-none" placeholder="Search" autoComplete="off" />
                        <button className="flex justify-center items-center px-3 bg-green-600 text-white rounded-full bg-linear-to-b from-green-600 to-green-800">
                            <a href="#"><FaSearch /></a>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
