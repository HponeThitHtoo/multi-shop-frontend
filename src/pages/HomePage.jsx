import React from "react";
import Hero from "../components/HomePage/Hero";
import Services from "../components/HomePage/Services";
import Categories from "../components/HomePage/Categories";
import FeaturedProducts from "../components/HomePage/FeaturedProducts";
import SpecialOrders from "../components/HomePage/SpecialOrders";
import RecentProducts from "../components/HomePage/RecentProducts";
import Vendors from "../components/HomePage/Vendors";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Categories />
      <FeaturedProducts />
      <SpecialOrders />
      <RecentProducts />
      <Vendors />
    </>
  );
};

export default Home;
