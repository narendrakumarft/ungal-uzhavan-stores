import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Categories from "../Categories/Categories";
import Values from "../Values/Values";
import Products from "../Products/Products";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Categories />
            <Values />
            <Products />
        </div>
    );
};

export default Home;
