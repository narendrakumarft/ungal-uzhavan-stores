import React from "react";

const Navbar = () => {
    return (
        <header>
            <nav className="max-w-[1400px] mx-auto h-[14vh] px-10 flex justify-between items-center">
                <a href="#">Ungal <span>Uzhavan</span> Stores</a>

                {/* Desktop Menu */}
                <ul className="flex gap-10">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Process</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
