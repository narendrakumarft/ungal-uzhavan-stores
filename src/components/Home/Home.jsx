import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Categories from "../Categories/Categories";
import Values from "../Values/Values";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Categories />
            <Values />
        </div>
    );
};

export default Home;
