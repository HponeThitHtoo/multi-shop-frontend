import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaRegHeart, FaSearch } from "react-icons/fa";

import Ratings from "../Ratings";

const Product = ({ item }) => {
  return (
    <div className="bg-white mb-6 sm:mb-0 group">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt=""
          className="max-w-full h-auto align-middle"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center duration-500 group-hover:bg-[rgba(255,255,255,0.7)]">
          <div className="flex justify-center items-center w-[40px] h-[40px] text-darkPrimary border border-darkPrimary mx-[3px] mt-[100px] opacity-0 cursor-pointer duration-300 group-hover:opacity-100 group-hover:mt-0 hover:bg-darkPrimary hover:text-primary">
            <FaShoppingCart />
          </div>
          <div className="flex justify-center items-center w-[40px] h-[40px] text-darkPrimary border border-darkPrimary mx-[3px] mt-[100px] opacity-0 cursor-pointer duration-300 group-hover:opacity-100 group-hover:mt-0 hover:bg-darkPrimary hover:text-primary">
            <FaRegHeart />
          </div>
          <div className="flex justify-center items-center w-[40px] h-[40px] text-darkPrimary border border-darkPrimary mx-[3px] mt-[100px] opacity-0 cursor-pointer duration-300 group-hover:opacity-100 group-hover:mt-0 hover:bg-darkPrimary hover:text-primary">
            <FaSearch />
          </div>
        </div>
      </div>
      <div className="text-center py-6">
        <Link className="text-darkPrimary font-medium text-base leading-5">
          {item.name}
        </Link>
        <div className="flex justify-center items-center mt-2">
          <h5 className="text-xl font-medium">${item.price}</h5>
          <h6 className="text-base text-darkSecondary font-medium ml-2">
            <del>${item.price}</del>
          </h6>
        </div>
        <div className="flex justify-center mt-2">
          <Ratings rating={item.rating} />
        </div>
      </div>
    </div>
  );
};

export default Product;
